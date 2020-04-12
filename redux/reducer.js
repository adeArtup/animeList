const appStore = {
    animeL: {
      loading: false,
      data: []
    },
    selAnimeDetail: {
      loading: false,
      data: {},
      // urlDetail : 'https://api.jikan.moe/v3/genre/anime/1/1'
    }
  };
  
  const app = (state = { ...appStore }, action) => {
    switch (action.type) {
      case "anime_fetch":
        return {
          ...state,
          animeL: {
            ...state.animeL,
            loading: true
          }
        };
  
      case "anime_fetch_succ":
        // console.log(action);
        return {
          ...state,
          animeL: {
            ...state.animeL,
            loading: false,
            data: action.payload
          }
        };
  
      case "anime_fetch_err":
        return {
          ...state,
          animeL: {
            ...state.animeL,
            loading: false
          }
        };
      case "FETCH_Anime_DETAIL":
        return {
          ...state,
          selAnimeDetail: {
            ...state.selAnimeDetail,
            loading: true
          }
        };
      case "FETCH_Anime_DETAIL_SUCCESS":
        return {
          ...state,
          selAnimeDetail: {
            ...state.selAnimeDetail,
            loading: false,
            data: action.payload
          }
        };
      case "FETCH_Anime_DETAIL_FAILED":
        return {
          ...state,
          selAnimeDetail: {
            ...state.selAnimeDetail,
            loading: false
          }
        };
      // case "UPDATE_URL_DETAIL": {
      //   return {
      //     ...state,
      //     selAnimeDetail: {
      //       ...state.selAnimeDetail,
      //       urlDetail: action.payload
      //     }
      //   };
      // }
  
      case "CLEAR_Anime_DATA":
        return {
          ...state,
          selAnimeDetail: appStore.selAnimeDetail,
        };
      default:
        return state;
    }
  };
  
  export default app;
  