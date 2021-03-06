import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
    <Wrapper>
        <Header />
        <IntroWrapper as={Container}>
            <Details>
                <h1>Hi There!</h1>
                <h4>
                    I’m Sai Pravesh, a fullstack engineer! <br />
                    Here is my Digital portfolio
                </h4>
            </Details>
            <Thumbnail>
                <img src={dev} alt='I’m Sai Pravesh and I’m a fullstack engineer!' />
            </Thumbnail>
        </IntroWrapper>
    </Wrapper>
);
