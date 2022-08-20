import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import ListGroup  from 'react-bootstrap/ListGroup';
import { Context } from '..';


const TypeBar = observer(() => {
    const {cloth} = useContext(Context)
    return (
    <ListGroup>
      {cloth.types.map(type => 
        <ListGroup.Item 
            style={{cursor:'pointer'}} 
            active={type.id === cloth.selectedType.id} 
            onClick={() => cloth.setSelectedType(type)} 
            key={type.id}>

            {type.name}
            
        </ListGroup.Item>
        )}
    </ListGroup>
    );
});

export default TypeBar;