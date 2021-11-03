import { connect } from "react-redux";
import { setAuthToken, setAuth } from "../../store/main/actions";
import { useEffect } from "react";



const CheckAuth = (props) => {
  useEffect(() => {
    props.setAuthToken(localStorage.getItem("authToken"));
  }, []);

  useEffect(() => {
    if (props.authToken) {
      props.setAuth(true);
    }
  }, [props.authToken]);

  return (props.child)
};

const mapStateToProps = (state) => ({
  authToken: state.main.authToken,
});

const mapDispathToProps = {
  setAuthToken,
  setAuth,
};

export default connect(mapStateToProps, mapDispathToProps)(CheckAuth);
