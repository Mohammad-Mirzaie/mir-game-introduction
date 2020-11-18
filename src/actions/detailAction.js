import axios from "axios";
import { getGameDetailURL, getScreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: "LOADING_DITAIL" });

  const detailData = await axios.get(getGameDetailURL(id));
  const screenShotData = await axios.get(getScreenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
