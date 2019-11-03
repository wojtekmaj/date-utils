import {
  getYear,
  getMonth,
  getMonthHuman,
  getDate,

  getCenturyStart,
  getPreviousCenturyStart,
  getNextCenturyStart,
  getCenturyEnd,
  getPreviousCenturyEnd,
  getNextCenturyEnd,
  getCenturyRange,

  getDecadeStart,
  getPreviousDecadeStart,
  getNextDecadeStart,
  getDecadeEnd,
  getPreviousDecadeEnd,
  getNextDecadeEnd,
  getDecadeRange,

  getYearStart,
  getPreviousYearStart,
  getNextYearStart,
  getYearEnd,
  getPreviousYearEnd,
  getNextYearEnd,
  getYearRange,

  getMonthStart,
  getPreviousMonthStart,
  getNextMonthStart,
  getMonthEnd,
  getPreviousMonthEnd,
  getNextMonthEnd,
  getMonthRange,
} from './index';

function testThrow(fn) {
  it('throws an error when given nonsense data', () => {
    const text = 'wololo';
    const flag = true;

    expect(() => fn(text)).toThrow();
    expect(() => fn(flag)).toThrow();
    expect(() => fn()).toThrow();
  });
}

/**
 * Simple getters
 */

describe('getYear()', () => {
  it('returns proper year for a given date', () => {
    const date = new Date(2019, 0, 1);

    const year = getYear(date);

    expect(year).toBe(2019);
  });

  it('returns proper year for a given number', () => {
    const date = 2019;

    const year = getYear(date);

    expect(year).toBe(2019);
  });

  it('returns proper year for a given string', () => {
    const date = '2019';

    const year = getYear(date);

    expect(year).toBe(2019);
  });

  testThrow(getYear);
});

describe('getMonth()', () => {
  it('returns proper month', () => {
    const date = new Date(2019, 0, 1);

    const result = getMonth(date);

    expect(result).toBe(0);
  });

  testThrow(getMonth);
});

describe('getMonthHuman()', () => {
  it('returns proper human-readable month', () => {
    const date = new Date(2019, 0, 1);

    const result = getMonthHuman(date);

    expect(result).toBe(1);
  });

  testThrow(getMonthHuman);
});

describe('getDate()', () => {
  it('returns proper date', () => {
    const date = new Date(2019, 0, 1);

    const result = getDate(date);

    expect(result).toBe(1);
  });

  testThrow(getDate);
});

/**
 * Century
 */

describe('getCenturyStart()', () => {
  it('returns proper start of the century', () => {
    const date = new Date(2019, 0, 1);
    const centuryStartDate = new Date(2001, 0, 1);

    const result = getCenturyStart(date);

    expect(result).toEqual(centuryStartDate);
  });

  testThrow(getCenturyStart);
});

describe('getPreviousCenturyStart()', () => {
  it('returns proper start of the previous century', () => {
    const date = new Date(2019, 0, 1);
    const previousCenturyStartDate = new Date(1901, 0, 1);

    const result = getPreviousCenturyStart(date);

    expect(result).toEqual(previousCenturyStartDate);
  });

  testThrow(getPreviousCenturyStart);
});

describe('getNextCenturyStart()', () => {
  it('returns proper start of the next century', () => {
    const date = new Date(2019, 0, 1);
    const nextCenturyStartDate = new Date(2101, 0, 1);

    const result = getNextCenturyStart(date);

    expect(result).toEqual(nextCenturyStartDate);
  });

  testThrow(getNextCenturyStart);
});

describe('getCenturyEnd()', () => {
  it('returns proper end of the century', () => {
    const date = new Date(2019, 0, 1);
    const centuryEndDate = new Date(2100, 11, 31, 23, 59, 59, 999);

    const result = getCenturyEnd(date);

    expect(result).toEqual(centuryEndDate);
  });

  testThrow(getCenturyEnd);
});

describe('getPreviousCenturyEnd()', () => {
  it('returns proper end of the previous century', () => {
    const date = new Date(2019, 0, 1);
    const previousCenturyEndDate = new Date(2000, 11, 31, 23, 59, 59, 999);

    const result = getPreviousCenturyEnd(date);

    expect(result).toEqual(previousCenturyEndDate);
  });

  testThrow(getPreviousCenturyEnd);
});

describe('getNextCenturyEnd()', () => {
  it('returns proper end of the next century', () => {
    const date = new Date(2019, 0, 1);
    const nextCenturyEndDate = new Date(2200, 11, 31, 23, 59, 59, 999);

    const result = getNextCenturyEnd(date);

    expect(result).toEqual(nextCenturyEndDate);
  });

  testThrow(getNextCenturyEnd);
});

describe('getCenturyRange()', () => {
  it('returns proper century date range', () => {
    const date = new Date(2019, 0, 1);
    const centuryStartDate = new Date(2001, 0, 1);
    const centuryEndDate = new Date(2100, 11, 31, 23, 59, 59, 999);

    const result = getCenturyRange(date);

    expect(result).toHaveLength(2);
    expect(result).toEqual([centuryStartDate, centuryEndDate]);
  });

  testThrow(getCenturyRange);
});

/**
 * Decade
 */

describe('getDecadeStart()', () => {
  it('returns proper start of the decade', () => {
    const date = new Date(2019, 0, 1);
    const decadeStartDate = new Date(2011, 0, 1);

    const result = getDecadeStart(date);

    expect(result).toEqual(decadeStartDate);
  });

  testThrow(getDecadeStart);
});

describe('getPreviousDecadeStart()', () => {
  it('returns proper start of the previous decade', () => {
    const date = new Date(2019, 0, 1);
    const previousDecadeStartDate = new Date(2001, 0, 1);

    const result = getPreviousDecadeStart(date);

    expect(result).toEqual(previousDecadeStartDate);
  });

  testThrow(getPreviousDecadeStart);
});

describe('getNextDecadeStart()', () => {
  it('returns proper start of the next decade', () => {
    const date = new Date(2019, 0, 1);
    const nextDecadeStartDate = new Date(2021, 0, 1);

    const result = getNextDecadeStart(date);

    expect(result).toEqual(nextDecadeStartDate);
  });

  testThrow(getNextDecadeStart);
});

describe('getDecadeEnd()', () => {
  it('returns proper end of the decade', () => {
    const date = new Date(2019, 0, 1);
    const DecadeEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);

    const result = getDecadeEnd(date);

    expect(result).toEqual(DecadeEndDate);
  });

  testThrow(getDecadeEnd);
});

describe('getPreviousDecadeEnd()', () => {
  it('returns proper end of the previous decade', () => {
    const date = new Date(2019, 0, 1);
    const previousDecadeEndDate = new Date(2010, 11, 31, 23, 59, 59, 999);

    const result = getPreviousDecadeEnd(date);

    expect(result).toEqual(previousDecadeEndDate);
  });

  testThrow(getPreviousDecadeEnd);
});

describe('getNextDecadeEnd()', () => {
  it('returns proper end of the next decade', () => {
    const date = new Date(2019, 0, 1);
    const nextDecadeEndDate = new Date(2030, 11, 31, 23, 59, 59, 999);

    const result = getNextDecadeEnd(date);

    expect(result).toEqual(nextDecadeEndDate);
  });

  testThrow(getNextDecadeEnd);
});

describe('getDecadeRange()', () => {
  it('returns proper decade date range', () => {
    const date = new Date(2019, 0, 1);
    const decadeStartDate = new Date(2011, 0, 1);
    const decadeEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);

    const result = getDecadeRange(date);

    expect(result).toHaveLength(2);
    expect(result).toEqual([decadeStartDate, decadeEndDate]);
  });

  testThrow(getDecadeRange);
});

/**
 * Year
 */

describe('getYearStart()', () => {
  it('returns proper start of the year', () => {
    const date = new Date(2019, 6, 1);
    const yearStartDate = new Date(2019, 0, 1);

    const result = getYearStart(date);

    expect(result).toEqual(yearStartDate);
  });

  testThrow(getYearStart);
});

describe('getPreviousYearStart()', () => {
  it('returns proper start of the previous year', () => {
    const date = new Date(2019, 6, 1);
    const previousYearStartDate = new Date(2018, 0, 1);

    const result = getPreviousYearStart(date);

    expect(result).toEqual(previousYearStartDate);
  });

  testThrow(getPreviousYearStart);
});

describe('getNextYearStart()', () => {
  it('returns proper start of the next year', () => {
    const date = new Date(2019, 6, 1);
    const nextYearStartDate = new Date(2020, 0, 1);

    const result = getNextYearStart(date);

    expect(result).toEqual(nextYearStartDate);
  });

  testThrow(getNextYearStart);
});

describe('getYearEnd()', () => {
  it('returns proper end of the year', () => {
    const date = new Date(2019, 6, 1);
    const yearEndDate = new Date(2019, 11, 31, 23, 59, 59, 999);

    const result = getYearEnd(date);

    expect(result).toEqual(yearEndDate);
  });

  testThrow(getYearEnd);
});

describe('getPreviousYearEnd()', () => {
  it('returns proper end of the previous year', () => {
    const date = new Date(2019, 6, 1);
    const previousYearEndDate = new Date(2018, 11, 31, 23, 59, 59, 999);

    const result = getPreviousYearEnd(date);

    expect(result).toEqual(previousYearEndDate);
  });

  testThrow(getPreviousYearEnd);
});

describe('getNextYearEnd()', () => {
  it('returns proper end of the next year', () => {
    const date = new Date(2019, 6, 1);
    const nextYearEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);

    const result = getNextYearEnd(date);

    expect(result).toEqual(nextYearEndDate);
  });

  testThrow(getNextYearEnd);
});

describe('getYearRange()', () => {
  it('returns proper year date range', () => {
    const date = new Date(2019, 6, 1);
    const yearStartDate = new Date(2019, 0, 1);
    const yearEndDate = new Date(2019, 11, 31, 23, 59, 59, 999);

    const result = getYearRange(date);

    expect(result).toHaveLength(2);
    expect(result).toEqual([yearStartDate, yearEndDate]);
  });

  testThrow(getYearRange);
});

/**
 * Month
 */

describe('getMonthStart()', () => {
  it('returns proper start of the month', () => {
    const date = new Date(2019, 6, 15);
    const monthStartDate = new Date(2019, 6, 1);

    const result = getMonthStart(date);

    expect(result).toEqual(monthStartDate);
  });

  testThrow(getMonthStart);
});

describe('getPreviousMonthStart()', () => {
  it('returns proper start of the previous month', () => {
    const date = new Date(2019, 6, 15);
    const previousMonthStartDate = new Date(2019, 5, 1);

    const result = getPreviousMonthStart(date);

    expect(result).toEqual(previousMonthStartDate);
  });

  testThrow(getPreviousMonthStart);
});

describe('getNextMonthStart()', () => {
  it('returns proper start of the next month', () => {
    const date = new Date(2019, 6, 15);
    const nextMonthStartDate = new Date(2019, 7, 1);

    const result = getNextMonthStart(date);

    expect(result).toEqual(nextMonthStartDate);
  });

  testThrow(getNextMonthStart);
});

describe('getMonthEnd()', () => {
  it('returns proper end of the month', () => {
    const date = new Date(2019, 6, 15);
    const monthEndDate = new Date(2019, 6, 31, 23, 59, 59, 999);

    const result = getMonthEnd(date);

    expect(result).toEqual(monthEndDate);
  });

  testThrow(getMonthEnd);
});

describe('getPreviousMonthEnd()', () => {
  it('returns proper end of the previous month', () => {
    const date = new Date(2019, 6, 15);
    const previousMonthEndDate = new Date(2019, 5, 30, 23, 59, 59, 999);

    const result = getPreviousMonthEnd(date);

    expect(result).toEqual(previousMonthEndDate);
  });

  testThrow(getPreviousMonthEnd);
});

describe('getNextMonthEnd()', () => {
  it('returns proper end of the next month', () => {
    const date = new Date(2019, 6, 15);
    const nextMonthEndDate = new Date(2019, 7, 31, 23, 59, 59, 999);

    const result = getNextMonthEnd(date);

    expect(result).toEqual(nextMonthEndDate);
  });

  testThrow(getNextMonthEnd);
});

describe('getMonthRange()', () => {
  it('returns proper month date range', () => {
    const date = new Date(2019, 6, 15);
    const monthStartDate = new Date(2019, 6, 1);
    const monthEndDate = new Date(2019, 6, 31, 23, 59, 59, 999);

    const result = getMonthRange(date);

    expect(result).toHaveLength(2);
    expect(result).toEqual([monthStartDate, monthEndDate]);
  });

  testThrow(getMonthRange);
});
