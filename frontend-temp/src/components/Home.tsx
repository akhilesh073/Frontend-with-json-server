import UserList from "./UserList";
import useFetch from "../hooks/useFetch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = (): JSX.Element => {
  const {
    data: users,
    isPending,
    error,
  } = useFetch("http://localhost:8000/users");

  return (
    <Container fluid>
      <Row>
        <Col>
          {error && <p>{error}</p>}
          {isPending && <p>Loading users...</p>}
          {users && <UserList users={users} />}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
