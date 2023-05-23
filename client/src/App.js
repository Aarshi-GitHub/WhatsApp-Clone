import { lazy, Suspense } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';
import Loader from './components/loader/Loader';
const Messenger = lazy(() => import('./components/Messenger'));
const App = () =>{
  const clientId = '762531157935-8k7pmbkr7fmj0ivbnf1enq0i3qgif08b.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
