import { useState } from 'preact/hooks'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css'
import Header from './components/header/header';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}
