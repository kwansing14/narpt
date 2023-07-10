'use client';
import { useTransition } from './TransitionLayout';
import { useEffect, useRef, useMemo } from 'react';
import { usePathname } from 'next/navigation';

interface TransitionDivProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight';
}

export const TransitionDiv: React.FC<TransitionDivProps> = ({
  children,
  className,
  animation,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isTransitioning } = useTransition({});

  const divHeight = useMemo(() => {
    switch (animation) {
      case 'fadeUp':
        return -20;
      case 'fadeDown':
        return 20;
      default:
        return 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current?.clientHeight]);

  const divWidth = useMemo(() => {
    switch (animation) {
      case 'fadeLeft':
        return -20;
      case 'fadeRight':
        return 20;
      default:
        return 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current?.clientWidth]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: 'opacity 0.3s ease-in-out, translate 0.3s ease-in-out',
        opacity: isTransitioning ? 1 : 0,
        translate: isTransitioning ? '0 0' : `${divWidth}px ${divHeight}px`,
      }}
    >
      {children}
    </div>
  );
};
