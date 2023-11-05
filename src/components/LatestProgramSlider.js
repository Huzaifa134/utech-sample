import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { themesflatcarousel } from "../SliderProps";
// import courseScroll from "../../data/courseScroll.json";
import Image from "next/image";
const LatestProgramSlider = ({courseScroll}) => {

  return (
    <Swiper {...themesflatcarousel} loop={false}  className="owl-carousel owl-theme none">
      <div className="swiper-wrapper">

      {courseScroll ? courseScroll.map((course)  => (
        <SwiperSlide key={course.sys.id}>
          <div
            data-dot=""
            className="item-courses wow fadeIn animated"
            data-wow-delay="0.3ms"
            data-wow-duration="1300ms"
          >
            <div className="box-feature">
              
              <Image src={'https:' + course.fields.courseImg.fields.file.url} alt="" height={258} width={370}/>
            </div>
            <div className="box-content">
              <div className="box-wrap">
                <h4 className="title">
                  <Link href="/classe-details">
                    <a>{course.fields.courseName}</a>
                  </Link>
                </h4>
                <p className="sub f-mulish">
                  {course.fields.courseDes} 
                </p>
              </div>
              <ul>
                <li>
                  <i className="far fa-user-graduate clr-pri-5" />
                 {course.fields.courseAge}
                </li>
                <li>
                  <i className="far fa-book clr-pri-6" />{course.fields.noOfClasses}
                </li>
                <li>
                  <i className="fal fa-usd-circle clr-pri-3" />
                  {course.fields.coursePrice}
                </li>
                <li>
                  <i className="far fa-clock clr-pri-8" />{course.fields.noOfMonths}
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      )):"trying to fetch values"}
        
      </div>
      <div className="owl-nav">
        <div className="owl-prev"> </div>
        <div className="owl-next"> </div>
      </div>
      <div className="owl-dots" />
    </Swiper>
  );
};
export default LatestProgramSlider;
