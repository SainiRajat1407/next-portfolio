import "./globals.css";
import ExperiencePage from "./experience/page";
import SummaryPage from "@/components/summary/summary.component";
import ProjectsPage from "./projects/page";
import EducationPage from "./education/page";
import ContactPage from "./contact/page";
import FooterPage from "@/components/footer/footer.component";
import Head from "next/head";
import {Roboto} from '@next/font/google'


const roboto = Roboto({ weight: '400', subsets: ['latin'] });


export const metadata = {
  title: "Portfolio",
  description: "A portfolio app build with next js by Rajat Rajat.",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
  

      <body  className={roboto.className}>
        <div className="flex flex-col items-center justify-center" >
          <SummaryPage />
          <div className="heading-3 text-center mt-10 heading-font">
            Experience
          </div>
          <ExperiencePage />
          <div className="heading-3 text-center mt-10 heading-font">
            Projects
          </div>
          <ProjectsPage />
          <div className="heading-3 text-center mt-10 heading-font">
            Education
          </div>
          <EducationPage />
          <ContactPage />

          <FooterPage />

        </div>



      </body>
    </html>
  );
}
