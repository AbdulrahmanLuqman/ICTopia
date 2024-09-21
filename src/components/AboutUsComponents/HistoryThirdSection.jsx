import bigMachine from "/images/inner_history_1.jpg"
import train from "/images/inner_history_3.jpg"


const HistoryThirdSection = () => {
    return (
        <section className="flex flex-col md:flex-row md:px-24 sm:px-12 p-4 py-12 gap-5">
            <header className="md:text-sm">
                <h1 className="md:text-5xl text-3xl font-bold mb-3">1924</h1>

                <p>VISION TO PLAN</p>

                <h2 className="font-bold text-lg">Iterative approaches</h2>

                <p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
            </header>

            <div className="flex flex-col gap-4 text-base">
                <p>Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before process-centric communities. Dramatically evisculate holistic innovation rather than client-centric data.</p>


                <p>Progressively maintain extensive infomediaries via extensible niches. Dramatically disseminate standardized metrics after resource-leveling processes. Objectively pursue diverse catalysts for change for interoperable meta-services.</p>


                <p>Proactively fabricate one-to-one materials via effective e-business. Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.</p>

                <div className="flex gap-6 flex-col sm:flex-row">
                    <img src={bigMachine} alt="display image" className="block w-64 " />
                    <img src={train} alt="display image" className="block w-64 " />
                </div>
            </div>
            <hr />
        </section>
  )
}

export default HistoryThirdSection
