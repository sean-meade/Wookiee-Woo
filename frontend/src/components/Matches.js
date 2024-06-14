import React, { useState, useEffect, useContext } from 'react';
import surveyService from '../survey/survey';
import AuthContext from "../auth/authcontext";
import authService from '../auth/auth';
import { useNavigate } from 'react-router-dom';

const Matches = () => {
  const [Matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response_profile = await authService.getProfile(token);
        const { username, email, bio } = response_profile.data;
        const response = await surveyService.getMatches(token, username);
        const parsedArray = JSON.parse(response.data);
        setMatches(parsedArray);
        setLoading(false);
        
      } catch (error) {
        console.error('Error fetching Matches:', error);
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  return (
    
    <div className="container mt-5">
    <h2>Your Matches</h2>
    <div className="row">
    {Matches.map((match, index) => (
      
                <div className="col-md-4" key={index}>
            <div className="card mb-4">
            <img src={<img src={match.fields.profile_icon} className="card-img-top" alt={match.fields.username} />} className="card-img-top" alt={match.fields.username} />
              <div className="card-body">
                <h5 className="card-title">{match.fields.username}</h5>
                <p className="card-text">{match.fields.force_alignment}</p>
                <p className="card-text">{match.fields.gender}</p>
                <p className="card-text">{match.fields.looking_for}</p>
                <p className="card-text">{match.fields.bio}</p>
              </div>
            </div>
          </div>
      
              
            ))}
</div>
  </div>
  );
};

export default Matches;
