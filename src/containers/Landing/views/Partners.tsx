'use client';
import * as LandingStyles from '../styled';

export default function Partners({ title }: { title: string }) {
  return (
    <LandingStyles.StandardSection id="partners">
      <LandingStyles.Heading2>{title}</LandingStyles.Heading2>
      <LandingStyles.PartnersGrid>
        {Array.from({ length: 4 }).map((_, i) => (
          <LandingStyles.PartnerLogoBox key={i}>لوگو {i + 1}</LandingStyles.PartnerLogoBox>
        ))}
      </LandingStyles.PartnersGrid>
    </LandingStyles.StandardSection>
  );
}
