import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  span {
    text-align: center;
    grid-column: 2;
  }
`

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 220px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px #909095;

  @media screen and (max-width: 767px) {
    width: 250px;
  }

  img {
    border-radius: 5px 5px 0 0;
    height: 260px;
  }
`

export const BookInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`

export const Author = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`

export const BookTitle = styled.p`
  font-size: 14px;
`

export const DetailsButton = styled.button`
  border: none;
  align-self: start;
  background: none;
  color: #3f51b5;
  text-transform: uppercase;
`
