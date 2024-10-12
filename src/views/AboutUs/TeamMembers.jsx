import { useState } from "react";
import TeamMate from "../../components/AboutUsComponents/Team";
const TeamMembers = () => {

  const [team, setTeam] = useState([
    {name:"Mr Muhsin Anjorin", role:"Team Lead Dervac Hub", image:"../src/image/team_01.jpg"},
    {name:"Abdulganiyu Abdulazeez", role:"Member, Web Team", image:"../src/image/team_02.jpg"},
    {name:"Hammed Sanni", role:"Program Head", image:"../src/image/team_03.jpg"},
    {name:"Abdulrahman Luqman", role:"Lead, Web Team", image:"../src/image/team_04.jpg"},
    {name:"Anas Aliu", role:"Member, Web Team", image:"../src/image/team_01.jpg"},
    {name:"Fawaz Makinde", role:"Member, Web Team", image:"../src/image/team_02.jpg"},
    {name:"Stanley Menuo", role:"Memer, Web Team", image:"../src/image/team_03.jpg"},
    {name:"Ismail Ajire", role:"Member, Media & Publicity", image:"../src/image/team_04.jpg"}
  ]);


  return (
    <div className="w-full h-full bg-[#f2f1ed]">
      <div className="w-full relative lg:px-[6rem] md:px-[4rem] px-[2rem] py-[3rem] bg-center bg-[url('../public\images/hero_inner_page.jpg')] bg-no-repeat bg-cover">
        <div className="opacity-[0.53] w-full h-full top-0 left-0 bg-[#191313] absolute z-index-[-2]"></div>
        <div className="relative flex flex-col gap-[0rem] text-[20px] text-white">
          <div className="flex items-center gap-[1rem] font-[500]">
            <p>HOME</p><span className="font-[800] mt-[-8px]">.</span><p>ABOUT US</p>
          </div>
          <h1 className="font-[500] md:text-[44px] text-[35px]">Team members</h1>
          <p className="text-[20px] pt-[1rem] lg:w-[73%] w-[100%]">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs.</p>
        </div>
      </div>
      <div className="w-full h-fit">
        <div className="w-full bg-[#f2f1ed] lg:p-[6rem] md:px-[4rem] md:py-[4rem] lg:py-[8rem] p-[2rem] text-black">
          <div className="w-full">
            <h5 className="text-[20px] font-[400]">LEARN MORE</h5>
            <h1 className="md:text-[40px] text-[30px] font-[600] mb-[16px]">Our Management</h1>
            <p className="w-[100px] h-[4px] bg-[#54c4cf] mb-[1rem]"></p>
            <p className="lg:w-[65%] w-full md:text-[18px] text-[15px] leading-[30px]">Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
          </div>
          <div className="pt-[2rem] w-full grid lg:grid-rows-1 lg:grid-cols-3 md:grid-rows-2 md:grid-cols-2 gap-x-[3rem] gap-y-[2rem] items-center lg:mt-[6rem] md:mt-[3rem]">
            <div className="w-[100%] h-[70vh] flex flex-col">
              <div className="w-[100%] h-[65%] relative cursor-pointer">
                <div className="absolute w-full h-full z-20  transitionallm duration-300 easineout opacity-0 hover:opacity-100">
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-20 w-full"></div>
                  <div className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] border-[3px] border-white absolute top-[50%] left-[50%] transfor translate-y-[-50%] translate-x-[-50%]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg></div>
                </div>
                <img className="w-full h-full absolute top-0 left-0 z-0" src="../src/image/team_01.jpg" alt="image" />
              </div>
              <div className="w-full h-[35%] p-[1rem] bg-white flex flex-col justify-between">
                <div className="flex-col flex">
                     <h3 className="text-[18px] font-[500]">Mr. Muhsin Anjorin</h3>
                     <p>Team Lead Dervac Company</p>
                </div>
                <div className="flex items-center gap-[10px]">
                  <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg></a>
                  <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg></a>
                  <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/></svg></a>
                </div>                           
              </div>
            </div>
            <div className="w-[100%] h-[70vh] flex flex-col">
              <div className="w-[100%] h-[65%] relative cursor-pointer">
                  <div className="absolute w-full h-full z-20  transitionallm duration-300 easineout opacity-0 hover:opacity-100">
                      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-20 w-full"></div>
                      <div className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] border-[3px] border-white absolute top-[50%] left-[50%] transfor translate-y-[-50%] translate-x-[-50%]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg></div>
                  </div>
                  <img className="w-full h-full absolute top-0 left-0 z-0" src="../src/image/team_02.jpg" alt="image" />
              </div>
              <div className="w-full h-[35%] p-[1rem] bg-white flex flex-col justify-between">
                  <div className="flex flex-col">
                      <h3 className="text-[18px] font-[500]">Mr. Abdulazeez A'Ganiyu</h3>
                      <p>Senior Web Developer</p>
                  </div>
                  <div className="flex items-center gap-[10px]">
                      <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg></a>
                      <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg></a>
                      <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/></svg></a>
                  </div>                           
              </div>
            </div>
            <div className="w-[100%] h-[70vh] flex flex-col">
                <div className="w-[100%] h-[65%] relative cursor-pointer">
                    <div className="absolute w-full h-full z-20  transition-all duration-300 easeinout  opacity-0 hover:opacity-100">
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-20 w-full"></div>
                        <div className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] border-[3px] border-white absolute top-[50%] left-[50%] transfor translate-y-[-50%] translate-x-[-50%]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg></div>
                    </div>
                    <img className="w-full h-full absolute top-0 left-0 z-0" src="../src/image/team_03.jpg" alt="image" />
                </div>
                <div className="w-full h-[35%] p-[1rem] bg-white flex flex-col justify-between">
                    <div className="flex flex-col">
                        <h3 className="text-[18px] font-[500]">Mr. Sani Abdulhamid</h3>
                        <p>Project Manager</p>
                    </div>
                    <div className="flex items-center gap-[10px]">
                        <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg></a>
                        <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg></a>
                        <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/></svg></a>
                    </div>                           
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between lg:flex-row flex-col lg:px-[6rem] md:px-[4rem] px-[2rem] py-[1rem] bg-[#54c4cf] text-white lg:text-[20px] md:text-[18px] gap-[2rem] font-[600]">
            <p className="lg:text-start text-center">Looking for a First-Class Scientific Partner?</p>
            <button className="bg-[#142340] px-[3rem] py-[8px] rounded-[3px] border-[2px] border-solid border-[#142340] hover:cursor-pointer hover:bg-[#54c4cf]">Contact</button>
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
        <TeamMate teams={team} />
      </div>
    </div> 
  )
}

export default TeamMembers