"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Award, Briefcase, CheckCircle, Database, Headphones, Lightbulb, LineChart, Sparkles, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Services",
          id: "#features",
        },
        {
          name: "Clients",
          id: "#social-proof",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Pricing",
          id: "#pricing",
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
      brandName="Service Pro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      imagePosition="right"
      title="Premium Service Built for Your Success"
      description="We transform challenges into measurable results. Our proven methodologies and dedicated experts ensure unparalleled growth and efficiency for your business. Join our growing community of over 500 satisfied clients who trust us with their vision."
      kpis={[
        {
          value: "500+",
          label: "Satisfied Clients",
        },
        {
          value: "10+",
          label: "Years in Business",
        },
        {
          value: "98%",
          label: "Success Rate",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Start Your Free Consultation",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-outdoor-businessman_23-2148763884.jpg",
          alt: "Client Avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-entrepreneur-working-financial-forecasts-his-desk_482257-123891.jpg",
          alt: "Client Avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/successful-happy-business-team_53876-20937.jpg",
          alt: "Client Avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-confident-black-businesswoman-office_637285-9877.jpg",
          alt: "Client Avatar 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/multi-ethnic-business-team_1098-22110.jpg",
          alt: "Client Avatar 5",
        },
      ]}
      avatarText="Trusted by industry leaders"
      imageSrc="http://img.b2bpic.net/free-photo/empty-boardroom-space-within-enterprise-designed-productivity_482257-114714.jpg"
      imageAlt="Professionals collaborating in a modern office, symbolizing premium service"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text-icon",
          text: "Data-Driven Strategies",
          icon: Database,
        },
        {
          type: "text-icon",
          text: "Client Success Focused",
          icon: Award,
        },
        {
          type: "text-icon",
          text: "Innovative Solutions",
          icon: Lightbulb,
        },
        {
          type: "text-icon",
          text: "Expert Team Support",
          icon: Users,
        },
        {
          type: "text-icon",
          text: "Guaranteed Satisfaction",
          icon: CheckCircle,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="left"
      title="Our Commitment to Your Growth"
      description="Dedicated to empowering businesses, we combine innovative strategies with a client-centric approach to deliver sustainable value. Our team comprises industry veterans committed to understanding and exceeding your unique objectives."
      bulletPoints={[
        {
          title: "Client-Centric Approach",
          description: "Your success is our priority, guiding every strategy and solution.",
          icon: Users,
        },
        {
          title: "Measurable Impact",
          description: "We focus on outcomes, delivering tangible and quantifiable results.",
          icon: LineChart,
        },
        {
          title: "Expert Team",
          description: "Benefit from the insights and experience of our seasoned professionals.",
          icon: Briefcase,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/value-personal-development-stock-market-stock_53876-132288.jpg"
      imageAlt="Business growth chart with a hand holding a growing plant, symbolizing commitment to growth"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "Custom Solution Development",
          description: "Crafting bespoke software and systems that align perfectly with your operational requirements.",
          imageSrc: "http://img.b2bpic.net/free-photo/engineers-building-contractor-monitoring-solar-panel-systems_482257-125990.jpg",
          imageAlt: "Custom software development code on screen",
        },
        {
          title: "Advanced Data Analytics",
          description: "Transforming raw data into actionable insights to inform strategic decisions and optimize performance.",
          imageSrc: "http://img.b2bpic.net/free-photo/analytics-comparison-information-networking-concept_53876-15846.jpg",
          imageAlt: "Data analytics dashboard with charts",
        },
        {
          title: "Strategic Digital Marketing",
          description: "Elevating your brand's online presence and engaging your target audience through effective campaigns.",
          imageSrc: "http://img.b2bpic.net/free-photo/people-hangout-together-coffee-shop_53876-167084.jpg",
          imageAlt: "Digital marketing strategy with charts and social media icons",
        },
      ]}
      title="Our Core Service Offerings"
      description="Tailored solutions designed to meet your business needs and drive significant results."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "99.9%",
          title: "Uptime Reliability",
          description: "Ensuring your services are always available and performing optimally.",
          icon: Zap,
        },
        {
          id: "m2",
          value: "200%",
          title: "Avg. Client ROI",
          description: "Our strategies consistently deliver substantial returns on investment for our partners.",
          icon: TrendingUp,
        },
        {
          id: "m3",
          value: "24/7",
          title: "Dedicated Support",
          description: "Round-the-clock assistance from our expert team, whenever you need it.",
          icon: Headphones,
        },
      ]}
      title="Driving Success with Data-Backed Results"
      description="Our commitment to excellence is reflected in the numbers. We measure what matters to ensure your growth."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "GlobalCorp",
        "InnovateX",
        "FutureTech",
        "Pioneer Solutions",
        "Synergy Dynamics",
        "Apex Innovations",
        "Velocity Ventures",
      ]}
      title="Trusted by Industry Leaders"
      description="Partnerships built on trust and mutual success across diverse sectors. Our clients achieve remarkable results."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          name: "Sarah Johnson",
          handle: "@sarahj",
          testimonial: "Service Pro transformed our operations. Their team is incredibly knowledgeable and delivered results beyond our expectations. Highly recommended!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-taking-selfie-showing-thumb-up_23-2148056111.jpg",
          imageAlt: "Sarah Johnson portrait",
        },
        {
          id: "t2",
          name: "Michael Chen",
          handle: "@michaelc",
          testimonial: "The insights provided by Service Pro were game-changing for our marketing strategy. We saw a significant increase in engagement and conversions.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-people_23-2151099223.jpg",
          imageAlt: "Michael Chen portrait",
        },
        {
          id: "t3",
          name: "Emily Rodriguez",
          handle: "@emilyr",
          testimonial: "Their custom solution development is top-notch. They understood our complex needs and built a system that perfectly streamlined our workflow.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-wearing-pajamas-while-sitting-bed_273609-13215.jpg",
          imageAlt: "Emily Rodriguez portrait",
        },
        {
          id: "t4",
          name: "David Kim",
          handle: "@davidk",
          testimonial: "Exceptional support and measurable ROI. Service Pro is a partner you can truly rely on for consistent growth and innovative solutions.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-hispanic-cheerful-female-with-curly-hair_181624-53321.jpg",
          imageAlt: "David Kim portrait",
        },
        {
          id: "t5",
          name: "Jessica Lee",
          handle: "@jessical",
          testimonial: "From initial consultation to project completion, the professionalism and expertise of Service Pro shone through. A truly outstanding experience.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/male-social-worker-taking-care-old-woman_23-2149031315.jpg",
          imageAlt: "Jessica Lee portrait",
        },
      ]}
      showRating={true}
      title="What Our Clients Say"
      description="Hear directly from businesses that have achieved exceptional results through our collaboration and expertise."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Starter",
          badgeIcon: Sparkles,
          price: "$999/month",
          subtitle: "Ideal for small businesses",
          buttons: [
            {
              text: "Get Started",
              href: "#contact",
            },
          ],
          features: [
            "Basic Consultation",
            "Standard Analytics Reports",
            "Email Support",
          ],
        },
        {
          id: "pro",
          badge: "Professional",
          badgeIcon: Star,
          price: "$2499/month",
          subtitle: "For growing enterprises",
          buttons: [
            {
              text: "Choose Pro",
              href: "#contact",
            },
          ],
          features: [
            "Advanced Strategy Sessions",
            "Customized Data Dashboards",
            "Priority Chat Support",
          ],
        },
        {
          id: "enterprise",
          badge: "Enterprise",
          badgeIcon: Award,
          price: "Custom",
          subtitle: "Tailored for large organizations",
          buttons: [
            {
              text: "Contact Sales",
              href: "#contact",
            },
          ],
          features: [
            "Dedicated Account Manager",
            "Full-Scale Integrations",
            "24/7 Phone & On-site Support",
          ],
        },
      ]}
      title="Transparent Pricing, Tangible Value"
      description="Choose a plan that aligns with your business goals. No hidden fees, just clear paths to success tailored to your needs."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What kind of services do you offer?",
          content: "We offer a wide range of services including custom solution development, advanced data analytics, and strategic digital marketing. Our goal is to provide comprehensive solutions tailored to your business needs.",
        },
        {
          id: "q2",
          title: "How does the free consultation work?",
          content: "Our free consultation is an opportunity for us to understand your business challenges and goals. We'll discuss potential solutions and how we can add value, with no obligation.",
        },
        {
          id: "q3",
          title: "What makes your service different?",
          content: "Our client-centric approach, commitment to measurable impact, and team of industry experts set us apart. We focus on delivering tangible results and building long-term partnerships.",
        },
      ]}
      sideTitle="Your Questions, Answered"
      sideDescription="Browse our frequently asked questions for quick answers or reach out if you need further assistance. We're here to help you every step of the way."
      buttons={[
        {
          text: "Contact Support",
          href: "#contact",
        },
      ]}
      faqsAnimation="slide-up"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get in Touch"
      title="Ready to Elevate Your Business?"
      description="Schedule your free consultation today to discover how we can help you achieve your goals and drive measurable success."
      buttons={[
        {
          text: "Start Your Free Consultation",
          href: "#contact",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Solutions",
          items: [
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Case Studies",
              href: "#testimonials",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Team",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Blog",
              href: "#",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Support",
              href: "#contact",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Service Pro. All rights reserved."
      bottomRightText="Privacy Policy · Terms of Service"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
