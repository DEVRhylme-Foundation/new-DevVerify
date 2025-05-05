import { Routes, Route } from 'react-router-dom';
import VerifyPage from './pages/verifyPages';
import NotFoundPage from './pages/notFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<VerifyPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
