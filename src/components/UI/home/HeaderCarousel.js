import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function HeaderCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4 className='text-dark'>First slide label</h4>
          <h5 className='text-dark '>Nulla vitae elit libero, a pharetra augue mollis interdum.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4 className='text-dark'>Second slide label</h4>
          <h5 className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Home_Page_Banner_Generic_20.08_Comp.png?v=1661755438"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4 className='text-dark'>Third slide label</h4>
          <h5 className='text-dark'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeaderCarousel