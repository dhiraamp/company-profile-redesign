import Hero from '../components/sections/Hero'
import LiveCounter from '../components/sections/LiveCounter'
import AboutPreview from '../components/sections/AboutPreview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import ServicesPreview from '../components/sections/ServicesPreview'
import PortfolioClients from '../components/sections/PortfolioClients'
import TestimonialCarousel from '../components/sections/TestimonialCarousel'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <LiveCounter />
      <AboutPreview />
      <WhyChooseUs />
      <ServicesPreview />
      <PortfolioClients />
      <TestimonialCarousel />
      <CTA />
    </>
  )
}
