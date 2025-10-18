import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Precious Touch - Professional Braids at University of Buffalo",
  description:
    "Hi Beauties! My name is Precious, and I'm a young, self-taught braider from the Bronx, now at University of Buffalo, NY. I'm very eager and passionate about expanding my business and connecting with all you beautiful people! Braiding isn't just a skill for me but it's an art and a way to make others feel confident and cared for. I can't wait to bless your crown and give you an experience you'll love every time you sit in my chair! Happy Booking❣️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
