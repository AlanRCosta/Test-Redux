import { useState } from "react";
import { useDispatch } from "react-redux";

import { changeUser } from "../Store/rootReducer";

import * as s from "./styles";

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(changeUser(name));
  };

  return (
    <s.Container>
      <s.Title>Login</s.Title>
      <s.FieldText
        type="text"
        placeholder="Nome"
        onChange={(e) => setName(e.target.value)}
      />
      <s.Button onClick={handleLogin}>Login</s.Button>
    </s.Container>
  );
};

export default Login;
