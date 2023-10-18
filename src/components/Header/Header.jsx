import React from 'react';
import './Header.css';

import logo from '../../assets/images/eco-logo.png';

import { Container, Row } from 'reactstrap';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Plants</h1>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header;