'use client';
import strings from './strings.json';
import { Button, Card, Container, H1, P, Row } from '@/styles/styled';

export default function Page() {
  return (
      <main>
        <Container>
          <Card>
            <H1>{strings.brand}</H1>
            <P>{strings.tagline}</P>
            <P>{strings.sub}</P>
            <Row>
              <Button onClick={() => (window.location.href = 'mailto:hello@memarbashi.com')}>{strings.ctaPrimary}</Button>
              <Button onClick={() => (window.location.href = '/portfolio')}>{strings.ctaSecondary}</Button>
            </Row>
          </Card>
        </Container>
      </main>
  );
}