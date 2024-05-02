import { Skills } from "../enums/skills.enum";
import { ReferenceProjectModel } from "../models/reference-project.model";


export const COMERCIAL_PROJECTS: ReferenceProjectModel[] = [
    {
        name: 'Auxilia',
        id: 0,
        relatedSkill: Skills.Angular,
        info:["In this project, I handled tasks on both the frontend and backend. I used Angular for frontend development and .NET for backend work. I also wrote unit tests for both using Angular's testing framework and NUnit. This ensured the reliability and functionality of the application."],
        imgUrl: '../../assets/img/auxilia.jpg',
        webURL: 'https://www.theauxilia.com/',
    },
    {
        name: 'Shiftana',
        relatedSkill: Skills.React,
        id: 1,
        info:["In this project, I worked on tasks spanning both frontend and backend development. For the frontend, I utilized React to build user interfaces, while on the backend, I employed .NET technologies. I also wrote unit tests for both frontend and backend functionalities, using React testing libraries and NUnit for .NET. This approach ensured the robustness and reliability of the application across the stack.",],
        imgUrl: '../../assets/img/shifta.jpg',
        webURL: 'https://www.shiftana.com/',
    },

]