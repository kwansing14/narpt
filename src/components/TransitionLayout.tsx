'use client';

import { createContext, useState, useContext } from 'react';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface Context {
  isTransitioning: boolean;
  start: () => void;
  end: () => void;
  delay: number;
  setDelay: (delay: number) => void;
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
  const [delay, setDelay] = useState(300);
  const start = () => setIsTransitioning(true);
  const end = () => setIsTransitioning(false);
  const pathname = usePathname();

  useEffect(() => {
    start?.();
  }, [pathname]);

  const providerValue = {
    isTransitioning,
    start,
    end,
    delay,
    setDelay,
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
interface useTransitionProps {
  delay?: number;
}
export const useTransition = (prop: useTransitionProps) => {
  const { setDelay } = useContext(PageContext);
  useEffect(() => {
    setDelay?.(prop.delay || 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prop.delay]);
  return useContext(PageContext);
};
