import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../../Routes';
import NavBar from '../Navbar';

import '../../assets/styles/global.css';

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
}
