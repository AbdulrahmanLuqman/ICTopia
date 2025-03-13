import { FaArrowLeft, FaArrowRight } from "react-icons/fa6"



const SelectedClients = () => {
  const clients = ["Lorem","Lorem","Lorem","Lorem","Lorem","Lorem","Lorem","Lorem","Lorem"]
  return (
    <section className="bg-[#232323]">
        <div className="">
          <div className="text-[whitesmoke] w-[1100px] max-[1120px]:w-full mx-auto py-10 px-9">
            <p>MEET OUR</p>
            <h2 className="text-4xl font-semibold">Selected Client</h2>
          </div>
          <div className="flex gap-4 w-fit mx-auto">
            <button><FaArrowLeft /></button>
            {clients.map((client, i) => (
              <div key={i} className="bg-[whitesmoke] ">{client}</div>
            ))}
            <button><FaArrowRight /></button>
          </div>
        </div>
        <div>
            
        </div>
    </section>
  )
}

export default SelectedClients