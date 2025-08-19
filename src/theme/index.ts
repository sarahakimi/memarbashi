import { palette } from './palette';
import { semantic } from './semantic';
import { font, typeScale, TextVariant } from './typography';
export const radii = { xs: 6, sm: 10, md: 16, lg: 20, pill: 999 } as const;
export const spacing = { xs: 6, sm: 10, md: 16, lg: 24, xl: 32, '2xl': 40 } as
  const;
export const shadow = {
  sm: '0 2px 8px rgba(0,0,0,0.08)',
  md: '0 10px 30px rgba(0,0,0,0.18)',
  lg: '0 20px 50px rgba(0,0,0,0.22)'
} as const;
export type Theme = {
  mode: 'light' | 'dark';
  palette: typeof palette;
  color: typeof semantic;
  font: typeof font;
  typeScale: typeof typeScale;
  radii: typeof radii;
  spacing: typeof spacing;
  shadow: typeof shadow;
  text: (v: TextVariant) => string;
};
export const theme: Theme = {
  mode: 'light',
  palette,
  color: semantic,
  font,
  typeScale,
  radii,
  spacing,
  shadow,
  text: (v) => {
    const t = typeScale[v];
    return `font-family: ${font.family.primary}; font-weight: ${t.weight}; fontsize: ${t.size}px; line-height: ${t.line}px;`;
  },
};
