'use client';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 24px;
`;

export const Card = styled.div`
  background: var(--card);
  border: 1px solid #1f2937;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.25);
`;

export const H1 = styled.h1`
  font-size: clamp(36px, 7vw, 64px);
  line-height: 1.05;
  margin: 0 0 16px;
`;

export const P = styled.p`
  font-size: clamp(16px, 2vw, 18px);
  color: var(--muted);
  margin: 0 0 24px;
`;

export const Row = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  appearance: none;
  border: 1px solid #2a2f36;
  background: linear-gradient(180deg, #1f2330, #181c23);
  color: #fff;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.08s ease, box-shadow 0.2s ease;
  &:hover { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(124,58,237,0.25); }
`;