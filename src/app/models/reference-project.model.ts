import { Skills } from "../enums/skills.enum";

export interface ReferenceProjectModel {
    name: String;
    relatedSkill: Skills;
    info: string[];
    imgUrl: string;
    webURL: string;
    gitHubUrl:string;
}