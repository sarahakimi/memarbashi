import localFont from 'next/font/local';

export type TextVariant =
  | 'header/lg' | 'header/md' | 'header/reg' | 'header/sm'
  | 'headline/bold' | 'headline/semibold' | 'headline/md' | 'headline/reg' |
  'headline/sm'
  | 'title/bold' | 'title/semibold' | 'title/md' | 'title/sm' | 'title/reg'
  | 'body/bold' | 'body/semibold' | 'body/md' | 'body/reg'
  | 'caption/semibold' | 'caption/md' | 'caption/reg' | 'caption/sm';

export const Peyda = localFont({
  src: [
    { path: '../../public/fonts/Peyda-Regular.ttf',  weight: '400', style: 'normal' },
    { path: '../../public/fonts/Peyda-Medium.ttf',   weight: '500', style: 'normal' },
    { path: '../../public/fonts/Peyda-Bold.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Peyda-ExtraBold.ttf',     weight: '700', style: 'normal' },
  ],
  variable: '--font-peyda',
  display: 'swap',
});

export const font = {
  family: {
    primary: 'Peyda, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto,Arial',
  },weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};
// px sizes derived from your table; tweak as needed
export const typeScale: Record<TextVariant, { size: number; line: number;
  weight: number; letter?: number }> = {
  'header/lg': { size: 48, line: 56, weight: font.weight.bold },
  'header/md': { size: 36, line: 44, weight: font.weight.semibold },
  'header/reg': { size: 28, line: 36, weight: font.weight.regular },
  'header/sm': { size: 24, line: 32, weight: font.weight.regular },
  'headline/bold': { size: 24, line: 36, weight: font.weight.bold },
  'headline/semibold': { size: 24, line: 36, weight: font.weight.semibold },
  'headline/md': { size: 20, line: 30, weight: font.weight.medium },
  'headline/reg': { size: 20, line: 30, weight: font.weight.regular },
  'headline/sm': { size: 16, line: 24, weight: font.weight.regular },
  'title/bold': { size: 16, line: 24, weight: font.weight.bold },
  'title/semibold': { size: 16, line: 24, weight: font.weight.semibold },
  'title/md': { size: 16, line: 24, weight: font.weight.medium },
  'title/sm': { size: 16, line: 24, weight: font.weight.regular },
  'title/reg': { size: 14, line: 21, weight: font.weight.regular },
  'body/bold': { size: 14, line: 21, weight: font.weight.bold },
  'body/semibold': { size: 14, line: 21, weight: font.weight.semibold },
  'body/md': { size: 14, line: 21, weight: font.weight.medium },
  'body/reg': { size: 12, line: 18, weight: font.weight.regular },
  'caption/semibold': { size: 12, line: 18, weight: font.weight.semibold },
  'caption/md': { size: 12, line: 18, weight: font.weight.medium },
  'caption/reg': { size: 10, line: 15, weight: font.weight.regular },
  'caption/sm': { size: 8, line: 12, weight: font.weight.regular },
}
