
import ListGroup from 'react-bootstrap/ListGroup';

function Tokens() {
  return (
    <ListGroup>
      <ListGroup.Item>No style</ListGroup.Item>
      <ListGroup.Item variant="primary">Primary</ListGroup.Item>
      <ListGroup.Item action variant="secondary">
        Secondary
      </ListGroup.Item>
      <ListGroup.Item action variant="success">
        Success
      </ListGroup.Item>
      <ListGroup.Item action variant="danger">
        Danger
      </ListGroup.Item>
      <ListGroup.Item action variant="warning">
        Warning
      </ListGroup.Item>
      <ListGroup.Item action variant="info">
        Info
      </ListGroup.Item>
      <ListGroup.Item action variant="light">
        Light
      </ListGroup.Item>
      <ListGroup.Item action variant="dark">
        Dark
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Tokens


// import Badge from 'react-bootstrap/Badge';
// import ListGroup from 'react-bootstrap/ListGroup';

// function Tokens() {
//   return (
//     <ListGroup  action variant="dark">
//       <ListGroup.Item>Cras justo odio</ListGroup.Item>
//       <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//       <ListGroup.Item>Morbi leo risus</ListGroup.Item>
//       <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
//     </ListGroup>
//   );
// }


// export default Tokens