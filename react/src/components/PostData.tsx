import { useState } from "react";
import { postData } from "../api";

export default function PostData() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handlePost = async () => {
    const data = await postData({ message: input });
    setResponse(data.message);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm space-y-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
        className="border px-3 py-2 rounded w-full"
      />

      <button
        onClick={handlePost}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Send POST
      </button>

      <p className="text-gray-800 font-medium">{response}</p>
    </div>
  );
}
