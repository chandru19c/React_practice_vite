const Settings = ({ data, setData }) => {
  const { theme } = data;
  const handleRadioChange = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };
  return (
    <>
      <div>
        <label>
          dark :
          <input
            className="inputField"
            name="dark"
            type="radio"
            checked={theme === "dark"}
            onChange={handleRadioChange}
          />
        </label>
      </div>
      <div>
        <label>
          light :
          <input
            className="inputField"
            name="light"
            type="radio"
            checked={theme === "light"}
            onChange={handleRadioChange}
          />
        </label>
      </div>
    </>
  );
};

export default Settings;
