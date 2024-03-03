import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Partnership BCI",
  description: "BEST Company Insight partnership broshure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
