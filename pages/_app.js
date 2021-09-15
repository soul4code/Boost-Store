import '../css/nouislider.min.css'
import '../css/custom-select.css'
import '../css/swiper.min.css'
import '../css/globals.css'

import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {

  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  );
}

export default MyApp
