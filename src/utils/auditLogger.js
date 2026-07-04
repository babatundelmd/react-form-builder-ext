export const logAuditActivity = (actionName, details) => {
  try {
    const userData = JSON.parse(localStorage.getItem("LoginInfo") || "{}");
    const newLog = {
      id: `local-audit-${Date.now()}`,
      service: "calculator",
      userName: userData.userName || userData.email || "System Admin",
      userId: userData.id || userData.userId || "admin",
      controllerName: "CalculatorLimitController",
      actionName: actionName,
      ipAddress: "127.0.0.1",
      created_At: new Date().toISOString(),
      requestBody: JSON.stringify(details, null, 2),
      responseBody: actionName.includes("Breach") ? "BLOCKED" : "SUCCESS",
    };
    const logs = JSON.parse(localStorage.getItem("kusala_local_audit_logs") || "[]");
    logs.unshift(newLog);
    localStorage.setItem("kusala_local_audit_logs", JSON.stringify(logs));
  } catch (e) {
    console.error("Error writing audit log:", e);
  }
};
