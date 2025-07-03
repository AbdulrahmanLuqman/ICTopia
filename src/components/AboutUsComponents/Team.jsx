const TeamMate = (props) => {
    const teams = props.teams
    return (
        <div className="pt-[2rem] w-full grid lg:grid-rows-1 lg:grid-cols-4 md:grid-rows-2 md:grid-cols-2 gap-x-[1rem] gap-y-[2rem] items-center">
            {teams?.map((team, idx) => (
                <div key={idx} className="w-[100%] h-[70vh] flex flex-col">
                    <div className="w-[100%] h-[65%] relative cursor-pointer">
                        <div className="absolute w-full h-full z-20  transition all duration-300 easinout opacity-0 hover:opacity-100">
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0 w-full"></div>
                            <div className="rounded-full flex items-center justify-center w-[2rem] h-[2rem] border-[3px] border-grey hover:border-white absolute top-[50%] z-20 left-[50%] transform translate-y-[-50%] translate-x-[-50%]"><a href={team.linkedIn}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path className="hover:fill-[#ffffff] fill-[#D3D3D3]" d="M11 13H6q-.425 0-.712-.288T5 12t.288-.712T6 11h5V6q0-.425.288-.712T12 5t.713.288T13 6v5h5q.425 0 .713.288T19 12t-.288.713T18 13h-5v5q0 .425-.288.713T12 19t-.712-.288T11 18z"/></svg></a></div>
                        </div>
                        <img className="w-full h-full absolute top-0 left-0 z-0" src={team.image} alt="image" />
                    </div>
                    <div className="w-full h-[35%] p-[1rem] bg-white flex flex-col justify-between">
                       <div className="flex-col flex">
                            <h3 className="text-[20px] font-[500]">{team.name}</h3>
                            <p>{team.role}</p>
                       </div>
                        <div className="flex items-center gap-[10px]">
                            <a href={team.x}><svg className="fill-[#333333] w-[1.5rem] h-[1.5rem] hover:fill-[#54c4cf]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/></svg></a>
                            <a href={team.linkedIn}><svg className="fill-[#333333] w-[1.5rem] h-[1.5rem] hover:fill-[#54c4cf]"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/></svg></a>
                        </div>                           
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamMate;