import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
}

export function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app-shell">
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <main>
        <Hero />
        <Work />
        <About />
        <Clients />
      </main>
      <Contact />
    </div>);

}