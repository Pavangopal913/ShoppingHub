import { useState } from 'react';
import { Product } from '../types';

interface AddProductFormProps {
  onAdd: (product: Omit<Product, 'id'>) => void;
}

export function AddProductForm({ onAdd }: AddProductFormProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const[error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stop the browser's default page reload

    if (!name.trim()){
      setError('Name is required');
      return; // minimal validation
    }
        
    if (!price || parseFloat(price) <= 0) {
      setError('Enter a price greater than 0.');
      return;
    }

    setError(''); // clear any previous error on success

    onAdd({
      name: name.trim(),
      category: category.trim() || 'Uncategorized',
      description: description.trim(),
      price: parseFloat(price),
      imageUrl: `https://placehold.co/300x200?text=${encodeURIComponent(name)}`,
      featured: false,
    });

    // reset the form
    setName('');
    setCategory('');
    setDescription('');
    setPrice('');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add a product</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name *" />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input
        type="number"
        step="0.01"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price *"
      />
      {error && <p className="form-error">{error}</p>}
      <button type="submit">Add product</button>
    </form>
  );
}