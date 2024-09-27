import { FaArrowRight } from "react-icons/fa6";

const PublicationBtn = () => {
  return (
    <div className="pt-5">
      <a href="#" className="flex bg-blue-500 text-white text-xs px-4 font-semibold py-3 w-32 border hover:bg-white hover:border-blue-500 hover:text-blue-500 items-center gap-2">
        <div className="">
          Read more
        </div>
        <FaArrowRight />
      </a>
    </div>
  )
}

export default PublicationBtn