import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const UserDetails = () => {
  const { id } = useParams();
  const {
    data: user,
    error,
    isPending,
  } = useFetch("http://localhost:8000/users/" + id);

  return (
    <Container fluid>
      <Row>
        <Col>
          {isPending && <p>Loading user details...</p>}

          {error && <p>{error}</p>}

          {user && (
            <>
              <h1>User {user.id} details</h1>
              <hr />
              <h2>Name: {user.firstName}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
