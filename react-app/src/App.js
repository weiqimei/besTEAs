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
import DeleteBobaShopConfirmationPage from './components/DeleteBobaShopConfirmationPage';
import DeleteReviewConfirmationPage from './components/DeleteReviewConfirmationPage';
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
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/bobaShops' exact={true} >
          <BobaShopList />
        </ProtectedRoute>
        <ProtectedRoute path='/bobaShops/new' exact={true} >
          <CreateBobaShopForm />
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
        <ProtectedRoute path='/users/:user_id' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
