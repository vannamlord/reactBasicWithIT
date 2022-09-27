import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import ListUser from './Users/ListUser';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import SignIn from './Users/SignIn.js';
import ChangePassword from './Users/ChangePassword.js';
import CreatAccount from './Users/CreatAccount.js';
import TestingPage from './Users/Testing.js';


import "bootstrap/dist/css/bootstrap.min.css";
import DetailUsers from './Users/DetailUsers';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/traceability">
              <ListTodo />
            </Route>
            <Route path="/viper">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/creat-account">
              <CreatAccount />
            </Route>
            <Route path="/change-password">
              <ChangePassword />
            </Route>
            <Route path="/testing-page">
              <TestingPage />
            </Route>
            <Route path="/user/:id">
              <DetailUsers />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter >
  );
}

export default App;
