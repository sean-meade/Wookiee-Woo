import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SurveyContext from '../survey/surveycontext';
import AuthContext from "../auth/authcontext";
import authService from '../auth/auth';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import styles from "../styles/Survey.module.css";
import "../global.css";

const Survey = () => {
  const initialMovieState = [
    { name: 'A New Hope', rating: '' },
    { name: 'The Empire Strikes Back', rating: '' },
    { name: 'Return Of The Jedi', rating: '' },
    { name: 'The Phantom Menace', rating: '' },
    { name: 'Attack Of The Clones', rating: '' },
    { name: 'Revenge Of The Sith', rating: '' },
    { name: 'The Force Awakens', rating: '' },
    { name: 'The Last Jedi', rating: '' },
    { name: 'The Rise Of Skywalker', rating: '' },
    { name: 'Rogue One', rating: '' },
    { name: 'Solo', rating: '' },
    { name: 'The Mandalorian', rating: '' },
    { name: 'The Book Of Boba Fett', rating: '' },
    { name: 'Obi Wan Kenobi', rating: '' },
    { name: 'Andor', rating: '' },
    { name: 'Ahsoka', rating: '' },
    { name: 'The Clone Wars', rating: '' },
    { name: 'Rebels', rating: '' },
    { name: 'Resistance', rating: '' },
    { name: 'The Bad Batch', rating: '' },
    { name: 'Visions', rating: '' },
    { name: 'Tales Of The Empire', rating: '' },
    { name: 'Tales Of The Jedi', rating: '' }
  ];

  const [films, setMovies] = useState(initialMovieState);
  const { survey } = useContext(SurveyContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newMovies = [...films];
    newMovies[index].rating = value;
    setMovies(newMovies);
  };

  const formatMovieName = (name) => {
    return name.toLowerCase().replace(/ /g, '_');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.getProfile(token);
      console.log(response)
      const { id } = response.data;
      
      const formattedFilms = films.reduce((acc, movie) => {
        if (movie.rating == '') {
          acc[formatMovieName(movie.name)] = 0;
        } else {
          acc[formatMovieName(movie.name)] = movie.rating;
        }
        
        return acc;
      }, {});
      const user = {
        user: id
      };
      const payload = {...user, ...formattedFilms}

      await survey(payload);
      navigate('/matches');
    } catch (error) {
      console.error('Survey submission failed', error);
    }
  };

  return (
    <Container className={styles.SurveyContainer}>
          <h1 className={styles.Header}>Survey</h1>
          <Form onSubmit={handleSubmit}>
            {films.map((movie, index) => (
              <Form.Group controlId={`formMovie${index + 1}`} key={index}>
                <Form.Label>{movie.name}</Form.Label>
                <Form.Control
                  type="number"
                  value={movie.rating}
                  onChange={(e) => handleChange(index, e.target.value)}
                  placeholder={`Enter Rating for ${movie.name}`}
                />
              </Form.Group>
            ))}
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
    </Container>
  );
};

export default Survey;
