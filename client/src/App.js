
import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '825510882658-rg2bsf9q1655b8ecfumrhknouuaisuu9.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
