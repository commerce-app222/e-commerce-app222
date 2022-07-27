import { products } from './db/db'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
   <div className="Home">
    <Container>
     <h3 className="mt-3">Daftar Produk</h3>
     <hr />
     <Row>
     {products.map((product) => (
       <Col xs={6} md={4}>
        <Card className="shadow mt-3">
         <Card.Img variant="top" src={product.gambar} />
         <Card.Body>
         <Card.Title>{product.nama}</Card.Title>
         <Card.Text>
           <h5 className="produk-harga">Rp.{product.harga}</h5>
         </Card.Text>
         <FontAwesomeIcon icon={faStar} 
            style={{  color: "orange"}}
          />
         <FontAwesomeIcon icon={faStar} 
            style={{  color: "orange"}} 
         />
         <FontAwesomeIcon icon={faStar}
            style={{  color: "orange"}} 
         />
         <FontAwesomeIcon icon={faStar} 
            style={{  color: "orange"}} 
         />
         <FontAwesomeIcon icon={faStar} />
         <br />
         <Button className="mt-2 btn btn-dark button" size="sm"><FontAwesomeIcon icon={faShoppingCart} />+</Button>
         </Card.Body>
         </Card>
       </Col>
     ))}
     </Row>
    </Container>
   </div>
  ) 
}

export default Home