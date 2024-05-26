import React, { createContext, useState, useEffect } from 'react';
import surveyService from './survey';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
        surveyService.getProfile(token).then(response => {
        setUser(response.data);
      }).catch(() => {
        setToken(null);
        setUser(null);
      });
    }
  }, [token]);

  const survey = (movie1, movie2) => {
    return surveyService.survey(movie1, movie2).then(response => {
      setToken(response.data.access);
      localStorage.setItem('token', response.data.access);
      return surveyService.getProfile(response.data.access);
    }).then(response => {
      setUser(response.data);
    });
  };


  return (
    <SurveyContext.Provider value={{ user, token, survey }}>
      {children}
    </SurveyContext.Provider>
  );
};

export default SurveyContext;
