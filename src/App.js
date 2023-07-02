
import "./App.css";
import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Skils } from "./Skils/Skils";
import MySkills  from './MySkills/MySkills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skils />
      <MySkills />
    </div>
  );
}

export default App;
