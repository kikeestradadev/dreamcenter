import { useRef, useCallback, useLayoutEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';

const bindPagination = (swiper: SwiperType, el: HTMLElement | null) => {
  if (!el || typeof swiper.params.pagination !== 'object' || !swiper.params.pagination) return;

  swiper.params.pagination.el = el;
  swiper.pagination.destroy();
  swiper.pagination.init();
  swiper.pagination.render();
  swiper.pagination.update();
};

export const useSliderPagination = () => {
  const paginationRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const onSwiperReady = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  useLayoutEffect(() => {
    const swiper = swiperRef.current;
    const el = paginationRef.current;
    if (swiper && el) {
      bindPagination(swiper, el);
    }
  });

  return { paginationRef, onSwiperReady };
};
