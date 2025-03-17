const OurCompany = ({Image:icon, title, content}) => {
  return (
    <div className="flex flex-col items-cemter text-center text-white gap-[1rem]">
      <div className="text-[#54c4cf] text-5xl hover:text-white transition-all duration-500ms">{icon}</div>
      <p className="font-[700] text-[20px]">{title}</p>
      <p className="w-[5rem] h-[3px] bg-[#54c4cf] mx-auto"></p>
      <p className="text-[15px]">{content}</p>
    </div> 
  )
}

export default OurCompany;