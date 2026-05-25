import type { RefObject } from 'react';

interface SliderDotsProps {
  paginationRef: RefObject<HTMLDivElement | null>;
}

const SliderDots = ({ paginationRef }: SliderDotsProps) => (
  <div className="slider-dots-wrap">
    <div
      ref={paginationRef}
      className="slider-dots"
      aria-label="Paginación del slider"
    />
  </div>
);

export default SliderDots;
