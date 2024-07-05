import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CardDetails = ({data}) => {

  return (
    <div>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.image_url} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
        {data.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CardDetails