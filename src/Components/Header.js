import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import SidebarMenu from './SidebarMenu';


function Header() {
  return (
    <div>
      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 p-3">
          <Container fluid>
            <div></div>
            <Navbar.Brand className='fs-4 fw-bold text-primary' href="#">Task Manager App</Navbar.Brand>
            <SidebarMenu />
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;