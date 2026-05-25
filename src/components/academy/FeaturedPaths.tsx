import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import type { StudyPath } from '../../data/types';
import { getPathDisplayImage } from '../../data/paths';
import { assetUrl } from '../../utils/assetUrl';
import SliderNavButtons from './SliderNavButtons';
import SliderDots from './SliderDots';
import { academySliderModules, academySliderPagination } from './sliderOptions';
import { useSliderPagination } from './useSliderPagination';

import 'swiper/css';

interface FeaturedPathsProps {
  paths: StudyPath[];
  title?: string;
  subtitle?: string;
  filterKey?: string;
  linkPrefix?: string;
}

const FeaturedPaths = ({
  paths,
  title = 'Rutas de estudio destacadas',
  subtitle = 'Planes guiados para llegar de cero a experto',
  filterKey = '',
  linkPrefix = '/rutas',
}: FeaturedPathsProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const { paginationRef, onSwiperReady } = useSliderPagination();

  return (
    <section className="course-row group/row relative mb-10 px-4 md:px-8 lg:px-12">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white md:text-xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-white/50">{subtitle}</p>}
      </div>

      <div className="relative">
        <SliderNavButtons swiperRef={swiperRef} />
        <div className="course-row__slider course-row__slider--home">
          <Swiper
            key={filterKey}
            modules={academySliderModules}
            pagination={academySliderPagination}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              onSwiperReady(swiper);
            }}
            slidesPerView="auto"
            spaceBetween={16}
            breakpoints={{
              640: { spaceBetween: 16 },
              960: { spaceBetween: 16 },
            }}
            className="course-row__swiper"
          >
            {paths.map((path) => {
              const displayImage = getPathDisplayImage(path);
              const hasBanner = Boolean(path.bannerImage);

              return (
                <SwiperSlide key={path.id} className="!h-auto !w-[500px] shrink-0">
                  <Link
                    to={`${linkPrefix}/${path.slug}`}
                    className="slider-path-card group/path block overflow-hidden rounded-xl border border-white/5 bg-brand-surface transition hover:border-brand-cyan/30 hover:shadow-xl hover:shadow-brand-cyan/10"
                  >
                    <div className="slider-path-card__media overflow-hidden bg-brand-dark">
                      <img
                        src={assetUrl(displayImage)}
                        alt={path.title}
                        className="block h-auto w-full object-contain transition duration-500 group-hover/path:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    {!hasBanner && (
                      <div className="p-4">
                        <span className="mb-2 inline-block rounded bg-brand-cyan/20 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-brand-cyan">
                          {path.level}
                        </span>
                        <h3 className="mb-2 text-lg font-semibold text-white">{path.title}</h3>
                        <p className="line-clamp-2 text-sm text-white/60">{path.description}</p>
                        <p className="mt-2 text-xs text-white/40">
                          {path.coursesCount} cursos · {path.hours}h
                        </p>
                      </div>
                    )}
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <SliderDots paginationRef={paginationRef} />
        </div>
      </div>
    </section>
  );
};

export default FeaturedPaths;
