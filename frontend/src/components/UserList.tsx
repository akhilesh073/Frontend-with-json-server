import React from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Button, Col, Container, Row } from "react-bootstrap";

interface User {
  id: number;
  name: string;
  email: string;
  number: string;
}

interface UserListProps {
  users: User[];
  name: string;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <Container>
      <h1>Users List</h1>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <p>{user.username}</p>
                  </td>

                  <td>
                    <p>{user.email}</p>
                  </td>

                  <td>
                    <Link to={`/users/${user.id}`}>
                      <Button variant="info">View full details</Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default UserList;
