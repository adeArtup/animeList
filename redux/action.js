import axios from 'axios';

export const fetchAnime = () => ({
    type: 'anime_fetch'
  })

export const fetchAnimeAction = () => {
    return (dispatch) => {
      dispatch(fetchAnime())
      axios.get('https://api.jikan.moe/v3/genre/anime/1/1')
      .then(res =>{
        dispatch({
          type: 'anime_fetch_succ',
          payload: res.data.anime
        })
      })
      .catch(err =>{
        dispatch({
          type: 'anime_fetch_err'
        })
        throw err
      })
    }
  }
  
  export const fetchAnimeDetail = (params) => {
    return dispatch => {
      dispatch({
        type: 'FETCH_Anime_DETAIL'
      })
      axios.get('https://api.jikan.moe/v3/search/anime?q='+params+'&page=1')
      .then(res => {
        dispatch({
          type: 'FETCH_Anime_DETAIL_SUCCESS',
          payload: res.data.results[0]
        }) 
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_Anime_DETAIL_FAILED'
        })  
        throw err
      })
    }
  }
  
  export const clearAnimeAction = () => ({
    type: 'CLEAR_Anime_DATA'
  })