'use client';
import styled, { css } from 'styled-components';

/** Page shell */
export const LandingPage = styled.main`
  direction: rtl;
  background: ${({ theme }) => theme.color.bg.main};
  color: ${({ theme }) => theme.color.content.body1};
  overflow-x: hidden;
  padding-top: 72px; /* fixed header height */
`;

/** Header */
export const HeaderContainer = styled.header`
  position: fixed;
  inset-inline: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  backdrop-filter: blur(10px);
  background: ${({ theme }) => theme.color.bg.soft}CC; /* 80% */
  z-index: 50;
`;
export const HeaderLogo = styled.img` width: 128px; height: auto; `;

/** Hero */
export const HeroSection = styled.section`
  position: relative;
  height: 100svh;
  display: grid;
  place-items: center;
  text-align: center;
  background:
    linear-gradient(to bottom, rgba(245,239,232,.35), rgba(245,239,232,.85)),
    url('/landing/hero.png') center/cover fixed no-repeat;
  padding: 0 16px;
`;
export const GlassCard = styled.div`
  max-width: 880px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

export const PrimaryButton = styled.button`
  ${({ theme }) => theme.text('title/semibold')};
  padding: 12px 20px;
  border-radius: 999px;
  border: 0;
  background: ${({ theme }) => theme.color.bg.primary};
  color: ${({ theme }) => theme.color.content.onPrimary};
  transition: transform .2s ease, background .15s ease;
  &:hover { background: ${({ theme }) => theme.color.bg['primary-hover']}; transform: scale(1.05); }
`;

/** Typography helpers */
export const Heading1 = styled.h1(({ theme }) => css`
  ${theme.text('header/md')};
  color: ${theme.color.content.headline};
  margin: 0 0 12px;
  text-wrap: balance;
`);
export const Heading2 = styled.h2(({ theme }) => css`
  ${theme.text('headline/semibold')};
  margin: 0 0 16px;
`);
export const BodyText = styled.p(({ theme }) => css`
  ${theme.text('body/reg')};
  margin: 0 0 16px;
`);

/** Sections */
export const StandardSection = styled.section`
  padding: 64px 16px;
  background: ${({ theme }) => theme.color.bg.main};
  color: ${({ theme }) => theme.color.content.body1};
  text-align: center;
`;
export const InverseSection = styled.section`
  padding: 64px 16px;
  background: ${({ theme }) => theme.color.bg.inverse};
  color: ${({ theme }) => theme.color.content.onInverse};
  text-align: center;
`;

/** Utilities */
export const FadeText = styled.span<{ $show?: boolean }>`
  transition: opacity .5s ease; opacity: ${(p) => (p.$show ? 1 : 0)};
`;
export const ResponsiveGrid = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  gap: 24px;
  grid-template-columns: 1fr;
  align-items: center;
  @media (min-width: 900px) { grid-template-columns: 1fr 1fr; }
`;
export const ImageRoundedShadow = styled.img`
  width: 100%;
  border-radius: 16px;
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

/** Countdown */
export const CountdownRow = styled.div`
  display: flex; justify-content: center; gap: 32px;
  font-weight: 700; font-size: 26px;
`;
export const CountdownLabel = styled.div`
  font-weight: 400; font-size: 12px; margin-top: 6px;
`;

/** Forms */
export const FormContainer = styled.form`
  max-width: 640px; margin-inline: auto; display: grid; gap: 12px;
`;
export const TextInput = styled.input`
  width: 100%; padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.color.border.main};
  border-radius: 12px;
  background: #fff; color: inherit; text-align: right;
  &:focus { outline: 2px solid ${({ theme }) => theme.color.bg.primary}; outline-offset: 2px; }
`;
export const SelectInput = styled.select`
  width: 100%; padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.color.border.main};
  border-radius: 12px; background: #fff; text-align: right;
`;
export const TextAreaInput = styled.textarea`
  width: 100%; padding: 12px 14px;
  border: 1px solid ${({ theme }) => theme.color.border.main};
  border-radius: 12px; background: #fff; text-align: right;
`;

/** Testimonials / cards */
export const Card = styled.div`
  min-height: 140px;
  max-width: 800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.bg.soft};
  border: 1px solid ${({ theme }) => theme.color.border.main};
  border-radius: 16px;
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadow.md};
  display: grid; place-items: center;
`;
export const FadeContainer = styled.div<{ $show?: boolean }>`
  transition: opacity .5s ease; opacity: ${(p) => (p.$show ? 1 : 0)};
`;

/** Partners */
/** Partners */
export const PartnersGrid = styled.div`
  max-width: 960px; margin: 0 auto;
  display: flex; flex-wrap: wrap; gap: 24px; justify-content: center;
`;
export const PartnerLogoBox = styled.div`
  width: 128px; height: 64px; border-radius: 12px;
  background: #E8DCCF; color: #6B7280;
  display: flex; align-items: center; justify-content: center;
`;

/** Footer */
export const FooterSection = styled.footer`
  background: ${({ theme }) => theme.color.bg.inverse};
  color: ${({ theme }) => theme.color.content.onInverse};
  padding: 32px 0; margin-top: 16px;
`;
export const FooterInner = styled.div` max-width:1120px; margin:0 auto; padding:0 16px; display:grid; gap:16px; `;
export const FooterRow = styled.div` display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; row-gap:12px; `;
export const FooterLogo = styled.img` width:128px; `;
export const FooterLinks = styled.div` a{ margin-inline:8px; text-decoration:underline; color:inherit; } `;
export const FooterCopy = styled.div` text-align:center; font-size:12px; `;
