import './App.css';

import { MainComponent } from "./components/MainComponent.jsx";

import item from "./data/data.js";

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
      <MainComponent item={item} />
      </div>
    </div>
  )
}

export default App();