import type { RefObject } from 'react';
import type { Swiper as SwiperType } from 'swiper';

interface SliderNavButtonsProps {
  swiperRef: RefObject<SwiperType | null>;
}

const ChevronIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
    aria-hidden="true"
  >
    {direction === 'left' ? (
      <path d="m15 18-6-6 6-6" />
    ) : (
      <path d="m9 18 6-6-6-6" />
    )}
  </svg>
);

const SliderNavButtons = ({ swiperRef }: SliderNavButtonsProps) => {
  return (
    <>
      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        className="slider-nav slider-nav--prev absolute z-20 hidden md:flex"
        aria-label="Anterior"
      >
        <ChevronIcon direction="left" />
      </button>

      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        className="slider-nav slider-nav--next absolute z-20 hidden md:flex"
        aria-label="Siguiente"
      >
        <ChevronIcon direction="right" />
      </button>
    </>
  );
};

export default SliderNavButtons;
