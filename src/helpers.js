export function parseOptions(options) {
  const regexp = /[A-Z]/g;

  if (options && !!Object.keys(options).length) {
    return Object.entries(options).map(([key, value]) => {
      if (regexp.test(key)) {
        key = key.replace(regexp, (match) => {
          return '-' + match[0].toLowerCase() + match.slice(1, match.length);
        })
      }

      return `${key}=${value}`;
    }).join('; ');
  }

  return '';
}