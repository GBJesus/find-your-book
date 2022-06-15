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
`

export const CardHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`

export const CardMedia = styled.img`
  width: 100%;
`

export const CardContent = styled.div`
  padding: 20px 50px 0;
`

export const Author = styled.p`
  font-size: 24px;
`

export const Typography = styled.p``

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
