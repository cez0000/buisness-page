import { Skills } from "../enums/skills.enum";
import { SkillsModel } from "../models/skills-model";

export const SKILLS: SkillsModel[] = [
    {
       name: 'Angular',
       id: Skills.Angular,
       info: 'is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.'
    },
    {
      name: 'React',
      id: Skills.React,
      info: 'is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.'
    },
    {
      name: '.NET',
      id: Skills.Net,
      info: 'is a free and open-source, managed computer software framework for Windows, Linux, and macOS operating systems. It is a cross-platform[5] successor to .NET Framework. The project is mainly developed by Microsoft employees by way of the .NET Foundation and is released under an MIT License'
    }
]