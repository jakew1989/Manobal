import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Index from './pages/index';
import Footer from './components/footer/footer';
import ErrorBoundary from './components/errorboundary/error_boundary';
import AboutPage from './pages/about';
import ApproachPage from './pages/approach';
import ScrollToTop from './components/scrolltotop/scrolltotop';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/my-approach" element={<ApproachPage />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
