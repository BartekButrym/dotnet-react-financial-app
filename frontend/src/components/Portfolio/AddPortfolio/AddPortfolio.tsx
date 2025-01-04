import { Props } from './AddPortfolio.types';

export const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
      <input readOnly hidden value={symbol} />
      <button type="submit">Add</button>
    </form>
  );
};
