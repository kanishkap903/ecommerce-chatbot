import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;
    const res = await axios.post("http://localhost:5000/api/chat", { message });
    setChat(prev => [...prev, { type: "user", text: message }, { type: "bot", text: res.data.reply }]);
    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🤖 Chatbot</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "scroll", marginBottom: "10px" }}>
        {chat.map((c, i) => (
          <div key={i} style={{ textAlign: c.type === "user" ? "right" : "left", margin: "5px" }}>
            <span style={{ display: "inline-block", padding: "8px", borderRadius: "10px", background: c.type === "user" ? "#007bff" : "#eee", color: c.type === "user" ? "#fff" : "#000" }}>
              {c.text}
            </span>
          </div>
        ))}
      </div>
      <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Type message..." style={{ padding: "8px", width: "70%" }} />
      <button onClick={sendMessage} style={{ padding: "8px" }}>Send</button>
    </div>
  );
};

export default Chatbot;