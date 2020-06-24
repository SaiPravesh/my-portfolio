import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
    <Wrapper desktop={desktop}>
        <AnchorLink href='#Journey'>Journey</AnchorLink>
        <AnchorLink href='#Skills'>Skills</AnchorLink>
        <AnchorLink href='#Projects'>Projects</AnchorLink>
        <AnchorLink href='#Values'>Values</AnchorLink>
    </Wrapper>
);

export default NavbarLinks;
