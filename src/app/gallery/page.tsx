'use client';

import Navbar from '@/components/navbar';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Search from '@/components/search';
import { useSearch } from '@/context/search-provider';
import {
  SGalleryArtist,
  SGalleryContainer,
  SGalleryInfo,
  SGalleryInfoArist,
  SGalleryInfoTrackName,
  SGalleryItemContainer,
  SGallerySearchResult,
  SGallerySearchTerm,
  SGallerySearchTitle,
  SImageArtistAlbumImage,
} from './styled';

export interface IArtist {
  resultCount: number;
  results?: ResultsEntity[] | null;
}
export interface ResultsEntity {
  wrapperType: string;
  kind?: string | null;
  artistId?: number | null;
  collectionId?: number | null;
  trackId?: number | null;
  artistName: string;
  collectionName?: string | null;
  trackName?: string | null;
  collectionCensoredName?: string | null;
  trackCensoredName?: string | null;
  artistViewUrl?: string | null;
  collectionViewUrl?: string | null;
  trackViewUrl?: string | null;
  previewUrl: string;
  artworkUrl30?: string | null;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice?: number | null;
  releaseDate: string;
  collectionExplicitness: string;
  trackExplicitness?: string | null;
  discCount?: number | null;
  discNumber?: number | null;
  trackCount?: number | null;
  trackNumber?: number | null;
  trackTimeMillis?: number | null;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating?: string | null;
  isStreamable?: boolean | null;
  collectionArtistId?: number | null;
  collectionArtistName?: string | null;
  description?: string | null;
  collectionArtistViewUrl?: string | null;
  trackRentalPrice?: number | null;
  collectionHdPrice?: number | null;
  trackHdPrice?: number | null;
  trackHdRentalPrice?: number | null;
  longDescription?: string | null;
}

const Gallery = () => {
  const searchParams = useSearchParams();
  const [galleryItems, setGalleryItems] = useState<IArtist['results']>([]);
  const searchQuery = searchParams.get('search') as string;
  const [isModalSearchVisible, setIsModalSearchVisible] = useState(false);
  const { query, onTypeHandler } = useSearch();

  const getGallery = async (searchQuery: string) => {
    const response = await fetch(
      `https://itunes.apple.com/search?term=${searchQuery}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data as IArtist;
      });

    const { results } = response;
    setGalleryItems(results);
  };

  useEffect(() => {
    getGallery(searchQuery);
  }, [searchQuery]);

  const onClickSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getGallery(query);
  };

  const onToggleSearchModal = () => {
    setIsModalSearchVisible((prevState) => !prevState);
  };

  return (
    <>
      {isModalSearchVisible && (
        <div
          className="modal-search"
          style={{ background: 'rgba(28, 28, 45, 0.9)' }}
          onClick={onToggleSearchModal}
        >
          <Search
            searchQuery={query}
            onTypeHandler={onTypeHandler}
            onClickButtonSearch={onClickSearch}
          ></Search>
        </div>
      )}

      <Navbar onNavbarSearch={onToggleSearchModal}></Navbar>
      <div className="gallery-body">
        <SGallerySearchTerm className="gallery-search-term">
          <SGallerySearchTitle className="gallery-search-title">
            Search result:
          </SGallerySearchTitle>
          <SGallerySearchResult className="gallery-search-query">
            {searchQuery}
          </SGallerySearchResult>
        </SGallerySearchTerm>
        <SGalleryContainer className="gallery-container">
          {galleryItems?.map((item, idx) => {
            return (
              <SGalleryItemContainer
                className="gallery-item-container"
                key={`${item.collectionId}-${idx}`}
              >
                <div className="gallery-image">
                  <SImageArtistAlbumImage
                    className="arist-album-image"
                    alt="gambar"
                    src={item.artworkUrl100}
                  ></SImageArtistAlbumImage>
                </div>
                <SGalleryArtist className="gallery-artist">
                  <SGalleryInfoArist className="gallery-info-artist">
                    {item.artistName}
                  </SGalleryInfoArist>
                  <SGalleryInfoTrackName className="gallery-info-trackname">
                    {item.trackName}
                  </SGalleryInfoTrackName>
                  <SGalleryInfo className="gallery-info">
                    <span className="gallery-info-genre">
                      {item.primaryGenreName}
                    </span>
                    <span className="gallery-info-price">
                      $ {item.trackPrice}
                    </span>
                  </SGalleryInfo>
                </SGalleryArtist>
              </SGalleryItemContainer>
            );
          })}
        </SGalleryContainer>
      </div>
    </>
  );
};

export default Gallery;
