import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyButton from './MyButton.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <MyButton name="Walter" />
  </div>
) // JSX
// App(); == <App />