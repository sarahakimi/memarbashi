import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/styled-component";
import {GlobalStyles} from "@/styles/global";

export const metadata: Metadata = {
  title: 'Memarbashi',
  description: 'Architecture & Design Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <StyledComponentsRegistry>
        <GlobalStyles />
        {children}
      </StyledComponentsRegistry>
      </body>
      </html>
  );
}

