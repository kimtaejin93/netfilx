import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function NavScrollExample() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const searchKeyword=(keyword)=>{
    dispatch({
      type:"SEARCH-KEYWORD",
      payload:{
        keyword:keyword
      }
    })
  }
  const clicked=()=>{
    navigate('/search')
  }

  return (
    <Navbar className='navbar' bg="dark" variant="dark"expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
            <img width={100}src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className="nav-item" to="/">HOME</Link>
            <Link className="nav-item" to="/movies">MOVIES</Link>
          </Nav>
          <Form className="d-flex"  onKeyUp={(e)=>searchKeyword(e.target.value)}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={(e)=>clicked()} variant="danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;