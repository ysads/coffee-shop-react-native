export const sample = (arr: string[]): string => {
  const rand = Math.floor(Math.random() * arr.length);

  return arr[rand];
};
