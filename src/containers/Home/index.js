// import SaveIcon from '@mui/icons-material/Save'
// import LoadingButton from '@mui/lab/LoadingButton'
// import Stack from '@mui/material/Stack'
import FavoriteIcon from '@mui/icons-material/Favorite'
// import Pagination from '@mui/material/Pagination'
// import Stack from '@mui/material/Stack'
import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import getBooks from './getBooksService'
import {
  Container,
  IconButton,
  Title,
  Form,
  Div,
  BookList,
  BookCard,
  BookInfo,
  Author,
  BookTitle,
  DetailsButton
} from './styles'

export function Home() {
  const history = useHistory()

  const [searchParams, setSearchParams] = useState('')
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState()
  const [totalItems, setTotalItems] = useState(-1)

  const loadBooks = useCallback(
    async page => {
      try {
        if (searchParams === '') {
          return alert('Informe o título do livro!')
        }
        setLoading(true)
        const { books: allBooks, totalItems: allItems } = await getBooks({
          searchParams,
          page
        })

        setBooks(allBooks)
        setTotalItems(allItems)
        setLoading(false)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    },
    [searchParams]
  )

  return (
    <Container>
      <Title>Encontre Seu Livro</Title>

      <IconButton onClick={() => history.push('favorites')}>
        Veja Seus Favoritos <FavoriteIcon />
      </IconButton>

      <Form>
        <input
          placeholder="Digite o título do livro"
          onChange={e => setSearchParams(e.target.value)}
        />
        {loading ? (
          <Div>Carregando...</Div>
        ) : (
          <button onClick={() => loadBooks(1)}>Buscar</button>
        )}
      </Form>
      <BookList>
        {totalItems > 0 && books
          ? books.map(book => (
              <BookCard key={book.id}>
                <img src={book.imageLinks?.thumbnail || ''} alt={book.title} />
                <BookInfo>
                  <Author>{book.authors}</Author>
                  <BookTitle>{book.title}</BookTitle>
                  <DetailsButton
                    onClick={() => history.push(`book/${book.id}`)}
                  >
                    Ver detalhes
                  </DetailsButton>
                </BookInfo>
              </BookCard>
            ))
          : totalItems >= 0 && <span>Nenhum livro encontrado!</span>}
      </BookList>
    </Container>
  )
}
