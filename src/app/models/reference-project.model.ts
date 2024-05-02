import { Skills } from "../enums/skills.enum";

export interface ReferenceProjectModel {
    name: string;
    relatedSkill: Skills;
    id?: number;
    info: string[];
    imgUrl: string;
    webURL: string;
    gitHubUrl?:string;
}