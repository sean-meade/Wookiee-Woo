import React, { useState, useEffect, useContext } from 'react';
import surveyService from '../survey/survey';
import AuthContext from "../auth/authcontext";
import authService from '../auth/auth';

const Matches = () => {
  const [Matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useContext(AuthContext);

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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Matches</h2>
          <ul>
            {/* This is an example of what is being sent you can use the fields same as below and this is coming from get_matches in the views in Python:
            [{\"model\": \"profiles.customuser\", \"pk\": 2, \"fields\": {\"password\": \"Test!1234\", \"last_login\": null, \"is_superuser\": false, \"username\": \"sean1\", \"first_name\": \"\", \"last_name\": \"\", \"email\": \"\", \"is_staff\": false, \"is_active\": true, \"date_joined\": \"2024-05-26T13:34:51Z\", \"force_alignment\": 1, \"gender\": 4, \"looking_for\": 3, \"profile_icon\": \"icon1\", \"bio\": \"\", \"facebook\": \"\", \"instagram\": \"\", \"twitter\": \"\", \"groups\": [], \"user_permissions\": [], \"suggestions\": [3], \"matches\": []}}]" */}
            {Matches.map((match, index) => (
                <div key={index}>
                    <li>{match.fields.username}</li>
                    <li>{match.fields.gender}</li>
                    <li>{match.fields.looking_for}</li>
                </div>
              
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Matches;
