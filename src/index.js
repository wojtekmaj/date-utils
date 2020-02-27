/**
 * Utils
 */

function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date, offset = defaultOffset) {
    const previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}

function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}

function makeGetRange(functions) {
  return function makeGetRangeInternal(date) {
    return functions.map((fn) => fn(date));
  };
}

/**
 * Simple getters - getting a property of a given point in time
 */

/**
 * Gets year from date.
 *
 * @param {Date|number|string} date Date to get year from.
 */
export function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  if (typeof date === 'number') {
    return date;
  }

  const year = parseInt(date, 10);

  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }

  throw new Error(`Failed to get year from date: ${date}.`);
}

/**
 * Gets month from date.
 *
 * @param {Date} date Date to get month from.
 */
export function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }

  throw new Error(`Failed to get month from date: ${date}.`);
}

/**
 * Gets human-readable month from date.
 *
 * @param {Date} date Date to get human-readable month from.
 */
export function getMonthHuman(date) {
  if (date instanceof Date) {
    return date.getMonth() + 1;
  }

  throw new Error(`Failed to get human-readable month from date: ${date}.`);
}

/**
 * Gets human-readable day of the month from date.
 *
 * @param {Date} date Date to get day of the month from.
 */
export function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }

  throw new Error(`Failed to get year from date: ${date}.`);
}

/**
 * Gets hours from date.
 *
 * @param {Date|string} date Date to get hours from.
 */
export function getHours(date) {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string') {
    const datePieces = date.split(':');

    if (datePieces.length >= 2) {
      const hoursString = datePieces[0];
      const hours = parseInt(hoursString, 10);

      if (!isNaN(hours)) {
        return hours;
      }
    }
  }

  throw new Error(`Failed to get hours from date: ${date}.`);
}

/**
 * Gets minutes from date.
 *
 * @param {Date|string} date Date to get minutes from.
 */
export function getMinutes(date) {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string') {
    const datePieces = date.split(':');

    if (datePieces.length >= 2) {
      const minutesString = datePieces[1] || 0;
      const minutes = parseInt(minutesString, 10);

      if (!isNaN(minutes)) {
        return minutes;
      }
    }
  }

  throw new Error(`Failed to get minutes from date: ${date}.`);
}

/**
 * Gets seconds from date.
 *
 * @param {Date|string} date Date to get seconds from.
 */
export function getSeconds(date) {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    const datePieces = date.split(':');

    if (datePieces.length >= 2) {
      const secondsString = datePieces[2] || 0;
      const seconds = parseInt(secondsString, 10);

      if (!isNaN(seconds)) {
        return seconds;
      }
    }
  }

  throw new Error(`Failed to get seconds from date: ${date}.`);
}

/**
 * Century
 */

export function getCenturyStart(date) {
  const year = getYear(date);
  const centuryStartYear = year + ((-year + 1) % 100);
  const centuryStartDate = new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
export const getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
export const getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);

export const getCenturyEnd = makeGetEnd(getNextCenturyStart);
export const getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
export const getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);

export const getCenturyRange = makeGetRange([getCenturyStart, getCenturyEnd]);

/**
 * Decade
 */

export function getDecadeStart(date) {
  const year = getYear(date);
  const decadeStartYear = year + ((-year + 1) % 10);
  const decadeStartDate = new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
export const getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
export const getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);

export const getDecadeEnd = makeGetEnd(getNextDecadeStart);
export const getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
export const getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);

export const getDecadeRange = makeGetRange([getDecadeStart, getDecadeEnd]);

/**
 * Year
 */

export function getYearStart(date) {
  const year = getYear(date);
  const yearStartDate = new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
export const getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
export const getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);

export const getYearEnd = makeGetEnd(getNextYearStart);
export const getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
export const getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);

export const getYearRange = makeGetRange([getYearStart, getYearEnd]);

/**
 * Month
 */

function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date, offset = defaultOffset) {
    const year = getYear(date);
    const month = getMonth(date) + offset;
    const previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

export function getMonthStart(date) {
  const year = getYear(date);
  const month = getMonth(date);
  const monthStartDate = new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
export const getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
export const getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);

export const getMonthEnd = makeGetEnd(getNextMonthStart);
export const getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
export const getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);

export const getMonthRange = makeGetRange([getMonthStart, getMonthEnd]);

/**
 * Day
 */

function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date, offset = defaultOffset) {
    const year = getYear(date);
    const month = getMonth(date);
    const day = getDate(date) + offset;
    const previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

export function getDayStart(date) {
  const year = getYear(date);
  const month = getMonth(date);
  const day = getDate(date);
  const dayStartDate = new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
export const getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
export const getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);

export const getDayEnd = makeGetEnd(getNextDayStart);
export const getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
export const getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);

export const getDayRange = makeGetRange([getDayStart, getDayEnd]);

/**
 * Other
 */

/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */
export function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

function padStart(num, val = 2) {
  return `0000${num}`.slice(-val);
}

export function getHoursMinutes(date) {
  const hours = padStart(getHours(date));
  const minutes = padStart(getMinutes(date));

  return `${hours}:${minutes}`;
}

export function getHoursMinutesSeconds(date) {
  const hours = padStart(getHours(date));
  const minutes = padStart(getMinutes(date));
  const seconds = padStart(getSeconds(date));

  return `${hours}:${minutes}:${seconds}`;
}

/**
 * Returns local month in ISO-like format (YYYY-MM).
 */
export function getISOLocalMonth(date) {
  const year = padStart(getYear(date), 4);
  const month = padStart(getMonthHuman(date));

  return `${year}-${month}`;
}

/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */
export function getISOLocalDate(date) {
  const year = padStart(getYear(date), 4);
  const month = padStart(getMonthHuman(date));
  const day = padStart(getDate(date));

  return `${year}-${month}-${day}`;
}

export function getISOLocalDateTime(date) {
  return `${getISOLocalDate(date)}T${getHoursMinutesSeconds(date)}`;
}
