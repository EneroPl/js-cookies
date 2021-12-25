export function parseOptions(options) {
  if (Object.keys(options).length === 0) return '';

  return Object.entries(options).map(
    ([key, value]) => typeof value === 'boolean' ? key : `${key}=${value}`
  ).join(';');
}

export function isExistKey(key) {
  return typeof key === 'string' && key.trim().length !== 0;
}

