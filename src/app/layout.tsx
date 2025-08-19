import type { Metadata } from 'next';
import Providers from '@/app/providers';
import strings from "./strings.json"
export const metadata: Metadata = {
  title: strings.brand,
  description: 'Architecture & Design Studio',
};
export default function RootLayout({ children }: { children: React.ReactNode })
{
  return (
    <html lang="fa" dir="rtl">
    <body>
    <Providers>{children}</Providers>
    </body>
    </html>);
}
