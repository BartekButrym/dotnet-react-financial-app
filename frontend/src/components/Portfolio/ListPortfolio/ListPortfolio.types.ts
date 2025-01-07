import { FormEvent } from 'react';

export type Props = {
  portfolioValues: string[];
  onPortfolioDelete: (e: FormEvent<HTMLFormElement>) => void;
};
