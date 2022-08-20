import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateCloth from '../components/modals/CreateCloth';
import DeletePage from '../components/modals/DeletePage';

const Admin = () => {
  
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [clothVisible, setClothVisible] = useState(false)
  const [deleteVisible, setDeleteVisible] = useState(false)
  return (
    
    <Container className='d-flex flex-column'>

      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>Добавить тип</Button>
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setBrandVisible(true)}>Добавить бренд</Button>
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setClothVisible(true)}>Добавить одежду</Button>
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setDeleteVisible(true)}>Удаление</Button>
      
      
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}   />
      <CreateCloth show={clothVisible} onHide={() => setClothVisible(false)}  />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}  />
      <DeletePage show={deleteVisible} onHide={() => setDeleteVisible(false)}  />
      
    </Container>
    
  );
}

export default Admin;
