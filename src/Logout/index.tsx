import { useDispatch } from "react-redux";

import { logout } from "../Store/rootReducer";

import * as s from "./styles";

const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <s.Container>
      <s.Button onClick={handleLogout}>Logout</s.Button>
    </s.Container>
  );
};

export default Logout;
