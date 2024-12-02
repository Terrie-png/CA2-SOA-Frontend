import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { RegisterPage } from './Auth/RegisterPage';
import { LoginPage } from './Auth/LoginPage';

const router = createHashRouter([
  {
    path: "/",
    element: <h1>o</h1>
  },

  {
    path: "register",
    element: <RegisterPage />
  },

  {
    path: "login",
    element: <LoginPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

