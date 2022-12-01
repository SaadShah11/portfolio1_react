// import images
// import Hero_person from "./assets/images/Hero/person.png";
import Hero_person from "./assets/images/Hero/saad.png";

import nginx from "./assets/images/Skills/nginx.png"
import aws from "./assets/images/Skills/aws.png"
import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    // {
    //   link: "#projects",
    //   icon: RiProjectorLine,
    // },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "Syed Saad",
    LastName: "Ullah Shah",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Nginx",
        para: "I am very passionate about servers and love nginx",
        logo: nginx,
      },
      {
        name: "Node js",
        para: "Node Js is my main server side language of choice",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Photoshop is every web developers best friend for moderate frontend tasks",
        logo: ps,
      },
      {
        name: "React js",
        para: "Most popular Javascript Framework in town right now",
        logo: reactjs,
      },
      {
        name: "AWS",
        para: "Devops facinate me and i have been learning new stuff about cloud everyday",
        logo: aws,
      },
      {
        name: "Python",
        para: "Python is my main language for Machine Learning, Deep learning and Data science related tasks",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Web Development has evolved over the years and so have i, i can design and develop websites and web applications using frameworks like React JS, Next JS, Ruby on rails, PHP Laravel",
        logo: services_logo1,
      },
      {
        title: "Backend Development",
        para: "Servers are interesting for me then all the frontend work, i enjoy working on the terminal; i almost feel like a hacker hacking NASA",
        logo: services_logo2,
      },
      {
        title: "Data Analysis and Deep Learning",
        para: "Deep learning is my latest passion, it is fascinating a field almost like magic. This is a journey to demistify this magical mystery",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "shahsaadullah11@gmail.com",
        icon: GrMail,
        link: "",
      },
      {
        text: "+92 306 9384728",
        icon: MdCall,
        link: "https://wa.me/03069384728",
      },
      {
        text: "Syed Saad Ullah Shah",
        icon: BsInstagram,
        link: "https://www.linkedin.com/in/syed-saad-ullah-shah-14660214b/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
