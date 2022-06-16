import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import BooksList from '../../components/BooksList'
import { favoriteLocalStorage } from '../../hooks/favoriteLocalStorage'
import { Title } from '../Home/styles'
import { Container, IconButton } from './styles'

export const Favorites = () => {
  const history = useHistory()
  const [books, setBooks] = useState([])

  const getFavoritesBooks = useCallback(() => {
    let favorites = []
    favorites = favoriteLocalStorage('getFavorites', [])

    favorites = favorites.map(fav => {
      return { ...fav, totalItems: favorites.length }
    })

    setBooks(favorites)
  }, [])

  useEffect(() => {
    getFavoritesBooks()
  }, [getFavoritesBooks])

  return (
    <>
      <Container>
        <IconButton onClick={() => history.goBack()}>
          <ArrowBackIcon />
        </IconButton>
        <Title>Meus livros favoritos</Title>
        <br />
        {books && <BooksList listBooks={books} />}
      </Container>
    </>
  )
}
