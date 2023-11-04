import Link from "next/link";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FeedbackSlider from "../src/components/FeedbackSlider";
import TfCounter from "../src/components/TfCounter";

import LatestProgramSlider from "../src/components/LatestProgramSlider";
import {
  LeftArrow,
  LeftArrowYellow,
  RightArrow,
  RightArrowYellow,
} from "../src/Icons";
import Header2 from "../src/layouts/header/Header2";
import Layout from "../src/layouts/Layout";
import { heroSlider } from "../src/SliderProps";
import { activeNavMenu } from "../src/utils";
import Image from 'next/image';
// contentful 
import { createClient } from "contentful";
export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken:process.env.CONTENTFUL_ACCESS_KEY ,
  });
  const res = await client.getEntries({ content_type: "title" });
  const res1 = await client.getEntries({ content_type: "subTitleHomepage" });
  const cards = await client.getEntries({ content_type: "ourActivePrograms" });
  const about= await client.getEntries({ content_type: "aboutUs" });
  const counters= await client.getEntries({ content_type: "counter" });
  const scroll= await client.getEntries({ content_type: "courseScroll" });
  const scrollheading = await client.getEntries({ content_type: "courseTitle" });
  const Gallery = await client.getEntries({ content_type: "gallery" });
  const Cta = await client.getEntries({ content_type: "cta" });
  const FeedbackHeader = await client.getEntries({ content_type: "feedbackHeader" });
  const FeedbackDetails = await client.getEntries({ content_type: "feedbackDetails" });
  const Footer = await client.getEntries({ content_type: "footer" });

  
 
  return {
    props:{
      title:res.items,
      subTitleHomepage:res1.items,
      ourActivePrograms:cards.items,
      aboutUs:about.items,
      counter:counters.items,
      courseScroll:scroll.items,
      courseTitle:scrollheading.items,
      gallery:Gallery.items,
      cta:Cta.items,
      feedbackHeader:FeedbackHeader.items,
      feedbackDetails:FeedbackDetails.items,
      footer:Footer.items,

    

    }
  }
}
///end contentful




// main function 
const Index2 = ({title,subTitleHomepage,ourActivePrograms,aboutUs,counter,courseScroll,courseTitle,gallery,cta,feedbackHeader,feedbackDetails,footer}) => {
  // console.log("about data" , courseScroll)
  console.log("counter data" ,footer);
  // console.log("ya render ho raha subfields" ,ourActivePrograms[0].fields.courseShortDescription.content[0].content[0].value);
  useEffect(() => {
    activeNavMenu();
  }, []);

  return (
    <Layout noHeader bodyClass={"home2"} footer={footer}>
      <Header2 />
      <section className="tf-slider-2">

        {/* <div className="overlay" /> */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="slider-2">
                <div className="themesflat-carousel clearfix">
                  <Swiper
                    {...heroSlider}
                    className="owl-carousel owl-theme none dots-none"
                  >
                    <SwiperSlide>
                      <div className="item-slider-2">
                        <div className="box-content">
                          <div className="sub f-rubik clr-pri-3 text-primary">
                          {title[0].fields.shortSubHeading}
                          </div>
                          <div className="title clr-pri-2">
                            {title[0].fields.heading}
                          </div>
                          <p className="wrap f-rubik">
                         {title[0].fields.headerTxtDescription.content[0].content[0].value}
                          </p>
                          <div className="btn-slider">
                            <Link href="/classes">
                              <a className="fl-btn st-2 bg-primary">
                                <span className="inner">{title[0].fields.btnTxt}</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                        
                        <div className="box-feature">
                          <div className="image">
                        <Image src={'https:' + title[0].fields.headerImg.fields.file.url} alt="" height={621} width={470}/>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                      <div className="item-slider-2">
                        <div className="box-content">
                          <div className="sub f-rubik clr-pri-3 text-primary">
                            {title[1].fields.shortSubHeading}
                          </div>
                          <div className="title clr-pri-2">
                          {title[1].fields.heading}
                          </div>
                          <p className="wrap f-rubik">
                          {title[1].fields.headerTxtDescription.content[0].content[0].value}
                          </p>
                          <div className="btn-slider ">
                            <Link href="/classes">
                              <a className="fl-btn st-2 bg-primary">
                                <span className="inner ">{title[1].fields.btnTxt}</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                        
                        <div className="box-feature">
                          <div className="image">
                          <Image src={'https:' + title[1].fields.headerImg.fields.file.url} alt="" height={621} width={470}/>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/*/.themesflat-carousel*/}
              </div>
              {/*/.slider-2*/}
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section-top tf-discovery">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-2">
                <div className="sub-heading clr-pri-3 f-mulish">
                  {/*<LeftArrow  />*/}
                  <span className="inner-sub st-1 text-primary">{subTitleHomepage[0].fields.shortHeading}</span>
                 {/* <RightArrow />*/}
                </div>
                <h2 className="title clr-pri-2">
                  {subTitleHomepage[0].fields.mainHeading}
                </h2>
              </div>
            </div>
            
            <div className="col-12 ">
              <div className="fl-discovery" style={{ minHeight: '400px' }}>
              {ourActivePrograms.slice(0, 5).map((card,index) => (
             
               
                <div
                key={card.sys.id}
                  className="sc-discovery wow fadeIn animated "
                  style={{ backgroundImage: `url(http:${card.fields.image.fields.file.url})` }}
                  data-wow-delay="0.3ms"
                  data-wow-duration="800ms"
                >
                  <div className="inner-discovery">
                    <div className={`box-icon st-${index+1}`}>
                      <i className="fas fa-check" />
                    </div>
                    <h5 className="title">
                      <Link href="/about">
                        <a>{card.fields.courseTitle}</a>
                      </Link>
                    </h5>
                    <p className="sub f-mulish">
                      {card.fields.courseShortDescription.content[0].content[0].value}
                    </p>
                    <Link href="/about">
                      <a className="fl-btn st-10">
                        <span className="inner">read more</span>
                      </a>
                    </Link>
                  </div>
                </div>
               
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-sc-about2">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-12">
              <div className="feature-about2">
                
                <Image src={'https:' + aboutUs[0].fields.aboutImg.fields.file.url} alt="" height={454} width={600} />
                <div
                  className="box-parents wow fadeInUp animated"
                  data-wow-delay="0.3ms"
                  data-wow-duration="1200ms"
                  style={{border:"2px solid blue"}}
                >
                  <h5 className="clr-pri-2 title">
                    <span className="clr-pri-3">{aboutUs[0].fields.squareBoxTxt}</span>
                  </h5>
                  {/*<ul className="fx">
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-5.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-1.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-2.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-3.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-4.jpg"
                        alt="Image"
                      />
                    </li>
                    <li>
                      <img
                        src="assets/images/thumbnails/list-quote-6.jpg"
                        alt="Image"
                      />
                    </li>
              </ul>*/}
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <div className="sc-about-2">
                <div className="title-heading " >
                  <div className="sub-heading clr-pri-3 f-mulish">
                    <span className="inner-sub st-2 text-primary ">{aboutUs[0].fields.main}</span>
                  {/*  <RightArrow />*/}
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
                {/*  <ul>
                    <li className="st-1 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Outdoor Games</p>
                    </li>
                    <li className="st-2 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Sport Activites</p>
                    </li>
                    <li className="st-3 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Nutritious Foods</p>
                    </li>
                    <li className="st-4 fx">
                      <i className="fas fa-check" />
                      <p className="clr-pri-2">Event &amp; Party</p>
                    </li>
                </ul>*/}
                  <Link href="/about">
                    <a className="fl-btn st-11 bg-primary">
                      <span className="inner">{aboutUs[0].fields.btn}</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TfCounter nonst counter={counter}/>
      <section className="tf-section tf-courses" style={{background:"#F3FBFF"}}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-heading st-3">
              <div className="sub-heading clr-pri-3 f-mulish">
              {/*  <LeftArrow /> */}
                <span className="inner-sub st-1 text-primary">{courseTitle[0].fields.titleName}</span>
              {/*  <RightArrow />*/}
              </div>
              <h2 className="title clr-pri-2">
                {courseTitle[0].fields.titleSubheading}
              </h2>
            </div>
          </div>
          <div className="col-12">
            <div className="slider-courses">
              <div className="themesflat-carousel clearfix">
                <LatestProgramSlider courseScroll={courseScroll} />
              </div>
              {/*/.themesflat-carousel*/}
            </div>
          </div>
        </div>
      </div>
    </section>
      
      
      <section className="tf-section tf-galley">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-4">
                <div className="sub-heading clr-pri-3 f-mulish">
                 {/* <LeftArrow /> */}
                  <span className="inner-sub st-1 text-primary">{gallery[0].fields.galleryTitle}</span>
                 {/* <RightArrow />*/}
                </div>
                <h2 className="title clr-pri-2">
                  {gallery[0].fields.galllerySubtitle}
                </h2>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature active">
                  
                  <Image src={'https:' + gallery[0].fields.img1.fields.file.url} alt="" height={400} width={370}/>
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className=" clr-pri-2">{gallery[0].fields.hoverTxt}</a>
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  
                  <Image src={'https:' + gallery[0].fields.img2.fields.file.url} alt="" height={400} width={370}/>
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className=" clr-pri-2">{gallery[0].fields.hoverTxt}</a>
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div
                className="sc-gallery wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
               
                  <Image src={'https:' + gallery[0].fields.img3.fields.file.url} alt="" height={400} width={370}/>
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className=" clr-pri-2">{gallery[0].fields.hoverTxt}</a>
                      </Link>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mg-bt wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                 
                  <Image src={'https:' + gallery[0].fields.img4.fields.file.url} alt="" height={400} width={570}/>
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className=" clr-pri-2">{gallery[0].fields.hoverTxt}</a>
                      </Link>
                    </h5>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div
                className="sc-gallery mgbt-0 wow fadeIn animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="box-feature">
                  
                  <Image src={'https:' + gallery[0].fields.img5.fields.file.url} alt="" height={400} width={570}/>
                  <div className="overlay" />
                  <div className="box-content">
                    <h5 className="title">
                      <Link href="/gallery">
                        <a className=" clr-pri-2">{gallery[0].fields.hoverTxt}</a>
                      </Link>
                    </h5>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-sc-contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className="sc-contact wow fadeIn animated bg-primary"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="wrap">
                  <h2 className="title clr-pri-1">
                    {cta[0].fields.title}
                  </h2>
                  <p className="sub clr-pri-1 f-mulish">
                    {cta[0].fields.description}
                  </p>
                </div>
                <div className="inner-sc-contact ">
                  <div className="box-btn ">
                    <Link href="/contact">
                      <a className="fl-btn st-9 bg-info">
                        <span className="inner  text-white" >{cta[0].fields.btn}</span>
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
                      style={{color:"white"}}
                    >
                      <g>
                        <image
                          width={49}
                          height={47}
                          xlinkHref="data:img/png;base64,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"
                        />
                      </g>
                    </svg>
                    <ul>
                      <li className="clr-pri-1">{cta[0].fields.numberTitle}</li>
                      <li className="clr-pri-1">{cta[0].fields.number}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tf-section tf-quote">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="title-heading st-3">
                <div className="sub-heading clr-pri-3 f-mulish">
                 {/* <LeftArrow /> */}
                  <span className="inner-sub st-1 text-primary">{feedbackHeader[0].fields.title}</span>
                 {/* <RightArrow />*/}
                </div>
                <h2 className="title clr-pri-2">
                {feedbackHeader[0].fields.desc}
                  
                </h2>
              </div>
            </div>
            <div className="col-12">
              <div className="sc-quote">
                <div className="list-author m-t-62">
                  
                </div>
                <div className="inner">
                  <div className="themesflat-carousel clearfix">
                    <FeedbackSlider feedbackDetails={feedbackDetails} />
                  </div>
                  {/*/.themesflat-carousel*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>
  );
};
export default Index2;
