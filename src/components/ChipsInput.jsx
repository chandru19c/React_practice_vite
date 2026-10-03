import { useState } from "react";
const ChipsInput = () => {
  const [textInput, setInputText] = useState("");
  const [chips, setChips] = useState([]);
  const createChip = (e) => {
    if (e.key == "Enter" && textInput.trim() !== "") {
      setChips((prev) => [...prev, textInput]);
      setInputText("");
    }
  };

  const deleteChip = (index) => {
    let copyChips = [...chips];
    copyChips.splice(1, index);
    setChips(copyChips);
  };
  return (
    <>
      <input
        className="border-2"
        type="text"
        value={textInput}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={(e) => createChip(e)}
      />
      <div className="flex">
        {chips.map((chip, index) => (
          <div className="bg-black text-amber-50 m-2 p-2 rounded">
            {chip}
            <button
              className="mx-2 cursor-pointer border-bs-indigo-400"
              onClick={() => deleteChip(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChipsInput;
