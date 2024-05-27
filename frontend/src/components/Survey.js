import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyContext from '../survey/surveycontext';
import Ranking from './Ranking';
import AuthContext from "../auth/authcontext";
import authService from '../auth/auth';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import styles from "../styles/Survey.module.css";
import "../global.css";

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
      console.log(username);
      await survey(movie1, movie2, username, token);
      // navigate('/');
    } catch (error) {
      console.error('Survey submission failed', error);
    }
  };

  return (
    <Container className={styles.SurveyContainer}>
          <h1 className={styles.Header}>Survey</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMovie1">
            <Form.Label className={styles.FormLabel}>Movie 1</Form.Label>
              <Form.Control
                className={styles.FormControl}
                type="number"
                value={movie1}
                onChange={(e) => setMovie1(e.target.value)}
                placeholder="Enter Rating Movie 1"
              />
            </Form.Group>
            <hr/>
            <Form.Group controlId="formMovie2">
            <Form.Label className={styles.FormLabel}>Movie 2</Form.Label>
              <Form.Control
                className={styles.FormControl}
                type="number"
                value={movie2}
                onChange={(e) => setMovie2(e.target.value)}
                placeholder="Enter Rating Movie 2"
              />
            </Form.Group>
            <button type="submit" className={styles.Button}>
              Submit
            </button>
          </Form>
    </Container>
  );
};

export default Survey;
