import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export const metadata = {
  title: "Fortknox",
  description: "cloud center",
};
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
      </head>
      <body
        className={`antialiased`}
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
