import "../css/nouislider.min.css";
import "../css/custom-select.css";
import "../css/swiper.min.css";
import "../css/globals.css";

import { api } from "../utils/api/api";

import { Provider } from "react-redux";
import store from "../store/store";

import { setGames } from "../store/games/actions";
import { useEffect } from "react";
import CheckAuth from "../components/CheckAuth/CheckAuth";
import { gamesService } from "../akita_store/games";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    api
      .getGames()
      .then((res) => {
        gamesService.setGames(res);
        store.dispatch(setGames(res));
      })
      .catch((err) => {
        console.log(`Ошибка при получении списка игр ${err}`);
      });
  }, []);

  return (
    <>
      <Provider store={store}>
        <CheckAuth child={<Component {...pageProps} />} />
      </Provider>
    </>
  );
}

export default MyApp;
