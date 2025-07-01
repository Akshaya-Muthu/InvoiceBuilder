import React from "react";

export default function ClientDetails({ client, setClient }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
      <input
        className="p-2 rounded bg-white/20 placeholder-white/70"
        placeholder="Client Name"
        value={client.name}
        onChange={(e) => setClient({ ...client, name: e.target.value })}
      />
      <input
        className="p-2 rounded bg-white/20 placeholder-white/70"
        placeholder="Client Address"
        value={client.address}
        onChange={(e) => setClient({ ...client, address: e.target.value })}
      />
      <input
        className="p-2 rounded bg-white/20 placeholder-white/70"
        placeholder="Invoice Number"
        value={client.number}
        onChange={(e) => setClient({ ...client, number: e.target.value })}
      />
      <input
        className="p-2 rounded bg-white/20 placeholder-white/70"
        type="date"
        value={client.date}
        onChange={(e) => setClient({ ...client, date: e.target.value })}
      />
    </div>
  );
}
