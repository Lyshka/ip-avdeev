import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import 'swiper/css';
import 'swiper/css/navigation';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <App />
)
