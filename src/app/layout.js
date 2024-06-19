import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ThemeRegistry from "./(styles)/ThemeRegistry";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const labilGrotesk = localFont({
  src: "./(styles)/fonts/LabilGrotesk-Medium.ttf",
});
export const metadata = {
  title: "Yubi Design",
  description: "Yubi Design",
};

export default function RootLayout({ children }) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable} ${labilGrotesk.className}`}
      lang="en"
    >
      <body>
        <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
