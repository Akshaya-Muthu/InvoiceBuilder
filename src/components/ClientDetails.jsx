import React from 'react';

export default function ClientDetails({ client, setClient }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <input
        className="border p-2"
        type="text"
        placeholder="Client Name"
        value={client.name}
        onChange={(e) => setClient({ ...client, name: e.target.value })}
      />
      <input
        className="border p-2"
        type="text"
        placeholder="Client Address"
        value={client.address}
        onChange={(e) => setClient({ ...client, address: e.target.value })}
      />
      <input
        className="border p-2"
        type="text"
        placeholder="Invoice Number"
        value={client.number}
        onChange={(e) => setClient({ ...client, number: e.target.value })}
      />
      <input
        className="border p-2"
        type="date"
        value={client.date}
        onChange={(e) => setClient({ ...client, date: e.target.value })}
      />
    </div>
  );
}
