import { createRoot } from 'react-dom/client'
import {App} from "./App.jsx";
import './index.css'
import './App.css'

const root = createRoot(document.getElementById('root'));

root.render(
    <App/>
);