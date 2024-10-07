import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ title, content, index, activeIndex, setActiveIndex }) => {
  const handleToggle = () => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <div className="">
        <hr />
        <div
          className={`flex flex-row items-center justify-between py-5 ${
            index === activeIndex ? "active" : ""
          }`}
          onClick={handleToggle}
        >
          <p className="text-[22px] font-light text-left">{title}</p>
          <p>
          {index === activeIndex ? (
            <FaMinus className="text-xl hover:" />
          ) : (
            <FaPlus className="text-xl" />
          )}
          </p>
        </div>
        {index === activeIndex && (
          <div className="py-5">
            <p className="">{content}</p>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
};

export default Accordion;
