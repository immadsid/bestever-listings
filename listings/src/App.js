import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='flex mt-10'>
        <Sidebar />
        <HeroSection />
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
