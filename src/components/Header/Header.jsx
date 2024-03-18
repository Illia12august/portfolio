import {
  Anchor,
  HeaderContainer,
  InnerContainer,
  Logo,
  LogoText,
  SiteNav,
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

        <SiteNav>
          <Anchor>About Me</Anchor>
          <Anchor>Skills</Anchor>
          <Anchor>Project</Anchor>
          <Anchor>Contact me</Anchor>
        </SiteNav>
      </InnerContainer>
    </HeaderContainer>
  );
};
