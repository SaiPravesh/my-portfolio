import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Values, Projects, Journey } from 'components/landing';

export default () => (
    <Layout>
        <SEO />
        <Intro />
        <Journey />
        <Skills />
        <Projects />
        <Values />
    </Layout>
);
