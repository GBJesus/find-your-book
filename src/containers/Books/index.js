import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import React, { useEffect, useCallback, useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'

import { favoriteLocalStorage } from '../../hooks/favoriteLocalStorage'
import getBookService from './getBookService'
import {
  Container,
  IconButton,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Author,
  Typography,
  CardActions,
  Button
} from './styles'

export function Books() {
  const history = useHistory()
  const { params } = useRouteMatch()
  const id = params.id
  const [book, setBook] = useState()
  const [favorite, setFavorite] = useState(false)

  const getBook = useCallback(async () => {
    try {
      const result = await getBookService({ id })
      setBook(result)
    } catch (error) {
      alert(error)
    }
  }, [id])

  const checkFavorite = useCallback(() => {
    if (favorite === false) {
      favoriteLocalStorage('addFavorite', book)
      setFavorite(true)
    } else {
      favoriteLocalStorage('removeFavorite', id)
      setFavorite(false)
    }
  }, [favorite, book, id])

  useEffect(() => {
    getBook()
  }, [id, getBook])

  useEffect(() => {
    const favorites = favoriteLocalStorage('getFavorites', [])
    const index = favorites.findIndex(obj => obj !== null && obj.id === id)
    if (index !== -1) {
      setFavorite(true)
    }
  }, [id])

  return (
    <Container>
      <Card>
        <CardHeader>{book?.title}</CardHeader>
        <CardMedia alt={book?.title} src={book?.imageLinks?.large} />
        <CardContent>
          <Author>{book?.authors}</Author>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={checkFavorite} aria-label="add to favorites">
            {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography paragraph>{book?.description}</Typography>
          <a href={book?.previewLink}>
            <Button>ACESSAR LIVRO</Button>
          </a>
        </CardContent>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBackIcon /> Voltar
        </IconButton>
      </Card>
    </Container>
  )
}
