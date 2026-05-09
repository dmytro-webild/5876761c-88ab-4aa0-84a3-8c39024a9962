"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Shield, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Fleet", id: "fleet" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="SirinessaMiCars"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "sparkles-gradient"}}
      title="Luxury Redefined with SirinessaMiCars"
      description="Experience premium comfort and elegance. Select your ride and travel in style across Morocco."
      buttons={[
        {
          text: "Book via WhatsApp",          href: "https://wa.me/212600286128"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-business-woman-sitting-car_1303-22819.jpg"
      mediaAnimation="slide-up"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/successful-confident-businessman-glasses-speaking-beige-wall_176420-132.jpg", alt: "Business client testimonial portrait" },
        { src: "http://img.b2bpic.net/free-photo/side-view-smiley-modern-female_23-2148415853.jpg", alt: "Business client testimonial portrait" },
        { src: "http://img.b2bpic.net/free-photo/happy-bearded-man-brown-suit-wearing-glasses-looking-smiling-cheerfully_141793-111775.jpg", alt: "Business client testimonial portrait" },
        { src: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-businessman-black-wall_176420-3460.jpg", alt: "Business client testimonial portrait" },
        { src: "http://img.b2bpic.net/free-photo/beautiful-business-woman-office-by-window_1303-21129.jpg", alt: "Business client testimonial portrait" },
      ]}
      avatarText="Trusted by over 500+ satisfied luxury travelers"
      marqueeItems={[
        { type: "text", text: "Premium Fleet" },
        { type: "text", text: "Chauffeur Service" },
        { type: "text", text: "24/7 Support" },
        { type: "text", text: "Airport Transfer" },
        { type: "text", text: "Luxury Experience" },
      ]}
    />
  </div>

  <div id="fleet" data-section="fleet">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        { id: "c1", name: "Executive Renault", price: "€120/day", imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-exterior-details-modern-yellow-sport-car_181624-25409.jpg" },
        { id: "c2", name: "Modern Dacia Luxury", price: "€80/day", imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-exterior-details-modern-black-car_181624-25346.jpg" },
        { id: "c3", name: "Premium City Sedan", price: "€95/day", imageSrc: "http://img.b2bpic.net/free-photo/top-view-glasses-abstract-table_23-2149974229.jpg" },
        { id: "c4", name: "Luxury Performance SUV", price: "€150/day", imageSrc: "http://img.b2bpic.net/free-photo/handsome-business-man-by-white-car_1303-16424.jpg" },
        { id: "c5", name: "Volkswagen Elite", price: "€140/day", imageSrc: "http://img.b2bpic.net/free-photo/mid-section-man-using-digital-tablet-while-charging-electric-car_107420-94881.jpg" },
        { id: "c6", name: "Skoda Business Class", price: "€110/day", imageSrc: "http://img.b2bpic.net/free-photo/man-sitting-car-night_23-2149001256.jpg" },
      ]}
      title="Premium Fleet"
      description="Choose from our curated collection of luxury automobiles."
    />
  </div>

  <div id="brands" data-section="brands">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Mercedes-Benz", "BMW", "Audi", "Volkswagen", "Renault", "Dacia", "Toyota", "Hyundai", "Peugeot"]}
      title="Trusted by Leaders"
      description="We offer top-tier vehicles from world-class automotive manufacturers."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "24/7 Support",          description: "Around-the-clock dedicated assistance.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/high-angle-new-car-available-selling_23-2148332890.jpg",            imageAlt: "premium car studio shot black"
          },
          items: [
            { icon: Shield, text: "Secure Booking" },
          ],
          reverse: false,
        },
        {
          title: "Luxury Fleet",          description: "Top tier, well-maintained vehicles.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/woman-looking-inside-trunk-her-car_1303-28777.jpg",            imageAlt: "premium car studio shot black"
          },
          items: [
            { icon: Award, text: "Premium Grade" },
          ],
          reverse: true,
        },
        {
          title: "Transparent Pricing",          description: "No hidden fees, simple booking.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/luggage-seen-from-rear-car-window_23-2150934310.jpg",            imageAlt: "premium car studio shot black"
          },
          items: [
            { icon: Zap, text: "Instant Confirmation" },
          ],
          reverse: false,
        },
      ]}
      title="Why SirinessaMiCars?"
      description="Unmatched service meets high-end performance for your journey."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Youssef A.", handle: "@youssefa", testimonial: "Excellent service and pristine cars. Highly recommended for Morocco trips.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-confident-middle-aged-businessman-black-background_176420-5560.jpg" },
        { id: "t2", name: "Sarah M.", handle: "@sarahm", testimonial: "Truly luxury experience. Everything was seamless and premium.", imageSrc: "http://img.b2bpic.net/free-photo/classy-business-woman-smiling-medium-shot_23-2148352562.jpg" },
        { id: "t3", name: "Karim R.", handle: "@karimr", testimonial: "Best car rental in town. Will definitely come back again.", imageSrc: "http://img.b2bpic.net/free-photo/confused-businessman-office_1098-3136.jpg" },
        { id: "t4", name: "Laila K.", handle: "@lailak", testimonial: "Very professional and friendly team. Great rental service.", imageSrc: "http://img.b2bpic.net/free-photo/experienced-senior-female-executive-eyeglasses_1262-5027.jpg" },
        { id: "t5", name: "Omar B.", handle: "@omarb", testimonial: "Luxury cars in perfect condition. Smooth process.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-mature-businessman-looking-away_23-2147955371.jpg" },
      ]}
      title="Client Experience"
      description="Hear what our premium clients say about us."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "Is a deposit required?", content: "Yes, we require a standard security deposit." },
        { id: "f2", title: "Can I return the car at a different location?", content: "Yes, for an additional fee depending on the city." },
        { id: "f3", title: "Do you provide child seats?", content: "Yes, we can include child seats upon request." },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about renting with us."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Contact Us Now"
      description="Book directly or send your inquiries to our team."
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name" },
        { name: "email", type: "email", placeholder: "Your Email" },
      ]}
      textarea={{ name: "message", placeholder: "Details about your trip..." }}
      imageSrc="http://img.b2bpic.net/free-photo/stylish-lady-sitting-car-with-opened-door-fashion-girl-driving-car-suit-posh-girl-sportcar_574295-8.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="SirinessaMiCars"
      columns={[
        {
          title: "Company",          items: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#" },
          ],
        },
        {
          title: "Support",          items: [
            { label: "Help Center", href: "#" },
            { label: "Terms & Privacy", href: "#" },
          ],
        },
        {
          title: "Connect",          items: [
            { label: "WhatsApp", href: "https://wa.me/212600286128" },
            { label: "Instagram", href: "#" },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
