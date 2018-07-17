import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524783;
  margin-bottom: 1.45rem;
`;

const HeaderContainer = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  img {
    height: 80px;
  }
  nav {
    a {
      padding-left: 20px;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          <img src={logo} atl="level-up-blog" />
        </Link>
        <nav>
          <Link to='about'>About</Link>
          <Link to='contact'>Contact</Link>
        </nav>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
