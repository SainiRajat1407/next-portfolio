"use client";

import instagramIcon from "@/public/images/instagram.svg";
import gitIcon from "@/public/images/github.svg";
import linkedIcon from "@/public/images/linkedin.svg";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/R.png";
import Navlink from "../navlink/navlink.component";
import { useState } from "react";
import { useRouter } from "next/navigation";

//ideas for the sidebar animaton. When the user navigates the sidebar will cover the whole screen and then come back to the original position.

export default function SideBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  function setExpand(route) {
    setIsExpanded(!isExpanded);
    setTimeout(() => {
      router.push(route);
    }, 500);
    setTimeout(() => {
      setIsExpanded(false);
    }, 1000);
  }
  return (
    <div
      className={
        !isExpanded
          ? "sidebar-container flex md:flex-col justify-between items-center md:fixed left-0 top-0 h-[calc(100%-40px)] background-set relative flex-row z-10"
          : "sidebar-container flex flex-col justify-between items-center fixed left-0 top-0 expand background-set h-[calc(100%-40px)] z-10"
      }
    >
      <div>
        <Link href="/">
          <Image
            className="cursor-pointer"
            src={logo}
            width={200}
            alt="Rajat Logo Image"
            priority
          />
        </Link>
      </div>

      <nav className="flex flex-col gap-4 text-white">
        <div
          onClick={setExpand.bind(null, "/experience")}
          className="cursor-pointer"
        >
          <Navlink href="/experience">Experience</Navlink>
        </div>
        <div
          onClick={setExpand.bind(null, "/projects")}
          className="cursor-pointer"
        >
          <Navlink href="/projects">Projects</Navlink>
        </div>
        <div
          onClick={setExpand.bind(null, "/education")}
          className="cursor-pointer"
        >
          <Navlink href="/education">Education</Navlink>
        </div>
        <div
          onClick={setExpand.bind(null, "/contact")}
          className="cursor-pointer"
        >
          <Navlink href="/contact">Contact</Navlink>
        </div>
      </nav>

      <div className="social-links flex flex-row gap-2 mb-4">
        <div>
          <Link
            href="https://www.instagram.com/this_is_rajattt?igsh=b2VmbTR1dmlhc2xz"
            target="_blank"
          >
            <Image
              src={instagramIcon}
              width={30}
              alt="Instagram Icon"
              priority
            />
          </Link>
        </div>
        <div>
          <Link href="https://github.com/SainiRajat1407" target="_blank">
            <Image src={gitIcon} width={30} alt="Github Icon" priority />
          </Link>
        </div>
        <div>
          <Link href="https://www.linkedin.com/in/saini-rajat/" target="_blank">
            <Image
              src={linkedIcon}
              className="text-white"
              width={30}
              alt="Linkedin Icon"
              priority
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
