import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import detailsRightIllustration from 'assets/illustrations/details2.svg';
import { Container, Button, Card } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { Grid, Item, Content, Stats } from '../Projects/styles';
import react from 'assets/logos/reactjs.svg';
import angular from 'assets/logos/Angular.svg';
import sass from 'assets/logos/sass.svg';
import webpack from 'assets/logos/webpack.svg';
import figma from 'assets/logos/figma.svg';
import redux from 'assets/logos/redux.svg';
import typescript from 'assets/logos/typescript.svg';
import apolloGraphql from 'assets/logos/apollo-graphql.svg';
import android from 'assets/logos/android.svg';
import appleios from 'assets/logos/apple-ios.svg';
import ionic from 'assets/logos/ionic.svg';
import java from 'assets/logos/java.svg';
import spring from 'assets/logos/spring.svg';
import nodejs from 'assets/logos/nodejs.svg';
import express from 'assets/logos/express.svg';
import php from 'assets/logos/php.svg';
import nginx from 'assets/logos/nginx.svg';
import mariadb from 'assets/logos/mariadb.svg';
import mongodb from 'assets/logos/mongodb.svg';
import docker from 'assets/logos/docker.svg';
import shell from 'assets/logos/bash.svg';
import graphql from 'assets/logos/graphql.svg';
import rest from 'assets/logos/rest.svg';
import gatsby from 'assets/logos/gatsby.svg';
import jamstack from 'assets/logos/jamstack.svg';
import postman from 'assets/logos/postman.svg';
import git from 'assets/logos/git.svg';
import jwt from 'assets/logos/jwt.svg';
import opencms from 'assets/logos/opencms.svg';
import wordpress from 'assets/logos/wordpress.svg';
import strapi from 'assets/logos/strapi.svg';
import jest from 'assets/logos/jest.svg';
import selenium from 'assets/logos/selenium.svg';
import puppeteer from 'assets/logos/puppeteer.svg';
import jenkins from 'assets/logos/jenkins.svg';
import chef from 'assets/logos/chef.svg';
import githubPipelines from 'assets/logos/github.svg';
import googleAnalytics from 'assets/logos/google-analytics.svg';
import netlify from 'assets/logos/netlify.svg';
import pwa from 'assets/logos/pwa.svg';
import bootstrap from 'assets/logos/bootstrap.svg';

const skillList = [
    {
        id: 0,
        type: 'Frontend',
        skills: [
            { name: 'react.js', logo: react },
            { name: 'Angular.js', logo: angular },
            { name: 'SASS', logo: sass },
            { name: 'Redux', logo: redux },
            { name: 'TypeScript', logo: typescript },
            { name: 'Apollo', logo: apolloGraphql },
            { name: 'Figma', logo: figma },
            { name: 'Android', logo: android },
            { name: 'iOS', logo: appleios },
            { name: 'Ionic', logo: ionic },
        ],
    },

    {
        id: 1,
        type: 'Backend',
        skills: [
            { name: 'Java', logo: java },
            { name: 'Spring', logo: spring },
            { name: 'Node.js', logo: nodejs },
            { name: 'Express.js', logo: express },
            { name: 'PHP', logo: php },
            { name: 'Nginx', logo: nginx },
            { name: 'MariaDB', logo: mariadb },
            { name: 'MongoDB', logo: mongodb },
            { name: 'Docker', logo: docker },
            { name: 'Shell', logo: shell },
        ],
    },
    {
        id: 2,
        type: 'Integration, Utilities and Others ',
        skills: [
            { name: 'GraphQL', logo: graphql },
            { name: 'Jest', logo: jest },
            { name: 'Gatsby.js', logo: gatsby },
            { name: 'Analytics', logo: googleAnalytics },
            { name: 'Jenkins', logo: jenkins },
            { name: 'GIT', logo: git },
            { name: 'Netlify', logo: netlify },
            { name: 'OpenCMS', logo: opencms },
            { name: 'Wordpress', logo: wordpress },
            { name: 'Strapi', logo: strapi },
        ],
    },
    // {
    //     id: 3,
    //     type: 'Others ',
    //     skills: [
    //         { name: 'Jest', logo: jest },
    //         { name: 'Selenium', logo: selenium },
    //         { name: 'Puppeteer', logo: puppeteer },
    //         { name: 'Jenkins', logo: jenkins },
    //         { name: 'Chef', logo: chef },
    //         { name: 'Github', logo: githubPipelines },
    //         { name: 'Analytics', logo: googleAnalytics },
    //         { name: 'Netlify', logo: netlify },
    //         { name: 'PWA', logo: pwa },
    //         { name: 'Bootstrap', logo: bootstrap },
    //     ],
    // },
];

export const Skills = () => (
    <Wrapper
        id='Skills'
        style={{
            backgroundImage: `url(${detailsRightIllustration})`,
            backgroundSize: 'contain',
            backgroundPosition: 'right top',
            backgroundRepeat: 'no-repeat',
        }}>
        <SkillsWrapper as={Container}>
            <Details>
                <h1>Skills</h1>
                <Grid>
                    {skillList.map(skillset => {
                        return (
                            <div>
                                <Item key={skillset.id}>
                                    <Card>
                                        <h4>{skillset.type}</h4>
                                        <Content>
                                            {skillset.skills.map(skill => {
                                                return (
                                                    <div style={{ display: 'flex' }}>
                                                        <Item key={skill.name}>
                                                            <Card
                                                                style={{
                                                                    maxHeight: '8rem',
                                                                    marginTop: '5px',
                                                                    width: '4rem',
                                                                }}>
                                                                <img
                                                                    src={skill.logo}
                                                                    alt='react'
                                                                    style={{
                                                                        height: '2rem',
                                                                        width: '3rem',
                                                                    }}
                                                                />
                                                                <p
                                                                    style={{
                                                                        fontSize: '10pt',
                                                                        marginBottom: '0',
                                                                    }}>
                                                                    {skill.name}
                                                                </p>
                                                            </Card>
                                                        </Item>
                                                        <div style={{ padding: '0.2rem' }}></div>
                                                    </div>
                                                );
                                            })}
                                        </Content>
                                    </Card>
                                </Item>
                            </div>
                        );
                    })}
                </Grid>
            </Details>
            <Thumbnail>
                <img
                    src={dev}
                    alt='I’m Sai Pravesh and I’m a fullstack engineer!'
                    style={{ marginLeft: '4rem' }}
                />
            </Thumbnail>
        </SkillsWrapper>
    </Wrapper>
);
