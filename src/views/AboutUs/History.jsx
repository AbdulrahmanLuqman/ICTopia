import HistoryFourthSection from "../../components/AboutUsComponents/HistoryFourthSection"
import HistoryHeader from "../../components/AboutUsComponents/HistoryHeader"
import HistoryThirdSection from "../../components/AboutUsComponents/HistoryThirdSection"
import MilestoneAndDates from "../../components/AboutUsComponents/MilestoneAndDates"

const History = () => {
  return (
    <div>
      <HistoryHeader />
      <MilestoneAndDates />
      <HistoryThirdSection />
      <HistoryFourthSection />
    </div>
  )
}

export default History