import { CardPortfolio } from '../CardPortfolio/CardPortfolio';
import { Props } from './ListPortfolio.types';

export const ListPortfolio = ({
  portfolioValues,
  onPortfolioDelete,
}: Props) => {
  return (
    <div>
      <h3>My Portfolio</h3>
      <ul>
        {portfolioValues.map((portfolioValue) => (
          <CardPortfolio
            key={portfolioValue}
            portfolioValue={portfolioValue}
            onPortfolioDelete={onPortfolioDelete}
          />
        ))}
      </ul>
    </div>
  );
};
