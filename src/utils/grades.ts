import { GradeType } from '../types/climb';

export const gradeDisplayNames: Record<GradeType, string> = {
  hueco: "Hueco",
  font: "Font",
  yds: "Yosemite Decimal System",
  french: "French",
  uiaa: "U.I.A.A.",
};

const gradeTestMap: Record<GradeType, RegExp> = {
  yds: /[\d]{1}\.\d{1,2}[abcd]*/,
  hueco: /v\d{1,2}[+-]*/,
  font: /[\d]{1,2}[+-]*/,
  french: /\d{1,2}[+-]*/,
  uiaa: /[vix]+[+-]*/,
};

export function determineGradeType(g: string): GradeType | null {
  const grade = g.toLowerCase();
  const tests = Object.entries(gradeTestMap);

  for (const [type, test] of tests) {
    if (test.test(grade)) {
      return type as GradeType;
    }
  }

  return null;
}

const universalGradeMap: Record<GradeType, Record<string, number>> = {
  yds: {
    '3rd': 100, '4th': 200, 'Easy 5th': 300, '5.0': 400, '5.1': 500, '5.2': 600, '5.3': 700, '5.4': 800, '5.5': 900, '5.6': 1000, '5.7': 1100, '5.7+': 1200, '5.8-': 1300, '5.8': 1400, '5.8+': 1500, '5.9-': 1600, '5.9': 1700, '5.9+': 1800, '5.10-': 1900, '5.10a': 1900, '5.10b': 2000, '5.10': 2050, '5.10c': 2100, '5.10d': 2200, '5.10+': 2200, '5.11-': 2300, '5.11a': 2300, '5.11b': 2400, '5.11': 2450, '5.11c': 2500, '5.11d': 2600, '5.11+': 2600, '5.12-': 2700, '5.12a': 2700, '5.12b': 2800, '5.12': 2850, '5.12c': 2900, '5.12d': 3000, '5.12+': 3000, '5.13-': 3100, '5.13a': 3100, '5.13b': 3200, '5.13': 3250, '5.13c': 3300, '5.13d': 3400, '5.13+': 3400, '5.14-': 3500, '5.14a': 3500, '5.14b': 3600, '5.14': 3650, '5.14c': 3700, '5.14d': 3800, '5.14+': 3800, '5.15-': 3900, '5.15a': 3900, '5.15b': 4000, '5.15': 4050, '5.15c': 4100, '5.15d': 4200, '5.15+': 4200
  },
  french: {
    '2-': 400, '2': 500, '3': 600, '3+': 700, '4a': 800, '4b': 900, '4c': 1000, '5a': 1100, '5b': 1400, '5c': 1700, '6a': 1900, '6a+': 2000, '6b': 2100, '6b+': 2200, '6c': 2300, '6c+': 2500, '7a': 2600, '7a+': 2700, '7b': 2800, '7b+': 2900, '7c': 3000, '7c+': 3100, '8a': 3200, '8a+': 3300, '8b': 3400, '8b+': 3500, '8c': 3600, '8c+': 3700, '9a': 3800, '9a+': 3900, '9b': 4000, '9b+': 4100, '9c': 4200
  },
  uiaa: {
    i: 400, ii: 600, iii: 700, iv: 800, 'iv+': 900, v: 1000, 'v+': 1100, 'vi-': 1400, vi: 1700, 'vi+': 1900, 'vii-': 2000, vii: 2100, 'vii+': 2300, 'viii-': 2500, viii: 1600, 'viii+': 2800, 'ix-': 2900, ix: 3000, 'ix+': 3200, 'x-': 3300, x: 3400, 'x+': 3600, 'xi-': 3700, xi: 3800, 'xi+': 3900, 'xii-': 4000, xii: 4100, 'xiii-': 4200
  },
  // Bouldering Grades
  font: {
    '3': 10000, '4': 10200, '5': 10600, '4-': 10100, '4+': 10300, '5-': 10400, '5+': 10900, '6a': 11100, '6a+': 11200, '6b': 11400, '6b+': 11500, '6c': 11700, '6c+': 11800, '7a': 12100, '7a+': 12400, '7b': 12600, '7b+': 12700, '7c': 13000, '7c+': 13300, '8a': 13600, '8a+': 13900, '8b': 14200, '8b+': 14500, '8c': 14800, '8c+': 15100, '9a': 15300
  },
  hueco: {
    'vb': 10000, 'v-easy': 10000, 'v0-': 10100, 'v0': 10200, 'v0+': 10300, 'v1-': 10400, 'v1': 10500, 'v1+': 10600, 'v2-': 10700, 'v2': 10800, 'v2+': 10900, 'v3-': 11000, 'v3': 11100, 'v3+': 11200, 'v4-': 11300, 'v4': 11400, 'v4+': 11500, 'v5-': 11600, 'v5': 11700, 'v5+': 11800, 'v6-': 11900, 'v6': 12000, 'v6+': 12100, 'v7-': 12200, 'v7': 12300, 'v7+': 12400, 'v8-': 12500, 'v8': 12600, 'v8+': 12700, 'v9-': 12800, 'v9': 12900, 'v9+': 13000, 'v10-': 13100, 'v10': 13200, 'v10+': 13300, 'v11-': 13400, 'v11': 13500, 'v11+': 13600, 'v12-': 13700, 'v12': 13800, 'v12+': 13900, 'v13-': 14000, 'v13': 14100, 'v13+': 14200, 'v14-': 14300, 'v14': 14400, 'v14+': 14500, 'v15-': 14600, 'v15': 14700, 'v15+': 14800, 'v16-': 14900, 'v16': 15000, 'v16+': 15100, 'v17-': 15200, 'v17': 15300
  },
}

export function convertToUniversalGrade(grade: string, type: GradeType): number {
  const universal = universalGradeMap[type][grade];
  return universal || 0;
}