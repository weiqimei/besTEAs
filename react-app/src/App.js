import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import BobaShopList from './components/BobaShopList';
import BobaShop from './components/BobaShop';
import CreateBobaShopForm from './components/CreateBobaShopForm';
import EditBobaShopForm from './components/EditBobaShopForm';
import EditReviewForm from './components/EditReviewForm';
import DeleteBobaShopConfirmationPage from './components/DeleteBobaShopConfirmationPage';
import DeleteReviewConfirmationPage from './components/DeleteReviewConfirmationPage';
import SplashPage from './components/SplashPage';
import Footer from './components/Footer';
import Error from './components/Error';
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          {/* <h1>My Home Page</h1> */}
          <SplashPage />
          <Footer />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute> */}
        <Route path='/bobaShops' exact={true} >
          <BobaShopList />
          <Footer />
        </Route>
        <ProtectedRoute path='/bobaShops/new' exact={true} >
          <CreateBobaShopForm />
          <Footer />
        </ProtectedRoute>
        <ProtectedRoute path='/bobaShops/:bobaShopId' exact={true} >
          <BobaShop />
        </ProtectedRoute>
        <ProtectedRoute path='/bobaShops/:bobaShopId/edit' exact={true} >
          <EditBobaShopForm />
        </ProtectedRoute>
        <ProtectedRoute path='/bobaShops/:bobaShopId/delete' exact={true} >
          <DeleteBobaShopConfirmationPage />
        </ProtectedRoute>
        <ProtectedRoute path='/bobaShops/:bobaShopId/:reviewId/delete' exact={true} >
          <DeleteReviewConfirmationPage />
        </ProtectedRoute>
        <ProtectedRoute path='/bobaShops/:bobaShopId/:reviewId/edit' exact={true} >
          <EditReviewForm />
        </ProtectedRoute>

        {/* <ProtectedRoute path='/users/:user_id' exact={true} >
          <User />
        </ProtectedRoute> */}

        {/* ADD 404 ERROR PAGE */}
        <Error />
      </Switch>

      {/* <Error /> */}

    </BrowserRouter>
  );
}

export default App;
