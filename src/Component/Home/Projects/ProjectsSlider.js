import Carousel from 'react-bootstrap/Carousel';
import { ExampleCarouselImage1, ExampleCarouselImage2, ExampleCarouselImage3 } from './ProjectsAssets';




function Slider() {
  return (
    <>
   
    <Carousel fade interval={1000} className='my-0'  infinite >
   
      <Carousel.Item>
        <ExampleCarouselImage1  text="First slide" />
        <Carousel.Caption className='m-auto'>
       
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage2  text="Second slide" />
        <Carousel.Caption>
         
  
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage3 text="Third slide" />
        <Carousel.Caption>
         
        
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
    </>
   
  );
}

export default Slider;