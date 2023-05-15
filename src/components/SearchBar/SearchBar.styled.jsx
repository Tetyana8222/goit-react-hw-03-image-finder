import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: #37b2d9;
  border: none;
  border-radius: 30px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 20px 20px;
  margin-left: 10px;

  &:hover {
    background-color: #4ec4e6;
  }
`;

export const SearchField = styled.input`
  background-color: #fff;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: #333;
  font-size: 16px;
  padding: 10px;
  width: 40%;
`;

export const SearchButton = styled.button`
  background-color: #fff;
  border: none;
  /* width: 150px; */
  border-radius: px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  color: #007bff;
  cursor: pointer;
  font-size: 20px;
  padding: 8px 20px;
`;
