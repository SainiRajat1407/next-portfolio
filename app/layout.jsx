import "./globals.css";
import ExperiencePage from "./experience/page";
import SummaryPage from "@/components/summary/summary.component";
import ProjectsPage from "./projects/page";
import EducationPage from "./education/page";
import ContactPage from "./contact/page";
import FooterPage from "@/components/footer/footer.component";
import Head from "next/head";

export const metadata = {
  title: "Portfolio",
  description: "A portfolio app build with next js by Rajat Rajat.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>

      <body  >
        <div className="flex flex-col items-center justify-center sans-font" >
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
