import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Poppins } from "next/font/google";



export const metadata: Metadata = {
  title: 'Eish + Malh | Authentic Italian & Downtown Cairo Vibes',
  description: 'Experience the unique blend of authentic Italian cuisine, vibrant live music, and the artistic pulse of Downtown Cairo at Eish + Malh. Book your table for an unforgettable dining experience.',
  keywords: ["Eish Malh, Italian restaurant, Downtown Cairo, Cairo eats, live music, brunch, slow food, authentic pasta, pizza, cultural hub"],
  openGraph: {
    "title": "Eish + Malh | Authentic Italian & Downtown Cairo Vibes",
    "description": "Experience the unique blend of authentic Italian cuisine, vibrant live music, and the artistic pulse of Downtown Cairo at Eish + Malh. Book your table for an unforgettable dining experience.",
    "url": "https://www.eishmalh.com",
    "siteName": "Eish + Malh",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/middle-age-friends-night-having-dinner_23-2149190934.jpg",
        "alt": "Bustling interior of Eish + Malh restaurant"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Eish + Malh | Authentic Italian & Downtown Cairo Vibes",
    "description": "Experience the unique blend of authentic Italian cuisine, vibrant live music, and the artistic pulse of Downtown Cairo at Eish + Malh. Book your table for an unforgettable dining experience.",
    "images": [
      "http://img.b2bpic.net/free-photo/middle-age-friends-night-having-dinner_23-2149190934.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${poppins.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
