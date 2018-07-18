import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524783;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 40vh;
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

const HeaderOverlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

const Header = ({ siteTitle, background }) => (
  <HeaderWrapper>
    <HeaderOverlay>
      <HeaderContainer>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <img src={logo} atl="level-up-blog" />
          </Link>
          <nav>
            <Link to='about'>About</Link>
            <Link to='contact'>Contact</Link>
          </nav>
      </HeaderContainer>
    </HeaderOverlay>
    <Img styles = {{
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: 1
    }}
      sizes={background.sizes}
    />
  </HeaderWrapper>
)

export default Header
