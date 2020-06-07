import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '~/assets/fastfeet-logo.png';
import { signOut } from '~/store/models/auth/actions';

import {
  Container,
  LeftContainer,
  RightContainer,
  Content,
  LinkNav,
} from './styles';

function Header() {
  const dispatch = useDispatch();
  const path = useSelector((state) => state.user.path);
  const profileName = useSelector((state) => state.user.profile.name);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <LeftContainer selected>
          <img src={logo} alt="logo" />
          <LinkNav to="/delivery" selected={path === 'delivery'}>
            ENCOMENDAS
          </LinkNav>
          <LinkNav to="/deliveryman" selected={path === 'deliveryman'}>
            ENTREGADORES
          </LinkNav>
          <LinkNav to="/Recipient" selected={path === 'recipient'}>
            DESTINÁTARIOS
          </LinkNav>
          <LinkNav to="/problem" selected={path === 'problem'}>
            PROBLEMAS
          </LinkNav>
        </LeftContainer>
        <RightContainer>
          <Link to="/" className="user">
            {profileName}
          </Link>
          <button type="button" onClick={handleLogout} className="logout">
            sair do sistema
          </button>
        </RightContainer>
      </Content>
    </Container>
  );
}

export default Header;
