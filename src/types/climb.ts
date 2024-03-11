import { Style, LeadStyle, RouteType } from './mountainProject';

export type GradeType = 'yds' | 'font' | 'hueco' | 'french' | 'uiaa';

export type CleanTick = {
  date: string;
  route: string;
  grade: string;
  safety: string;
  gradeType: GradeType;
  universalGrade: number;
  notes?: string;
  url: string;
  pitches: number;
  location: string[];
  avgStars: number;
  rating: number | null; // -1 means no rating
  style: Style;
  leadStyle?: LeadStyle;
  routeType: RouteType;
  length?: number;
  gradeCode: number;
}