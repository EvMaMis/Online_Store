import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal, Row , Col} from "react-bootstrap";
import { Context} from '../..'
import { createCloth, fetchBrands, fetchTypes } from "../../http/clothAPI";

const CreateCloth = observer(({show, onHide}) => {
    const {cloth} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
      fetchTypes().then(data => cloth.setTypes(data))
      fetchBrands().then(data => cloth.setBrands(data))
    }, [])


    const addInfo = () => {
      setInfo( [...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
      setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }
    const selectFile = e => {
      setFile(e.target.files[0])
    }

    const addCloth = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', `${price}`)
      formData.append('img', file)
      formData.append('brandId', cloth.selectedBrand.id)
      formData.append('typeId', cloth.selectedType.id)
      formData.append('info', JSON.stringify(info))
      createCloth(formData).then(data => onHide())
      window.location.reload()
    }
  
  return (
    <Modal show={show} onHide = {onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Добавить одежду</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
            <Dropdown className='mt-3 mb-2'>
              <Dropdown.Toggle>{cloth.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {cloth.types.map (type => 
                  <Dropdown.Item onClick={() => cloth.setSelectedType(type)}  key={type.id}>{type.name}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className='mt-3 mb-2'>
              <Dropdown.Toggle>{cloth.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
              <Dropdown.Menu>
                {cloth.brands.map (brand => 
                  <Dropdown.Item onClick={() => cloth.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control 
            className="mt-3"
              placeholder='Введите название'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Form.Control 
            className="mt-3"
              placeholder='Введите стоимость'
              type='number'
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
            />
            <Form.Control 
            className="mt-3"
              placeholder='Введите название'
              type='file'
              onChange={selectFile}
            />
            <hr/>
            <Button
             variant='outline-dark'
             onClick={addInfo}
            >Добавить новое свойство</Button>
            {info.map(i => 
              <Row className='mt-4' key={i.number}>
                <Col md={4}>
                  <Form.Control 
                  placeholder='Введите название свойства' 
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  />
                </Col>
                <Col md={4}>
                  <Form.Control 
                  placeholder='Введите описание свойства'
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  />
                </Col>
                <Col md={4}>
                  <Button 
                  onClick={() => removeInfo(i.number)}
                  variant='outline-danger'
                  >Удалить</Button>
                </Col>
              </Row>)}

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
        <Button variant="primary" onClick={addCloth}>Добавить</Button>
      </Modal.Footer>
    </Modal>

    );
});

export default CreateCloth;