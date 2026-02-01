import React from 'react';
import { useSeasonalTheme } from '../hooks/useSeasonalTheme';
import { 
  FallingLeaves, 
  Snowfall, 
  HalloweenSpirits, 
  SpringBlossoms, 
  SummerShine, 
  Fireworks, 
  FallingHearts,
  FallingClovers
} from './seasonal';

const SeasonalOverlay: React.FC = () => {
  const { theme } = useSeasonalTheme();

  const renderTheme = () => {
    switch (theme) {
      case 'early_fall':
        return <FallingLeaves />;
      case 'halloween':
        return <HalloweenSpirits />;
      case 'winter':
      case 'winter_holiday':
        return <Snowfall />;
      case 'valentines_day':
        return <FallingHearts />;
      case 'spring':
        return <SpringBlossoms />;
      case 'st_patricks':
        return <FallingClovers />;
      case 'summer':
        return <SummerShine />;
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full z-20 pointer-events-none" aria-hidden="true">
      {renderTheme()}
    </div>
  );
};

export default SeasonalOverlay;