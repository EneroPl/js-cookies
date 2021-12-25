export function parseOptions(options = {}) {
  if (Object.keys(options).length === 0) return '';

  return Object.entries(options).map(
    ([key, value]) => typeof value === 'boolean' ? key : `${key}=${value}`
  );
}

export function parseToString(key, value, options) {
  const settingParseString = `${key}=${JSON.stringify(value)};`;
  const parsedOptions = parseOptions(options);

  return [settingParseString, ...parsedOptions].join(';');
}