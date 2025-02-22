import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import WebContent from './content/WebContent'
import PWAContent from './content/pwaContent'

function App() {
  const isPWA = window.matchMedia('(display-mode: standalone)').matches;

  return (
    <Router>
      {isPWA ? <PWAContent /> : <WebContent />}
    </Router>
  )
}

export default App