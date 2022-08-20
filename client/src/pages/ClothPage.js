import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneCloth } from '../http/clothAPI';
import BuyModal from '../components/modals/BuyModal'

const ClothPage = () => {
  const [cloth, setCloth] = useState({info:[]})
  const [visible, setVisible] = useState(false)
const {id} = useParams()
  try{
  useEffect(() => {
    fetchOneCloth(id).then(data => setCloth(data))
  }, [])   } catch(e) {
    alert(e.target.message)
  }

  return (
    <Container className='mt-3'>
      <Row>
      <Col md={6}>
        {console.log(process.env.REACT_APP_API_URL + 'images/' + cloth.img)}
      <Image width={400} height={400} src={process.env.REACT_APP_API_URL + 'images/' + cloth.img}/>
      </Col>

      <Col md={6}>
    <div className="d-flex flex-column align-items-center text-center ">
      <h2>{cloth.name}</h2>
      <div className='d-flex align-items-center justify-content-center'
      >В наличии {cloth.rating} шт.
      </div>
      <Card className="d-flex flex-column align-items-center justify-content-around mt-4"
            style={{width:300, height:300, fontSize: 32, border: '5px solid lightgray'}}
      >
        <h2 className='mb-0'>Цена</h2>
        <h3>{cloth.price} грн.</h3>
        <Button style={{height:45, width: 140, fontSize:18}} variant={'outline-dark'} onClick={() =>{ setVisible(true) 
        navigator.clipboard.writeText(window.location.href)
        }}>Купить</Button>
        <BuyModal show={visible} onHide={() => setVisible(false)} />
      </Card>
    </div>
    

      </Col>

      <Col md={4}>
      

      </Col>
      </Row>
      <Row className={'d-flex flex-column m-3'}>
      <h1>Характеристики</h1>
      {cloth.info.map(info =>
        <Row key={info.id} style={{background: info.id % 2 === 0 && 'lightgray', padding:10}}>
          {info.title}: {info.description}
        </Row> )}
    </Row>
    </Container>
  );
}

export default ClothPage;
