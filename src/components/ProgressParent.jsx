const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className="outer">
        <div
          className="inner"
          style={{
            //width: `${progress}%`,
            color: progress < 5 ? "black" : "white",
            transform: `translateX(${progress - 100}%)`,
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax="100"
          aria-valuemin="0"
        >
          {progress}%
        </div>
      </div>
    </>
  );
};

const ProgressParent = () => {
  const bars = [1, 4, 5, 30, 50, 75, 90, 120];
  return (
    <>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </>
  );
};

export default ProgressParent;
