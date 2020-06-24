import React from 'react';
import { Container, Button } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import dev from 'assets/illustrations/journey.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from '../Skills/styles';

export const Journey = () => {
    return (
        <Wrapper id='Journey'>
            <SkillsWrapper as={Container}>
                <Thumbnail>
                    <img src={dev} alt='I’m Sai Pravesh and I’m a fullstack engineer!' />
                </Thumbnail>
                <Details>
                    <h1>Journey in NTT Data</h1>
                    <p>
                        I joined NTT Data in Jan 2015 as a support analyst and then started
                        contributeing to java and middleware projects. <br />I recently moved to
                        Ireland in Oct 2018 and started my role in the Digital team and have been
                        contributing to several projects ever since.
                    </p>
                </Details>
            </SkillsWrapper>
        </Wrapper>
    );
};
