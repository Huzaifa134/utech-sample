import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import PageBanner from "../src/components/PageBanner";
import TestimonialSlider from "../src/components/TestimonialSlider";
import TfCounter from "../src/components/TfCounter";
import { LeftArrow, RightArrow } from "../src/Icons";
import Layout from "../src/layouts/Layout";
import { fourSlider } from "../src/SliderProps";
import { createClient } from "contentful";
import Image from 'next/image';
export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY ,
  });

  const counters= await client.getEntries({ content_type: "counter" });
  const Footer = await client.getEntries({ content_type: "footer" });
  const About = await client.getEntries({ content_type: "aboutUs" });
  const teacher = await client.getEntries({ content_type: "aboutusTeachersArray" });

  
 
  return {
    props:{
      counter:counters.items,
      footer:Footer.items,
      aboutUs:About.items,
      aboutusTeachersArray:teacher.items,
      

    

    }
  }
}
///end contentful

const About = ({counter,footer,aboutUs,aboutusTeachersArray}) => {
  console.log("aboutus page:" , aboutusTeachersArray)
  return (
    <Layout bodyClass={"about"} footer={footer}>
  {/*<PageBanner pageName={"About Us"} />*/}
      <section className="tf-section tf-about">
        <div className="container">
          <div className="row">
            <div className="ol-xl-7 col-lg-7 col-md-12">
              <div className="wrap-image ps-re">
               
                <div className="fx m-b32 align-fl-end">
                  <div
                    className="image m-r30 wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    
                    <Image src={'https:' + aboutUs[0].fields.sec1Img1.fields.file.url} alt="" height={339} width={275}/>
                  </div>
                  <div
                    className="image wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                   
                    <Image src={'https:' + aboutUs[0].fields.sec1Img2.fields.file.url} alt="" height={339} width={275}/>
                  </div>
                </div>
                <div className="image p-l70">
                <Image src={'https:' + aboutUs[0].fields.sec1Img3.fields.file.url} alt="" height={225} width={400}/>
                </div>
              
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="sc-about-2 p-t19">
                <div className="title-heading">
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2">{aboutUs[0].fields.main}</span>
                   
                  </div>
                  <h2 className="title clr-pri-2">
                    {aboutUs[0].fields.aboutHeading}
                  </h2>
                </div>
                <div className="inner">
                  <p
                    className="wrap f-mulish clr-pri-4  wow fadeIn animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    {aboutUs[0].fields.aboutDescription}
                  </p>
                  
                  <Link href="/testimonials">
                    <a className="fl-btn st-11">
                      <span className="inner">{aboutUs[0].fields.btn}</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-courses">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
              
                  <span className="inner-sub st-1">{aboutUs[0].fields.sec2Shortheading}</span>
                
                </div>
                <h2 className="title clr-pri-2">
                 {aboutUs[0].fields.sec2Mainheading}
                </h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="fx sc-discovery-about">
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="800ms"
                  >
                    <div className="box-feature">
                      
                      <Image src={'https:' + aboutUs[0].fields.sec2Card1Img.fields.file.url} alt="" height={100} width={120}/>
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <Link href="/classes">
                          <a>{aboutUs[0].fields.sec2Card1Title}</a>
                        </Link>
                      </h4>
                      <p className="wrap f-mulish">
                      {aboutUs[0].fields.sec2Card1Desc}
                      </p>
                      <Link href="/classes">
                        <a className="fl-btn st-13">
                          <span className="inner">{aboutUs[0].fields.sec2Card1Btntxt}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1000ms"
                  >
                    <div className="box-feature">
                    <Image src={'https:' + aboutUs[0].fields.sec2Card2Img.fields.file.url} alt="" height={100} width={120}/>
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <Link href="/program">
                          <a>{aboutUs[0].fields.sec2Card2Title}</a>
                        </Link>
                      </h4>
                      <p className="wrap f-mulish">
                        {aboutUs[0].fields.sec2Card2Desc}
                      </p>
                      <Link href="/program">
                        <a className="fl-btn st-13">
                          <span className="inner">{aboutUs[0].fields.sec2Card1Btntxt}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1200ms"
                  >
                    <div className="box-feature">
                    <Image src={'https:' + aboutUs[0].fields.sec2Card3Img.fields.file.url} alt="" height={100} width={120}/>
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <Link href="/teacher">
                          <a>{aboutUs[0].fields.sec2Card3Title}</a>
                        </Link>
                      </h4>
                      <p className="wrap f-mulish">
                        {aboutUs[0].fields.sec2Card3Desc}
                      </p>
                      <Link href="/teacher">
                        <a className="fl-btn st-13">
                          <span className="inner">{aboutUs[0].fields.sec2Card1Btntxt}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-discovery">
                  <div
                    className="sc-discovery-2 wow fadeInUp animated"
                    data-wow-delay="0.3ms"
                    data-wow-duration="1400ms"
                  >
                    <div className="box-feature">
                    <Image src={'https:' + aboutUs[0].fields.sec2Card4Img.fields.file.url} alt="" height={100} width={120}/>
                    </div>
                    <div className="box-content">
                      <h4 className="title">
                        <Link href="/events">
                          <a>{aboutUs[0].fields.sec2Card4Title}</a>
                        </Link>
                      </h4>
                      <p className="wrap f-mulish">
                      {aboutUs[0].fields.sec2Card4Desc}
                      </p>
                      <Link href="/events">
                        <a className="fl-btn st-13">
                          <span className="inner">{aboutUs[0].fields.sec2Card1Btntxt}</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TfCounter nonst counter={counter}/>
      <section className="tf-section tf-employee">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-1">
                <div className="sub-heading clr-pri-3 f-mulish">
              
                  <span className="inner-sub st-1">{aboutUs[0].fields.sec3Shorttitle}</span>
                  
                </div>
                <h2 className="title clr-pri-2">
                {aboutUs[0].fields.sec3Maintitle}
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="slider-employee">
                <div className="themesflat-carousel clearfix">
                
                  <Swiper
                    {...fourSlider}
                    className="owl-carousel owl-theme none dots-none"
                    loop={false}
                  >
                  {aboutusTeachersArray.map((teacher,index)=>(
                    <SwiperSlide key={teacher.sys.id}>
                      <div
                      
                        className="sc-employee wow fadeInUp animated"
                        data-wow-delay="0.3ms"
                        data-wow-duration="800ms"
                      >
                        <div className="box-feature">
                         
                  <Image src={'https:' + teacher.fields.image.fields.file.url} alt="" height={215} width={210}/>
                  
                        </div>
                        <div className="box-content st-4">
                          <h4 className="name">
                            <Link href="/teacher-details">
                              <a className="clr-pri-1">{teacher.fields.name}</a>
                            </Link>
                          </h4>
                          <p className="sub f-mulish clr-pri-1">
                          {teacher.fields.designation}
                          </p>
                          <div className="social">
                            <a href={teacher.fields.linkedinLink}>
                            
                              <i className="fab fa-linkedin-in" />

                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    ))
                  }
                    
                  </Swiper>
                </div>
                {/*/.themesflat-carousel*/}
              </div>
              {/*/.slider-2*/}
            </div>
          </div>
        </div>
      </section>
      <section className="tf-sc-contact mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className="sc-contact wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="wrap">
                  <h2 className="title clr-pri-1">
                    Ready To Admit Your Child ?
                  </h2>
                  <p className="sub clr-pri-1 f-mulish">
                    Amet consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore
                  </p>
                </div>
                <div className="inner-sc-contact">
                  <div className="box-btn">
                    <Link href="/contact">
                      <a className="fl-btn st-9">
                        <span className="inner">Enroll Now</span>
                      </a>
                    </Link>
                  </div>
                  <div className="inner-contact fx">
                    <svg
                      id="CTA"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={49}
                      height={47}
                      viewBox="0 0 49 47"
                    >
                      <g id="Phone2">
                        <image
                          width={49}
                          height={47}
                          xlinkHref="data:img/png;base64,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"
                        />
                      </g>
                    </svg>
                    <ul>
                      <li className="clr-pri-1">Hotline</li>
                      <li className="clr-pri-1">+012 (345) 678</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};
export default About;
