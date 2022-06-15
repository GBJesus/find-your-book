import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import React, { useState, useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// import { BookList } from '../../components/BookList'
import { favoriteLocalStorage } from '../../hooks/favoriteLocalStorage'
import {
  Title,
  BookList,
  BookCard,
  BookInfo,
  Author,
  BookTitle,
  DetailsButton
} from '../Home/styles'
import { Container, IconButton } from './styles'

export const Favorites = () => {
  const history = useHistory()
  const [books, setBooks] = useState()

  const getFavoritesBooks = useCallback(() => {
    let favorites = []
    favorites = favoriteLocalStorage('getFavorites', [])
    const bookList = {
      books: favorites.map(favorite => {
        return favorite
      }),
      totalItems: favorites.length
    }
    setBooks(bookList)
  }, [])

  console.log(books)

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

        {/* {books &&
          books.map(book => (
            <BookCard key={book.id}>
              <img src={book.imageLinks?.thumbnail || ''} alt={book.title} />
              <BookInfo>
                <Author>{book.authors}</Author>
                <BookTitle>{book.title}</BookTitle>
                <DetailsButton onClick={() => history.push(`book/${book.id}`)}>
                  Ver detalhes
                </DetailsButton>
              </BookInfo>
            </BookCard>
          ))} */}
      </Container>
    </>
  )
}
