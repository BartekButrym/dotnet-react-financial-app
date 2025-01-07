import { ChangeEvent, FormEvent, useState } from 'react';
import { CompanySearch } from '@interfaces/company';
import { searchCompanies } from '@services/api';
import { CardList } from '@components/CardList/CardList';
import { Search } from '@components/Search/Search';
import { ListPortfolio } from '@components/Portfolio/ListPortfolio/ListPortfolio';

export const SearchPage = () => {
  const [search, setSearch] = useState('');
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await searchCompanies(search);

    if (typeof result === 'string') {
      setServerError(result);
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  };

  const onPortfolioCreate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ticker = e.currentTarget.children[0].getAttribute('value');
    const tickerExists = portfolioValues.find((value) => value === ticker);

    if (tickerExists) return;

    if (ticker) {
      setPortfolioValues((prevState) => [...prevState, ticker]);
    }
  };

  const onPortfolioDelete = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const ticker = e.currentTarget.children[0].getAttribute('value');

    const filteredPortfolioValues = portfolioValues.filter(
      (value) => value !== ticker
    );

    setPortfolioValues(filteredPortfolioValues);
  };

  return (
    <>
      <Search
        search={search}
        onInput={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <h2>Unable to connect to API</h2>}
    </>
  );
};
