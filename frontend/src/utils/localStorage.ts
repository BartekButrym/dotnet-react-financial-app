export const addToLocalStorage = ({
  key,
  value,
}: {
  key: string;
  value: string;
}) => {
  localStorage.setItem(key, value);
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getFromLocalStorage = (key: string) => localStorage.getItem(key);
