import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './AnimalCardCom.css';

function AnimalCardCom( {animal} ) {
  return (
    <Card style={{ width: '18rem' }} className="shadow">
      <Card.Img variant="top" src={animal.img} />
      <Card.Body>
        <Card.Title>{animal.name}</Card.Title>
        <Card.Text>
            Animal description
        </Card.Text>
        <ListGroup className="list-group-flush">
        <ListGroup.Item>Species: {animal.species}</ListGroup.Item>
        <ListGroup.Item>Age: {animal.age}</ListGroup.Item>
        <ListGroup.Item>Weight: {animal.weight}</ListGroup.Item>
      </ListGroup>
        <Button variant='dark' className="button-spacing">Update</Button>
        <Button variant='danger'>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default AnimalCardCom;