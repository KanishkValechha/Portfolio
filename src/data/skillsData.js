import ReactLogo from "../assets/react-logo.png";
import CPPLogo from "../assets/cpp-logo.png";
import CLogo from "../assets/c-logo.png";
import NodeLogo from "../assets/nodejs-logo.png";
import JavaScriptLogo from "../assets/javascript-logo.png";
import PythonLogo from "../assets/python-logo.png";
import GitLogo from "../assets/git-logo.png";
import Docker from "../assets/docker-logo.png";
import TailwindLogo from "../assets/tailwindcss-logo.png";
import TypescriptLogo from "../assets/typescript-logo.png";
import DjangoLogo from "../assets/django-logo.png";
import NextjsLogo from "../assets/nextjs-logo.png";
import MysqlLogo from "../assets/mysql-logo.png";
import FirebaseLogo from "../assets/firebase.png";
import AstroLogo from "../assets/astro.png";
import MongoLogo from "../assets/mongo-db-logo.png";
import SassLogo from "../assets/sass-logo.png";

export const skillGroups = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: JavaScriptLogo },
      { name: "TypeScript", icon: TypescriptLogo },
      { name: "Python", icon: PythonLogo },
      { name: "C", icon: CLogo },
      { name: "C++", icon: CPPLogo },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: ReactLogo },
      { name: "Next.js", icon: NextjsLogo },
      { name: "Astro", icon: AstroLogo },
      { name: "TailwindCSS", icon: TailwindLogo },
      { name: "Sass", icon: SassLogo },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: NodeLogo },
      { name: "Django", icon: DjangoLogo },
      { name: "MySQL", icon: MysqlLogo },
      { name: "MongoDB", icon: MongoLogo },
      { name: "Firebase", icon: FirebaseLogo },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git", icon: GitLogo },
      { name: "Docker", icon: Docker },
      // Add more tools if available
    ],
  },
];
