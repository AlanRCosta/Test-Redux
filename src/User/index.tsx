import { useSelector } from "react-redux";

import { selectUser } from "../Store/rootReducer";

import * as s from "./styles";

const User: React.FC = () => {
  const { name } = useSelector(selectUser);

  return (
    <s.Container>
      <s.UserName>Usuário: {name}</s.UserName>
    </s.Container>
  );
};

export default User;
