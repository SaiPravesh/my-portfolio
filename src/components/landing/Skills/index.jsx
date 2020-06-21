import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button, Card } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { Grid, Item, Content, Stats } from '../Projects/styles';

const skillList = [
    {
        id: 0,
        type: 'Frontend',
        skills: [
            { name: 'react.js' },
            { name: 'AngularJ.js' },
            { name: 'SASS' },
            { name: 'NPM' },
            { name: 'Gulp' },
            { name: 'Webpack' },
            { name: 'GA' },
            { name: 'Android' },
            { name: 'iOS' },
            { name: 'PWA' },
        ],
    },

    {
        id: 1,
        type: 'Backend',
        skills: [
            { name: 'Java' },
            { name: 'Spring boot' },
            { name: 'Hibernate' },
            { name: 'Node.js' },
            { name: 'Express.js' },
            { name: 'PHP' },
            { name: 'MySQL/MariaDB' },
            { name: 'MongoDB' },
            { name: 'Docker' },
            { name: 'Shell scripting' },
        ],
    },
    {
        id: 2,
        type: 'Integration, Version control and CMS ',
        skills: [
            { name: 'GraphQL' },
            { name: 'Gatsby.js' },
            { name: 'GIT' },
            { name: 'SVN' },
            { name: 'OpenCMS' },
            { name: 'Wordpress' },
            { name: 'Strapi' },
        ],
    },
    {
        id: 3,
        type: 'Test and Automation',
        skills: [{ name: 'Jest' }, { name: 'Selenium' }, { name: 'Puppeteer' }],
    },
    {
        id: 4,
        type: 'DevOps',
        skills: [{ name: 'Jenkins' }, { name: 'Chef' }, { name: 'Github pipelines' }],
    },
    {
        id: 5,
        type: 'Others',
        skills: [
            { name: 'Firebase' },
            { name: 'Cookie Pro' },
            { name: 'Agile workflow (Confluence/JIRA)' },
        ],
    },
];

export const Skills = () => (
    <Wrapper id='about'>
        <SkillsWrapper as={Container}>
            <Thumbnail>
                <img src={dev} alt='I’m Sai Pravesh and I’m a fullstack engineer!' />
            </Thumbnail>
            <Details>
                <h1>Skills</h1>
                <Grid>
                    {skillList.map(skillset => {
                        return (
                            <div>
                                <Item
                                    key={skillset.id}
                                    as='a'
                                    href={'#'}
                                    // target='_blank'
                                    rel='noopener noreferrer'>
                                    <Card>
                                        <Content>
                                            <h4>{skillset.type}</h4>
                                            {skillset.skills.map(skill => {
                                                return (
                                                    <div>
                                                        <ul>
                                                            <li>{skill.name}</li>
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </Content>
                                        {/* <Stats>
                                    <div>
                                        <img src={starIcon} alt='stars' />
                                        <span>{node.stargazers.totalCount}</span>
                                    </div>
                                    <div>
                                        <img src={forkIcon} alt='forks' />
                                        <span>{node.forkCount}</span>
                                    </div>
                                </Stats> */}
                                    </Card>
                                </Item>
                            </div>
                        );
                    })}
                </Grid>
                {/* <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry’s standard dummy.
                </p>
                <Button as={AnchorLink} href='#contact'>
                    Hire me
                </Button> */}
            </Details>
        </SkillsWrapper>
    </Wrapper>
);
