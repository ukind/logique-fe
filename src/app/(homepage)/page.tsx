'use client';

import Search from '@/components/search';

import { useSearch } from '@/context/search-provider';
import { useRouter } from 'next/navigation';
import { SContainer, SLogo, SLogoContainer, SWrapper } from './styled';

export default function Home() {
  const { query, onTypeHandler } = useSearch();
  const router = useRouter();

  const onClickButtonSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) router.push(`/gallery?search=${query}`);
  };

  return (
    <SContainer>
      <SWrapper>
        <SLogoContainer>
          <SLogo></SLogo>
        </SLogoContainer>
        <Search
          searchQuery={query}
          onTypeHandler={onTypeHandler}
          onClickButtonSearch={onClickButtonSearch}
        ></Search>
      </SWrapper>
    </SContainer>
  );
}
