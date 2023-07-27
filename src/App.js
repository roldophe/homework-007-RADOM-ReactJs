
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Read from './pages/Read';
import ProductForm from './components/ProductForm';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/read/:id' element={<Read />} />
        <Route path='/create' element={<ProductForm />} />
        <Route path='/datatable' element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
