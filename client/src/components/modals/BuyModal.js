import React from 'react'
import { Button, Modal, Row } from 'react-bootstrap'
import insta from '../../assets/instagram.png'
import telega from '../../assets/telegram.png'


const BuyModal = ({show, onHide}) => {
return (
    <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Выберите способ связи</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex align-items-center'>
            <Row>
              <div className='mb-3'>Информация о товаре скопирована. Вставьте её в окно сообщения</div>
                <div>
        <Button 
        onClick={() => window.open('https://www.instagram.com/glamur_ukr/')}
        style={{height:50, width:50, background:`url(${insta}) no-repeat`, backgroundSize: 'cover'}}
        variant='outline-dark'
        ></Button>
        <span className='m-3'>Instagram</span>
        </div>
        <div className="mt-4">
        <Button 
        onClick={() => window.open('https://web.telegram.org/k/')}
        style={{height:50, width:50, background:`url(${telega}) no-repeat center`, backgroundSize: '90%'}}
        ></Button>
        <span className='m-3'>Telegram</span>
        </div>
        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
)
}

export default BuyModal;