import Link from "next/link";
// contentful 

///end contentful

const Footer = ({footer}) => {
  console.log("this is from footer comp " , footer)
  return (
    <footer id="footer">
    {footer? footer.map((foot) => (
      <div className="footer-inner" key={foot.sys.id}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer" >
                    <Link href="/">
                      <a>
                        <img
                          src="assets/images/logo/utechD.png"
                          alt="kinco"
                        
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="wrap f-mulish" style={{height:'300px'}}>{foot[0].fields.captions}
                  
                  </p>
                  <div className="list-contact">
                    <ul >
                      <li className="fx" >
                        <span style={{lineHeight:"25px"}}>
                          <i className="far fa-map-marker-alt" />
                          {foot[0].fields.address}
                        </span>
                      </li>
                      <li className="fx">
                        <a href="mailto:hotline@gmail.com">
                          <i className="far fa-envelope" /> 
                          {foot[0].fields.mail}
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:012345678">
                          <i className="fal fa-phone" /> 
                          {foot[0].fields.number}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-business">
                  <div className="inner">
                    <div className="op-time">
                      <h4 className="title-widget">{foot[0].fields.blueboxTitle}</h4>
                      <ul>
                        <li>
                          <span className="f-mulish">{foot[0].fields.days}</span>
                        </li>
                        <li>
                          <span className="f-mulish">{foot[0].fields.time}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="cls-time">
                      <p>{foot[0].fields.closedDetails}</p>
                    </div>
                  </div>
                </div>
                <div className="widget widget-link">
                  <h4 className="title-widget">{foot[0].fields.programtitle}</h4>
                  <ul className="list-link">
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">{foot[0].fields.prog1}</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">{foot[0].fields.prog2}</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">{foot[0].fields.prog3}</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">{foot[0].fields.prog4}</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">{foot[0].fields.prog5}</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">{foot[0].fields.prog6}</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="/program">
                        <a className="wd-ctm f-mulish">{foot[0].fields.prog7}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
               {/* <div className="widget widget-news st-3">
                  <h4 className="title-widget">recent news</h4>
                  <ul className="list-news">
                    <li className="fx">
                      <img
                        src="assets/images/thumbnails/widget9.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li>
                          <h6 className="title">
                            <Link href="/blog-grid">
                              <a>Useful Code Extened End Developers</a>
                            </Link>
                          </h6>
                        </li>
                        <li>
                          <Link href="/blog-grid">
                            <a className="fx meta-news clr-pri-6">
                              <i className="far fa-calendar-alt" />
                              25 dec 2021
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="fx">
                      <img
                        src="assets/images/thumbnails/widget10.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li>
                          <h6 className="title">
                            <Link href="/blog-grid">
                              <a>Useful Code Extened End Developers</a>
                            </Link>
                          </h6>
                        </li>
                        <li>
                          <Link href="/blog-grid">
                            <a className="fx meta-news clr-pri-6">
                              <i className="far fa-calendar-alt" />
                              25 dec 2021
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
  </div> */}
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom jus-ct">
                <p className="copy-right">
                  Copyright © {new Date().getFullYear()}, Utech-UAE Designed by{""}
                  <a href="https://themeforest.net/user/webtend/portfolio">
                  Huzaifa 
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )):"Loading footer"}
    </footer>
  );
};
export default Footer;
