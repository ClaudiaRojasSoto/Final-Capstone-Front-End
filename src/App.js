import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main/Main';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App bg-light">
      <Router>
        <Routes>
          <Route path="/home" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
