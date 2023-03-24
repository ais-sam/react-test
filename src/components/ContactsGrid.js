import ContactCard from "./ContactCard";
import {Col, Row} from 'react-bootstrap';


const CardsGrid = ({ isFavoutites,contacts }) => {

  return (
    <Row sm={2} md={3} className="g-4">
      {contacts.map((contact) => (
        <Col  key={contact.id}>
          <ContactCard {...contact} isFavoutites={isFavoutites} />
        </Col>
      ))}
    </Row>
  );
};

export default CardsGrid;
