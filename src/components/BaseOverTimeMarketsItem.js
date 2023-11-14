import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BaseOverTimeMarketsItem() {
    const [ data, setData ] = useState(null);
    const [loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    useEffect(
        ()=> {
            fetch('https://api.thalesmarket.io/overtime/networks/8453/sports')
            .then(response => {
                if (response.ok)
                {
                    return response.json();
                }
                throw response;
            })
            .then(data => {setData(data)})
            .catch(error => {
                console.error('[Console]  An error occurred fetching Optimism markets!', error);
                setError(error);
            })
            .finally(() => {
                setLoading(false)
            });
        }, []
    );

    if (loading)   return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );

    return (
        <Card bg='dark'>
            <Card.Header>
                Overtime Markets on Base
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <h2 style={{textAlign: "center"}}>These Markets are available now on Overtime</h2>
                </Card.Title>
                <Row>
                      <Col>
              <Card border="light" style={{ width: '18rem' }}>
              <Card.Header>{data[0].sport} Markets</Card.Header>
        <Card.Body>
          <Card.Title>Market: {data[0].name} -- {data[0].sport}</Card.Title>
          <Card.Text>
          Trade This Market and More on Overtime
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>

        <Col>
            <Card border="light" style={{ width: '18rem' }}>
            <Card.Header>{data[4].sport} Markets</Card.Header>
                <Card.Body>
                <Card.Title>{data[4].name}</Card.Title>
                <Card.Text>
                Take a {data[4].supportedTypes[0]} on {data[4].name} now!  Only on OverTime Markets
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card border="light" style={{ width: '18rem' }}>
            <Card.Header>{data[9].sport} Markets</Card.Header>
               <Card.Body>
                <Card.Title>{data[9].name}</Card.Title>
                <Card.Text>
                Take a {data[9].supportedTypes[9]} on {data[4].name} now!  Only on OverTime Markets                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
      </Row>
            </Card.Body>
        </Card>
    );
}

export default BaseOverTimeMarketsItem;