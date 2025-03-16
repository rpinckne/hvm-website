import Hero from "./components/Hero"
import PillarsOverview from "./components/PillarsOverview"
import EliteTransformation from "./components/EliteTransformation"
import DevelopmentGrid from "./components/DevelopmentGrid"
import FounderNote from "./components/FounderNote"
import ComparisonTable from "./components/ComparisonTable"
import FAQ from "./components/FAQ"
import LimitedTimeOffer from "./components/LimitedTimeOffer"

export default function Home() {
  return (
    <>
      <Hero />
      <PillarsOverview />
      <EliteTransformation />
      <DevelopmentGrid />
      <FounderNote />
      <ComparisonTable />
      <FAQ />
      <LimitedTimeOffer />
    </>
  )
}

