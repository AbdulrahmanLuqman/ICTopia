

const ContactButton = ({ title, type, ...props }) => {
  return (
    <div>
      <button type={type} className={props.className}>
        {title}
      </button>
    </div>
  );
};

export default ContactButton;
