import React, { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import InvoiceForm from "./components/InvoiceForm";
import InvoiceItems from "./components/InvoiceItems";
import InvoicePreview from "./components/InvoicePreview";
import jsPDF from "jspdf";
import "./App.css";

function App() {
  const [client, setClient] = useState({
    name: "",
    address: "",
    number: "",
    date: "",
  });

  const [items, setItems] = useState([
    { description: "", quantity: 1, rate: 0, amount: 0 },
  ]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text(`Invoice #${client.number}`, 10, 10);
    doc.text(`Client: ${client.name}`, 10, 20);
    doc.text(`Address: ${client.address}`, 10, 30);
    doc.text(`Date: ${client.date}`, 10, 40);

    let y = 60;
    items.forEach((item, index) => {
      doc.text(
        `${index + 1}. ${item.description} - ${item.quantity} x ₹${
          item.rate
        } = ₹${(item.quantity * item.rate).toFixed(2)}`,
        10,
        y
      );
      y += 10;
    });

    const subTotal = items.reduce((sum, i) => sum + i.quantity * i.rate, 0);
    const tax = subTotal * 0.18;
    const total = subTotal + tax;

    doc.text(`Subtotal: ₹${subTotal.toFixed(2)}`, 10, y + 10);
    doc.text(`Tax (18%): ₹${tax.toFixed(2)}`, 10, y + 20);
    doc.text(`Total: ₹${total.toFixed(2)}`, 10, y + 30);

    doc.save("invoice.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white font-sans px-4 py-8 relative overflow-hidden">
       {/* Floating glitter effect */}
      {" "}
      <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-10 pointer-events-none z-0" />
     {" "}
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-xl z-10 relative">
      {" "}
        <h1 className="text-4xl font-bold text-center text-indigo-400 mb-6 animate-pulse">
           Invoice Builder 🚀 {" "}
        </h1>
         {/* Client Details */}
         <ClientDetails client={client} setClient={setClient} />{" "}
        {/* Item Input Form */}
        <InvoiceForm items={items} setItems={setItems} />{" "}
        {/* Optional: Item Table View */}{" "}
        <div className="my-6">
         {" "}
          <h2 className="text-lg font-semibold text-indigo-200 mb-2">
            Quick Items View
          </h2>
           <InvoiceItems items={items} setItems={setItems} />{" "}
        </div>
        {/* Preview Section */}
       <InvoicePreview client={client} items={items} />{" "}
        {/* Download Button */}{" "}
        <div className="flex justify-end mt-6">
         {" "}
          <button
            onClick={downloadPDF}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition duration-300 transform hover:scale-105 shadow-lg"
          >
             Download PDF {" "}
          </button>
          {" "}
        </div>
        {" "}
      </div>
     {" "}
    </div>
  );
}

export default App;
