import { ChangeEvent, FormEvent } from 'react';

export type Props = {
  search: string;
  onInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
