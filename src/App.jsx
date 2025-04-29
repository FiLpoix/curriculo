import './App.css'
import Sidebar from './components/sidebar'
import About from './components/About'

function App() {
  return (
    <div className='curriculumContainer'>
      <h1 className='nameTitle'>Luiz Filipi</h1>

      <Sidebar />
      <About />
    </div>
  )
}

export default App
