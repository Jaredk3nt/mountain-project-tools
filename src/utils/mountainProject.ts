import { LeadStyle, RouteType, Style, Tick } from '../types/mountainProject';
import { CleanTick } from '../types/climb';
import { determineGradeType, convertToUniversalGrade } from './grades';

export function cleanTickList(input: Tick[]): CleanTick[] {

  return input.map((tick) => {
    const gradeType = determineGradeType(tick.Rating) || 'yds';
    const [grade, safety] = tick.Rating.split(' ');

    return {
      date: tick.Date,
      route: tick.Route,
      grade,
      safety,
      gradeType,
      universalGrade: convertToUniversalGrade(grade, gradeType),
      notes: tick.Notes || '',
      url: tick.URL,
      pitches: Number(tick.Pitches || 0),
      location: tick.Location.split(' > '),
      avgStars: Number(tick['Avg Stars'] || 0),
      rating: Number(tick['Your Stars']) || null,
      style: tick.Style as Style,
      leadStyle: tick['Lead Style'] as LeadStyle,
      routeType: tick['Route Type'] as RouteType,
      length: Number(tick.Length) || undefined,
      gradeCode: Number(tick['Rating Code']),
    };
  });
}