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

export const skillGroups = [
  {
    title: "Language",
    skills: [
      { name: "C", icon: CLogo },
      { name: "C++", icon: CPPLogo },
      { name: "Python", icon: PythonLogo },
      { name: "JavaScript", icon: JavaScriptLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: ReactLogo },
      { name: "Next.js", icon: NextjsLogo },
      { name: "TypeScript", icon: TypescriptLogo },
      { name: "TailwindCSS", icon: TailwindLogo },
      { name: "Astro", icon: AstroLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: NodeLogo },
      { name: "Django", icon: DjangoLogo },
      { name: "MySQL", icon: MysqlLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: GitLogo },
      { name: "Docker", icon: Docker },
      { name: "Firebase", icon: FirebaseLogo },
    ],
  },
];
