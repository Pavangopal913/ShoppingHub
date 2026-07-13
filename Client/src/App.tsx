import { mockProducts } from "./data/mockProducts";
import { ProductGrid } from "./components/ProductGrid";
import { useState } from "react";
import { Product } from "./types";
import { AddProductForm } from "./components/AddProductForm";
import './App.css';

function App(){
    
    const[products, setProducts] = useState<Product[]>(mockProducts);
    const[searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter((product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddProduct = (newProduct : Omit<Product, 'id'>) => {
        const productWithId : Product = {
            ...newProduct,
            id : Date.now(), // simple unique id for now; the real DB assigns this later
        };
        setProducts((prev) => [productWithId, ...prev]);
    };

    return(
        <div className="app">
            <header>
                <h1>Shop<span style={{ color: '#e94560' }}>Hub</span></h1>
            </header>
            <main>
                <AddProductForm onAdd={handleAddProduct} />
                <input 
                    type="text" 
                    placeholder="Search product..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-box"
                />
                <ProductGrid products={filteredProducts}/>
            </main>
        </div>
    );
}

export default App;