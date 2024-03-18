import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  margin: 24px 80px;
  padding: 0px 32px;
`;

export const InnerContainer = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.svg`
  display: block;
  width: 40px;
  height: 40px;
`;
export const SiteNav = styled.ul`
  display: flex;
  gap: 32px;
`;
export const LogoText = styled.p`
  font-size: 20px;
  line-height: 1.2;
  display: inline-block;
  font-weight: 700;
  color: var(--primary-black);
`;
export const Anchor = styled.a`
  display: inline-block;
  font-weight: 600;
  color: var(--primary-black);
`;
