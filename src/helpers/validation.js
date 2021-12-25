export function isExistKey(key) {
  return typeof key === 'string' && key.trim().length !== 0;
}
