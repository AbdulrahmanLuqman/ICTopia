import SubHeader from "../../SubHeader";
import ContactForm from "./ContactForm";
import Image1 from "/images/chemical-research.jpg";
import Image2 from "/images/inner_office_1.jpg";


const ContactPage = () => {
  return (
    <>
      <div>
        <SubHeader
          title="HOME"
          subtitle="ABOUT US"
          head="Contact"
          content="Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs."
        />
        <div className="lg:flex lg:items-center lg:py-5 lg:px-16 xl:py-10">
          <div>
            <ContactForm />
          </div>
          <div className="lg:pr-3">
            <img
              src={Image1}
              alt=""
              className="w-full lg:h-80 lg:w-[800px] xl:w-[900px] xl:h-[350px]"
            />
            <img
              src={Image2}
              alt=""
              className="w-full lg:h-80 lg:w-[800px] xl:w-[900px] xl:h-[350px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
