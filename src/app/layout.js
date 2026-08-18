import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vaddepalli Latha | Counselling Psychologist",
  description:
    "Offering a compassionate, confidential, and non-judgmental space for individuals seeking emotional support and guidance. 5+ years of experience in Clinical, Corporate and Rehabilitation Counselling.",
  keywords: [
    "psychologist",
    "counselling",
    "mental health",
    "therapy",
    "emotional support",
    "anxiety",
    "stress",
    "Vaddepalli Latha",
  ],
  openGraph: {
    title: "Vaddepalli Latha | Counselling Psychologist",
    description:
      "Let's talk, you matter. Book a confidential session with a compassionate counselling psychologist.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
