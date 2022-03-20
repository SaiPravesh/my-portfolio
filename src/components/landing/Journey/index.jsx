/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Button } from 'components/common';
import starIcon from 'assets/icons/star.svg';
import forkIcon from 'assets/icons/fork.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import dev from 'assets/illustrations/progress.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from '../Skills/styles';

export const Journey = () => (
        <Wrapper id='Journey'>
            <SkillsWrapper as={Container}>
                <Thumbnail>
                    <img
                        src={dev}
                        id='desktop'
                        alt='I’m Sai Pravesh and I’m a fullstack engineer!'
                        // style={{ paddingBottom: '10rem' }}
                    />
                </Thumbnail>
                <Details>
                    <h1>Journey in NTT Data!</h1>
                    <p style={{ fontSize: '12pt' }}>
                        Joined as a support analyst with NTT Data from Jan 2015 and progressed to
                        java and middleware projects. <br />
                        Moved to Ireland in Oct 2018 and started a key role as part of the Digital
                        team, have been contributing to several projects ever since.
                    </p>
                    <h2>Key accomplishments</h2>
                    <ul>
                        <li>
                            <span style={{ fontSize: '15pt' }}>As a support analyst</span>
                            <ul>
                                <li>
                                    SME for mobile number porting application and was
                                    the point of contact for any major incidents.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span style={{ fontSize: '15pt' }}>As a Java engineer</span>
                            <ul>
                                <li>
                                    The main contributor for rebuilding a legacy point of sale
                                    application from scratch, which adviced customers to opt into or
                                    purchase roaming bundles and data add-ons including introduction
                                    of social bundles where data is charged based on pre-set rules
                                    (Facebook pack, Whatsapp pack, etc) for providing latest digital
                                    experience for Mobile customers
                                </li>
                                {/* <li>
                                    I was one of the key developers in eir's rebranding project
                                    (formally known as Meteor)
                                </li> */}
                                <li>
                                    I also largely contributed to a security audit against eir's
                                    dynamic Search Engine application that housed CDRs (call data
                                    records) for law enforcement authorities which involved
                                    evaluating, recommending and implementing a solution to the
                                    security vulnarabilities with the application
                                </li>
                            </ul>
                        </li>
                        {/* <li>
                            <span style={{ fontSize: '15pt' }}>As a middleware engineer</span>
                            <ul>
                                <li>Wifi calling</li>
                                <li>MBB nad SAMI Rater</li>
                            </ul>
                        </li> */}
                        <li>
                            <span style={{ fontSize: '15pt' }}>As an Onsite-coordinator</span>
                            <ul>
                                <li>
                                    Able to communicate effectively, both within and outside
                                    the team and supported delivery of several projects and
                                    maintained 100% SLA.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span style={{ fontSize: '15pt' }}>As a Digital lead engineer</span>
                            <ul>
                                <li>
                                    Setup a process that helped deliver BAU and project changes
                                    working closely with other vendors and business team, was able
                                    to maintain good relationship with everyone
                                </li>
                                <li>
                                    Showcased strong foresight
                                    <ul>
                                        <li>Suggested to use PWA for mobile app developemt</li>
                                        <li>
                                            Suggested to use GrapghQL as an API gateway to enhance
                                            frontend application in a microservice environment
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span style={{ fontSize: '15pt' }}>Personally</span>
                        </li>
                        <ul>
                            <li>Very flexible and gel well with any team</li>
                            <li>
                                Always work with the intention to help client achieve their goal by
                                providing practical advice and show high energy to clients
                            </li>
                            <li>
                                Being a self-motivated person, I explore new ideas and implement
                                best practices
                            </li>
                        </ul>
                        {/* <li>
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
                        </li> */}
                    </ul>
                </Details>
            </SkillsWrapper>
        </Wrapper>
    );
