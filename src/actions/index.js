import axios from "axios";
import * as types from '../actionTypes/index';

export const updateCats = (data) => ({
  type: types.UPDATE_CATS,
  payload: data
})

export const catFetch = () => {
  return (dispatch, getState) => {
    let count = 5
    let offset = 5
    axios.get(`http://api.giphy.com/v1/gifs/search?q=cat&api_key=5DC10oqVKzzjxbSWbDCTihlVk56rbcDL&limit=${count}&offset=${offset}`)
      .then(data => {
        console.log(data);
        const cats = data.data.data.map(obj => obj.embed_url);
        dispatch(updateCats(cats))
      })
      .catch(err => console.log('Error'))
  } 
}

export const nextCat = () => ({
  type: types.NEXT_CAT
})

export const prevCat = () => ({
  type: types.PREV_CAT
})