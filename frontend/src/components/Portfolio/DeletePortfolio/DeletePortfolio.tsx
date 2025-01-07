import { Props } from './DeletePortfolio.types';

export const DeletePortfolio = ({
  onPortfolioDelete,
  portfolioValue,
}: Props) => {
  return (
    <form onSubmit={onPortfolioDelete}>
      <input readOnly hidden value={portfolioValue} />
      <button>x</button>
    </form>
  );
};
