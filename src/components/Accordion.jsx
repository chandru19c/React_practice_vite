import { useState } from "react";
const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const handleClick = (index) => {
        setOpenIndex(openIndex==index?null:index)
    }
  return (
    <>
      <div className="flex">
        {items.map((item, index) => {
          return (
            <div>
              <button
                className="p-2 m-2 bg-amber-400 rounded cursor-pointer"
                onClick={() => {
                  handleClick(index);
                }}
              >
                {item.title}
              </button>
              {openIndex==index && <p>{item.content}</p>}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Accordion;
