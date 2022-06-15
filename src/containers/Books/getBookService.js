import api from '../../services/api'

async function getBookService({ id: idBooks }) {
  try {
    const response = await api.get(`volumes/${idBooks}`)

    const { id } = response.data

    const {
      title,
      description,
      imageLinks,
      authors: authorsList,
      publishedDate,
      previewLink
    } = response.data.volumeInfo
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
  } catch (error) {
    throw new Error(error.message)
  }
}

export default getBookService
