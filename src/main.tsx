import ReactDOM from 'react-dom/client'
import App from './routes'
import { BrowserRouter } from 'react-router-dom'

import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
