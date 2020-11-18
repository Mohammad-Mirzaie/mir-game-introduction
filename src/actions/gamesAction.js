import axios from "axios";
import {
  popularGamesURL,
  upcomingGamesURL,
  newGames,
  searchGameURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGames());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGame = await axios.get(searchGameURL(game_name));
  dispatch({
    type: "FETCH_SEARCHED",
    payload: { searched: searchGame.data.results },
  });
};

export const clearSearch = () => async (dispatch) => {
  dispatch({
    type: "CLEAR_SEARCH",
  });
};
