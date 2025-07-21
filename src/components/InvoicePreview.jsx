import React from "react";

const InvoicePreview = ({ client, items }) => {
  const subTotal = items.reduce((sum, i) => sum + i.quantity * i.rate, 0);
  const tax = subTotal * 0.18;
  const total = subTotal + tax;

  return (
    <div style={styles.container}>
            {/* Header */}     {" "}
      <div style={styles.header}>
               {" "}
        <div style={styles.logoSection}>
                   {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
            alt="Aurora Logo"
            style={styles.logo}
          />
                    <h1 style={styles.title}>Aurora Invoice Builder</h1>       {" "}
        </div>
               {" "}
        <div style={styles.invoiceInfo}>
                   {" "}
          <p>
            <strong>Invoice #:</strong> {client.number || "001"}
          </p>
                   {" "}
          <p>
            <strong>Date:</strong> {client.date || "N/A"}
          </p>
                 {" "}
        </div>
             {" "}
      </div>
            {/* Client Details */}     {" "}
      <div style={styles.section}>
                <h3 style={{ marginBottom: 5 }}>Bill To:</h3>       {" "}
        <p>
          <strong>{client.name}</strong>
        </p>
                <p>{client.address}</p>     {" "}
      </div>
            {/* Item Table */}     {" "}
      <table style={styles.table}>
               {" "}
        <thead>
                   {" "}
          <tr>
                        <th style={styles.th}>#</th>           {" "}
            <th style={styles.th}>Description</th>           {" "}
            <th style={styles.thRight}>Qty</th>           {" "}
            <th style={styles.thRight}>Rate</th>           {" "}
            <th style={styles.thRight}>Amount</th>         {" "}
          </tr>
                 {" "}
        </thead>
               {" "}
        <tbody>
                   {" "}
          {items.map((item, index) => (
            <tr key={index}>
                            <td style={styles.td}>{index + 1}</td>             {" "}
              <td style={styles.td}>{item.description}</td>             {" "}
              <td style={styles.tdRight}>{item.quantity}</td>             {" "}
              <td style={styles.tdRight}>₹{item.rate}</td>             {" "}
              <td style={styles.tdRight}>
                ₹{(item.quantity * item.rate).toFixed(2)}
              </td>
                         {" "}
            </tr>
          ))}
                 {" "}
        </tbody>
             {" "}
      </table>
            {/* Totals */}     {" "}
      <div style={styles.totalSection}>
               {" "}
        <p>
          <strong>Subtotal:</strong> ₹{subTotal.toFixed(2)}
        </p>
               {" "}
        <p>
          <strong>Tax (18%):</strong> ₹{tax.toFixed(2)}
        </p>
               {" "}
        <h3>
          <strong>Total:</strong> ₹{total.toFixed(2)}
        </h3>
             {" "}
      </div>
            {/* Footer */}     {" "}
      <footer style={styles.footer}>
                <p>✨ Thank you for using Aurora Invoice Builder</p>       {" "}
        <p>This is a computer-generated invoice.</p>     {" "}
      </footer>
         {" "}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#fff",
    color: "#000",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "2px solid #000",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#4b0082",
  },
  invoiceInfo: {
    textAlign: "right",
  },
  section: {
    marginBottom: "30px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "30px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "#f0f0f0",
  },
  thRight: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "right",
    backgroundColor: "#f0f0f0",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
  tdRight: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "right",
  },
  totalSection: {
    textAlign: "right",
    fontSize: "16px",
    marginBottom: "30px",
  },
  footer: {
    borderTop: "1px solid #ccc",
    textAlign: "center",
    paddingTop: "10px",
    fontSize: "12px",
    color: "#555",
  },
};

export default InvoicePreview;
