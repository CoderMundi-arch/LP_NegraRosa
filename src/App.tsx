import { CursorGlow } from './components/CursorGlow'
import { Hero } from './components/Hero'
import { LooksStrip } from './components/LooksStrip'
import { ClosingSection } from './components/ClosingSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="page-bg grain relative min-h-screen font-sans">
      <CursorGlow />
      <main>
        <Hero />
        <LooksStrip />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  )
}
