'use client';

import { createContext, useState, useContext } from 'react';

interface Context {
  isTransitioning: boolean;
  start: () => void;
  end: () => void;
}
/**
 *  create Context
 */
const PageContext = createContext<Partial<Context>>({});
/**
 * Provider
 */
export const TransitionLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const start = () => setIsTransitioning(true);
  const end = () => setIsTransitioning(false);

  const providerValue = {
    isTransitioning,
    start,
    end,
  };
  return (
    <PageContext.Provider value={providerValue}>
      {children}
    </PageContext.Provider>
  );
};
/**
 * export
 */
export const useTransition = () => useContext(PageContext);
