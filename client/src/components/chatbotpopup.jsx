import React, { useState } from "react";
import axios from "axios";

const ChatbotPopup = () => {
  const [open, setOpen] = useState(false);
  const [chat, setChat] = useState([]);
  const [msg, setMsg] = useState("");

  const sendMessage = async () => {
    if (!msg) return;
    try {
      const res = await axios.post("http://localhost:5000/api/chat", { message: msg });
      setChat(prev => [...prev, { type: "user", text: msg }, { type: "bot", text: res.data.reply }]);
      setMsg("");
    } catch {
      alert("Error connecting to chatbot");
    }
  };

  return (
    <>
      {open && (
        <div style={{ position: "fixed", bottom: "20px", right: "20px", width: "300px", border: "1px solid #ccc", background: "#fff", padding: "10px", zIndex: 999 }}>
          <h4>🤖 Chatbot</h4>
          <div style={{ height: "200px", overflowY: "scroll", border: "1px solid #eee", padding: "5px", marginBottom: "5px" }}>
            {chat.map((c,i)=>(
              <div key={i} style={{ textAlign: c.type==="user"?"right":"left" }}>
                <span style={{ display:"inline-block", padding:"5px", borderRadius:"8px", background:c.type==="user"?"#007bff":"#eee", color:c.type==="user"?"#fff":"#000" }}>{c.text}</span>
              </div>
            ))}
          </div>
          <input value={msg} onChange={e=>setMsg(e.target.value)} style={{ width:"70%", padding:"5px" }} placeholder="Type..." />
          <button onClick={sendMessage} style={{ padding:"5px" }}>Send</button>
          <button onClick={()=>setOpen(false)} style={{ padding:"5px", marginLeft:"5px" }}>Close</button>
        </div>
      )}
      {!open && <button onClick={()=>setOpen(true)} style={{ position:"fixed", bottom:"20px", right:"20px", zIndex:999 }}>Chatbot</button>}
    </>
  );
};

export default ChatbotPopup;