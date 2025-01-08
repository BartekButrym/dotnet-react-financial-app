import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type UseToggleReturnTypes = [
  boolean,
  () => void,
  Dispatch<SetStateAction<boolean>>,
];

export const useToggle = (defaultValue?: boolean): UseToggleReturnTypes => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((v) => !v), []);

  return [value, toggle, setValue];
};
