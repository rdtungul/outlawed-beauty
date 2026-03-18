import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  )
}
