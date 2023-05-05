import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div>
      <h2 className="text-3xl font-bold mx-auto text-center mt-12">Calculator :</h2>
      <Calculator />
      <h2 className="text-3xl font-bold mx-auto text-center mt-12">Quote of the day :</h2>
      <Quote />
    </div>
  );
}

export default App;
