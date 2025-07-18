import TeamMate from "../../components/AboutUsComponents/Team";
const TeamMembers = () => {

  const team = [
    {name:"ANJORIN, Ishaq O. Muhsin", role:"Executive Director", linkedIn:"https://www.linkedin.com/in/anjorin4us", x:"https://twitter.com/anjorin4us", image:"/images/biography.jpg", id:1},
    {name:"Hammed Sanni", role:"Program Manager", linkedIn:"https://www.linkedin.com/in/hammed-sanni-45b6992b7/", x:"https://twitter.com/HammedSanni5", image:"/images/abdulhamid.jpg", id:2},
    {name:"Abdulmuiz Olajire", role:"Media Lead", linkedIn: "#", x:"#", image:"/images/abdulmuiz.jpg", id:3},
    {name:" Abdulrahman Luqman", role:"Web Lead", linkedIn:"https://www.linkedin.com/in/a-luqman-80243a23a/", x:"https://x.com/luqmanola60", image:"/images/luqman.jpg", id:4},
    {name:"Anas Aliu", role:"Member, Web", linkedIn:"https://www.linkedin.com/in/anas-aliu-694209204/", x:"#", image:"/images/anas.jpg", id:5},
    {name:"Abdulazeez Abdulganiyu", role:"Web", linkedIn:"https://www.linkedin.com/in/abdulazeez-abdulganiyu-pactware/", x:"https://x.com/pactwareTech", image:"/images/abdulazeez.jpg", id:6},
    {name:"Fawaz Makinde", role:"Web", linkedIn:"https://www.linkedin.com/in/fawwaz-makinde-56b776288/", x:"#", image:"/images/fawaz.jpg", id:7},
    {name:"Stanley Meruo", role:"Web", linkedIn:"https://www.linkedin.com/in/stanley-meruo-062122146/", x:"#", image:"/images/stanley.jpg", id:8},
    {name:"Jimoh Abdulwaris", role:"Program", linkedIn:"https://www.linkedin.com/in/jimoh-abdulwaris/", x:"#", image:"/images/waris.jpg", id:9},
    {name:"Abdulrasheed Brimah", role:"Program", linkedIn:"https://www.linkedin.com/in/abdul-rasheed-brimah-63a34827a/", x:"#", image:"/images/brimah.jpg", id:10},
  ];


  return (
    <div className="w-full h-full bg-[#f2f1ed]">
      <div className="w-full relative lg:px-[6rem] md:px-[4rem] px-[2rem] py-[3rem] bg-center bg-[url('../public\images/hero_inner_page.jpg')] bg-no-repeat bg-cover">
        <div className="opacity-[0.53] w-full h-full top-0 left-0 bg-[#191313] absolute z-index-[-2]"></div>
        <div className="relative flex flex-col gap-[0rem] text-[20px] text-white">
          <div className="flex items-center gap-[1rem] font-[500]">
            <p>HOME</p><span className="font-[800] mt-[-8px]">.</span><p>ABOUT US</p>
          </div>
          <h1 className="font-[500] md:text-[44px] text-[35px]">Team members</h1>
          <p className="text-[20px] pt-[1rem] lg:w-[73%] w-[100%]">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional click throughs.</p>
        </div>
      </div>
      <div className="w-full fleX flex-col gap-[1rem] items-center lg:px-[6rem] md:px-[4rem] px-[2rem] lg:py-[8rem] md:py-[5rem] py-[3rem]">
        <div className="w-full flex items-center justify-between gap-[2rem] lg:flex-row md:flex-col flex-col">
          <div className="lg:w-[50%] w-full">
            <h5 className="text-[20px] font-[400]">LEARN MORE</h5>
            <h1 className="md:text-[40px] text-[30px] font-[600] mb-[16px]">Our Management</h1>
            <p className="w-[100px] h-[4px] bg-[#54c4cf] mb-[1rem]"></p>
            <p className="w-full md:text-[17px] text-[14px] leading-[30px] mb-[1rem]">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
            <p className="w-full  md:text-[17px] text-[14px] leading-[30px]">Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
          </div>
          <div className="lg:w-[50%] w-full"><img src="/images/inner_office_1.jpg" alt="Inner office 1" /></div>
        </div>
      </div>
      <div className="w-full lg:p-[6rem] md:px-[4rem] md:py-[4rem] lg:py-[8rem] p-[2rem]">
        <TeamMate teams={team} />
      </div>
      <div className="w-full flex items-center justify-between lg:flex-row flex-col lg:px-[6rem] md:px-[4rem] px-[2rem] py-[1rem] bg-[#54c4cf] text-white lg:text-[20px] md:text-[18px] gap-[2rem] font-[600]">
            <p className="lg:text-start text-center">Looking for a First-Class Scientific Partner?</p>
            <button className="bg-[#142340] px-[3rem] py-[8px] rounded-[3px] border-[2px] border-solid border-[#142340] hover:cursor-pointer hover:bg-[#54c4cf]">Contact</button>
      </div>
    </div> 
  )
}

export default TeamMembers