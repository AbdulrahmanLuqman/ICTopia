import team_01 from '/images/biography.jpg'
import team_02 from '/images/abdulhameed.jpg'
import team_03 from '/images/abdulmuiz.jpg'
import { Link, useLocation } from 'react-router-dom'

const Management = () => {  
    const location = useLocation();
    const locate =
        {
            linkTo: "/about-us/team-members",
            name: "Team Members"
          }
    return (
        <div className="w-full h-fit overflow-hidden">
            <div className="w-full bg-[#f2f1ed] lg:p-[6rem] md:px-[3rem] md:py-[4rem] lg:py-[8rem] p-[2rem] text-black">
                <div className="w-full">
                    <h5>LEARN MORE</h5>
                    <h1 className="md:text-[40px] text-[30px] font-[700] mb-[16px]">Our Core Team</h1>
                    <p className="w-[100px] h-[4px] bg-[#54c4cf] mb-[1rem]"></p>
                    <p className="lg:w-[65%] w-full md:text-[18px] text-[15px] leading-[30px]">At ICTOPIA, our management team is dedicated to fostering innovation, collaboration, and excellence in technology competitions. With expertise spanning software development, AI, cybersecurity, and entrepreneurship, we guide participants toward success. Our mission is to bridge the gap between talent and opportunity, empowering the next generation of tech leaders through hands-on challenges and mentorship</p>
                </div>
                <div className="pt-[2rem] w-full grid lg:grid-rows-1 lg:grid-cols-3 md:grid-rows-2 md:grid-cols-2 gap-x-[2rem] gap-y-[2rem] items-center lg:mt-[6rem] md:mt-[3rem]">
                    <div className="w-[100%] h-[70vh] flex flex-col">
                        <div className="w-[100%] h-[65%] relative cursor-pointer">
                            <div className="absolute w-full h-full z-20  transitionallm duration-300 easineout opacity-0 hover:opacity-100">
                                <div className="absolute top-0 left-0 h-full bg-black opacity-30 z-20 w-full"></div>
                                <div className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] border-[3px] border-white absolute top-[50%] left-[50%] transfor translate-y-[-50%] translate-x-[-50%]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg></div>
                            </div>
                            <img className="w-full h-full absolute top-0 left-0 z-0" src={team_01} alt="image" />
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
                                <div className="absolute top-0 left-0 h-full bg-black opacity-30 z-20 w-full"></div>
                                <div className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] border-[3px] border-white absolute top-[50%] left-[50%] transfor translate-y-[-50%] translate-x-[-50%]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg></div>
                            </div>
                            <img className="w-full h-full absolute top-0 left-0 z-0" src={team_02} alt="image" />
                          
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
                    <div className="w-[100%] h-[70vh] flex flex-col">
                        <div className="w-[100%] h-[65%] relative cursor-pointer">
                            <div className="absolute w-full h-full z-20  transition-all duration-300 easeinout opacity-0 hover:opacity-100">
                                <div className="absolute top-0 left-0 h-full bg-black opacity-30 z-20 w-full"></div>
                                <div className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] border-[3px] border-white absolute top-[50%] left-[50%] transfor translate-y-[-50%] translate-x-[-50%]"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg></div>
                            </div>
                            <img className="w-full h-full absolute top-0 left-0 z-0" src={team_03} alt="image" />
                        </div>
                        <div className="w-full h-[35%] p-[1rem] bg-white flex flex-col justify-between">
                            <div className="flex flex-col">
                                <h3 className="text-[18px] font-[500]">Abdulmuiz Olajire</h3>
                                <p>Team Member</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"/></svg></a>
                                <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg></a>
                                <a href="#"><svg className="fill-[#333333] w-[1.3rem] h-[1.3rem] hover:fill-[#54c4cf]"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/></svg></a>
                            </div>                           
                        </div>
                    </div>
                </div>
                <button className="w-[6rem] h-[3rem] rounded-[10px] flex items-center justify-center text-white hover:text-[#2e3192] bg-[#54c4cf] mt-[2rem]"><Link to="/about-us/team-members">View All</Link></button>
            </div>
            <div className="w-full h-fit lg:px-[6rem] md:px-[3rem] px-[2rem] pb-[2rem] top-0 lg:pt-[8rem] md:pt-[4rem] pt-[2rem] bg-[url('../src/image/background-lab-light.jpg')] bg-center bg-cover z-[20] text-white flex flex-col gap-[1rem]">
                <div className="rounded-[50%] md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] flex items-center justify-center bg-[#54c4cf] opacity-100 hover:bg-nill transition-3000 md:mb-[2rem]-[1rem]"><svg xmlns="http://www.w3.org/2000/svg" className="md:w-[48px] w-[24px] md:h-[48px] h-[24px]" width="48" height="48" viewBox="0 0 24 24"><path fill="#ffffff" d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.9 2.9 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789M20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.9 2.9 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2"/></svg></div>
                <h1 className="md:text-[40px] text-[25px] font-[500] w-full lg:w-[60%] mt-[1rem]">&rdquo;Innovations, like hypotheses, should evolve—or be replaced.&rdquo;</h1>
                <p className="md:text-[24px] text-[16px]">— Inspired by Henry Edward Armstrong</p>
            </div>
            <div className="grid md:grid-cols-7 bg-[#5ecfd9] items-center gap-4 px-6 py-8 lg:px-24 text-justify">
                <p className="text-[whitesmoke] col-span-6 "><span className="font-semibold md:text-xl">Looking for a First-Class Tech Innovation Partner?</span> <br /><br/>
                    Join ICTOPIA, where groundbreaking ideas meet real-world impact. Whether you&apos;re a student, developer, or entrepreneur, our competition is the perfect platform to showcase your skills, connect with industry experts, and drive technological advancement.
                    <br />
                    Get in Touch. Ready to be part of the future of ICT? Contact us today!?
                </p>
                <a href='tel:+2349029285309' className="rounded cursor-pointer text-[whitesmoke] font-semibold w-44 bg-[#4569d3] text-xl text-center p-3">Contact Us</a>
            </div>
        </div>
    );
}
// #0106a0-blue, #54c4cf-cyan, #2e3192-lighter_blue, #0058ea-royalblue
export default Management;