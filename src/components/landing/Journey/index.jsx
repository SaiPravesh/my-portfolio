import React from 'react';
import { Container, Button } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import dev from 'assets/illustrations/progress.svg';
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
                    <p style={{ fontSize: '15pt' }}>
                        Joined as a support analyst with NTT Data from Jan 2015 and progressed to
                        java and middleware projects. <br />
                        Moved to Ireland in Oct 2018 and started a key role as part of the Digital
                        team, have been contributing to several projects ever since.
                    </p>
                    <h2>Key projects</h2>
                    <ul>
                        <li>
                            <span style={{ fontSize: '15pt' }}>Policy Charging Rules Function</span>
                            <br />
                            Where data is charged based on pre-set rules (Facebook pack, Whatsapp
                            pack, etc) for providing latest digital experience for Mobile customers
                        </li>
                        <li>
                            <span style={{ fontSize: '15pt' }}>Wifi Calling</span>
                            <br />A service which allows Mobile customers to call or text via any
                            Wifi access point, eir was the first telco to introduce this feature in
                            Ireland
                        </li>
                        <li>
                            <span style={{ fontSize: '15pt' }}>
                                Dynamic Search Engine for law enforcement authorities
                            </span>
                            <br />
                            For retrieving sensitive data from database and evaluating and
                            addressing security vulnarabilities within the application
                        </li>
                        <li>
                            <span style={{ fontSize: '15pt' }}>eir cloud TV</span>
                            <br />
                            Eir has implemented a new TV service with a cloud partner Zattoo
                        </li>
                    </ul>
                </Details>
            </SkillsWrapper>
        </Wrapper>
    );
};
