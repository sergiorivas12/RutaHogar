import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import './styles/normalize.css';
import './styles/styles.css';

import Header   from './components/layout/Header';
import Nav      from './components/layout/Nav';
import Footer   from './components/layout/Footer';

import IndexPage        from './pages/IndexPage';
import ProductosPage    from './pages/ProductosPage';
import NuevosPage       from './pages/NuevosPage';
import ContactoPage     from './pages/ContactoPage';
import QuienesSomosPage from './pages/QuienesSomosPage';

function App() {
    return (
            <div className="App">
                <Header />
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/index" element={<IndexPage />} />
                        <Route path="/productos" element={<ProductosPage />} />
                        <Route path="/nuevos" element={<NuevosPage />} />
                        <Route path="/contacto" element={<ContactoPage />} />
                        <Route path="/quienesSomos" element={<QuienesSomosPage />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>
            );
}

export default App;
