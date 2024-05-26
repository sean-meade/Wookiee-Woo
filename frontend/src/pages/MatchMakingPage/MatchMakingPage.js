import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StarWarsSurvey.css';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        alert('Survey submitted successfully! (This is a mock submission)');
    };

    return (
        <div className="container mt-5 text-white">
            <form onSubmit={handleSubmit}>
                <h2>Star Wars Compatibility Survey</h2>

                <div className="mb-3">
                    <label className="form-label">Which trilogy do you prefer the most?</label>
                    <select name="trilogy" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Original Trilogy">Original Trilogy (Episodes IV-VI)</option>
                        <option value="Prequel Trilogy">Prequel Trilogy (Episodes I-III)</option>
                        <option value="Sequel Trilogy">Sequel Trilogy (Episodes VII-IX)</option>
                        <option value="Standalone Movies and Spin-offs">Standalone Movies and Spin-offs</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Who is your favorite Star Wars character?</label>
                    <select name="favoriteCharacter" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Luke Skywalker">Luke Skywalker</option>
                        <option value="Princess Leia">Princess Leia</option>
                        <option value="Darth Vader">Darth Vader</option>
                        <option value="Yoda">Yoda</option>
                        <option value="Han Solo">Han Solo</option>
                        <option value="Rey">Rey</option>
                        <option value="Kylo Ren">Kylo Ren</option>
                        <option value="Ahsoka Tano">Ahsoka Tano</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">What is your favorite Star Wars movie or show?</label>
                    <select name="favoriteMovieOrShow" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Episode IV: A New Hope">Episode IV: A New Hope</option>
                        <option value="Episode V: The Empire Strikes Back">Episode V: The Empire Strikes Back</option>
                        <option value="Episode VI: Return of the Jedi">Episode VI: Return of the Jedi</option>
                        <option value="Episode I: The Phantom Menace">Episode I: The Phantom Menace</option>
                        <option value="Episode II: Attack of the Clones">Episode II: Attack of the Clones</option>
                        <option value="Episode III: Revenge of the Sith">Episode III: Revenge of the Sith</option>
                        <option value="Episode VII: The Force Awakens">Episode VII: The Force Awakens</option>
                        <option value="Episode VIII: The Last Jedi">Episode VIII: The Last Jedi</option>
                        <option value="Episode IX: The Rise of Skywalker">Episode IX: The Rise of Skywalker</option>
                        <option value="The Mandalorian">The Mandalorian</option>
                        <option value="The Clone Wars">The Clone Wars</option>
                        <option value="Rebels">Rebels</option>
                        <option value="Andor">Andor</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Which Star Wars era fascinates you the most?</label>
                    <select name="favoriteEra" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="The Old Republic">The Old Republic</option>
                        <option value="The Clone Wars">The Clone Wars</option>
                        <option value="The Galactic Civil War">The Galactic Civil War</option>
                        <option value="The New Republic">The New Republic</option>
                        <option value="The Rise of the First Order">The Rise of the First Order</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Do you prefer Jedi, Sith, or other factions?</label>
                    <select name="preferredFaction" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Jedi">Jedi</option>
                        <option value="Sith">Sith</option>
                        <option value="Bounty Hunters">Bounty Hunters</option>
                        <option value="Rebel Alliance">Rebel Alliance</option>
                        <option value="Galactic Empire">Galactic Empire</option>
                        <option value="Mandalorians">Mandalorians</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Which Force ability would you most like to have?</label>
                    <select name="forceAbility" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Telekinesis">Telekinesis</option>
                        <option value="Mind Trick">Mind Trick</option>
                        <option value="Force Lightning">Force Lightning</option>
                        <option value="Force Healing">Force Healing</option>
                        <option value="Force Speed">Force Speed</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">How do you enjoy engaging with Star Wars?</label>
                    <select name="engagement" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Watching movies and TV shows">Watching movies and TV shows</option>
                        <option value="Reading books and comics">Reading books and comics</option>
                        <option value="Playing video games">Playing video games</option>
                        <option value="Collecting merchandise">Collecting merchandise</option>
                        <option value="Cosplaying">Cosplaying</option>
                        <option value="Attending conventions">Attending conventions</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">How important is it for your partner to share your love for Star Wars?</label>
                    <select name="importance" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Extremely important">Extremely important</option>
                        <option value="Very important">Very important</option>
                        <option value="Moderately important">Moderately important</option>
                        <option value="Slightly important">Slightly important</option>
                        <option value="Not important">Not important</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Would you be open to exploring new Star Wars media that you haven't experienced yet?</label>
                    <select name="openToNewMedia" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Yes, definitely">Yes, definitely</option>
                        <option value="Yes, somewhat">Yes, somewhat</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Not really">Not really</option>
                        <option value="No, not at all">No, not at all</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">What Star Wars-themed activity would you most enjoy doing on a date?</label>
                    <select name="dateActivity" className="form-select" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Watching a movie marathon">Watching a movie marathon</option>
                        <option value="Visiting Star Wars-themed attractions">Visiting Star Wars-themed attractions (e.g., Galaxy's Edge)</option>
                        <option value="Playing Star Wars video games together">Playing Star Wars video games together</option>
                        <option value="Attending a Star Wars convention">Attending a Star Wars convention</option>
                        <option value="Building and customizing lightsabers">Building and customizing lightsabers</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default StarWarsSurvey;
