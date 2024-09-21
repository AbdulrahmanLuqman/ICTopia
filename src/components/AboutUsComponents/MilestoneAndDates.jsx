import youngBoy from "/images/inner_history_2.jpg"

const MilestoneAndDates = () => {
    return (
        <>
            <section className="md:px-24 sm:px-12 p-4 py-12 bg-zinc-100">
                <div className="flex md:flex-row flex-col gap-5 md:mb-12 mb-8">
                    <div className='text-lg flex flex-col gap-3 flex-1'>
                        <header className='flex flex-col gap-3'>
                            <p>OUR HISTORY</p>
                            <h1 className='sm:text-5xl text-2xl font-medium'>Key Milestones & Dates</h1>
                            <div className='w-24 h-1 bg-cyan-500 mt-3 '></div>
                        </header>

                        <p className='sm:font-medium'>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway. Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.
                        </p>

                        <p className='text-base'>
                        Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.
                        </p>

                        
                    </div>
                    
                    <img src={youngBoy} alt="serious dude" className="block flex-1 md:w-32 " />
                </div>

                <hr />
            </section>
        </>
    )
}

export default MilestoneAndDates
