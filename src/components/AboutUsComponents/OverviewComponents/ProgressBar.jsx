
const ProgressBar = ({ progress }) => {
  return (
    <div className="w-full bg-gray-400 h-7 lg:h-9">
      <div
        className="bg-[#54c4cf] h-7 transition-all duration-500 lg:h-9"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
