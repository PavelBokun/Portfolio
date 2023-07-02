import logo from './logo.svg';
import './App.css';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Skils } from './Skils/Skils';


function App() {
  return (
    <div className="App">
      <Header />
      <hr/>
      <Main />
      <hr/>
      <Skils />
    </div>
  );
}

export default App;
