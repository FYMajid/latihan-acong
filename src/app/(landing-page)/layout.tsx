// import "./globals.css";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";


export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
        <ScrollToTop />
    </>
   
    
  );
}
