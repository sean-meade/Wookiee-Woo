// src/contexts/SurveyContext.js
import React, { createContext } from 'react';
import surveyService from './survey';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {


  const survey = (films, username) => {
    return surveyService.survey(films, username);
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
