

const SubHeader = ({ title, subtitle, head, content }) => {
  return (
    <>
      <div className="bg-[url('/public/images/hero_inner_page.jpg')] bg-cover bg-no-repeat bg-center flex flex-col gap-4 text-lg px-5 text-white md:px-8 lg:px-[93px] py-16">
        <div className="flex items-center gap-3">
          <p>{title}</p>
          <div className="h-[4px] w-[4px] bg-white rounded-full"></div>
          <p>{subtitle}</p>
        </div>
        <h1 className="text-4xl font-semibold">{head}</h1>
        <p className="text-base">{content}</p>
      </div>
    </>
  );
};

export default SubHeader;
