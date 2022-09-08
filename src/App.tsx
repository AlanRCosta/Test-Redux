import "./App.css";

import Logout from "./Logout";
import Login from "./Login";
import User from "./User";
import Providers from "./Providers";

function App(): JSX.Element {
  return (
    <Providers>
      <Login />
      <User />
      <Logout />
    </Providers>
  );
}

export default App;
