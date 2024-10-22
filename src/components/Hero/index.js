import React from 'react';

import CTA from '../CTA';
import SocialLinks from '../SocialLinks';

import '../../styles/hero.scss';

import github from '../../images/social/github.svg';
// import gitshowcase from '../../images/social/showcase.png';
import twitter from '../../images/social/twitter.svg';
import medium from '../../images/social/medium.svg';
import linkedin from '../../images/social/linkedin.svg';
import email from '../../images/social/email.svg';
import stackOverflow from '../../images/social/stackoverflow.svg';
import Behance from '../../images/social/behance.svg';
import Instagram from '../../images/social/instagram.svg';


const techs = ['React', 'Redux', 'jQuery', 'Firebase', 'ES6', 'Php', 'CSS3', 'HTML5', 'Next.js', 'Gatsby', 'Photoshop', 'Adobe XD', 'Sketch', 'React-Native', 'Vue'];
const links = [
    {
        href: 'https://instagram.com/kaleem__elahi',
        title: 'Instagram',
        image: Instagram,
    },
    {
        href: 'https://www.behance.net/kaleem-elahi',
        title: 'Behance',
        image: Behance,
    },
    {
        href: 'https://stackoverflow.com/users/7126465/kaleem-elahi',
        title: 'StackOverflow',
        image: stackOverflow,
    },
    // {
    //     href: 'https://gitshowcase.com/kaleem-elahi',
    //     title: 'GitShowcase',
    //     image: gitshowcase,
    // },
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
        href: 'mailto:shaikh9996@gmail.com',
        title: 'Email',
        image: email,
    }
]

const Hero = () => (
    <div className="hero">
        <div className="container">
            <br/><br/>
            <div className="img-bg"></div>

            <h1 className="t-bold t-mtb-15 font-header name-cls">
            👋 Hello folks!  
                I'm  
                Kaleem Shaikh!
            </h1>
            <p className=" t-mtb-12 font-header">
A Frontend-end Engineer based out of Mumbai, India.            
</p>

            <h2 className="t-regular t-mtb-15">
                <span className="color-light dev-line">
I like exploring new things, new places, new people.                </span>
            </h2>
            <h4 className="t-regular t-mtb-15">
         
            <div className="center-skills">
            {
                techs.map(tech => (

                    <span className="tag-skills">{tech}</span>
                    ))
                }
            </div>

            </h4>

            <CTA className="download-btn" type="primary" inline external to="https://drive.google.com/file/d/1uKXqsNsTlDxr-AN356KVsW9icXmHMzry/view?usp=drive_link" title="Resume">
                View CV
            </CTA>
            
            <hr />

            <SocialLinks links={links} />
        </div>
</div>
);

export default Hero;