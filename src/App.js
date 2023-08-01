
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Read from './pages/Read';
import ProductForm from './components/ProductForm';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/create' element={<ProductForm />} />
          <Route path='/datatable' element={<Dashboard />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/sigup' element={<Signup />} />
      </Routes>

    </>
  )
}
export default App;
function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
