import './App.css'
import { format } from 'date-fns'

// App is the main clock component for the color-clock demo.
// It renders the current time formatted as HH:mm:ss.
function App() {
  return (
    <div className="time-container">
      <p className="time-display">{format(new Date(), 'HH:mm:ss')}</p>
    </div>
  )
}

export default App
