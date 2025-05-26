import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ title, className, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {title}
        <FaArrowRightLong/>
      </button>
    </div>
  );
};

export default Button;
