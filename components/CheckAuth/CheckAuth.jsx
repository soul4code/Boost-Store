import { connect } from "react-redux";
import { setAuthToken, setAuth } from "../../store/main/actions";
import { useEffect } from "react";



const CheckAuth = ({setAuthToken, setAuth, authToken, child}) => {
  useEffect(() => {
    setAuthToken(localStorage.getItem("authToken"));
  }, []);

  useEffect(() => {
    if (authToken) {
      setAuth(true);
    }
  }, [authToken]);

  return (child)
};

const mapStateToProps = (state) => ({
  authToken: state.main.authToken,
});

const mapDispathToProps = {
  setAuthToken,
  setAuth,
};

export default connect(mapStateToProps, mapDispathToProps)(CheckAuth);
