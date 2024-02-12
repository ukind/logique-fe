import styled from 'styled-components';

const SGallerySearchTerm = styled.h5`
  position: relative;
  display: block;
  width: 100%;
  text-align: center;
  margin: 40px 0px;
`;

const SGallerySearchTitle = styled.span`
  font-family: var(--font-roboto);
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #334155;
`;

const SGallerySearchResult = styled.span`
  font-family: var(--font-roboto);
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
  margin-left: 10px;
  color: #7b34dd;
`;

const SGalleryContainer = styled.ul`
  position: relative;
  margin: unset;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  row-gap: 20px;
`;

const SGalleryItemContainer = styled.li`
  position: relative;
  display: block;
  padding: 10px;
  display: grid;
  grid-template-columns: 100px auto;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  border-radius: 10px;
`;

const SImageArtistAlbumImage = styled.img`
  border: 1px solid transparent;
  border-radius: 10px;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
`;

const SGalleryInfoArist = styled.h5`
  margin: unset;
  position: relative;
  display: block;
  font-family: var(--font-roboto);
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.36px;
  color: #334155;
`;

const SGalleryInfoTrackName = styled.h5`
  margin: unset;
  position: relative;
  display: block;
  font-family: var(--font-roboto);
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #334155;
  margin-top: 5px;
`;

const SGalleryInfo = styled.div`
  position: absolute;
  display: block;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .gallery-info-genre {
    font-family: var(--font-roboto);
    font-size: 10px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.36px;
    color: #fff;
    padding: 4px 13px;
    border-radius: 10px;
    background-color: #10b981;
  }

  > .gallery-info-price {
    font-family: var(--font-roboto);
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.43px;
    color: #f5b014;
  }
`;

const SGalleryArtist = styled.div`
  position: relative;
  display: block;
  margin-left: 12px;
`;

export {
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
};
