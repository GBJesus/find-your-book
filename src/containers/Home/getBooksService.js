import api from '../../services/api'

async function getBooks({ searchParams, page }) {
  let sum = 1
  if (page !== 1) {
    sum = 10 * page
  }
  try {
    const response = await api.get(
      `volumes?q=${searchParams}&maxResults=10&startIndex=${page - 1 + sum}`
    )

    const { items, totalItems } = response.data

    return {
      totalItems,
      books: items?.map(book => {
        const { id } = book
        const {
          title,
          description,
          imageLinks,
          authors: authorsList,
          publishedDate,
          previewLink
        } = book.volumeInfo
        const authors = authorsList?.join(' & ')
        return {
          id,
          title,
          description,
          imageLinks,
          authors,
          publishedDate,
          previewLink
        }
      })
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

export default getBooks
