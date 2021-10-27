import { useState } from "react";
import Input from "../EntrAccount/Input";
import { registrationPOST } from "./registrationPOST";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(`${email} - ${password}`);
    e.preventDefault();
  };
  // alex@manc.ru - alexmanc

  return (
    <>
      <div className={"account__header-name text-center"}>Registration</div>
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
          onClick={() => registrationPOST(email, password)}
        >
          Registration
        </button>
      </form>
    </>
  );
};

export default Registration;
