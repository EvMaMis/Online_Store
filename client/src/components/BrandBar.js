import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row, Col} from "react-bootstrap";

const BrandBar = observer(() => {
    const {cloth} = useContext(Context)

    return (
        <Row className="d-flex">
            {cloth.brands.map(brand =>
            <Col key={brand.name}>
                <Card
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => cloth.setSelectedBrand(brand)}
                    border={brand.id === cloth.selectedBrand.id ? 'danger' : 'light'}
                >
                    {brand.name}
                </Card>
                </Col>
            )}
        </Row>
    );
});

export default BrandBar;