import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BookProvider } from './contexts/bookContext.jsx';
import { Container } from '@mui/material';
import { createHashRouter, Navigate, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import FormSubmit from './pages/FormSubmit';
import Error404 from './pages/Error404';
const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/home/:id',
    element: <Book />,
  },
  {
    path: '/home/submitbook',
    element: <FormSubmit />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
  </React.StrictMode>,
);
