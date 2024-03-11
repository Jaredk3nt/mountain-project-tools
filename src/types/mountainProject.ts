type RopeStyle = 'Lead' | 'Follow' | 'TR' | 'Solo';
type BoulderStyle = 'Flash' | 'Send' | 'Attempt';

export type Style = RopeStyle | BoulderStyle;

export type LeadStyle = 'Onsight' | 'Flash' | 'Redpoint' | 'Pinkpoint' | 'Fell/Hung';

export type RouteType = 'Trad' | 'Sport' | 'TR' | 'Boulder';

export type Tick = {
  Date: string;
  Route: string;
  Rating: string;
  Notes?: string;
  URL: string;
  Pitches: string;
  Location: string;
  'Avg Stars': string;
  'Your Stars': string; // -1 means no rating
  Style: string;
  'Lead Style'?: string;
  'Route Type': string;
  Length?: string;
  'Rating Code': string;
}