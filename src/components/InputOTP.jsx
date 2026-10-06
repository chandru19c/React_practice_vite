import { useState, useRef, useEffect } from "react";

const InputOTP = () => {
  const INPUT_DIGIT_COUNT = 5;
  const [arrInput, setArrInput] = useState(
    new Array(INPUT_DIGIT_COUNT).fill(""),
  );

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newArray = [...arrInput];
    newArray[index] = newValue.slice(-1);
    setArrInput(newArray);
    newValue && refArr.current[index + 1]?.focus();
  };

  const refArr = useRef([]);
  useEffect(() => {
    refArr.current[0].focus();
  }, []);

  const handleBackSpace = (e, index) => {
    if (!e.target.value && e.key == "Backspace") {
      refArr.current[index - 1].focus();
    }
    //console.log(e);
  };

  return (
    <>
      <div className="input-container">
        <h1>Validate OTP</h1>
        {arrInput.map((input, index) => (
          <input
            className="input"
            type="text"
            key={index}
            value={arrInput[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => {
              handleOnChange(e.target.value, index);
              console.log(refArr.input + index);
            }}
            onKeyDown={(e) => {
              handleBackSpace(e, index);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default InputOTP;
