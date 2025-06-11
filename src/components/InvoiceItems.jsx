export default function InvoiceItems({ items, setItems }) {
  const handleChange = (i, field, value) => {
    const updated = [...items];
    updated[i][field] = value;
    updated[i].amount = value && field !== "amount"
      ? updated[i].quantity * updated[i].rate
      : updated[i].amount;
    setItems(updated);
  };

  const addItem = () =>
    setItems([...items, { description: "", quantity: 1, rate: 0, amount: 0 }]);

  const removeItem = (i) => setItems(items.filter((_, index) => index !== i));

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="flex gap-2 my-2">
          <input className="flex-1 px-2 py-1 text-black" placeholder="Description"
            value={item.description} onChange={(e) => handleChange(i, "description", e.target.value)} />
          <input className="w-20 px-2 py-1 text-black" type="number" placeholder="Qty"
            value={item.quantity} onChange={(e) => handleChange(i, "quantity", Number(e.target.value))} />
          <input className="w-24 px-2 py-1 text-black" type="number" placeholder="Rate"
            value={item.rate} onChange={(e) => handleChange(i, "rate", Number(e.target.value))} />
          <span className="w-24 text-center">{item.amount.toFixed(2)}</span>
          <button onClick={() => removeItem(i)} className="text-red-400 hover:text-red-600">✕</button>
        </div>
      ))}
      <button onClick={addItem} className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded">+ Add Item</button>
    </div>
  );
}
