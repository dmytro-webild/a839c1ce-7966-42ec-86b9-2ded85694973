import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Service Pro | Premium Service Built for Your Success',
  description: 'Transform problems into measurable results with our premium services. Join 500 satisfied clients today and elevate your business with our expert solutions.',
  keywords: ["premium service, business success, measurable results, client solutions, expert consulting, professional services"],
  openGraph: {
    "title": "Service Pro | Premium Service Built for Your Success",
    "description": "Transform problems into measurable results with our premium services. Join 500 satisfied clients today and elevate your business with our expert solutions.",
    "url": "https://www.servicepro.com",
    "siteName": "Service Pro",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/empty-boardroom-space-within-enterprise-designed-productivity_482257-114714.jpg",
        "alt": "Business professionals collaborating for success"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Service Pro | Premium Service Built for Your Success",
    "description": "Transform problems into measurable results with our premium services. Join 500 satisfied clients today and elevate your business with our expert solutions.",
    "images": [
      "http://img.b2bpic.net/free-photo/empty-boardroom-space-within-enterprise-designed-productivity_482257-114714.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
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
