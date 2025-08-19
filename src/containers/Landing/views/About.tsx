'use client';
import * as LandingStyles from '../styled';

export default function About({ title, p1, p2, img = '/landing/about.png' }: {
  title: string; p1: string; p2: string; img?: string;
}) {
  return (
    <LandingStyles.StandardSection id="about">
    <LandingStyles.ResponsiveGrid>
      <div>
        <LandingStyles.Heading2>{title}</LandingStyles.Heading2>
    <LandingStyles.BodyText>{p1}</LandingStyles.BodyText>
    <LandingStyles.BodyText>{p2}</LandingStyles.BodyText>
    </div>
    <div>
    <LandingStyles.ImageRoundedShadow src={img} alt="دست‌ساز و فناوری" />
    </div>
    </LandingStyles.ResponsiveGrid>
    </LandingStyles.StandardSection>
);
}
