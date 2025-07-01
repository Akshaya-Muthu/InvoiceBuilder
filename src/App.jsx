import React, { useState } from "react";
import ClientDetails from "./components/ClientDetails";
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

  const [items, setItems] = useState([]);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text(`Invoice #${client.number}`, 10, 10);
    doc.text(`Client: ${client.name}`, 10, 20);
    doc.text(`Address: ${client.address}`, 10, 30);
    doc.text(`Date: ${client.date}`, 10, 40);

    let y = 60;
    items.forEach((item, i) => {
      doc.text(
        `${i + 1}. ${item.description} - ${item.quantity} x ₹${item.rate} = ₹${(item.quantity * item.rate).toFixed(2)}`,
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 p-6 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">✨ Aurora Invoice Builder</h1>
          <ClientDetails client={client} setClient={setClient} />
          <InvoiceItems items={items} setItems={setItems} />
          <button
            onClick={downloadPDF}
            className="mt-4 w-full bg-gradient-to-r from-pink-500 to-fuchsia-600 py-2 rounded-lg hover:scale-105 transition transform"
          >
            📥 Download PDF
          </button>
        </div>
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg overflow-auto">
          <InvoicePreview client={client} items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
