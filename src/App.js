import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/auth';
import { Routes } from './routes';
import './styles/global.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <AuthProvider>
        <BrowserRouter>
          <Routes/>
        </BrowserRouter>
    </AuthProvider>
  );
}