import Header from "./components/headers";
import Workshop from "./components/workshop/index";
import Bonuses from './components/bonuses/index';
import Carousel from '../src/components/carousel/index';
import Trainer from '../src/components/meetTrainer/index';
import Certified from '../src/components/certified/index';
import Offers from '../src/components/offers/index';
import Footer from '../src/components/footer/index';
import Faqs from '../src/components/faqs/index';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <Workshop/>
        <Bonuses/>
        <Carousel/>
        <Trainer/>
        <Certified/>
        <Offers/>
        <Faqs/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
