import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import type { School } from '../../data/fakeCourses';
import { assetUrl } from '../../utils/assetUrl';
import SliderNavButtons from './SliderNavButtons';
import SliderDots from './SliderDots';
import { academySliderModules, academySliderPagination } from './sliderOptions';
import { useSliderPagination } from './useSliderPagination';

import 'swiper/css';

interface SchoolsRowProps {
  schools: School[];
  title?: string;
  subtitle?: string;
  filterKey?: string;
}

const SchoolsRow = ({
  schools,
  title = 'Escuelas destacadas',
  subtitle = 'Especialízate por área con contenido curado para tu crecimiento profesional.',
  filterKey = '',
}: SchoolsRowProps) => {
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
        <div className="course-row__slider">
          <Swiper
            key={filterKey}
            modules={academySliderModules}
            pagination={academySliderPagination}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              onSwiperReady(swiper);
            }}
            slidesPerView={1.4}
            spaceBetween={16}
            breakpoints={{
              480: { slidesPerView: 2.2 },
              640: { slidesPerView: 2.8 },
              960: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4.2 },
            }}
            className="course-row__swiper"
          >
            {schools.map((school) => (
              <SwiperSlide key={school.id}>
                <Link
                  to={`/escuelas/${school.slug}`}
                  className="group/school relative block overflow-hidden rounded-xl border border-white/5 bg-brand-surface transition hover:border-brand-cyan/30 hover:shadow-xl hover:shadow-brand-cyan/10"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={assetUrl(school.image)}
                      alt={school.title}
                      className="h-full w-full object-cover transition duration-500 group-hover/school:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="mb-2 inline-block rounded bg-brand-cyan/20 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-brand-cyan">
                      {school.category}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-white">{school.title}</h3>
                    <p className="line-clamp-2 text-sm text-white/60">{school.description}</p>
                    <p className="mt-2 text-xs text-white/40">{school.coursesCount} cursos</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <SliderDots paginationRef={paginationRef} />
        </div>
      </div>
    </section>
  );
};

export default SchoolsRow;
