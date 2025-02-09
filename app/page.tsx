import Layout from "./components/layout"
import HeroSection from "./components/HeroSection"
import AboutUsSection from "./components/AboutUsSection"
import OurVisionSection from "./components/OurVisionSection"
import OurValuesSection from "./components/OurValuesSection"
import ServicesSection from "./components/ServicesSection"
import FeaturedProjectsSection from "./components/FeaturedProjectsSection"
import GallerySection from "./components/GallerySection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import EventsSection from "./components/EventsSection"
import PartnersSection from "./components/PartnersSection"
import ContactSection from "./components/ContactSection"
import MapSection from "./components/MapSection"

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutUsSection />
      <OurVisionSection />
      <OurValuesSection />
      <ServicesSection />
      <FeaturedProjectsSection />
      <GallerySection />
      <WhyChooseUsSection />
      <EventsSection />
      <PartnersSection />
      <ContactSection />
      <MapSection />
    </Layout>
  )
}

