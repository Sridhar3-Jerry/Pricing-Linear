import { useState } from "react";

function ToggleSwitch() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div
      onClick={() => setEnabled(!enabled)}
      className={`w-7.5 h-4 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
        ${enabled ? "bg-indigo-500" : "bg-gray-300"}`}
    >
      <div
        className={`bg-white w-3 h-3 rounded-full shadow-md transform transition-transform duration-300
          ${enabled ? "translate-x-3" : "translate-x-0"}`}
      />
    </div>
  );
}

export default ToggleSwitch;
