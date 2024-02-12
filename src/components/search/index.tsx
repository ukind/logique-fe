'use client';

import { SButtonSearch, SInputArtist, SMenu } from './styled';

const Search = ({
  searchQuery,
  onTypeHandler,
  onClickButtonSearch,
}: {
  searchQuery?: string;
  onTypeHandler?: (e: React.FormEvent<HTMLInputElement>) => void;
  onClickButtonSearch: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <SMenu onSubmit={onClickButtonSearch}>
      <SInputArtist
        className="input-artist"
        placeholder="Artist / Album / Title"
        value={searchQuery}
        onChange={onTypeHandler}
      ></SInputArtist>
      <SButtonSearch className="button-search">Search</SButtonSearch>
    </SMenu>
  );
};

export default Search;
