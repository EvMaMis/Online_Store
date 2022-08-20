import React, { useContext } from 'react';
import {Card, Col, Image} from 'react-bootstrap';
import star from '../assets/star.png';
import { useNavigate} from 'react-router-dom';
import { CLOTH_ROUTE } from '../utils/consts';
import { Context } from '..';

const ClothItem = ({cloth1}) => {
    const history = useNavigate()
    const {cloth} = useContext(Context)
    
            return (
        <Col md={3} className='mt-3' onClick={() => history(CLOTH_ROUTE + '/' + cloth1.id)}>
            <Card style={{width: 150, cursor:'pointer'}} border={'light'}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL +'static/'+ cloth1.img} />
                <div className="text-black-50 mt-3 d-flex justify-content-between align-items-center">
                {cloth.types.map(type => type.id === cloth1.typeId ? `${type.name}` : ' ')}
                    <div className="d-flex align-items-center">
                        <div style={{color:'black'}}>{cloth1.price}</div>
                        <Image style={{position:'relative', top:1}} src={star} width={9} height={13} />
                    </div>
                </div>
                <div>
                    {cloth1.name}
                </div>
            </Card>
        </Col>
    );  
};

export default ClothItem;
