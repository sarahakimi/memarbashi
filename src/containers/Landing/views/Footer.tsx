'use client';
import * as LandingStyles from '../styled';

export default function Footer({ links, socials, copy }: {
  links: string[]; socials: string[]; copy: string;
}) {
  return (
    <LandingStyles.FooterSection>
      <LandingStyles.FooterInner>
        <LandingStyles.FooterRow>
          <LandingStyles.FooterLogo src="landing/logo.png" alt="معمارباشی" />
          {/*<LandingStyles.FooterLinks>*/}
          {/*  {links.map((l) => <a key={l} href="#">{l}</a>)}*/}
          {/*</LandingStyles.FooterLinks>*/}
          {/*<LandingStyles.FooterLinks>*/}
          {/*  {socials.map((s) => <a key={s} href="#">{s}</a>)}*/}
          {/*</LandingStyles.FooterLinks>*/}
        </LandingStyles.FooterRow>
        <LandingStyles.FooterCopy>{copy}</LandingStyles.FooterCopy>
      </LandingStyles.FooterInner>
    </LandingStyles.FooterSection>
  );
}
