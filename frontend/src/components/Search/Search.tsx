import { Props } from './Search.types';

export const Search = ({ search, onInput, handleOnSubmit }: Props) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" value={search} onChange={onInput} />
    </form>
  );
};
