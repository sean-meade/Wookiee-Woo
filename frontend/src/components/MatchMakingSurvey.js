import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const StarWarsSurvey = () => {
    const [formData, setFormData] = useState({
        trilogy: '',
        favoriteCharacter: '',
        favoriteMovieOrShow: '',
        favoriteEra: '',
        preferredFaction: '',
        forceAbility: '',
        engagement: '',
        importance: '',
        openToNewMedia: '',
        dateActivity: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/surveyResults', formData);
            console.log(response.data);
            alert('Survey submitted successfully!');
        } catch (error) {
            console.error('There was an error submitting the survey!', error);
        }
    };

    return (
        <div className="container mt-5">
            <form onSubmit={handleSubmit}>
                <h2>Star Wars Compatibility Survey</h2>

                {/* The form fields here */}

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default StarWarsSurvey;
