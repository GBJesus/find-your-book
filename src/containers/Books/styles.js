import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 50px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px;
  width: 60%;
  background-color: #fff;
  border-radius: 5px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const CardHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 30px;
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`

export const CardMedia = styled.img`
  width: 100%;
`

export const CardContent = styled.div`
  padding: 20px 50px 0;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 20px 40px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 20px 30px 0;
  }
`

export const Author = styled.p`
  font-size: 24px;
`

export const Typography = styled.p`
  font-size: 16px;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`

export const CardActions = styled.div`
  align-self: start;
`

export const Button = styled.button`
  margin: 20px 0 20px;
  background-color: #0d62ff;
  border: none;
  color: #fff;
  padding: 10px;
  min-width: 64px;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`

export const IconButton = styled.button`
  margin-left: 50px;
  min-width: 64px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 5px;
  background: none;
  align-self: start;
  font-size: 16px;
`
