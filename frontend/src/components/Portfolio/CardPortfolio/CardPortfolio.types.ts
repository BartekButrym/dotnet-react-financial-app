import { FormEvent } from 'react';

export type Props = {
  portfolioValue: string;
  onPortfolioDelete: (e: FormEvent<HTMLFormElement>) => void;
};
