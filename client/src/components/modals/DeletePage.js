import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../..';
import { deleteCloth, deleteType, deleteBrand, fetchClothes } from '../../http/clothAPI';

const DeletePage = observer(({show, onHide}) =>  {
    const {cloth} = useContext(Context)
    useEffect(() => {
      fetchClothes(null, null, 1, 50).then((data) => 
      cloth.setClothes(data.rows))}, [] )
    
  return (    
    <Modal show={show} onHide = {onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Удаление</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className='mt-4 text-center' style={{fontSize:27}}>Типы</div>
      <ListGroup className='mt-2'>
      {
      cloth.types.map(type => 
        <ListGroup.Item 
            style={{cursor:'pointer'}} 
            active={type.id === cloth.selectedType.id} 
            onClick={() => {
                cloth.setSelectedType(type)
            }}
            key={type.id}>
            {type.name}
        </ListGroup.Item>
        )}
    </ListGroup>
    <Button onClick={() => deleteType(cloth.selectedType.id)} variant={'outline-dark'} className='mt-2'>Удалить тип</Button>
    
    
    <div className='mt-4 text-center' style={{fontSize:27}}>Бренды</div>
    <ListGroup className='mt-2'>
      {cloth.brands.map(brand => 
        <ListGroup.Item 
            style={{cursor:'pointer'}} 
            active={brand.id === cloth.selectedBrand.id} 
            onClick={() => {
                cloth.setSelectedBrand(brand)
        }} 
            key={brand.id}>

            {brand.name}
            
        </ListGroup.Item>
        )}
    </ListGroup>
    <Button onClick={() => {deleteBrand(cloth.selectedBrand.id)}} variant={'outline-dark'} className='mt-2'>Удалить бренд</Button>
    
    <div className='mt-4 text-center' style={{fontSize:27}}>Одежда</div>
    
    <ListGroup className='mt-2'>
      {cloth.clothes.map(cl => 
        <ListGroup.Item 
            style={{cursor:'pointer'}} 
            active={cl.id === cloth.selectedCloth.id} 
            onClick={() => {
                cloth.setSelectedCloth(cl)
        }} 
            key={cl.id}>

            {cl.name}
            
        </ListGroup.Item>
        )}
    </ListGroup>
    <Button onClick={() => {deleteCloth(cloth.selectedCloth.id)}} variant={'outline-dark'} className='mt-2'>Удалить одежду</Button>
  <Card className='d-flex align-items-center mt-4'>
    <div className='mt-2'>Убрать выделение</div>
    <Button className='m-2' onClick={() => {
        cloth.setSelectedBrand();
        cloth.setSelectedType();
        cloth.setSelectedCloth();
    }} variant='outline-danger'>Обновить</Button>
    </Card>
        
          
            
      </Modal.Body>

      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
})

export default DeletePage;