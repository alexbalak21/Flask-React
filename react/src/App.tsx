import axios from "axios";
import {useState} from "react";

function App() {
  // GET state
  const [getMessage, setGetMessage] = useState("");

  // POST state
  const [postInput, setPostInput] = useState("");
  const [postResponse, setPostResponse] = useState("");

  // GET handler
  const fetchMessage = () => {
    axios.get("/api/message").then((res) => {
      setGetMessage(res.data.message);
    });
  };

  // POST handler
  const sendMessage = () => {
    axios.post("/api/message", {message: postInput}).then((res) => {
      setPostResponse(res.data.message);
    });
  };

  return (
    <div style={{padding: "20px", fontFamily: "sans-serif"}}>
      {/* GET SECTION */}
      <section style={{marginBottom: "40px"}}>
        <h2>GET Message</h2>
        <button onClick={fetchMessage}>Get Message</button>
        <p>{getMessage}</p>
      </section>

      {/* POST SECTION */}
      <section>
        <h2>POST Message</h2>
        <input
          type="text"
          placeholder="Type your message"
          value={postInput}
          onChange={(e) => setPostInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send Message</button>
        <p>{postResponse}</p>
      </section>
    </div>
  );
}

export default App;
