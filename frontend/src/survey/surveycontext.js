// src/contexts/SurveyContext.js
import React, { createContext, useState } from 'react';
import surveyService from './survey';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const survey = (films) => {
    return surveyService.survey(films, token);
  };

  // Function to fetch survey results
  const getMatches = (token, username) => {
    return surveyService.getMatches(token, username);
  };

  return (
    <SurveyContext.Provider value={{ survey, getMatches }}>
      {children}
    </SurveyContext.Provider>
  );
};

export default SurveyContext;
