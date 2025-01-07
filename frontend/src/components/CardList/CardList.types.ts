import { FormEvent } from 'react';
import { CompanySearch } from '@interfaces/company';

export type Props = {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: FormEvent<HTMLFormElement>) => void;
};
