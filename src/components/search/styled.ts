import styled from 'styled-components';

const SMenu = styled.form`
  position: relative;
  display: grid;
  margin-top: auto;
  grid-row-gap: 15px;
  padding: 0px 30px;
  padding-bottom: 26px;
  width: calc(100% - 60px);
`;

const SInputArtist = styled.input`
  position: relative;
  display: block;
  border-radius: 20px;
  background-color: #fff;
  padding: 13px 0px;
  text-align: center;
  min-width: 1%;
  font-family: var(--font-roboto);
  border: unset;
`;

const SButtonSearch = styled.button`
  padding: 13px 0px;
  font-family: var(--font-roboto);
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.5px;
  color: #fff;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border: unset;
`;

export { SButtonSearch, SInputArtist, SMenu };
