import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createType } from '../../http/clothAPI';

function CreateType({show, onHide}) {

  const [value, setValue] = useState('')
  const addType = () => {
    createType({name: value}).then(data => 
      {
        setValue('')
        onHide()
    })
    window.location.reload()}

  return (
    <Modal show={show} onHide = {onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Добавить тип</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
            <Form.Control 
            value = {value}
            onChange={e => setValue(e.target.value)}
            placeholder={'Введите название типа'} />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="primary" onClick={() => addType()}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateType;