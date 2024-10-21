const OurCompany = () => {
  return (
    <div className="w-full grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-[2rem">
      {
        <div className="flex flex-col items-cemter text-center text-white">
          <div className="text-white hover:text-[#54c4cf]">{company.image}</div>
          <p className="font-[400] font-[20px]">{company.title}</p>
          <p className="w-[5rem] h-[3px] bg-[#54c4cf]"></p>
          <p className="text-[20px]">{company.content}</p>
        </div>
      }
    </div>
  )
}

export default OurCompany