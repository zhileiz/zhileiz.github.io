import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'

import logo from '../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #524783;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({isHome}) => (isHome ? "40vh" : "20vh")};
`;

const FilterOverlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #524783;
  opacity: 0.7;
  z-index: 4;
`;

const HeaderContainer = styled.div`
  margin: 0px auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  img {
    height: 80px;
    margin: 0px;
  }
  nav {
    a {
      padding-left: 20px;
      color: white;
    }
    a:active { 
      color: white;
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderOverlay = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
`;

export default class Header extends Component {
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.location.pathname != '/' && prevProps.location.pathname == '/') {
      this.wrapper.animate([
        {height: "40vh"},
        {height: "20vh"}
      ], {
        duration: 300,
        fill: "forwards",
        easing: 'cubic-bezier(0.86, 0 , 0.07, 1)',
        iterations: 1
      })
    } else if (this.props.location.pathname == '/' && prevProps.location.pathname != '/') {
      this.wrapper.animate([
        {height: "20vh"},
        {height: "40vh"}
      ], {
        duration: 300,
        fill: "forwards",
        easing: 'cubic-bezier(0.86, 0 , 0.07, 1)',
        iterations: 1
      })
    }
  }
  
  render() {
    const siteTitle = this.props.siteTitle;
    const background = this.props.background;
    const location = this.props.location;
    return (
      <HeaderWrapper 
        isHome = {location.pathname == '/'}
        ref = {(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
      >
      <HeaderOverlay>
        <HeaderContainer>
            <Link to="/">
              <img src={logo} atl="level-up-blog" />
            </Link>
            <nav>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
            </nav>
        </HeaderContainer>
      </HeaderOverlay>
      <FilterOverlay />
      <Img styles = {{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.3,
        background: '#524783'
      }}
        sizes={background.sizes}
      />
    </HeaderWrapper>
    )
  }
}
