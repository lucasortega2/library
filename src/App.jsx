import { Container } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import FormSubmit from './pages/FormSubmit';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <Container maxWidth="100" sx={{ background: '#3F51B5', height: 50 }} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Book />} />
          <Route path="/home/submitbook" element={<FormSubmit />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
