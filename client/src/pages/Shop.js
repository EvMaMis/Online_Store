import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import {Container} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import ClothList from '../components/ClothList';
import Pages from '../components/Pages';
import TypeBar from '../components/TypeBar';
import { fetchBrands, fetchClothes, fetchTypes } from '../http/clothAPI';

const Shop = observer(() => {
  const {cloth} = useContext(Context)
  useEffect(() => {
    fetchTypes().then(data => cloth.setTypes(data))
    fetchBrands().then(data => cloth.setBrands(data))
    fetchClothes(null, null, 1, 12).then(data => {
      cloth.setClothes(data.rows)
      cloth.setTotalCount(data.count)
    })

  }, [  ])

  useEffect(() => {
  fetchClothes(cloth.selectedType.id, cloth.selectedBrand.id, cloth.page, 12).then (data => {
  cloth.setClothes(data.rows)
  cloth.setTotalCount(data.count)
  })}, [cloth.page, cloth.selectedType, cloth.selectedBrand])


  return (
    <Container>
      <Row className="mt-3">
        <Col md={3}>
        <TypeBar/>
        </Col>
        <Col md={9}>
        <BrandBar />
          <ClothList/>
          <Pages/>
        </Col>
      </Row>
    </Container>
  );
})

export default Shop;
