import React from "react";

export default function InvoicePreview({ client, items }) {
  const subTotal = items.reduce((sum, item) => sum + item.amount, 0);
  const tax = subTotal * 0.18;
  const total = subTotal + tax;

  return (
    <div className="text-white">
      <div className="mb-4">
        <h3 className="font-semibold">Client:</h3>
        <p>{client.name}</p>
        <p>{client.address}</p>
        <p>Invoice #: {client.number}</p>
        <p>Date: {client.date}</p>
      </div>

      <table className="w-full text-left text-sm">
        <thead>
          <tr>
            <th className="border-b border-white/30 p-1">Description</th>
            <th className="border-b border-white/30 p-1">Qty</th>
            <th className="border-b border-white/30 p-1">Rate</th>
            <th className="border-b border-white/30 p-1">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td className="p-1">{item.description}</td>
              <td className="p-1">{item.quantity}</td>
              <td className="p-1">₹{item.rate}</td>
              <td className="p-1">₹{item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <p>Subtotal: ₹{subTotal.toFixed(2)}</p>
        <p>Tax (18%): ₹{tax.toFixed(2)}</p>
        <p className="font-bold text-lg">Total: ₹{total.toFixed(2)}</p>
      </div>
    </div>
  );
}
