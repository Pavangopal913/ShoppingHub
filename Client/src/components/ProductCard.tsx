import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <div className="card-body">
        <h3>{product.name}</h3>
        <span className="category">{product.category}</span>
        <p className="description">{product.description}</p>
        <div className="card-footer">
          <span className="price">${product.price.toFixed(2)}</span>
          {product.featured && (
            <span className="featured-badge">⭐ Featured</span>
          )}
        </div>
      </div>
    </div>
  );
}