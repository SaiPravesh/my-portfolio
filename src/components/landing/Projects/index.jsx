import React from 'react';
import { Container, Button } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import dev from 'assets/illustrations/skills.svg';

import { Wrapper, SkillsWrapper, Details, Thumbnail } from '../Skills/styles';

export const Projects = () => {
    return (
        <Wrapper id='Projects'>
            <SkillsWrapper as={Container}>
                <Details>
                    <h1>Highlights</h1>
                    <ul>
                        <li>Self improvement</li>
                        <li>Teamworkk - flexible and gel well with any team</li>
                        <li>Foresight PWA and GraphQL and other SIP</li>
                        <li>
                            Client first - always work with intention to help client achive thier
                            goal and provide practical advice and show high energy to clients
                        </li>
                    </ul>
                </Details>
            </SkillsWrapper>
        </Wrapper>
    );
};
