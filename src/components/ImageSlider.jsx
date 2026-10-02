import { useState, useEffect } from "react";

const ImageSlider = () => {
  const data = [
    "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fHww",
  ];

  const handlePrev = () => {
    setOpenIndex(!openIndex ? data.length - 1 : openIndex - 1);
  };
  const handleNext = () => {
    setOpenIndex((openIndex + 1) % data.length);
  };
  const [openIndex, setOpenIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [openIndex]);
  return (
    <div className="w-full">
      <div className=" flex items-center">
        <button
          className="bg-amber-500  cursor-pointer p-2 m-10 rounded"
          onClick={handlePrev}
        >
          Prev
        </button>
        {data.map((url, index) => (
          <img
            src={url}
            className={
              "w-165 h-95 object-contain " +
              (openIndex == index ? "block" : "hidden")
            }
          />
        ))}

        <button
          className="bg-amber-500  cursor-pointer p-2 m-10 rounded"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
