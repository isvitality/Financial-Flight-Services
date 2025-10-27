import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// --- Date Simulation Logic ---

const getFloatingDate = (year: number, month: number, dayOfWeek: number, week: number): Date => {
    // dayOfWeek: 0=Sun, 1=Mon, ..., 6=Sat
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const firstOccurrence = 1 + (dayOfWeek - firstDayOfMonth + 7) % 7;
    const date = firstOccurrence + (week - 1) * 7;
    return new Date(year, month, date);
};

const themeDateMap: { [key: string]: (year: number) => Date } = {
  'PEAK_SEASON': (year) => new Date(year, 1, 15), // Feb 15
  'OFF_SEASON': (year) => new Date(year, 5, 15), // Jun 15
  'PRE_SEASON': (year) => new Date(year, 9, 15), // Oct 15
  'winter': (year) => new Date(year, 0, 15), // Jan 15
  'new_year': (year) => new Date(year, 0, 1), // Jan 1
  'valentines': (year) => new Date(year, 1, 14), // Feb 14
  'st_patricks': (year) => new Date(year, 2, 17), // Mar 17
  'spring': (year) => new Date(year, 2, 25), // Mar 25
  'easter': (year) => new Date(year, 3, 10), // Apr 10
  'mothers_day': (year) => getFloatingDate(year, 4, 0, 2), // 2nd Sunday in May
  'fathers_day': (year) => getFloatingDate(year, 5, 0, 3), // 3rd Sunday in June
  'summer': (year) => new Date(year, 7, 15), // Aug 15
  'patriotic': (year) => new Date(year, 6, 4), // July 4
  'labor_day': (year) => getFloatingDate(year, 8, 1, 1), // 1st Monday in Sep
  'early_fall': (year) => new Date(year, 8, 15), // Sep 15
  'halloween': (year) => new Date(year, 9, 31), // Oct 31
  'thanksgiving': (year) => getFloatingDate(year, 10, 4, 4), // 4th Thursday in Nov
  'christmas': (year) => new Date(year, 11, 25), // Dec 25
};

const getInitialDate = (): { date: Date, isSimulating: boolean } => {
    try {
        const themeOverride = localStorage.getItem('vfs-theme-override');
        if (themeOverride && themeDateMap[themeOverride]) {
            return {
                date: themeDateMap[themeOverride](new Date().getFullYear()),
                isSimulating: true
            };
        }
    } catch (e) {
        console.warn("Could not access localStorage for theme override.");
    }
    return { date: new Date(), isSimulating: false };
};


// --- React Context Definition ---

interface SimulatedDateContextType {
  simulatedDate: Date;
  setThemeOverride: (theme: string) => void;
  isSimulating: boolean;
}

const SimulatedDateContext = createContext<SimulatedDateContextType | undefined>(undefined);

export const SimulatedDateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [{ date, isSimulating }, setDateState] = useState(getInitialDate);
    
    useEffect(() => {
        if (isSimulating) return;
        
        const timer = setInterval(() => {
            setDateState({ date: new Date(), isSimulating: false });
        }, 60000); // Update every minute
        
        return () => clearInterval(timer);
    }, [isSimulating]);
    
    const setThemeOverride = (theme: string) => {
        try {
            if (theme === 'none') {
                localStorage.removeItem('vfs-theme-override');
                setDateState({ date: new Date(), isSimulating: false });
            } else {
                localStorage.setItem('vfs-theme-override', theme);
                const newDate = themeDateMap[theme](new Date().getFullYear());
                setDateState({ date: newDate, isSimulating: true });
            }
        } catch (e) {
            console.error("Failed to set theme override in localStorage", e);
        }
    };
    
    const value = {
        simulatedDate: date,
        setThemeOverride,
        isSimulating
    };
    
    return (
        <SimulatedDateContext.Provider value={value}>
            {children}
        </SimulatedDateContext.Provider>
    );
};

export const useSimulatedDateContext = (): SimulatedDateContextType => {
    const context = useContext(SimulatedDateContext);
    if (!context) {
        throw new Error('useSimulatedDateContext must be used within a SimulatedDateProvider');
    }
    return context;
};
