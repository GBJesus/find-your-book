import FavoriteIcon from '@mui/icons-material/Favorite'
import LoadingButton from '@mui/lab/LoadingButton'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import React, { useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import BooksList from '../../components/BooksList'
import getBooks from './getBooksService'
import { Container, IconButton, Title, Form, Books, Box } from './styles'

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
          <Stack direction="row" spacing={2}>
            <LoadingButton loading variant="outlined">
              Submit
            </LoadingButton>
          </Stack>
        ) : (
          <button onClick={() => loadBooks(1)}>Buscar</button>
        )}
      </Form>
      <Books>
        {totalItems > 0
          ? books && (
              <>
                <BooksList listBooks={books} />
                <Box>
                  {' '}
                  <Stack spacing={2}>
                    <Pagination
                      onChange={(event, page) => loadBooks(page)}
                      count={Math.floor(totalItems / 10)}
                      color="primary"
                    />
                  </Stack>
                </Box>
              </>
            )
          : totalItems >= 0 && <span>Nenhum livro encontrado!</span>}
      </Books>
    </Container>
  )
}
