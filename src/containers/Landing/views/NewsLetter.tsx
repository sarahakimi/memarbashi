'use client';
import * as LandingStyles from '../styled';

export default function Newsletter({ title, desc, placeholder, cta, toast }: {
  title: string; desc: string; placeholder: string; cta: string; toast: string;
}) {
  return (
    <LandingStyles.StandardSection id="newsletter">
      <LandingStyles.Heading2>{title}</LandingStyles.Heading2>
      <LandingStyles.BodyText>{desc}</LandingStyles.BodyText>
      <LandingStyles.FormContainer onSubmit={(e) => { e.preventDefault(); alert(toast); (e.currentTarget as HTMLFormElement).reset(); }}>
  <LandingStyles.TextInput type="email" placeholder={placeholder} required />
  <LandingStyles.PrimaryButton type="submit">{cta}</LandingStyles.PrimaryButton>
    </LandingStyles.FormContainer>
    </LandingStyles.StandardSection>
);
}
