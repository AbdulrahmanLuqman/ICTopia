import biography from '/images/biography.jpg'
import { IoMdMail } from "react-icons/io";
import bio1 from '/images/bio1.jpg'
import bio2 from '/images/bio2.jpg'
import bio3 from '/images/bio3.jpg'
import bio4 from '/images/bio4.jpg'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import BioPublication from '../../components/AboutUsComponents/BioPublication';

const PersonalBio = () => {
  return (
    <div>
      <section className="bg-bgBio bg-cover bg-fixed px-6 md:px-32 py-8 md:py-16 grid md:grid-cols-4 gap-4 items-center justify-center bg-[#f2f1ed]">

        <img src={biography} alt="" className='cover w-80 rounded-full' />

        <div className='col-span-2 px-2'>
          <h1 className='text-white font-sans font-medium text-base md:text-xl'>PROJECT DIRECTOR</h1>
          <h1 className='text-white font-sans font-bold text-xl md:text-4xl pb-4'>ANJORIN <span className='text-blue-400'>MUHSIN ISHAQ</span></h1>          
          <div className="w-24 bg-blue-400 h-[2px] rounded-lg my-2"></div>
          <p className='text-white text-sm text-justify font-normal py-4'>
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has  evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have   multiple touchpoints for offshorin. User generated content in real-time will have multiple touchpoints for offshoring.  
          </p>
        </div>

        <div className='px-4'>
          <p className='text-white text-[10px] md:text-sm font-bold'>CONTACT ME</p>
          <div className="flex gap-2 py-3">
            <FaFacebookF className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-1 w-5 h-5"/>
            <FaTwitter className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-1 w-5 h-5"/>
            <FaLinkedinIn className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-1 w-5 h-5"/>
            <IoMdMail className="text-white hover:text-blue-600 bg-blue-600 hover:border hover:border-blue-500 hover:bg-transparent rounded-full p-1 w-5 h-5"/>
          </div>

          <div className='py-1 md:pt-6'>
            <p className='text-white font-medium text-[10px]'>DATE OF BIRTH</p>
            <p className='text-white font-bold text-sm md:text-base'>01 JULY 1974</p>
          </div>
          <div className='py-3'>
            <p className='text-white font-medium text-[10px]'>PLACE OF BIRTH</p>
            <p className='text-white font-bold text-sm md:text-base'>Melbourne, Australia</p>
          </div>
        </div>
      </section>

      <section className='grid md:grid-cols-2 text-black py-16 px-8 md:px-36 gap-10'>
        <div className='row-span-2'>
          <h1 className='text-2xl font-medium py-1'>Education</h1>
          <div className="w-20 bg-blue-400 h-[2px] rounded-lg my-2"></div>
          <p className='text-xs font-normal pt-4 text-justify'>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
          </p>
          <p className='py-4 text-xs font-normal text-justify'>
            Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generationX is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.
          </p>          
          <p className='text-xs font-normal text-justify'>
            Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. At the end of the day, going forward.
          </p>
        </div>

        <div className=''>
          <h1 className='text-2xl font-medium py-1'>Career</h1>
          <div className="w-20 bg-blue-400 h-[2px] rounded-lg my-2"></div>
          <ul className='pt-4'>
            <li className='text-xs'>Bring to the table win-win survival strategies to ensure proactive domination.</li>
            <li className='text-xs'>At the end of the day, going forward, a new normal that has evolved.</li>
            <li className='text-xs'>User generated content in real-time will have multiple touchpoints for offshoring.</li>
            <li className='text-xs'>Override the digital divide with additional clickthroughs from DevOps.</li>
          </ul>
        </div>

        <div>
          <h1 className='text-2xl font-medium py-1'>Experience</h1>
          <div className="w-20 bg-blue-400 h-[2px] rounded-lg my-2"></div>
          <h1 className='text-xs pt-4 text-justify'>
            Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.    Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </h1>
        </div>
      </section>

      <section className='px-8 md:px-36'>
        <h1 className='text-2xl font-medium py-1'>Publications</h1>
        <div className="w-20 bg-blue-400 h-[2px] rounded-lg my-2"></div>

        <BioPublication image={bio1} date={'December 2014'} edit={'Maria Stockton'}  title={'Bringing transcendent environments to real world situation'} text={'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.'}/>
        
        <BioPublication image={bio2} date={'December 2014'} edit={'Maria Stockton'}  title={'Committed to delivering high quality projects and innovate design solutions.'} text={'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.'}/>

        <BioPublication image={bio3} date={'December 2014'} edit={'Maria Stockton'}  title={'Creating places that enhance the human experience'} text={'Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive.'}/>

        <BioPublication image={bio4} date={'December 2014'} edit={'Maria Stockton'}  title={'Unique solutions for your home through a personalized process'} text={'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.'}/>

      </section>
    </div>
  )
}

export default PersonalBio