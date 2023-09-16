import './services.css'
import Card from 'react-bootstrap/Card';
function ServicesCard({service}) {
   
  return (
    <div className=" serCard col-md-4 col-sm-12 my-10  ">
    <Card style={{ width: '14rem' }} className='mx-auto'>  
     <Card.Img  src={service.img} variant="top"/>
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
      </Card.Body>
    </Card>
    </div>
  );
}

export default ServicesCard;