import './App.css';
import Footer from './commponents/Footer/Footer';
import Hore from './commponents/Hero/Hero.jsx';
import Join from './commponents/Joins/Join';
import Plans from './commponents/Plans/Plans';
import Programs from './commponents/Programs/Programs.jsx';
import Reasons from './commponents/Reasons/Reasons';
import Testimonial from './commponents/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
          <Hore/>
          <Programs/>
          <Reasons/>
          <Plans/>
          <Testimonial/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;