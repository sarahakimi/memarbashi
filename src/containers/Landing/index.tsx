'use client';

import * as LandingStyles from './styled';
import strings from './strings.json';

import Header from './views/Header';
import Hero from './views/Hero';
import Spotlight from './views/SpotLight';
import About from './views/About';
import Countdown from './views/CountDown';
import Testimonials from './views/Testimonials';
import Partners from './views/Partners';
import Footer from './views/Footer';

export default function Landing() {
  const scrollToNewsletter = () =>
    document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Header />
      <LandingStyles.LandingPage>
        <Hero
          headline={strings.hero.headline}
          sub={strings.hero.sub}
          cta={strings.hero.cta}
          onCta={scrollToNewsletter}
        />
        <Spotlight title={strings.spotlight.title} messages={strings.spotlight.messages} />
        <About title={strings.about.title} p1={strings.about.p1} p2={strings.about.p2} />
        <Countdown
          title={strings.countdown.title}
          launchISO={strings.countdown.launchISO}
          labels={strings.countdown.labels}
          cta={strings.countdown.cta}
          onCta={scrollToNewsletter}
        />
        {/*<Newsletter*/}
        {/*  title={strings.newsletter.title}*/}
        {/*  desc={strings.newsletter.desc}*/}
        {/*  placeholder={strings.newsletter.placeholder}*/}
        {/*  cta={strings.newsletter.cta}*/}
        {/*  toast={strings.newsletter.toast}*/}
        {/*/>*/}
        {/*<EarlyAccess*/}
        {/*  title={strings.earlyAccess.title}*/}
        {/*  desc={strings.earlyAccess.desc}*/}
        {/*  name={strings.earlyAccess.name}*/}
        {/*  email={strings.earlyAccess.email}*/}
        {/*  role={strings.earlyAccess.role}*/}
        {/*  roles={strings.earlyAccess.roles}*/}
        {/*  reason={strings.earlyAccess.reason}*/}
        {/*  cta={strings.earlyAccess.cta}*/}
        {/*  toast={strings.earlyAccess.toast}*/}
        {/*/>*/}
        <Testimonials title={strings.testimonials.title} items={strings.testimonials.items} />
        <Partners title={strings.partners.title} />
        <Footer links={strings.footer.links} socials={strings.footer.socials} copy={strings.footer.copyright} />
      </LandingStyles.LandingPage>
    </>
  );
}
