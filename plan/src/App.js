import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Plan from "./components/Plan";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div>
      <div className="sm:mx-[183px] mx-[30px]">
        <Navbar />
        <Pricing />
        <Plan />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
}

export default App;
