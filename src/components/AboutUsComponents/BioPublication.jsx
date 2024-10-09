/* eslint-disable react/prop-types */

import PublicationBtn from "./PublicationBtn"


const BioPublication = ({image, text, date, edit, title}) => {
  return (
    <div className="grid md:grid-cols-4 py-6">
      <div className='md:flex gap-8 md:col-span-3'>
        <img src={image} alt="" className="md:w-52"/>
        <div className="md:px-4 py-5 md:py-0">
          <div className="flex gap-2 text-[10px] align-middle">
            <p>{date}</p>
            <p> / </p>
            <p>{edit}</p>
          </div>
          <h1 className="text-base font-bold py-1 text-gray-700">{title}</h1>
          <h1 className="text-xs font-medium text-gray-700">{text}</h1>
          <PublicationBtn />
        </div>
      </div>
    </div>
  )
}

export default BioPublication