import {
  getYear,
  getMonth,
  getMonthHuman,
  getDate,
  getHours,
  getMinutes,
  getSeconds,

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

  getDayStart,
  getPreviousDayStart,
  getNextDayStart,
  getDayEnd,
  getPreviousDayEnd,
  getNextDayEnd,
  getDayRange,

  getDaysInMonth,
  getHoursMinutes,
  getHoursMinutesSeconds,
  getISOLocalMonth,
  getISOLocalDate,
  getISOLocalDateTime,
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

describe('getHours()', () => {
  it('returns proper hours from Date', () => {
    const date = new Date(2019, 0, 1, 22, 41, 56);

    const result = getHours(date);

    expect(result).toBe(22);
  });

  it('returns proper hours from string', () => {
    const date = '22:41:56';

    const result = getHours(date);

    expect(result).toBe(22);
  });

  testThrow(getHours);
});

describe('getMinutes()', () => {
  it('returns proper minutes from Date', () => {
    const date = new Date(2019, 0, 1, 22, 41, 56);

    const result = getMinutes(date);

    expect(result).toBe(41);
  });

  it('returns proper minutes from string', () => {
    const date = '22:41:56';

    const result = getMinutes(date);

    expect(result).toBe(41);
  });

  testThrow(getMinutes);
});

describe('getSeconds()', () => {
  it('returns proper seconds from Date', () => {
    const date = new Date(2019, 0, 1, 22, 41, 56);

    const result = getSeconds(date);

    expect(result).toBe(56);
  });

  it('returns proper seconds from string', () => {
    const date = '22:41:56';

    const result = getSeconds(date);

    expect(result).toBe(56);
  });

  it('returns proper seconds from string without seconds', () => {
    const date = '22:41';

    const result = getSeconds(date);

    expect(result).toBe(0);
  });

  it('returns proper seconds from string with milliseconds', () => {
    const date = '22:41:56.321';

    const result = getSeconds(date);

    expect(result).toBe(56);
  });

  testThrow(getSeconds);
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

  it('returns proper start of the century for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    const centuryStartDate = new Date();
    centuryStartDate.setFullYear(1, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);

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

  it('returns proper end of the century for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    const centuryEndDate = new Date();
    centuryEndDate.setFullYear(100, 11, 31);
    centuryEndDate.setHours(23, 59, 59, 999);

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

  it('returns proper start of the decade for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    const decadeStartDate = new Date();
    decadeStartDate.setFullYear(11, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);

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
    const decadeEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);

    const result = getDecadeEnd(date);

    expect(result).toEqual(decadeEndDate);
  });

  it('returns proper end of the decade for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    const decadeEndDate = new Date();
    decadeEndDate.setFullYear(20, 11, 31);
    decadeEndDate.setHours(23, 59, 59, 999);

    const result = getDecadeEnd(date);

    expect(result).toEqual(decadeEndDate);
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

  it('returns proper start of the year for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 6, 1);
    date.setHours(0, 0, 0, 0);
    const yearStartDate = new Date();
    yearStartDate.setFullYear(19, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);

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

  it('returns proper end of the year for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    const yearEndDate = new Date();
    yearEndDate.setFullYear(19, 11, 31);
    yearEndDate.setHours(23, 59, 59, 999);

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

  it('returns proper start of the month for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 6, 15);
    date.setHours(0, 0, 0, 0);
    const monthStartDate = new Date();
    monthStartDate.setFullYear(19, 6, 1);
    monthStartDate.setHours(0, 0, 0, 0);

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

  it('returns proper end of the month for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 6, 15);
    date.setHours(0, 0, 0, 0);
    const monthEndDate = new Date();
    monthEndDate.setFullYear(19, 6, 31);
    monthEndDate.setHours(23, 59, 59, 999);

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

/**
 * Day
 */

describe('getDayStart()', () => {
  it('returns proper beginning of the day', () => {
    const date = new Date(2019, 6, 15, 12);
    const dayStartDate = new Date(2019, 6, 15);

    const result = getDayStart(date);

    expect(result).toEqual(dayStartDate);
  });

  it('returns proper beginning of the day for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 6, 15, 12);
    date.setHours(0, 0, 0, 0);
    const dayStartDate = new Date();
    dayStartDate.setFullYear(19, 6, 15);
    dayStartDate.setHours(0, 0, 0, 0);

    const result = getDayStart(date);

    expect(result).toEqual(dayStartDate);
  });

  testThrow(getDayStart);
});

describe('getPreviousDayStart()', () => {
  it('returns proper start of the previous day', () => {
    const date = new Date(2019, 6, 15, 12);
    const previousDayStartDate = new Date(2019, 6, 14);

    const result = getPreviousDayStart(date);

    expect(result).toEqual(previousDayStartDate);
  });

  testThrow(getPreviousDayStart);
});

describe('getNextDayStart()', () => {
  it('returns proper start of the next day', () => {
    const date = new Date(2019, 6, 15, 12);
    const nextDayStartDate = new Date(2019, 6, 16);

    const result = getNextDayStart(date);

    expect(result).toEqual(nextDayStartDate);
  });

  testThrow(getNextDayStart);
});

describe('getDayEnd()', () => {
  it('returns proper end of the day', () => {
    const date = new Date(2019, 6, 15, 12);
    const dayEndDate = new Date(2019, 6, 15, 23, 59, 59, 999);

    const result = getDayEnd(date);

    expect(result).toEqual(dayEndDate);
  });

  it('returns proper end of the day for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 6, 15);
    date.setHours(0, 0, 0, 0);
    const dayEndDate = new Date();
    dayEndDate.setFullYear(19, 6, 15);
    dayEndDate.setHours(23, 59, 59, 999);

    const result = getDayEnd(date);

    expect(result).toEqual(dayEndDate);
  });

  testThrow(getDayEnd);
});

describe('getPreviousDayEnd()', () => {
  it('returns proper end of the previous day', () => {
    const date = new Date(2019, 6, 15, 12);
    const previousDayEndDate = new Date(2019, 6, 14, 23, 59, 59, 999);

    const result = getPreviousDayEnd(date);

    expect(result).toEqual(previousDayEndDate);
  });

  testThrow(getPreviousDayEnd);
});

describe('getNextDayEnd()', () => {
  it('returns proper end of the next day', () => {
    const date = new Date(2019, 6, 15, 12);
    const nextDayEndDate = new Date(2019, 6, 16, 23, 59, 59, 999);

    const result = getNextDayEnd(date);

    expect(result).toEqual(nextDayEndDate);
  });

  testThrow(getNextDayEnd);
});

describe('getDayRange', () => {
  it('returns proper day date range', () => {
    const date = new Date(2019, 6, 15, 12);
    const dayStartDate = new Date(2019, 6, 15);
    const dayEndDate = new Date(2019, 6, 15, 23, 59, 59, 999);

    const result = getDayRange(date);

    expect(result).toHaveLength(2);
    expect(result).toEqual([dayStartDate, dayEndDate]);
  });

  testThrow(getDayRange);
});

/**
 * Other
 */

describe('getDaysInMonth()', () => {
  it('returns proper number of days in a month', () => {
    const date1 = new Date(2019, 0, 1);
    const date2 = new Date(2019, 1, 1);
    const date3 = new Date(2019, 2, 1);

    const result1 = getDaysInMonth(date1);
    const result2 = getDaysInMonth(date2);
    const result3 = getDaysInMonth(date3);

    expect(result1).toBe(31);
    expect(result2).toBe(28);
    expect(result3).toBe(31);
  });

  testThrow(getDaysInMonth);
});

describe('getHoursMinutes', () => {
  it('returns proper hour and minute for a given date', () => {
    const date = new Date(2017, 0, 1, 16, 4);

    const hoursMinutes = getHoursMinutes(date);

    expect(hoursMinutes).toBe('16:04');
  });

  it('returns proper hour and minute for a given string of hour and minute', () => {
    const date = '16:04';

    const hoursMinutes = getHoursMinutes(date);

    expect(hoursMinutes).toBe('16:04');
  });

  it('returns proper hour and minute for a given string of hour, minute and second', () => {
    const date = '16:04:08';

    const hoursMinutes = getHoursMinutes(date);

    expect(hoursMinutes).toBe('16:04');
  });

  it('throws an error when given nonsense data', () => {
    const text = 'wololo';
    const flag = true;

    expect(() => getHoursMinutes(text)).toThrow();
    expect(() => getHoursMinutes(flag)).toThrow();
  });
});

describe('getHoursMinutesSeconds', () => {
  it('returns proper hour, minute and second for a given date', () => {
    const date = new Date(2017, 0, 1, 16, 4, 41);

    const hoursMinutesSeconds = getHoursMinutesSeconds(date);

    expect(hoursMinutesSeconds).toBe('16:04:41');
  });

  it('returns proper hour, minute and second for a given string of hour and minute', () => {
    const date = '16:04';

    const hoursMinutesSeconds = getHoursMinutesSeconds(date);

    expect(hoursMinutesSeconds).toBe('16:04:00');
  });

  it('returns proper hour, minute and second for a given string of hour, minute and second', () => {
    const date = '16:04:08';

    const hoursMinutesSeconds = getHoursMinutesSeconds(date);

    expect(hoursMinutesSeconds).toBe('16:04:08');
  });

  it('throws an error when given nonsense data', () => {
    const text = 'wololo';
    const flag = true;

    expect(() => getHoursMinutesSeconds(text)).toThrow();
    expect(() => getHoursMinutesSeconds(flag)).toThrow();
  });
});

describe('getISOLocalMonth()', () => {
  it('returns proper ISO month', () => {
    const date = new Date(2019, 0, 1);

    const ISOMonth = getISOLocalMonth(date);

    expect(ISOMonth).toBe('2019-01');
  });

  it('returns proper ISO date for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);

    const ISODate = getISOLocalMonth(date);

    expect(ISODate).toBe('0019-01');
  });

  it('returns proper ISO date for year > 9999', () => {
    const date = new Date();
    date.setFullYear(12345, 0, 1);
    date.setHours(0, 0, 0, 0);

    const ISODate = getISOLocalMonth(date);

    expect(ISODate).toBe('12345-01');
  });

  testThrow(getISOLocalMonth);
});

describe('getISOLocalDate()', () => {
  it('returns proper ISO date', () => {
    const date = new Date(2019, 0, 1);

    const ISODate = getISOLocalDate(date);

    expect(ISODate).toBe('2019-01-01');
  });

  it('returns proper ISO date for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);

    const ISODate = getISOLocalDate(date);

    expect(ISODate).toBe('0019-01-01');
  });

  it('returns proper ISO date for year > 9999', () => {
    const date = new Date();
    date.setFullYear(12345, 0, 1);
    date.setHours(0, 0, 0, 0);

    const ISODate = getISOLocalDate(date);

    expect(ISODate).toBe('12345-01-01');
  });

  testThrow(getISOLocalDate);
});

describe('getISOLocalDateTime()', () => {
  it('returns proper ISO date and time', () => {
    const date = new Date(2017, 0, 1, 16, 4, 41);

    const ISODate = getISOLocalDateTime(date);

    expect(ISODate).toBe('2017-01-01T16:04:41');
  });

  it('returns proper ISO date for year < 100', () => {
    const date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(16, 4, 41, 0);

    const ISODate = getISOLocalDateTime(date);

    expect(ISODate).toBe('0019-01-01T16:04:41');
  });

  it('returns proper ISO date for year > 9999', () => {
    const date = new Date();
    date.setFullYear(12345, 0, 1);
    date.setHours(16, 4, 41, 0);

    const ISODate = getISOLocalDateTime(date);

    expect(ISODate).toBe('12345-01-01T16:04:41');
  });

  testThrow(getISOLocalDateTime);
});
