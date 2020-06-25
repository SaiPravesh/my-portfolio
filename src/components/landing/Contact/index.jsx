import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Values = () => (
    <Wrapper as={Container} id='Values'>
        <Thumbnail>
            <img src={contact} alt='I’m John and I’m a Backend & Devops engineer!' />
        </Thumbnail>
        <Details>
            <h1>Highlights</h1>
            <ul>
                <span style={{ fontSize: '15pt' }}>Teamwork</span>
                <ul>
                    <li>Very flexible and gel well with any team </li>
                    <li>
                        Working closely with other vendors and business team, was able to maintain
                        good relationship with everyone
                    </li>
                    <li>
                        Provided professional and moral support to internal team whenever possible
                    </li>
                </ul>

                <span style={{ fontSize: '15pt' }}>Foresight</span>
                <ul>
                    <li>Suggested to use PWA for mobile app developemt</li>
                    <li>
                        Suggested to use GrapghQL as an API gateway to enhance frontend application
                        in a microservice environment
                    </li>
                    <li>
                        Several other service improvements were suggested and implemented that
                        helped move away from legacy implementations to better bespoke greenfield
                        solutions
                    </li>
                </ul>
                <span style={{ fontSize: '15pt' }}>Client first</span>
                <ul>
                    <li>
                        Always work with the intention to help client achieve their goal by
                        providing practical advice and show high energy to clients
                    </li>
                </ul>
                <span style={{ fontSize: '15pt' }}>Self improvement</span>
                <ul>
                    <li>
                        Being a self-motivated person, I explore new ideas and implement best
                        practices
                    </li>
                </ul>
            </ul>
        </Details>
    </Wrapper>
);
