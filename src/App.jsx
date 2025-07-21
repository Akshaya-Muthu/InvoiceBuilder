// App.jsx
import React, { useRef, useState } from "react";
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
  const invoiceRef = useRef();

  const downloadPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const logoSize = 20;

    // Header with Logo and Title
    doc.setFillColor(34, 34, 59); // Dark background
    doc.rect(0, 0, pageWidth, 40, "F");
    doc.setTextColor(255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Aurora Invoice Builder", 50, 25);
    doc.setFontSize(10);
    doc.text("Your trusted billing partner", 50, 32);
    doc.addImage("https://cdn-icons-png.flaticon.com/512/564/564619.png", "PNG", 14, 10, 20, 20);

    // Client Details Section
    doc.setTextColor(0);
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Bill To:", 14, 55);
    doc.setFont("helvetica", "bold");
    doc.text(client.name, 14, 62);
    doc.setFont("helvetica", "normal");
    doc.text(client.address, 14, 69);
    doc.text(`Invoice #: ${client.number}`, 14, 76);
    doc.text(`Date: ${client.date}`, 14, 83);

    // Item Table Header
    const startY = 95;
    doc.setFont("helvetica", "bold");
    doc.setFillColor(240);
    doc.rect(14, startY, pageWidth - 28, 10, "F");
    doc.setTextColor(0);
    doc.text("#", 16, startY + 7);
    doc.text("Description", 26, startY + 7);
    doc.text("Qty", 120, startY + 7, { align: "right" });
    doc.text("Rate", 140, startY + 7, { align: "right" });
    doc.text("Amount", 165, startY + 7, { align: "right" });

    // Item Rows
    let y = startY + 15;
    let subtotal = 0;
    doc.setFont("helvetica", "normal");
    items.forEach((item, index) => {
      const amount = item.quantity * item.rate;
      subtotal += amount;
      doc.text(String(index + 1), 16, y);
      doc.text(item.description, 26, y);
      doc.text(String(item.quantity), 120, y, { align: "right" });
      doc.text(item.rate.toFixed(2), 140, y, { align: "right" });
      doc.text(amount.toFixed(2), 165, y, { align: "right" });
      y += 8;
    });

    // Totals Section
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.text(`Subtotal: ₹${subtotal.toFixed(2)}`, 140, y, { align: "right" });
    y += 8;
    doc.text(`Tax (10%): ₹${tax.toFixed(2)}`, 140, y, { align: "right" });
    y += 8;
    doc.text(`Total: ₹${total.toFixed(2)}`, 140, y, { align: "right" });

    // Footer with Thank You
    y += 20;
    doc.setDrawColor(180);
    doc.line(14, y, pageWidth - 14, y);
    doc.setFontSize(10);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(120);
    doc.text("Thank you for using Aurora Invoice Builder", 14, y + 10);

    doc.save(`Aurora_Invoice_${client.number || "bill"}.pdf`);
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
        <div
          ref={invoiceRef}
          className="bg-white text-black rounded-2xl p-6 shadow-lg overflow-auto"
        >
          <InvoicePreview client={client} items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
