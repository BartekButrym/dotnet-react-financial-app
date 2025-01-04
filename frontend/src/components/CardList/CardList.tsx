import { Card } from '@components/Card/Card';
import { Props } from './CardList.types';

export const CardList = ({ searchResult, onPortfolioCreate }: Props) => {
  if (!searchResult.length) {
    return <h2>No results</h2>;
  }

  return searchResult.map((result) => (
    <Card
      key={result.symbol}
      searchResult={result}
      onPortfolioCreate={onPortfolioCreate}
    />
  ));
};
