import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 150px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;

  align-items: center;
  min-height: 100vh;
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  border: none;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.54);
`

export const Title = styled.p`
  text-align: center;
  font-size: 56px;
  font-weight: bold;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 46px;
  }

  @media screen and (max-width: 767px) {
    font-size: 36px;
  }
`

export const Form = styled.div`
  display: flex;
  margin-top: 50px;
  width: 60%;

  input {
    width: 100%;

    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 50px 0 0 50px;
    color: #3a3a3a;
    &::placeholder {
      color: #a8a8b3;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      height: 60px;
    }

    @media screen and (max-width: 767px) {
      height: 50px;
    }
  }
  button {
    width: 50%;
    height: 70px;
    background: #0d62ff;
    border-radius: 0px 50px 50px 0px;
    border: none;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.5;
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      height: 60px;
    }

    @media screen and (max-width: 767px) {
      height: 50px;
    }
  }
`

export const Div = styled.div``

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 70%;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;

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

export const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px #909095;

  @media screen and (max-width: 767px) {
    width: 250px;
  }

  img {
    border-radius: 5px 5px 0 0;
    height: 300px;
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
