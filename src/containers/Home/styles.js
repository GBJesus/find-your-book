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
  background: none;
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

export const Books = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-top: 50px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  @media screen and (max-width: 767px) {
  }
`

export const Box = styled.div`
  margin-top: 50px;
`
