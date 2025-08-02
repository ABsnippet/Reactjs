import { useState, useTransition } from "react";

const generateItems = () => {
  const items = [];
  for (let i = 0; i < 10000; i++) {
    items.push(`Item ${i + 1}`);
  }
  return items;
};

function App() {
  const [mode, setMode] = useState("slow"); // "slow" or "smooth"
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const items = generateItems();
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(
      mode === "slow" ? input.toLowerCase() : searchQuery.toLowerCase()
    )
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (mode === "smooth") {
      startTransition(() => {
        setSearchQuery(value);
      });
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>React Fiber Demo: useTransition vs Without</h1>
      <button onClick={() => setMode((prev) => (prev === "slow" ? "smooth" : "slow"))}>
        Switch to {mode === "slow" ? "Smooth (with useTransition)" : "Slow (no transition)"}
      </button>

      <h2 style={{ marginTop: "1rem" }}>
        Mode: {mode === "slow" ? "❌ No useTransition (lags)" : "✅ useTransition (smooth)"}
      </h2>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search 10,000 items..."
        style={{ padding: "8px", width: "300px", marginTop: "10px" }}
      />

      {isPending && <p style={{ color: "orange" }}>Loading...</p>}

      <ul>
        {filteredItems.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
