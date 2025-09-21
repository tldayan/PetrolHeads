import "./globals.css";
import { SidebarProvider } from "./Context/SidebarContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import localFont from "next/font/local";


export const myFont = localFont({
  src: "../../public/fonts/JosefinSans-VariableFont_wght.ttf",
  variable: "--font-myfont",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={myFont.variable}>
      <body>
        <SidebarProvider>
          <Header />
          <Sidebar />
          <ContentContainer>{children}</ContentContainer>
          <Footer />
        </SidebarProvider>
      </body>
    </html>
  );
}
