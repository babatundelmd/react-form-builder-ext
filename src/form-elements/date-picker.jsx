import React from 'react';
import { format, parseISO } from 'date-fns';
import ReactDatePicker from 'react-datepicker';
import ComponentHeader from './component-header';
import ComponentLabel from './component-label';
import { formatFieldDate, parseFieldDate } from '../utils/date-value';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.inputField = React.createRef();

    const { formatMask } = DatePicker.updateFormat(props, null);
    this.state = DatePicker.updateDateTime(props, { formatMask }, formatMask);
  }

  // formatMask = '';

  // ReactForm collects live answers from a change listener on the <form>
  // element, relying on native input events bubbling to it. Picking from the
  // calendar sets the value programmatically — and the popup renders in a
  // portal — so no DOM change event ever reaches it, and fields whose
  // visibility depends on a date would not react. Tell it directly instead.
  // This runs as the setState callback because ReactForm re-reads every value
  // off the refs: called any earlier, it would collect the previous value.
  notifyFormChange = () => this.props.handleChange?.();

  handleChange = (dt) => {
    let placeholder;
    const { formatMask } = this.state;
    if (dt && dt.target) {
      placeholder =
        dt && dt.target && dt.target.value === ''
          ? formatMask.toLowerCase()
          : '';
      const formattedDate = dt.target.value
        ? format(parseISO(dt.target.value), formatMask)
        : '';
      // `lastDefaultValue` is deliberately left alone: it records the last
      // *prop* consumed, and is what getDerivedStateFromProps compares against
      // to tell a new binding from the user's own edit. Writing the user's
      // value into it makes the next render look like a changed binding and
      // re-derive the field from props, wiping the pick.
      this.setState(
        {
          value: formattedDate,
          internalValue: formattedDate,
          placeholder,
        },
        this.notifyFormChange,
      );
    } else {
      const formattedDate = dt ? format(dt, formatMask) : '';
      this.setState(
        {
          value: formattedDate,
          internalValue: dt,
          placeholder,
        },
        this.notifyFormChange,
      );
    }
  };

  static updateFormat(props, oldFormatMask) {
    const { showTimeSelect, showTimeSelectOnly, showTimeInput } = props.data;
    const dateFormat =
      showTimeSelect && showTimeSelectOnly ? '' : props.data.dateFormat;
    const timeFormat =
      showTimeSelect || showTimeInput ? props.data.timeFormat : '';
    const formatMask = `${dateFormat} ${timeFormat}`?.trim();
    const updated = formatMask !== oldFormatMask;

    return { updated, formatMask };
  }

static updateDateTime(props, state, formatMask) {
  let value;
  let internalValue;
  const { defaultToday, showTimeSelect, showTimeInput } = props.data;
  const rawValue = props.defaultValue;
  const options = { showsTime: !!(showTimeSelect || showTimeInput) };

  if (defaultToday && (!rawValue || rawValue === '')) {
    internalValue = new Date();
    value = format(internalValue, formatMask);
  } else {
    // Normalise to this field's own format so the value collected on submit
    // matches what is displayed, whether or not the user ever touched the
    // field. Re-formatting an already formatted value is a no-op, which keeps
    // this safe to re-run from getDerivedStateFromProps.
    internalValue = parseFieldDate(rawValue, formatMask, options);
    value = formatFieldDate(rawValue, formatMask, options);
  }

  return {
    value,
    internalValue,
    placeholder: formatMask.toLowerCase(),
    defaultToday,
    formatMask,
    lastDefaultValue: rawValue,
  };
}

  // componentWillReceiveProps(props) {
  //   const formatUpdated = this.updateFormat(props);
  //   if ((props.data.defaultToday !== !this.state.defaultToday) || formatUpdated) {
  //     const state = this.updateDateTime(props, this.formatMask);
  //     this.setState(state);
  //   }
  // }

  static getDerivedStateFromProps(props, state) {
    const { updated, formatMask } = DatePicker.updateFormat(
      props,
      state.formatMask,
    );
    // A binding that resolves after mount arrives as a changed defaultValue,
    // and must be normalised too. Comparing against the last default we
    // consumed — rather than against the current value — keeps a user's own
    // pick from being overwritten on every render.
    const defaultValueChanged = props.defaultValue !== state.lastDefaultValue;
    if (
      props.data.defaultToday !== state.defaultToday ||
      updated ||
      defaultValueChanged
    ) {
      const newState = DatePicker.updateDateTime(props, state, formatMask);
      return newState;
    }
    return null;
  }

  render() {
    const {
      showTimeSelect,
      showTimeSelectOnly,
      showTimeInput,
      minDate,
      maxDate, hidePastDate, hideFutureDate,
    } = this.props.data;
    const currentDate = new Date();
    const props = {};
    props.type = 'date';
    props.className = 'form-control';
    props.name = this.props.data?.field_name;
    const readOnly =
      this.props.data?.readOnly ||
      this.props?.read_only ||
      this.props?.data?.isReadOnly;
    // const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const placeholderText = this.state.formatMask.toLowerCase();

    if (this.props.mutable) {
      props.defaultValue = this.props.defaultValue;
      props.ref = this.inputField;
    }

    let baseClasses = 'SortableItem rfb-item';
    if (this.props.data.pageBreakBefore) {
      baseClasses += ' alwaysbreak';
    }

    return (
      <div className={baseClasses} style={{ ...this.props.style }}>
        <ComponentHeader {...this.props} />
        <div className="form-group">
          <ComponentLabel {...this.props} />
          <div>
            <ReactDatePicker
              name={props.name}
              ref={props.ref}
              onChange={this.handleChange}
              selected={this.state.internalValue}
              todayButton={'Today'}
              className="form-control"
              isClearable={!readOnly}
              showTimeSelect={showTimeSelect}
              showTimeSelectOnly={showTimeSelectOnly}
              showTimeInput={showTimeInput}
              dateFormat={this.state.formatMask}
              portalId="root-portal"
              autoComplete="off"
              minDate={hidePastDate ? currentDate : minDate}
              maxDate={hideFutureDate ? currentDate : maxDate}
              placeholderText={placeholderText}
              readOnly={readOnly}
            />
            {/* } */}
          </div>
        </div>
      </div>
    );
  }
}

export default DatePicker;
