import HistoryContactSection from "../../components/AboutUsComponents/HistoryContactSection"
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
      <HistoryContactSection />
    </div>
  )
}

export default History