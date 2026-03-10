export interface PageContent {
  banner: {
    title: string;
    subtitle: string;
    buttonText?: string;
  };
  helpBanner?: {
    title: string;
    subtitle: string;
  };
  about?: {
    title: string;
    content: string[];
    features: string[];
  };
  features?: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
}

export const pageContent: Record<string, PageContent> = {
  home: {
    banner: {
      title: "The leader in\nquality custom T-Shirts",
      subtitle: "Turn your ideas into premium products that leave a lasting impression",
      buttonText: "Shop Now"
    },
    helpBanner: {
      title: "We're Here to Help",
      subtitle: "Need product info or support? Contact us anytime.\nYour satisfaction is our priority."
    }
  },
  
  'all-tshirt': {
    banner: {
      title: "The leader in\nquality custom T-Shirts",
      subtitle: "Turn your ideas into premium T-Shirts that leave a lasting impression",
      buttonText: "Shop T-Shirts"
    },
    helpBanner: {
      title: "We're Here to Help",
      subtitle: "Need T-Shirt design help? Contact us anytime.\nYour satisfaction is our priority."
    }
  },

  'all-cap': {
    banner: {
      title: "The leader in\nquality custom Caps",
      subtitle: "Turn your ideas into premium Caps that leave a lasting impression",
      buttonText: "Shop Caps"
    },
    helpBanner: {
      title: "We're Here to Help",
      subtitle: "Need Cap design help? Contact us anytime.\nYour satisfaction is our priority."
    }
  },

  'all-mug': {
    banner: {
      title: "The leader in\nquality custom Mugs",
      subtitle: "Turn your ideas into premium Mugs that leave a lasting impression",
      buttonText: "Shop Mugs"
    },
    helpBanner: {
      title: "We're Here to Help",
      subtitle: "Need Mug design help? Contact us anytime.\nYour satisfaction is our priority."
    }
  },

  about: {
    banner: {
      title: "We're Here to Help",
      subtitle: "Need product info or support? Contact us anytime.\nYour satisfaction is our priority."
    },
    about: {
      title: "About OnePrint",
      content: [
        "We're not just here to print your merch – we're here to power your vision. At OnePrint, we believe creativity should be effortless, fun, and full of possibilities. That's why we built a print-on-demand platform made for new generation of designers, influencers, hustlers, artists, and side-hustlers.",
        "Whether you're printing your art on a hoodie, starting a streetwear brand from your dorm, or making custom gifts for your crew – we're here for all of it.",
        "No upfront costs. No inventory stress. No gatekeepers. Just your ideas, our platform, and unlimited potential."
      ],
      features: [
        "Ready T-Shirt Design",
        "Design. Press. Impress.",
        "Turning Heat into Art."
      ]
    },
    features: {
      title: "Why OnePrint Fuels Your Success",
      items: [
        {
          icon: "/images/landingPage/FeaturesSection/1.png",
          title: "Vibrant Quality",
          description: "Our advanced heat press ensures colors pop and prints last, turning heads and driving sales."
        },
        {
          icon: "/images/landingPage/FeaturesSection/2.png",
          title: "Eco-Friendly",
          description: "Sustainable materials that resonate with conscious buyers and boost your brand's appeal."
        },
        {
          icon: "/images/landingPage/FeaturesSection/3.png",
          title: "Fast Turnaround",
          description: "Lightning-fast printing and shipping to keep your customers coming back for more."
        },
        {
          icon: "/images/landingPage/FeaturesSection/4.png",
          title: "Easy Design Tools",
          description: "Upload, preview, and perfect your designs in seconds with our intuitive platform."
        }
      ]
    }
  },

  mission: {
    banner: {
      title: "Mission Statement",
      subtitle: "To empower creators of all sizes to launch, scale, and profit from their ideas – without limits. We make merch easy, impactful, and accessible. One design, one link, one print at a time."
    },
    about: {
      title: "Mission Statement",
      content: [
        "To empower creators of all sizes to launch, scale, and profit from their ideas – without limits. We make merch easy, impactful, and accessible. One design, one link, one print at a time."
      ],
      features: [
        "Ready T-Shirt Design",
        "Design. Press. Impress.",
        "Turning Heat into Art."
      ]
    }
  },

  vision: {
    banner: {
      title: "Vision Statement", 
      subtitle: "To empower creators to design, launch, and sell without limits – turning bold ideas into products that move people."
    },
    about: {
      title: "Vision Statement",
      content: [
        "To empower creators to design, launch, and sell without limits – turning bold ideas into products that move people."
      ],
      features: [
        "Ready T-Shirt Design",
        "Design. Press. Impress.",
        "Turning Heat into Art."
      ]
    }
  },

  values: {
    banner: {
      title: "Our Values",
      subtitle: "At OnePrint, our values guide every decision we make and every product we craft. They define who we are, how we serve our customers, and how we shape the future of printing."
    },
    about: {
      title: "Our Values",
      content: [
        "At OnePrint, our values guide every decision we make and every product we craft. They define who we are, how we serve our customers, and how we shape the future of printing."
      ],
      features: [
        "We champion creativity as the heart of everything we do. We believe in transforming ideas into beautiful, tangible prints that inspire and elevate.",
        "Quality Matters",
        "We never compromise on quality. Every product we deliver—from t-shirts to custom prints—meets the highest standards of craftsmanship and care.",
        "Customer-Centric",
        "Your vision is our priority. We work closely with you to bring your ideas to life, ensuring a seamless, satisfying experience from start to finish.",
        "Sustainability Always",
        "We are committed to sustainable printing practices, using eco-friendly materials and processes wherever possible. Because we believe in leaving a positive mark on the planet.",
        "Integrity & Transparency",
        "Honesty is the backbone of our business. We communicate openly, deliver on our promises, and build trust with every interaction.",
        "Innovation & Adaptability",
        "In a fast-moving world, we embrace innovation and adapt to new challenges, always finding fresh ways to bring your designs to life."
      ]
    }
  },

  'why-choose-us': {
    banner: {
      title: "Why Choose Us",
      subtitle: "At OnePrint, we combine top-tier materials with efficient production to deliver exceptional prints—on time, every time. From custom designs to flawless fulfillment, OnePrint ensures consistency, precision, and customer satisfaction at every step."
    },
    features: {
      title: "Why Choose OnePrint",
      items: [
        {
          icon: "/images/landingPage/FeaturesSection/1.png",
          title: "Choose your product",
          description: "We'll Design, print & ship it to your door!"
        },
        {
          icon: "/images/landingPage/FeaturesSection/2.png", 
          title: "Affordable Price",
          description: "No minimum order requirements"
        },
        {
          icon: "/images/landingPage/FeaturesSection/3.png",
          title: "Fast delivery", 
          description: "Fast shipping nationwide"
        },
        {
          icon: "/images/landingPage/FeaturesSection/4.png",
          title: "Secure Payment",
          description: "We confirm that payment systems are totally secure"
        }
      ]
    }
  },

  contact: {
    banner: {
      title: "We're Here to Help",
      subtitle: "Need product info or support? Contact us anytime.\nYour satisfaction is our priority."
    }
  }
};

export function getPageContent(pageType: string): PageContent {
  return pageContent[pageType] || pageContent.home;
}
