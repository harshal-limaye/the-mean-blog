const configMap: Map<string, any> = new Map();

configMap.set("errMessage", "Internal Server Error,");
configMap.set("errStatus", 500);
configMap.set("errPayload", {
  success: false,
  error: "Something went wrong please contact your administator.",
});

export default {
  payload: configMap.get("errPayload"),
  status: configMap.get("errStatus"),
  message: configMap.get('errMessage'),
  get: (key: string) => (configMap.has(key) ? configMap.get(key) : null),
  custom: (msg: string) => ({ ...configMap.get("errPayload"), error: msg }),
};
