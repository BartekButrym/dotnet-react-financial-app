import { DeletePortfolio } from '../DeletePortfolio/DeletePortfolio';
import { Props } from './CardPortfolio.types';

export const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div>
      <h4>{portfolioValue}</h4>
      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};
