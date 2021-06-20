import React from 'react'
import {Carousel} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image1  from '../../assets/pictures/carousel/4.jpg'
import Image2  from '../../assets/pictures/carousel/3.jpg'
import Image3  from '../../assets/pictures/carousel/1.jpg'

  
function CarouselContainer() {
    return (
        <Carousel style={{width:"1600px",}}>
          <Carousel.Item style={{height:"600px"}}>
            <img
              className="d-block w-100"
              src={Image1}
              alt="First slide"
            />
          </Carousel.Item>
          
          <Carousel.Item style={{height:"600px"}}>
            <img
              className="d-block w-100"
              src={Image2}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item style={{height:"600px"}}>
            <img
              className="d-block w-100"
              src={Image3}
              alt="Third slide"
            />
          </Carousel.Item>
      </Carousel>   
    )
}

export default CarouselContainer
