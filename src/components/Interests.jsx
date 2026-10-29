const Interests = ({ data, setData }) => {
  const { interests } = data;
  const handleDataChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
    console.log(e.target.checked);
  };
  console.log(interests);
  return (
    <>
      <div>
        <label>
          music :
          <input
            className="inputField"
            name="music"
            type="checkbox"
            checked={interests.includes("music")}
            onChange={(e) => handleDataChange(e, "name")}
          />
        </label>
      </div>

      <div>
        <label>
          riding :
          <input
            className="inputField"
            name="riding"
            type="checkbox"
            checked={interests.includes("riding")}
            onChange={(e) => handleDataChange(e, "name")}
          />
        </label>
      </div>
      <div>
        <label>
          coding :
          <input
            className="inputField"
            name="coding"
            type="checkbox"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
        </label>
      </div>
    </>
  );
};

export default Interests;
