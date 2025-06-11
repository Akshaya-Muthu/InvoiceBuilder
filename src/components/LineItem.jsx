import React from 'react';

export default function LineItem({ item, onUpdate, onDelete }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...item, [name]: name === 'description' ? value : parseFloat(value) });
  };

  return (
    <div className="flex gap-2 mb-2">
      <input className="border p-1 flex-1" type="text" name="description" placeholder="Description" value={item.description} onChange={handleChange} />
      <input className="border p-1 w-20" type="number" name="quantity" placeholder="Qty" value={item.quantity} onChange={handleChange} />
      <input className="border p-1 w-20" type="number" name="rate" placeholder="Rate" value={item.rate} onChange={handleChange} />
      <span className="p-1 w-24 text-right">{(item.quantity * item.rate).toFixed(2)}</span>
      <button onClick={onDelete} className="text-red-600 font-bold px-2">X</button>
    </div>
  );
}