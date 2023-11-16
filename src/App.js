import { BrowserRouter } from 'react-router-dom';
import Router from './router'
import Header from './components/header/Header'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
