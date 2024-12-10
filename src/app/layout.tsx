import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <head>
          <title>Tyler Davies</title>
          <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
          <link rel="manifest" href="site.webmanifest" />
          <link rel="stylesheet" type="text/css" href="styles.css" />
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Tyler Davies - Innovative software and IT specialist with expertise in front-end and back-end development, DevOps, and network configuration." />
          <meta name="keywords" content="Tyler Davies, software specialist, IT specialist, front-end development, back-end development, DevOps, network configuration" />
          <meta name="author" content="Tyler Davies" />
          <meta property="og:title" content="Tyler Davies - Software and IT Specialist" />
          <meta property="og:description" content="Innovative software and IT specialist with expertise in front-end and back-end development, DevOps, and network configuration." />
          <meta property="og:image" content="https://tylerdavies.org/images/profile.jpg" />
          <meta property="og:url" content="https://tylerdavies.org" />
          <meta property="og:type" content="website" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
