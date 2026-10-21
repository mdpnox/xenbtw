import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SettingsPage from './components/SettingsPage';
import VideoBackground from './components/VideoBackground';
import { MusicPlayerProvider } from './context/MusicPlayerContext';
import Footer from './components/Footer';
import About from './components/About';

export default function App() {
  return (
    <MusicPlayerProvider>
      <BrowserRouter>
        <VideoBackground />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </MusicPlayerProvider>
  );
}