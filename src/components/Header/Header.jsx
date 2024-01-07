import {
  Anchor,
  HeaderContainer,
  InnerContainer,
  Logo,
  LogoText,
  Navigation,
  StyledLink,
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <InnerContainer>
        <StyledLink>
          <Logo>
            <use href={`${sprite}#logo`} />
          </Logo>
          <LogoText>Personal</LogoText>
        </StyledLink>

        <Navigation>
          <Anchor></Anchor>
          <Anchor></Anchor>
          <Anchor></Anchor>
          <Anchor></Anchor>
        </Navigation>
      </InnerContainer>
    </HeaderContainer>
  );
};
