import { FaArrowRightLong } from "react-icons/fa6";

const Button = ({ title, type, ...props }) => {
  return (
    <div>
      <button type={type} className={props.className}>
        {title}
        <FaArrowRightLong/>
      </button>
    </div>
  );
};

export default Button;
