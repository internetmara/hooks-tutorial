import './styles/reset.css'
import './styles/app.css'
import HiBitch from './components/hi_bitch'
import ReducerTutorial from './components/reducer_tutorial'
import StateTutorial from './components/state_tutorial'

function App() {
  return (
    <div className="App">
      <HiBitch />
      <StateTutorial/>
      <ReducerTutorial/>
    </div>
  );
}

export default App;
