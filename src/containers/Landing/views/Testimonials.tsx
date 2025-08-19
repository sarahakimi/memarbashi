'use client';
import { useEffect, useMemo, useState } from 'react';
import * as LandingStyles from '../styled';

type Item = { text: string; author: string };

export default function Testimonials({ title, items }: { title: string; items: Item[] }) {
  const list = useMemo(() => items, [items]);
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    let ok = true;
    const tick = () => {
      if (!ok) return;
      setShow(true);
      const t1 = setTimeout(() => {
        setShow(false);
        const t2 = setTimeout(() => { setI((v) => (v + 1) % list.length); tick(); }, 500);
        return () => clearTimeout(t2);
      }, 4000);
      return () => clearTimeout(t1);
    };
    const stop = tick();
    return () => { ok = false; if (typeof stop === 'function') stop(); };
  }, [list]);

  return (
    <LandingStyles.StandardSection id="testimonials">
      <LandingStyles.Heading2>{title}</LandingStyles.Heading2>
      <LandingStyles.Card>
        <LandingStyles.FadeContainer $show={show} key={i}>
          <div style={{ paddingInline: 24 }}>
            <p style={{ fontStyle: 'italic', fontSize: 20, marginBottom: 8 }}>“{list[i].text}”</p>
            <p style={{ fontWeight: 600 }}>{list[i].author}</p>
          </div>
        </LandingStyles.FadeContainer>
      </LandingStyles.Card>
    </LandingStyles.StandardSection>
  );
}
