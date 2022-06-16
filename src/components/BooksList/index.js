import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  Container,
  Grid,
  BookInfo,
  Author,
  BookTitle,
  DetailsButton
} from './styles'

function BooksList(props) {
  const history = useHistory()
  console.log(props.listBooks)
  return (
    <Container>
      {props.listBooks?.map(book => (
        <Grid key={book.id}>
          <img src={book.imageLinks?.thumbnail || ''} alt={book.title} />
          <BookInfo>
            <Author>{book.authors}</Author>
            <BookTitle>{book.title}</BookTitle>
            <DetailsButton onClick={() => history.push(`book/${book.id}`)}>
              Ver detalhes
            </DetailsButton>
          </BookInfo>
        </Grid>
      ))}
    </Container>
  )
}

export default BooksList

BooksList.propTypes = {
  listBooks: PropTypes.array
}
