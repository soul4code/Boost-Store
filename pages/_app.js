import "../css/nouislider.min.module.css";
import "../css/custom-select.module.css";
import "../css/swiper.min.css";
import "../css/globals.css";


import { api } from "../utils/api/api";

import { Provider } from "react-redux";
import store from "../store/store";

import { setGames } from "../store/games/actions";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    api
      .getGames()
      .then((res) => {
        store.dispatch(setGames(res));
      })
      .catch((err) => {
        console.log(`Ошибка при получении списка игр ${err}`);
      });
  }, []);

  return (
    <>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    <style jsx global>{`
      @import ../css/globals.css`}
    </style>
    </>
  );
}

export default MyApp;
