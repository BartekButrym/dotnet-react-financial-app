import { AddPortfolio } from '@components/Portfolio/AddPortfolio/AddPortfolio';
import { Props } from './Card.types';
import { StyledCard } from './Card.styles';

export const Card = ({ searchResult, onPortfolioCreate }: Props) => {
  return (
    <StyledCard>
      <img alt="Company logo" />
      <div className="details">
        <h2>
          {searchResult.name} ({searchResult.symbol})
        </h2>
        <p>{searchResult.currency}</p>
      </div>
      <p className="info">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </StyledCard>
  );
};
