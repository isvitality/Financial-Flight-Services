import { SeasonalTheme } from '../hooks/useSeasonalTheme';

// Define a type for a single theme's content
type ThemedAsset = {
  heroBackground: string;
  accentImage: string;
  quote: {
    text: string;
    cite: string;
  };
  video: {
    thumbnail: string;
    title: string;
    description: string;
  };
};

const HERO_IMAGE_URL = 'https://geotapmedia.com/FinancialFlightServices/images/hero.png';

// Create a mapping of theme to assets
export const themeAssets: Record<SeasonalTheme | 'none', ThemedAsset> = {
  // Seasons
  winter: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-winter.png',
    quote: {
      text: "A well-defined plan is the runway from which your financial goals can take flight. Let's prepare for takeoff.",
      cite: "Financial Flight LLC"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/159887/pexels-photo-159887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Navigating Financial Winters",
      description: "Winter is a time for thoughtful planning. See how we help clients build resilient financial strategies to navigate any season with confidence."
    }
  },
  spring: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-spring.png',
    quote: {
      text: "An investment in knowledge pays the best interest. Let's grow your financial understanding this spring.",
      cite: "Benjamin Franklin (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Planting the Seeds of Financial Growth",
      description: "Spring is about new beginnings. Discover our strategies for nurturing your investments and cultivating a prosperous financial future."
    }
  },
  summer: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-summer.png',
     quote: {
      text: "The future is not something we enter. The future is something we create. Let's build yours with clarity and purpose.",
      cite: "Leonard I. Sweet (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Charting Your Brightest Future",
      description: "Let's use the long summer days to accelerate your goals. Learn how we help clients build a sunny and secure financial outlook."
    }
  },
  early_fall: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-early_fall.png',
     quote: {
      text: "Autumn shows us how beautiful it is to let things go. Let go of financial stress and let us be your guide.",
      cite: "Unknown (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Harvesting the Rewards of Smart Planning",
      description: "As the seasons change, it's a great time to review your portfolio. See how we help clients reap the benefits of year-long strategic decisions."
    }
  },
  // Holidays (will often override seasons)
  new_year: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-new_year.png',
     quote: {
      text: "The new year stands before us, like a chapter in a book, waiting to be written. Let's write a story of financial success together.",
      cite: "Melody Beattie (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Your Best Financial Year Yet",
      description: "A new year means new opportunities. Watch how we help clients set and achieve ambitious financial resolutions with a clear, confident plan."
    }
  },
  valentines: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-valentines.png',
    quote: {
      text: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart. Let's protect what you love.",
      cite: "Helen Keller (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "A Legacy of Love",
      description: "This Valentine's Day, give the gift of security. Learn about financial planning as the ultimate expression of care for your loved ones' future."
    }
  },
  st_patricks: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-st_patricks.png',
    quote: {
      text: "Luck is what happens when preparation meets opportunity. We'll handle the preparation, so you're ready for every opportunity.",
      cite: "Seneca (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/7709292/pexels-photo-7709292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Create Your Own Financial Luck",
      description: "Don't rely on a pot of gold at the end of the rainbow. See how our strategic planning helps you build a future that's fortunate by design."
    }
  },
  easter: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-easter.png',
    quote: {
      text: "Easter is a symbol of hope, renewal, and new life. It's the perfect time to renew your financial strategy with fresh perspective.",
      cite: "Janine di Giovanni (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "A Fresh Start for Your Finances",
      description: "Easter is a time of new beginnings. Explore how our services can bring renewed hope and strategic growth to your financial portfolio."
    }
  },
  mothers_day: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-mothers_day.png',
    quote: {
      text: "A mother's love is the fuel that enables a normal human being to do the impossible. We're here to help support her journey.",
      cite: "Marion C. Garretty (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/3760810/pexels-photo-3760810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Honoring Mom with a Secure Future",
      description: "For the woman who gave you everything, plan a future that gives back. See how our services help build a lasting legacy for the matriarchs of your family."
    }
  },
  fathers_day: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-fathers_day.png',
    quote: {
      text: "A father is someone you look up to no matter how tall you grow. We can help you secure his legacy and your family's future.",
      cite: "Unknown (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "The Provider's Plan",
      description: "This Father's Day, we honor the providers. Learn how strategic financial planning can protect and strengthen your family's foundation for generations."
    }
  },
  patriotic: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-patriotic.png',
    quote: {
      text: "Freedom is never given; it is won. The same is true for financial freedom. Let's chart your course.",
      cite: "A. Philip Randolph (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Your Declaration of Financial Independence",
      description: "Celebrate freedom by taking control of your financial future. Discover the clear, actionable strategies that can lead you to true financial independence."
    }
  },
  labor_day: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-labor_day.png',
    quote: {
      text: "All labor that uplifts humanity has dignity and importance. Your hard work deserves a plan that honors it.",
      cite: "Martin Luther King, Jr. (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Rewarding Your Hard Work",
      description: "Your hard work is your greatest asset. On Labor Day, learn how we help turn your efforts into a secure and prosperous future."
    }
  },
  halloween: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-halloween.png',
    quote: {
      text: "There is nothing scarier than a missed opportunity. Don't be haunted by financial 'what-ifs'—let's plan ahead.",
      cite: "Christina Grimmie (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Don't Be Spooked by Your Finances",
      description: "Taxes and investments can seem scary, but they don't have to be. See how we unmask the complexities of finance to make it a treat, not a trick."
    }
  },
  thanksgiving: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-thanksgiving.png',
    quote: {
      text: "Gratitude is the healthiest of all human emotions. We're grateful for the trust our clients place in us every day.",
      cite: "Zig Ziglar (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "A Harvest of Gratitude",
      description: "This Thanksgiving, we're grateful for our clients. See the stories of success and security that we've had the privilege to be a part of."
    }
  },
  christmas: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-christmas.png',
    quote: {
      text: "The best of all gifts around any Christmas tree is the presence of a happy family. Let's work to protect that gift.",
      cite: "Burton Hillis (adapted)"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "The Gift of a Secure Future",
      description: "This holiday season, give a gift that lasts a lifetime. Learn how financial planning can bring peace of mind and security to your family for years to come."
    }
  },
  // Default/Fallback
  none: {
    heroBackground: HERO_IMAGE_URL,
    accentImage: 'https://geotapmedia.com/VictoryDiamondFinancialServices/images/theme-none.png',
    quote: {
      text: "Clarity in finance isn't just about numbers; it's about confidence in your future. Let's build that together.",
      cite: "Financial Flight LLC"
    },
    video: {
      thumbnail: 'https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: "Our Approach to Your Success",
      description: "Discover how we partner with you to create clear, actionable financial plans that support your goals and provide peace of mind."
    }
  },
};

// Function to safely get assets for a theme
export const getThemeAssets = (theme: SeasonalTheme): ThemedAsset => {
  return themeAssets[theme] || themeAssets['none'];
};