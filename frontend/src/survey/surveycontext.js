// src/contexts/SurveyContext.js
import React, { createContext } from 'react';
import surveyService from './survey';

const SurveyContext = createContext();

export const SurveyProvider = ({ children }) => {


  const survey = (movie1, movie2) => {
    return surveyService.survey(movie1, movie2);
  };

  return (
    <SurveyContext.Provider value={{ survey }}>
      {children}
    </SurveyContext.Provider>
  );
};

export default SurveyContext;
