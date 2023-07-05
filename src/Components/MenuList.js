import ListGroup from 'react-bootstrap/ListGroup';

function MenuList() {
  return (
    <ListGroup id="menu-list-group" className="rounded-0 pt-5" defaultActiveKey="./all-tasks">
      <ListGroup.Item action href="./all-tasks">
        All Tasks
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" >
        Your Profile
      </ListGroup.Item>
      <ListGroup.Item action href="#link3" >
        Logout
      </ListGroup.Item>
      <ListGroup.Item action href="#link4" >
      Logout All Sessions
      </ListGroup.Item>
      <ListGroup.Item className='text-danger' id="list-item-delete" action href="#link5" >
        Delete Profile
      </ListGroup.Item>
    </ListGroup>
  );
}

export default MenuList;