import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return <p className="empty-state">😕 No products match your search.</p>;
  }

  return (
    <>
      <p className="result-count">{products.length} product{products.length !== 1 ? 's' : ''} found</p>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}