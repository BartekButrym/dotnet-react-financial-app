import { ChangeEvent, FormEvent, useState } from 'react';
import { CompanySearch } from '@interfaces/company';
import { searchCompanies } from '@services/api';
import { CardList } from '@components/CardList/CardList';
import { Search } from '@components/Search/Search';

export const Home = () => {
  const [search, setSearch] = useState('');
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

  const onPortfolioCreate = () => {};

  return (
    <div>
      <h1>Home</h1>
      <Search
        search={search}
        onInput={handleOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
      {serverError && <h2>Unable to connect to API</h2>}
    </div>
  );
};
