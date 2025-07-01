import React from "react";

export default function InvoiceItems({ items, setItems }) {
  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, rate: 0, amount: 0 }]);
  };

  const updateItem = (i, field, value) => {
    const updated = [...items];
    updated[i][field] = field === "description" ? value : Number(value);
    updated[i].amount = updated[i].quantity * updated[i].rate;
    setItems(updated);
  };

  const removeItem = (i) => {
    setItems(items.filter((_, idx) => idx !== i));
  };

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            className="flex-1 p-2 rounded bg-white/20"
            placeholder="Description"
            value={item.description}
            onChange={(e) => updateItem(i, "description", e.target.value)}
          />
          <input
            className="w-16 p-2 rounded bg-white/20"
            type="number"
            placeholder="Qty"
            value={item.quantity}
            onChange={(e) => updateItem(i, "quantity", e.target.value)}
          />
          <input
            className="w-20 p-2 rounded bg-white/20"
            type="number"
            placeholder="Rate"
            value={item.rate}
            onChange={(e) => updateItem(i, "rate", e.target.value)}
          />
          <span className="w-20 text-right">{item.amount.toFixed(2)}</span>
          <button
            onClick={() => removeItem(i)}
            className="text-red-400 hover:text-red-600"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        onClick={addItem}
        className="mt-2 px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded"
      >
        + Add Item
      </button>
    </div>
  );
}
