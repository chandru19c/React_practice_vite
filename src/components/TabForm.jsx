import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  const [data, setData] = useState({
    name: "Salmaan",
    age: 40,
    email: "abc@gmail.com",
    interests: ["music", "riding", "coding"],
    theme: "light",
  });

  const handlePrev = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleNext = () => {
    setActiveTab((prev) => prev + 1);
  };
  return (
    <>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => {
              setActiveTab(index);
            }}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      <div className="btn-container">
        {activeTab > 0 && (
          <button className="button-btn" onClick={handlePrev}>
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button className="button-btn" onClick={handleNext}>
            Next
          </button>
        )}
        {activeTab == tabs.length - 1 && (
          <button className="submit-btn">Submit</button>
        )}
      </div>
    </>
  );
};

export default TabForm;
