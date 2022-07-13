import { lazy, StrictMode, Suspense, useEffect } from 'react';
import { connect, Provider } from 'react-redux';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { compose } from 'redux';
import withRouter from './hoc/withRouter';
import store from './store/store';
import styles from './App.module.css'
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { initializeAppTC } from './store/actionCreators';
import Preloader from './components/common/Preloader/Preloader';

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Login = lazy(() => import('./components/Login/Login'));

const App = props => {

  useEffect(() => {
    props.initializeApp();
  });

  if (!props.initialized) {
    return (
      <Preloader />
    );
  }

  return (
    <div className={styles['app-wrapper']}>
      <HeaderContainer className={styles.header} />
      <Navbar className={styles.nav} />
      <div className={styles.content}>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route exact path='/' element={props.initialized ? <Navigate to='/profile' /> : <Login />} />
            <Route path='/profile/' element={<ProfileContainer />}>
              <Route path=':userId' element={<ProfileContainer />} />
            </Route>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />}/>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp: initializeAppTC})
)(App);

const MainApp = () => {
  return (
    <StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}> 
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default MainApp;