import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PostEx1 from './components/PostEx1.jsx'
import PostEx2 from './components/PostEx2.jsx'
import PutEx1 from './components/PutEx1.jsx'
import DeleteEx from './components/DeleteEx.jsx'
createRoot(document.getElementById('root')).render(
   <DeleteEx></DeleteEx>,
)
