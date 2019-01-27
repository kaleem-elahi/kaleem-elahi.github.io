import React from 'react';
import Link from 'gatsby-link';

import ExpandedCard from '../components/ExpandedCard';

import experiences from '../data/Experience';

const ExperiencePage = () => (
    <div className="container">
        <Link to="/" className="transparent-button">‹ Back</Link>
        <h2 className="heading t-bold">Experience.</h2>
        {
            experiences.map(experience => <ExpandedCard key={experience.id} data={experience} />)
        }
    </div>
);

export default ExperiencePage;