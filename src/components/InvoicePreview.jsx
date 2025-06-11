import React from "react";

export default function InvoicePreview({ client, items }) {
  const subTotal = items.reduce(
    (sum, item) => sum + item.quantity * item.rate,
    0
  );
  const tax = subTotal * 0.18;
  const total = subTotal + tax;

  return (
    <div
      id="invoice"
      className="bg-white/10 backdrop-blur-md text-white p-6 mt-6 shadow-2xl rounded-xl max-w-3xl mx-auto transition-all duration-300"
    >
      {" "}
      <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">
        Invoice Preview
      </h2>{" "}
      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
        {" "}
        <p>
          <span className="font-semibold text-indigo-300">Client:</span>{" "}
          {client.name}
        </p>{" "}
        <p>
          <span className="font-semibold text-indigo-300">Address:</span>{" "}
          {client.address}
        </p>{" "}
        <p>
          <span className="font-semibold text-indigo-300">Invoice #:</span>{" "}
          {client.number}
        </p>{" "}
        <p>
          <span className="font-semibold text-indigo-300">Date:</span>{" "}
          {client.date}
        </p>{" "}
      </div>
      <hr className="my-4 border-white/20" />{" "}
      <table className="w-full text-sm text-left mb-4">
        {" "}
        <thead className="text-indigo-300">
          {" "}
          <tr>
            <th className="pb-2">Description</th>{" "}
            <th className="pb-2">Qty</th>{" "}
            <th className="pb-2">Rate</th>{" "}
            <th className="pb-2">Amount</th>{" "}
          </tr>
          {" "}
        </thead>
       {" "}
        <tbody className="text-white/90">
         {" "}
          {items.map((item, i) => (
            <tr key={i} className="border-t border-white/10">
              <td className="py-2">{item.description}</td>
               <td className="py-2">{item.quantity}</td>{" "}
              <td className="py-2">₹{item.rate}</td>{" "}
              <td className="py-2">
                ₹{(item.quantity * item.rate).toFixed(2)}
              </td>
              {" "}
            </tr>
          ))}
          {" "}
        </tbody>
        {" "}
      </table>
     <hr className="my-4 border-white/20" />{" "}
      <div className="text-right text-sm space-y-1">
       {" "}
        <p>
          <span className="font-semibold text-indigo-300">Subtotal:</span> ₹
          {subTotal.toFixed(2)}
        </p>
       {" "}
        <p>
          <span className="font-semibold text-indigo-300">Tax (18%):</span> ₹
          {tax.toFixed(2)}
        </p>
       {" "}
        <p className="text-lg font-bold">
          <span className="text-indigo-400">Total:</span> ₹{total.toFixed(2)}
        </p>
       {" "}
      </div>
    {" "}
    </div>
  );
}
