export function parseOptions(options) {
  if (Object.keys(options).length === 0) return '';

  return Object.entries(options).map(
    ([key, value]) => {
      const firstLetter = key[0].toUpperCase();
      const spreadLetter = key
        .slice(1, key.length)
        .replace(/[A-Z]/, (match) => '-' + match);
      const formattedKey = firstLetter + spreadLetter;

      switch (typeof value) {
        case 'boolean':
          return value
            ? formattedKey
            : '';
        default:
          return `${formattedKey}=${JSON.stringify(value)}`;
      }
    }
  ).join(';');
}

export function isExistKey(key) {
  return typeof key === 'string' && key.trim().length !== 0;
}

