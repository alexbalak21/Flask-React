import { useState } from "react";
import { getData } from "../api";

export default function GetData() {
  const [message, setMessage] = useState("");

  const handleGet = async () => {
    const data = await getData();
    setMessage(data.message);
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm space-y-3">
      <button
        onClick={handleGet}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Get Data
      </button>

      <p className="text-gray-800 font-medium">{message}</p>
    </div>
  );
}
