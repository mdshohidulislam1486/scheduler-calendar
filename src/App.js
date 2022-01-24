import './App.css';
import { Box } from '@mui/system';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <Box>
      <Router>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/home" element={<Home />} />
          </Routes>
      </Router>

    </Box>
  );
}

export default App;
