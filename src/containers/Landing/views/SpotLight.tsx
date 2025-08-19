'use client';
import { useEffect, useMemo, useState } from 'react';
import * as LandingStyles from '../styled';

export default function Spotlight({ title, messages }: { title: string; messages: string[] }) {
  const items = useMemo(() => messages, [messages]);
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let mounted = true;
    const tick = () => {
      if (!mounted) return;
      setVisible(true);
      const t1 = setTimeout(() => {
        setVisible(false);
        const t2 = setTimeout(() => {
          setIndex((i) => (i + 1) % items.length);
          tick();
        }, 500);
        return () => clearTimeout(t2);
      }, 3000);
      return () => clearTimeout(t1);
    };
    const stop = tick();
    return () => { mounted = false; if (typeof stop === 'function') stop(); };
  }, [items]);

  return (
    <LandingStyles.StandardSection id="spotlight">
      <LandingStyles.Heading2>{title}</LandingStyles.Heading2>
      <div style={{ height: 96, display: 'grid', placeItems: 'center', fontWeight: 600, fontSize: 22 }}>
        <LandingStyles.FadeText $show={visible} key={index}>{items[index]}</LandingStyles.FadeText>
      </div>
    </LandingStyles.StandardSection>
  );
}
