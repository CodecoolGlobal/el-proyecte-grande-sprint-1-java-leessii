import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AnimalCardCom from './AnimalCardCom';
import './AnimalCardGridCom.css';

const AnimalCardGridCom = ( {animals} ) => {
    return (
        <Row className="g-5 justify-content-center mt-4 mb-4 custom-card-row">
            {animals.map((animal, idx) => (
                <Col xs={12} sm={6} md={4} lg={3} key={idx} className="col-lg-4">
                    <AnimalCardCom animal={animal} key={animal.id}/>
                </Col>
            ))}
        </Row>
    );
}

export default AnimalCardGridCom