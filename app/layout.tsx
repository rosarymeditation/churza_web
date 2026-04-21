// import { Playfair_Display, DM_Sans } from "next/font/google";
// import Script from 'next/script'; // 1. Import the Script component
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
// const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
//       <body className="bg-navy font-body text-cream">
//         <Navbar />
//         <main>{children}</main>
//         <Footer />

//         {/* 2. Add the Tawk.to Script here at the bottom of the body */}
//         <Script id="tawk-to-script" strategy="lazyOnload">
//           {`
//             var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//             (function(){
//               var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//               s1.async=true;
//               s1.src='https://embed.tawk.to/69e7eb1ef4ec681c30be3555/1jmousrij';
//               s1.charset='UTF-8';
//               s1.setAttribute('crossorigin','*');
//               s0.parentNode.insertBefore(s1,s0);
//             })();
//           `}
//         </Script>
//       </body>
//     </html>
//   );
// }
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

// Add the type definition here
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-navy font-body text-cream">
        <Navbar />
        <main>{children}</main>
        <Footer />

        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/69e7eb1ef4ec681c30be3555/1jmousrij';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}