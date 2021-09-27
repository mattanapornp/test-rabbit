export const isKeySet = (object: any, key: string) => {
  return Object.keys(object).includes(key);
};

export const isObject = (x: any) => x != null && typeof x === 'object';

export const flatten = (item: any) => {
  return Object.values(item).flat();
};
