import { Client } from "./TestimonialUtil"

const Testimonial = () => {
    console.log(Client)
  return (
    <div className="grid grid-cols-2 max-[1138px]:grid-cols-1 gap-x-0 gap-y-6 w-[1100px] max-[1120px]:w-full mx-auto my-14 px-10">
        {
            Client.map((client, i) => (
                <div key={i} className={`flex flex-row h-[300px] w-full ${i === 2 ? "flex-row-reverse" : i === 3 ? "flex-row-reverse" : "flex-row"}`}>
                    <img src={client.image} alt={client.name} className="w-[50%] h-full"/>

                    <div className={`w-[50%] h-full flex flex-col gap-2 justify-center p-8 ${i === 2 ? "items-end text-right" : i === 3 ? "items-end text-right" : "flex-row"}`}>
                            <p className="text-[15px]">{client.testimony}</p>
                            <p className="text-sm text-gray-500">{client.position}</p>
                            <p className="font-semibold">{client.name}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Testimonial