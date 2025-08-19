'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as LandingStyles from '../styled';

type Props = {
  title: string;
  launchISO: string;
  labels: { d: string; h: string; m: string; s: string };
  cta: string;
  onCta: () => void;
};

export default function Countdown({ title, launchISO, labels, cta, onCta }: Props) {
  const launch = useMemo(() => new Date(launchISO), [launchISO]);
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const ref = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const diff = +launch - +new Date();
      if (diff <= 0) { setT({ d: 0, h: 0, m: 0, s: 0 }); return; }
      setT({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / (1000 * 60)) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    ref.current = window.setInterval(update, 1000);
    return () => { if (ref.current) clearInterval(ref.current); };
  }, [launch]);

  return (
    <LandingStyles.InverseSection id="countdown">
      <LandingStyles.Heading2>{title}</LandingStyles.Heading2>
      <LandingStyles.CountdownRow>
        <div><div>{t.d}</div><LandingStyles.CountdownLabel>{labels.d}</LandingStyles.CountdownLabel></div>
        <div><div>{t.h}</div><LandingStyles.CountdownLabel>{labels.h}</LandingStyles.CountdownLabel></div>
        <div><div>{t.m}</div><LandingStyles.CountdownLabel>{labels.m}</LandingStyles.CountdownLabel></div>
        <div><div>{t.s}</div><LandingStyles.CountdownLabel>{labels.s}</LandingStyles.CountdownLabel></div>
      </LandingStyles.CountdownRow>
      {/*<LandingStyles.PrimaryButton onClick={onCta} style={{ marginTop: 24 }}>{cta}</LandingStyles.PrimaryButton>*/}
    </LandingStyles.InverseSection>
  );
}
