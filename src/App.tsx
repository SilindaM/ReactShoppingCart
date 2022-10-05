import './App.css'
import { Container } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import { About } from './components/About'
import { Home } from './components/Home'
import { NavigationBar } from './components/NavigationBar'
import { Store } from './components/Store'
import { ShoppingCartProvide } from './context/shoppingCartContext'

function App() {
 return(
    <ShoppingCartProvide>
    <NavigationBar/>
      <Container className='mb-4'>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/store" element={<Store/>}/>
              <Route path="/about" element={<About/>}/>
        </Routes>
      </Container>
    </ShoppingCartProvide>
 )
}

export default App
