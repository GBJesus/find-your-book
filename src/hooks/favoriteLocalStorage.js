import { toast } from 'react-toastify'

export const favoriteLocalStorage = (action, data) => {
  const getFavorites = () => {
    try {
      let favorites = localStorage.getItem('@favorite-books')
      if (favorites === null) {
        favorites = []
        return favorites
      }
      return JSON.parse(favorites)
    } catch (error) {
      throw new Error(error)
    }
  }

  const setFavorite = () => {
    try {
      let favorites = []
      favorites = getFavorites()
      favorites.push(data)
      console.warn(favorites)
      localStorage.setItem('@favorite-books', JSON.stringify(favorites))
      toast.success('❤️ Favoritado com Sucesso', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  const removeFavorite = () => {
    try {
      let favorites = []
      favorites = getFavorites()
      const index = favorites.findIndex(obj => obj !== null && obj.id === data)
      favorites.splice(index, 1)
      localStorage.setItem('@favorite-books', JSON.stringify(favorites))
      return toast.success('💔 Desfavoritado com Sucesso', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  if (action === 'addFavorite') {
    return setFavorite()
  } else if (action === 'getFavorites') {
    return getFavorites()
  } else if (action === 'removeFavorite') {
    return removeFavorite()
  }
  return ''
}
