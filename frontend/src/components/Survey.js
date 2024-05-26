import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyContext from '../survey/surveycontext';
import Ranking from './Ranking';
import AuthContext from "../auth/authcontext";
import authService from '../auth/auth';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Survey = () => {
  const [movie1, setMovie1] = useState('');
  const [movie2, setMovie2] = useState('');
  const { survey } = useContext(SurveyContext);
  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.getProfile(token);
      const { username, email, bio } = response.data;
      await survey(movie1, movie2, token, username);
      navigate('/');
    } catch (error) {
      console.error('Survey submission failed', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h1 className="text-center">Survey</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMovie1">
              <Form.Label>Movie One</Form.Label>
              <Form.Control
                type="number"
                value={movie1}
                onChange={(e) => setMovie1(e.target.value)}
                placeholder="Enter Rating Movie1"
              />
            </Form.Group>
            <Form.Group controlId="formMovie2">
              <Form.Label>Movie Two</Form.Label>
              <Form.Control
                type="number"
                value={movie2}
                onChange={(e) => setMovie2(e.target.value)}
                placeholder="Enter Rating Movie2"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Survey;
