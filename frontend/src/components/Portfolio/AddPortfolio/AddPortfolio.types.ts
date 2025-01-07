import { FormEvent } from 'react';

export type Props = {
  onPortfolioCreate: (e: FormEvent<HTMLFormElement>) => void;
  symbol: string;
};
