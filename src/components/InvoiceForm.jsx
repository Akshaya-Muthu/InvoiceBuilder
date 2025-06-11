import React from 'react';
import LineItem from './LineItem';

export default function InvoiceForm({ items, setItems }) {
  const addItem = () => {
    setItems([...items, { description: '', quantity: 0, rate: 0 }]);
  };

  const updateItem = (index, updatedItem) => {
    const newItems = [...items];
    newItems[index] = updatedItem;
    setItems(newItems);
  };

  const deleteItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      {items.map((item, i) => (
        <LineItem
          key={i}
          item={item}
          onUpdate={(updated) => updateItem(i, updated)}
          onDelete={() => deleteItem(i)}
        />
      ))}
      <button onClick={addItem} className="bg-green-600 text-white px-3 py-1 mt-2 rounded">
        Add Item
      </button>
    </div>
  );
}

