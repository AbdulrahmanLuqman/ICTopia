import bigMachine from "/images/inner_history_1.jpg";
import train from "/images/inner_history_3.jpg";
import { BsCircleHalf } from "react-icons/bs";


const HistoryFourthSection = () => {
    return (
        <section className="flex flex-col md:flex-row md:px-24 sm:px-12 p-4 py-12 md:gap-5 gap-3">
            <header className="md:text-sm">
                <h1 className="md:text-5xl text-3xl font-bold mb-3">1967</h1>

                <p>PLAN TO MARKET</p>

                <h2 className="font-bold text-lg">Customer service</h2>

                <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
            </header>

            <div className="flex flex-col gap-4 text-base">
                <p>Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before process-centric communities. Dramatically evisculate holistic innovation rather than client-centric data.</p>

                <div className="flex gap-8 md:gap-5 flex-col md:flex-row">
                    <div className="flex gap-3">
                        <BsCircleHalf className="md:text-5xl text-2xl text-blue-500 hover:text-black" />
                        <div>
                            <h2 className="md:text-2xl text-lg font-semibold">Plan to market</h2>
                            <p className="md:text-base text-sm">Holisticly predominate extensible testing procedures for supply.</p>
                        </div>
                    </div>


                    <div className="flex gap-3">
                        <BsCircleHalf className="md:text-5xl text-2xl text-blue-500 hover:text-black" />
                        <div>
                            <h2 className="md:text-2xl text-lg font-semibold">Market to Growth</h2>
                            <p className="md:text-base text-sm">Dramatically engage top-line web services vis-a-vis deliverables.</p>
                        </div>  
                    </div>
                </div>

                <p>Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services.</p>


                <p>Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.</p>

                <div className="flex gap-6 flex-col sm:flex-row">
                    <img src={bigMachine} alt="display image" className="block sm:w-64 w-full" />
                    <img src={train} alt="display image" className="block sm:w-64 w-full" />
                </div>
            </div>
            <hr />
        </section>
  )
}

export default HistoryFourthSection
