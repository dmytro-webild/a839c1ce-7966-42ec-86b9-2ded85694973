"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="medium"
        background="blurBottom"
        cardStyle="subtle-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/bread_23-2147989452.jpg"
      logoAlt="Eish + Malh Logo"
      brandName="Eish + Malh"
      button={{
        text: "Reservations",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogo
      logoText="Eish + Malh"
      description="At the intersection of Italian tradition and Cairo's vibrant culture, you’ll find Eish + Malh. From thin-crust pizza to our legendary weekend brunches, we’re serving up more than just food—we’re serving an experience. Come for the pasta, stay for the soul of Downtown."
      buttons={[
        {
          text: "Explore Menu",
          href: "#menu",
        },
        {
          text: "Make a Reservation",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/middle-age-friends-night-having-dinner_23-2149190934.jpg"
      imageAlt="Bustling interior of Eish + Malh restaurant"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Story: Downtown's Culinary Heart",
        },
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "vibe-reel",
          title: "The Downtown Vibe",
          descriptions: [
            "Immerse yourself in the bustling, artsy interior with live performances. Experience the pulse of the city with every visit.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/bowl-french-dessert-garnished-with-berries-placed-book_140725-8511.jpg",
          imageAlt: "Bustling, artsy interior of the restaurant",
        },
        {
          id: "brunch-hook",
          title: "Empire Brunch: Weekend Sorted",
          descriptions: [
            "Your Sunday plans are sorted with our legendary Empire Brunch. Fresh coffee, live music, and an unmatched ambiance make for the ultimate weekend destination.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/friends-celebrating-with-music-medium-shot_23-2149395665.jpg",
          imageAlt: "Live band performing in the restaurant",
        },
        {
          id: "slow-food",
          title: "Slow Food Philosophy",
          descriptions: [
            "We focus on quality ingredients and sustainable practices. Attract a conscious foodie crowd that values true culinary craft.",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/pasta-pesto-dish-with-parmesan-basil_23-2152015852.jpg",
          imageAlt: "Close-up of fresh handmade pasta",
        },
      ]}
      title="More Than Just Food, It's an Experience"
      description="From our handcrafted Italian dishes to the lively cultural events, every moment at Eish + Malh is crafted to delight. Dive into the heart of Downtown Cairo with us."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "pizza-margherita",
          name: "Margherita Pizza",
          price: "180 EGP",
          variant: "Classic",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-pizza-with-fresh-cheese_23-2150096958.jpg",
          imageAlt: "Classic Margherita Pizza",
        },
        {
          id: "pizza-pepperoni",
          name: "Pepperoni Pizza",
          price: "220 EGP",
          variant: "Spicy",
          imageSrc: "http://img.b2bpic.net/free-photo/classic-pepperoni-pizza-tomato-sauce-melted-cheese-top_114579-2670.jpg",
          imageAlt: "Spicy Pepperoni Pizza",
        },
        {
          id: "pasta-carbonara",
          name: "Pasta Carbonara",
          price: "195 EGP",
          variant: "Creamy",
          imageSrc: "http://img.b2bpic.net/free-photo/penne-pasta-with-tomato-sauce-beef-grated-cheese_140725-1594.jpg",
          imageAlt: "Creamy Pasta Carbonara",
        },
        {
          id: "pasta-pesto",
          name: "Pasta Pesto",
          price: "175 EGP",
          variant: "Vegetarian",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-pasta-with-homemade-pesto-sauce_114579-20531.jpg",
          imageAlt: "Fresh Pesto Pasta",
        },
        {
          id: "empire-brunch",
          name: "Empire Brunch Plate",
          price: "250 EGP",
          variant: "Weekend Special",
          imageSrc: "http://img.b2bpic.net/free-photo/breakfast-setup-with-egg-sausage-dish-breads-vegetable-slices-cheese-honey-tea_140725-6512.jpg",
          imageAlt: "Gourmet Brunch Plate",
        },
        {
          id: "boutique-cocktail",
          name: "Signature Cocktail",
          price: "120 EGP",
          variant: "Handcrafted",
          imageSrc: "http://img.b2bpic.net/free-photo/water-pouring-glass-blue-yellow-wall_176420-11498.jpg",
          imageAlt: "Handcrafted Signature Cocktail",
        },
      ]}
      title="Our Signature Dishes"
      description="Explore a curated selection of our finest Italian-inspired dishes and unique beverages, crafted with passion and the freshest ingredients."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      carouselMode="buttons"
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          role: "Local Guide",
          testimonial: "Eish + Malh is a gem! The pasta is exquisite, and the atmosphere on a Sunday brunch is simply magical. A must-visit in Downtown Cairo!",
          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-friends-shaking-hands_23-2148395404.jpg",
          imageAlt: "Sarah J.",
        },
        {
          id: "2",
          name: "Ahmed M.",
          role: "Food Blogger",
          testimonial: "I'm always looking for unique culinary experiences, and Eish + Malh delivered. Their commitment to slow food and local artists truly sets them apart.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-luxury-restaurant_23-2150598415.jpg",
          imageAlt: "Ahmed M.",
        },
        {
          id: "3",
          name: "Laila K.",
          role: "Artist",
          testimonial: "Not only do they have amazing food, but their support for local live music is incredible. It’s my favorite spot to unwind and catch a show.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-spending-time-together-experiencing-time-expansion_23-2151338294.jpg",
          imageAlt: "Laila K.",
        },
        {
          id: "4",
          name: "Omar F.",
          role: "Entrepreneur",
          testimonial: "The 'Empire Brunch' is legendary for a reason. Great coffee, fantastic food, and a vibrant energy that perfectly captures the spirit of Downtown.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-eating-restaurant_23-2150491782.jpg",
          imageAlt: "Omar F.",
        },
        {
          id: "5",
          name: "Nour H.",
          role: "Traveler",
          testimonial: "Authentic Italian flavors in the heart of Cairo. Eish + Malh offers such a unique cultural blend. Truly a memorable dining experience!",
          imageSrc: "http://img.b2bpic.net/free-photo/two-happy-african-caucasian-lesbians-enjoying-nice-time-together-lunch-cozy-cafe_273609-9091.jpg",
          imageAlt: "Nour H.",
        },
        {
          id: "6",
          name: "Karim Z.",
          role: "Musician",
          testimonial: "As a musician, I appreciate venues that foster creativity. Eish + Malh is not just a restaurant; it’s a stage, a gallery, and a home for art.",
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-dining-out_23-2149187239.jpg",
          imageAlt: "Karim Z.",
        },
      ]}
      title="What Our Guests Say"
      description="Hear from our wonderful customers who have experienced the unique charm and delicious offerings of Eish + Malh."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Cairo Arts Council",
        "Slow Food Egypt",
        "Downtown Live Music",
        "The Cairo Foodie",
        "Local Brews Co.",
        "Urban Culture Hub",
        "Heritage Eats",
        "The Brunch Spot",
      ]}
      title="Our Community Partners"
      description="We are proud to collaborate with local artists, community initiatives, and passionate food organizations that share our vision for a vibrant Downtown."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "Do you offer vegetarian or vegan options?",
          content: "Yes, our menu includes a variety of vegetarian and vegan dishes, carefully crafted with fresh, local ingredients. Please inform our staff about any dietary preferences.",
        },
        {
          id: "faq-2",
          title: "How can I make a reservation?",
          content: "You can easily make a reservation through our website's contact form, or by calling us directly during opening hours. We recommend booking in advance, especially for weekend brunches and live music nights.",
        },
        {
          id: "faq-3",
          title: "What kind of live music do you feature?",
          content: "We host a diverse range of local artists, primarily focusing on jazz, blues, and contemporary Egyptian music. Check our social media for the latest schedule and artist spotlights!",
        },
        {
          id: "faq-4",
          title: "Is Eish + Malh suitable for private events?",
          content: "Absolutely! Our unique ambiance makes Eish + Malh perfect for private gatherings, corporate events, and celebrations. Please contact us to discuss your specific needs and arrangements.",
        },
        {
          id: "faq-5",
          title: "Do you have parking available?",
          content: "Being in Downtown Cairo, street parking can be limited. We recommend using ride-sharing services or public transportation. There are also several paid parking lots within a short walking distance.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our restaurant, menu, events, and services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static",
      }}
      tag="Reservations"
      title="Book Your Downtown Experience"
      description="Ready to savor authentic Italian flavors, enjoy live music, and soak in the vibrant Downtown Cairo atmosphere? Make your reservation today!"
      inputPlaceholder="Your Email Address"
      buttonText="Send Request"
      termsText="By clicking Send Request you're confirming that you agree with our Terms and Conditions."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoSrc="http://img.b2bpic.net/free-vector/bharat-stop-war-against-save-india-vs-pakistan_460848-19112.jpg"
      logoAlt="Eish + Malh Logo"
      logoText="Eish + Malh"
      copyrightText="© 2024 Eish + Malh. All rights reserved."
      socialLinks={[
        {
          icon: Facebook,
          href: "https://facebook.com/eishmalh",
          ariaLabel: "Facebook",
        },
        {
          icon: Instagram,
          href: "https://instagram.com/eishmalh",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "https://twitter.com/eishmalh",
          ariaLabel: "Twitter",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
