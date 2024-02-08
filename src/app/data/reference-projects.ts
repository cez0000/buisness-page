import { Skills } from "../enums/skills.enum";
import { ReferenceProjectModel } from "../models/reference-project.model";


export const REFERENCE_PROJECTS: ReferenceProjectModel[] = [
    {
        name: 'Recipe App',
        relatedSkill: Skills.Angular,
        info:['Preparing and displaying recipes', 'Using Firebase API to store data', 'Including rxjs operators'],
        imgUrl: 'src/assets/img/screen1.jpg',
        webURL: 'https://cez0000.github.io/recipe-book-auth/',
        gitHubUrl: 'https://github.com/cez0000/recipe-book-auth',
    },
    {
        name: 'Food Order App',
        relatedSkill: Skills.React,
        info:['Chosing and buying food', 'Using Firebase API to store data', 'Nice styling'],
        imgUrl: 'src/assets/img/reactappscreen.jpg',
        webURL: 'https://cez0000.github.io/React-Expense-App/',
        gitHubUrl: 'https://github.com/cez0000/React-Expense-App',
    },
    {
        name: 'Unknown App',
        relatedSkill: Skills.Net,
        info:['Work in progress', 'Work in progress', 'Work in progress'],
        imgUrl: 'src/assets/img/reactappscreen.jpg',
        webURL: '',
        gitHubUrl: '',
    },

]