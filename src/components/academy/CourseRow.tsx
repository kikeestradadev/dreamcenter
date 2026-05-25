import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import type { Course } from '../../data/fakeCourses';
import CourseCard from './CourseCard';
import SliderNavButtons from './SliderNavButtons';

import 'swiper/css';

interface CourseRowProps {
  title: string;
  subtitle?: string;
  courses: Course[];
  filterKey?: string;
}

const CourseRow = ({ title, subtitle, courses, filterKey = '' }: CourseRowProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

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
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView="auto"
          spaceBetween={12}
          breakpoints={{
            640: { spaceBetween: 14 },
            960: { spaceBetween: 16 },
            1280: { spaceBetween: 18 },
          }}
          className="py-4"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id} className="!h-auto !w-[300px] shrink-0 md:!w-[400px]">
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CourseRow;
