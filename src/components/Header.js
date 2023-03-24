
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className='navbar-brand' to="/">
          Contact App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="text-decoration-none me-2 text-dark" to="/">Home</Link>
            <Link className="text-decoration-none text-dark" to="favourites">Favourites</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header