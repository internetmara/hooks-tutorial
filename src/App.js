import './styles/reset.css'
import './styles/app.css'
import HiBitch from './components/hi_bitch'
import ReducerTutorial from './components/reducer_tutorial'
import StateTutorial from './components/state_tutorial'
import Mood from './components/mood'

function App() {
  return (
    <div className="App">
      <HiBitch />
      <StateTutorial/>
      <ReducerTutorial/>
      <Mood/>
      <p className='fuck-off'>this site was made to bring u absolutely nothing copyrite 2007 jellybean inc.</p>
    </div>
  );
}

export default App;
