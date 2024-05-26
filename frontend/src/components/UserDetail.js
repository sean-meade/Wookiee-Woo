// src/components/UserDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import authService from '../auth/auth';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await authService.get(`/users/${id}/`);
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <Card>
            <Card.Body>
              <Card.Title>{user.username}</Card.Title>
              <Card.Text>Email: {user.email}</Card.Text>
              <Card.Text>Bio: {user.bio}</Card.Text>
              {/* Add more fields as necessary */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetail;
