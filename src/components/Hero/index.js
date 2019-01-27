import React from 'react';

import CTA from '../CTA';
import SocialLinks from '../SocialLinks';

import '../../styles/hero.scss';

import github from '../../images/social/github.svg';
import twitter from '../../images/social/twitter.svg';
import medium from '../../images/social/medium.svg';
import linkedin from '../../images/social/linkedin.svg';
import email from '../../images/social/email.svg';

const links = [
    {
        href: 'https://github.com/kaleem-elahi',
        title: 'Github',
        image: github,
    },
    {
        href: 'https://twitter.com/@kaleem__elahi',
        title: 'Twitter',
        image: twitter,
    },
    {
        href: 'https://medium.com/@kaleem__elahi',
        title: 'Medium',
        image: medium,
    },
    {
        href: 'https://www.linkedin.com/in/kaleem-elahi/',
        title: 'Linkedin',
        image: linkedin,
    },
    {
        href: 'mailto:sayhi@kaleemelahi.co',
        title: 'Email',
        image: email,
    }
]

const Hero = () => (
    <div className="hero">
        <div className="container">
            <h1 className="t-bold t-mtb-15">
                Hey! 👋 I'm Kaleem Elahi
            </h1>
            <h2 className="t-regular t-mtb-15">
                <span className="color-light">
                    Front-end Engineer |
                    Freelancer 
                    | UI/UX Developer
                </span>
            </h2>

            <CTA type="primary" inline external to="https://github.com/kaleem-elahi/kaleem-elahi.github.io/files/2800404/Kaleem.s.Resume.7.pdf" title="Resume">
                My Resume
            </CTA>
            
            <hr />

            <SocialLinks links={links} />
        </div>
</div>
);

export default Hero;