import { useEffect, useState } from "react";
import { authorisationPOST } from "./authorisationPOST";
import Input from "../EntrAccount/Input";

const Authorisation = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className={"account__header-name text-center"}>Authorisation</div>
      <form onSubmit={handleSubmit}>
        <Input
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Email"
          required={true}
          minLength={3}
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Password"
          required={true}
          minLength={7}
        />
        <button
          className={"button-color-basic button__auth"}
          onClick={() => authorisationPOST(email, password)}
        >
          Authorisation
        </button>
      </form>
    </div>
  );
};

export default Authorisation;
