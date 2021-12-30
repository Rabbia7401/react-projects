import React from 'react';
import docImage from "../images/doc_img.png"
import Container from "../Layout/Container";

const Home = () => {
  return (
    <>
      <section className="background">
        <Container>
          <div className="flex">
            <div className="w-3/4">
              <h1 className="heading animated bounceInDown">Build Your Digital Banking Experience with Speed and
                Reliability</h1>
              <p className="paragraph mt-3">An open API platform that supports your digital enablement while offering
                Flexibility and Control over customer experience.</p>
              <button type="button" className="btn btn-primary primaryBtn animated bounceInLeft">Get Started</button>
            </div>
            <div className="w-1/4">
              <img src={docImage} className="apiImg animated slideInRight delay-5s" alt="API Image"/>
            </div>
          </div>
        </Container>
        <div className="row" id="signup">
          <div className="col-12">
            <h1 className="text-center text-light">Get Started with Our Sandbox</h1>
            <p className="text-center text-light w-75 m-auto largeDevice">Our sandbox is easy to access and offers
              pre-built card products that help you experience end-to-end use cases of your desired payment product way
              before its launched in production.</p>
            <button type="button" className="btn btn-outline-primary outlineBtn animated bounceInDown d-block">Register
              Now
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
