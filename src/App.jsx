
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import { useState, useEffect,} from 'react';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import ItemListDetailContainer from './components/ItemListDetailContainer/ItemListDetailContainer';





function App({}) {

  const [item, setItem]= useState([]);
  
  
  useEffect(() => {
    fetch('https://openlibrary.org/search.json?q=cat')
    .then(response => response.json())
    .then(data => { 

      setItem(data.docs);

    }).catch(err => console.log(err));
  }, [item, setItem]);


  console.log(item)

  return (
    <>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Inicio" element={<Home/>} />
          <Route path="/Producto"  element={<ItemListContainer item={item} />} />
          <Route path="/Contacto"  element={<Contact />} />
          <Route path='/DetalleProducto/:id' element={ <ItemListDetailContainer item={item}  />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>


      
    </>
  )
}

export default App
