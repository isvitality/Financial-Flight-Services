
import { useSimulatedDate } from './useSimulatedDate';

export type SeasonalTheme = 
  | 'winter'          // Neutral: Jan/Feb
  | 'winter_holiday'  // Dec: Santa/Reindeer allowed
  | 'spring'
  | 'summer'
  | 'early_fall'
  | 'halloween'
  | 'valentines_day'
  | 'st_patricks'
  | 'new_year'
  | 'easter'
  | 'mothers_day'
  | 'fathers_day'
  | 'patriotic'
  | 'labor_day'
  | 'thanksgiving'
  | 'none';

interface AccentImage {
  src: string;
  alt: string;
}

interface SeasonalThemeInfo {
  theme: SeasonalTheme;
  accents: AccentImage[];
}

const ACCENT_BASE_PATH = 'https://geotapmedia.com/VictoryFinancialServices/images/accents/';

const seasonalAccents: Record<SeasonalTheme, AccentImage[]> = {
    'winter': [
        { src: `${ACCENT_BASE_PATH}patrioticstar.png`, alt: 'Star accent' }
    ],
    'winter_holiday': [
        { src: `${ACCENT_BASE_PATH}reindeer.png`, alt: 'Reindeer accent' },
        { src: `${ACCENT_BASE_PATH}santaclause.png`, alt: 'Santa Claus accent' }
    ],
    'valentines_day': [
        { src: `${ACCENT_BASE_PATH}valentines.png`, alt: 'Valentine heart accent' }
    ],
    'st_patricks': [
        { src: `${ACCENT_BASE_PATH}stpatricksday.png`, alt: 'Shamrock accent' }
    ],
    'halloween': [
        { src: `${ACCENT_BASE_PATH}pumpkin.png`, alt: 'Pumpkin accent' },
        { src: `${ACCENT_BASE_PATH}spiderweb.png`, alt: 'Spiderweb accent' }
    ],
    'early_fall': [
        { src: `${ACCENT_BASE_PATH}autumnleaf.png`, alt: 'Autumn leaf accent' },
        { src: `${ACCENT_BASE_PATH}acorn.png`, alt: 'Acorn accent' }
    ],
    'spring': [
        { src: `${ACCENT_BASE_PATH}cherryblossom.png`, alt: 'Cherry blossom accent' }
    ],
    'summer': [
        { src: `${ACCENT_BASE_PATH}sun.png`, alt: 'Sun accent' },
        { src: `${ACCENT_BASE_PATH}palmleaf.png`, alt: 'Palm leaf accent' }
    ],
    // FIX: Add missing themes to satisfy the Record<SeasonalTheme, AccentImage[]> type.
    'new_year': [],
    'easter': [],
    'mothers_day': [],
    'fathers_day': [],
    'patriotic': [],
    'labor_day': [],
    'thanksgiving': [],
    'none': []
};

export const useSeasonalTheme = (): SeasonalThemeInfo => {
  const now = useSimulatedDate();
  const month = now.getMonth(); // 0-11
  const day = now.getDate(); // 1-31

  let theme: SeasonalTheme = 'none';

  // --- Priority 1: Holiday Windows ---
  // Dec 1st - 31st: winter_holiday
  if (month === 11) {
    theme = 'winter_holiday';
  }
  // Feb 1st - 15th: valentines_day
  else if (month === 1 && day >= 1 && day <= 15) {
    theme = 'valentines_day';
  }
  // Mar 10th - 20th: st_patricks
  else if (month === 2 && day >= 10 && day <= 20) {
    theme = 'st_patricks';
  }
  // Oct 20th - 31st: halloween
  else if (month === 9 && day >= 20 && day <= 31) {
    theme = 'halloween';
  }

  // --- Priority 2: Neutral Fallbacks ---
  if (theme === 'none') {
    // Jan or Feb (and NOT Feb 1-15)
    if (month === 0 || month === 1) {
      theme = 'winter';
    }
    // Priority 3: Standard Seasons
    else if (month >= 2 && month <= 4) {
      theme = 'spring';
    }
    else if (month >= 5 && month <= 7) {
      theme = 'summer';
    }
    else if (month >= 8 && month <= 10) {
      theme = 'early_fall';
    }
  }

  const accents = seasonalAccents[theme] || [];

  return { theme, accents };
};
