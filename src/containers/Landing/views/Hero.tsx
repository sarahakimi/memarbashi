'use client';
import * as LandingStyles from '../styled';

type Props = {
  headline: string;
  sub: string;
  cta: string;
  onCta: () => void;
};

export default function Hero({ headline, sub, cta, onCta }: Props) {
  return (
    <LandingStyles.HeroSection>
      <LandingStyles.GlassCard>
        <LandingStyles.Heading1>{headline}</LandingStyles.Heading1>
        <LandingStyles.BodyText>{sub}</LandingStyles.BodyText>
        {/*<LandingStyles.PrimaryButton onClick={onCta}>{cta}</LandingStyles.PrimaryButton>*/}
      </LandingStyles.GlassCard>
    </LandingStyles.HeroSection>
  );
}
