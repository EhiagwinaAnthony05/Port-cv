import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';
export function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Clients />
      </main>
      <Contact />
    </div>);

}