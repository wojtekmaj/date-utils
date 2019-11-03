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
 * Century
 */

export function getCenturyStart(date) {
  const year = getYear(date);
  const centuryStartYear = year + ((-year + 1) % 100);
  return new Date(centuryStartYear, 0, 1);
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
  return new Date(decadeStartYear, 0, 1);
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
  return new Date(year, 0, 1);
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
    const previousPeriod = new Date(year, month, 1);
    return getEdgeOfPeriod(previousPeriod);
  };
}

export function getMonthStart(date) {
  const year = getYear(date);
  const month = getMonth(date);
  return new Date(year, month, 1);
}
export const getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
export const getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);

export const getMonthEnd = makeGetEnd(getNextMonthStart);
export const getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
export const getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);

export const getMonthRange = makeGetRange([getMonthStart, getMonthEnd]);
