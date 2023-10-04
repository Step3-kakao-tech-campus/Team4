import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/landing" element={<LandingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
