import './App.css'
import Tooltip from './components/Tooltip'

function App() {

  return (
    <>
      <div>
        <Tooltip position="right" content="Thanks for hovering over me. I am a Tooltip">
          <button>Hover Over Me!</button>
        </Tooltip>
      </div>
    </>
  )
}

export default App
