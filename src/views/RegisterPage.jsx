import { FaArrowRight } from "react-icons/fa";

const LogInPage = () => {
  return (
        <div className='md:py-12 sm:py-8 py-4 md:px-8 xs:px-4 flex items-center justify-center bg-blue-700'>
            <div className='md:w-[50%] sm:w-[80%] w-full bg-white sm:px-6 px-2 py-4 text-black rounded-lg'>
                <form action="https://formspree.io/f/xblgjvoy" method="post" className='w-full '>
                    <fieldset>
                        <legend className='text-2xl'>Personal Information</legend>
                        <div>
                            <div className='mt-3'>
                                <label htmlFor="studentName">Student Name</label>
                                <input type="text" id='studentName' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder='Your firstname first' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="phoneNumber">Phone number</label>
                                <input type="text" id='phoneNumber' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder='Enter your phone number' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="studentClass">Class</label>
                                <input type="text" id='studentClass' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder='Which class are you currently in?' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="ageRange">Age Range</label>
                                <select name="ageRange" id="ageRange" className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 text-darkblue' placeholder='What is your age range?'>
                                    <option value="8 - 10">8 to 10</option>
                                    <option value="11 - 13">11 to 13</option>
                                    <option value="14 - 16">14 to 16</option>
                                </select>
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="hobbies">Hobbies</label>
                                <input type="text" id='hobbies' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder='What is / are your hobbie(s)' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="participationReason">Why do you want to participate?</label>
                                <textarea name="participationReason" id="participationReason" className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder='State reason(s) for participation'></textarea>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className='mt-6'>
                        <legend className='text-2xl'>Official information</legend>
                        <div>
                            <div className='mt-3'>
                                <label htmlFor="schoolName">School Name</label>
                                <input type="text" id='schoolName' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder='Enter the name of your school' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="schoolAddress">School Address</label>
                                <input type="text" id='schoolAddress' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder='Enter your school address' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="schoolEmail">School Email</label>
                                <input type="email" id='schoolEmail' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder='School email' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="teacherName">Name of teacher in charge</label>
                                <input type="email" id='teacherName' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder="Teacher's name" required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="tEmail">Teacher's email</label>
                                <input type="email" id='tEmail' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder="Enter teacher's email" required />
                            </div>

                        
                            <div className='mt-3'>
                                <label htmlFor="phoneNumber">Teacher's Phone Number</label>
                                <input type="text" id='phoneNumber' className='block focus:outline-none bg-transparent border-2 focus:border-t-0 focus:border-x-0 border-[#0106a0] rounded-md focus:rounded-none w-full mt-2 p-1 focus:ring-0 caret-[#0106a0] placeholder-darkblue' placeholder='What is / are your hobbie(s)' required />
                            </div>
                        </div>
                    </fieldset>

                    <div className='flex items-center justify-center gap-2 bg-[#0106a0] font-bold rounded-md w-full mt-6 py-2 text-white hover:bg-[#0109e4] hover:text-black cursor-pointer transition-all duration-1000'>
                        <button>SUBMIT</button>
                        <FaArrowRight />
                    </div>
                </form>
            </div>
        </div>
  )
}

export default LogInPage
