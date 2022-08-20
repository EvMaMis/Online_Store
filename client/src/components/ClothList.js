import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap';
import { Context } from '..';
import ClothItem from './ClothItem';



const ClothList = observer(() => {
    
    const {cloth} = useContext(Context)
    return(
        
        <Row className="d-flex">
            {cloth.clothes.map(cloth => <ClothItem key={cloth.id} cloth1 ={cloth} />           
           
            )}
            
        </Row>
            
    );

});

export default ClothList;