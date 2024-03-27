import { Outlet } from 'react-router-dom'
import './app.scss'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
