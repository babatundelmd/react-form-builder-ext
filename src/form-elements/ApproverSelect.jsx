import clsx from 'clsx';
import React, {
  useState, useEffect, useCallback, forwardRef,
} from 'react';
import axios from 'axios';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  ComboboxButton,
} from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import { authHeader } from '../utils/auth';

const DEFAULT_API_BASE_URL = 'https://api.dev.gateway.kusala.com.ng';
const PAGE_SIZE = 50;

/**
 * Approver picker.
 *
 * Unlike CustomSelect this takes no `optionsApiUrl`: the personnel directory is the only
 * source an approver can come from, so wiring it to an arbitrary endpoint would only be a
 * way to get it wrong. It is also deliberately not creatable — the whole point of the
 * field is that the approver is a real member of the organisation, and a free-typed
 * address would defeat that. The stored value is the member's *email*, which is what the
 * workflow's approval step resolves the field reference to at run time.
 */

// The organisation id lives on the credential-stripped profile blob the host writes to
// localStorage; every remote already reads it from there.
const getOrganizationId = () => {
  try {
    const raw = window.localStorage.getItem('LoginInfo');
    return (raw ? JSON.parse(raw)?.organization?.id : '') || '';
  } catch (err) {
    console.error('react-form-builder-ext: could not read LoginInfo', err);
    return '';
  }
};

const toOption = (person) => {
  const name = `${person.firstName || ''} ${person.lastName || ''}`.trim();
  return {
    value: person.email,
    text: [name, person.position].filter(Boolean).join(' - ') || person.email,
  };
};

const ApproverSelect = forwardRef(
  ({
    defaultValue, onGetValue, readOnly = false, apiBaseUrl,
  }, ref) => {
    const [query, setQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [selectedValue, setSelectedValue] = useState(defaultValue || null);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const timeoutId = setTimeout(() => setDebouncedQuery(query), 300);
      return () => clearTimeout(timeoutId);
    }, [query]);

    const fetchMembers = useCallback(async () => {
      const organizationId = getOrganizationId();
      if (!organizationId) {
        setError('No organisation found for the signed-in user.');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const base = apiBaseUrl || DEFAULT_API_BASE_URL;
        const url = `${base}/users/v1/organization/get-all-personnel?organizationId=${encodeURIComponent(organizationId)}`;
        const response = await axios.post(
          url,
          { Page: 1, Page_Size: PAGE_SIZE, search: debouncedQuery },
          { headers: { Authorization: authHeader() } },
        );

        // Members without an email cannot be approved through, so they are not offered.
        setOptions(
          (response.data?.results || []).filter((i) => i?.email).map(toOption),
        );
      } catch (err) {
        console.error('Failed to load approvers:', err);
        setError('Something went wrong while loading approvers.');
        setOptions([]);
      } finally {
        setLoading(false);
      }
    }, [apiBaseUrl, debouncedQuery]);

    useEffect(() => {
      fetchMembers();
    }, [fetchMembers]);

    useEffect(() => {
      if (onGetValue) onGetValue(selectedValue);
    }, [selectedValue]);

    // A saved answer is an email; until the directory loads that is all there is to show.
    const getSelectedOption = (value) => options.find((option) => option.value === value)
      || (value ? { value, text: value } : null);

    const isEmpty = !loading && !error && options.length === 0;

    return (
      <div className="relative w-full" ref={ref}>
        <Combobox value={selectedValue} onChange={setSelectedValue} disabled={readOnly}>
          <div className="relative">
            <ComboboxInput
              disabled={readOnly}
              className={clsx(
                'w-full rounded-lg border border-gray-300 bg-white py-2 pr-10 pl-3 text-sm text-gray-900 disabled:bg-gray-200',
                'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
              )}
              displayValue={(val) => getSelectedOption(val)?.text || ''}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for an approver..."
            />
            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-400 hover:text-gray-600 disabled:bg-gray-200">
              <ChevronDown />
            </ComboboxButton>
          </div>

          <ComboboxOptions
            className={clsx(
              'absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white p-1 shadow-lg',
              'ring-1 ring-black ring-opacity-5 focus:outline-none',
            )}
          >
            {loading && (
              <div className="px-3 py-2 text-sm text-gray-500">Loading approvers...</div>
            )}

            {!loading && error && (
              <div className="px-3 py-2 text-sm text-red-500">{error}</div>
            )}

            {isEmpty && (
              <div className="px-3 py-2 text-sm text-gray-500">No approvers found.</div>
            )}

            {!loading && !error && options.map((option) => (
              <ComboboxOption
                key={option.value}
                value={option.value}
                className={({ active, selected }) => clsx(
                  'cursor-default select-none rounded-md px-3 py-2 text-sm',
                  active ? 'bg-blue-100 text-blue-900' : 'text-gray-900',
                  selected && 'font-semibold',
                )}
              >
                {option.text}
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Combobox>
      </div>
    );
  },
);

export default ApproverSelect;
