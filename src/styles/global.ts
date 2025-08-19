'use client';
import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
 :root { color-scheme: ${({ theme }) => theme.mode}; }
 * { box-sizing: border-box; }
 html, body { height: 100%; }
 body {
 margin: 0;
 background: ${({ theme }) => theme.color.bg.main};
 color: ${({ theme }) => theme.color.content.body1};
 font-family: ${({ theme }) => theme.font.family.primary};
 }
 a { color: ${({ theme }) => theme.color.content.primary}; text-decoration:
none; }
`;
