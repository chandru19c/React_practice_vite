const Profile = ({ data, setData }) => {
  const { name, age, email } = data;
  const handleOnChange = (e, item) => {
    setData((prevState) => ({ ...prevState, [item]: e.target.value }));
  };
  return (
    <>
      <div>
        <label>
          Name :
          <input
            className="inputField"
            name="name"
            value={name}
            type="text"
            onChange={(e) => handleOnChange(e, "name")}
          />
        </label>
      </div>

      <div>
        <label>
          Age :
          <input
            className="inputField"
            type="number"
            name="age"
            value={age}
            onChange={(e) => handleOnChange(e, "age")}
          />
        </label>
      </div>
      <div>
        <label>
          Email :
          <input
            className="inputField"
            type="text"
            name="email"
            value={email}
            onChange={(e) => handleOnChange(e, "email")}
          />
        </label>
      </div>
    </>
  );
};

export default Profile;
