[![npm](https://img.shields.io/npm/v/@wojtekmaj/date-utils.svg)](https://www.npmjs.com/package/@wojtekmaj/date-utils) ![downloads](https://img.shields.io/npm/dt/@wojtekmaj/date-utils.svg) [![CI](https://github.com/wojtekmaj/date-utils/workflows/CI/badge.svg)](https://github.com/wojtekmaj/date-utils/actions)

# Date-Utils

A collection of date-related utilities.

## tl;dr

- Install by executing `npm install @wojtekmaj/date-utils` or `yarn add @wojtekmaj/date-utils`.
- Import by adding `import * as dateUtils from '@wojtekmaj/date-utils'`.
- Do stuff with it!
  ```ts
  const now = new Date();
  const startOfCentury = getCenturyStart(now);
  ```

## User guide

### General getters

#### `getYear()`

Gets year from a given date.

##### Sample usage

```ts
import { getYear } from '@wojtekmaj/date-utils';

getYear(new Date(2019, 0, 1)); // 2019
```

#### `getMonth()`

Gets month index from a given date. For example, returns 0 for January, 1 for February and so on.

##### Sample usage

```ts
import { getMonth } from '@wojtekmaj/date-utils';

getMonth(new Date(2019, 0, 1)); // 0
```

#### `getMonthHuman()`

Gets human-readable month number from a given date. For example, returns 1 for January, 2 for February and so on.

##### Sample usage

```ts
import { getMonthHuman } from '@wojtekmaj/date-utils';

getMonthHuman(new Date(2019, 0, 1)); // 1
```

#### `getDate()`

Gets day of the month from a given date.

##### Sample usage

```ts
import { getDate } from '@wojtekmaj/date-utils';

getDate(new Date(2019, 0, 15)); // 15
```

#### `getHours()`

Gets hours from a given date or string.

##### Sample usage

```ts
import { getHours } from '@wojtekmaj/date-utils';

getHours(new Date(2019, 0, 15, 22, 41, 56)); // 22
getHours('22:41'); // 22
getHours('22:41:56'); // 22
```

#### `getMinutes()`

Gets minutes from a given date or string.

##### Sample usage

```ts
import { getMinutes } from '@wojtekmaj/date-utils';

getMinutes(new Date(2019, 0, 15, 22, 41, 56)); // 41
getMinutes('22:41'); // 41
getMinutes('22:41:56'); // 41
```

#### `getSeconds()`

Gets seconds from a given date or string.

##### Sample usage

```ts
import { getSeconds } from '@wojtekmaj/date-utils';

getSeconds(new Date(2019, 0, 15, 22, 41, 56)); // 56
getSeconds('22:41'); // 0
getSeconds('22:41:56'); // 56
getSeconds('22:41:56.321'); // 56
```

#### `getMilliseconds()`

Gets milliseconds from a given date or string.

##### Sample usage

```ts
import { getMilliseconds } from '@wojtekmaj/date-utils';

getMilliseconds(new Date(2019, 0, 15, 22, 41, 56, 321)); // 321
getMilliseconds('22:41'); // 0
getMilliseconds('22:41:56'); // 0
getMilliseconds('22:41:56.321'); // 321
```

### Century-related getters

#### `getCenturyStart()`

Gets century start date from a given date.

##### Sample usage

```ts
import { getCenturyStart } from '@wojtekmaj/date-utils';

getCenturyStart(new Date(2019, 0, 1)); // new Date(2001, 0, 1)
```

#### `getCenturyEnd()`

Gets century start date from a given date.

##### Sample usage

```ts
import { getCenturyEnd } from '@wojtekmaj/date-utils';

getCenturyEnd(new Date(2019, 0, 1)); // new Date(2100, 12, 31, 23, 59, 999)
```

#### `getPreviousCenturyStart()`

Gets previous century start date from a given date.

##### Sample usage

```ts
import { getPreviousCenturyStart } from '@wojtekmaj/date-utils';

getPreviousCenturyStart(new Date(2019, 0, 1)); // new Date(1901, 0, 1)
```

#### `getPreviousCenturyEnd()`

Gets century start date from a given date.

##### Sample usage

```ts
import { getPreviousCenturyEnd } from '@wojtekmaj/date-utils';

getPreviousCenturyEnd(new Date(2019, 0, 1)); // new Date(2000, 12, 31, 23, 59, 999)
```

#### `getNextCenturyStart()`

Gets next century start date from a given date.

##### Sample usage

```ts
import { getNextCenturyStart } from '@wojtekmaj/date-utils';

getNextCenturyStart(new Date(2019, 0, 1)); // new Date(2101, 0, 1)
```

#### `getNextCenturyEnd()`

Gets next century start date from a given date.

##### Sample usage

```ts
import { getNextCenturyEnd } from '@wojtekmaj/date-utils';

getNextCenturyEnd(new Date(2019, 0, 1)); // new Date(2200, 12, 31, 23, 59, 999)
```

#### `getCenturyRange()`

Gets century start and end dates from a given date. Returns an array of values equal to the ones returned by `getCenturyStart()` and `getCenturyEnd()`.

##### Sample usage

```ts
import { getCenturyRange } from '@wojtekmaj/date-utils';

getCenturyRange(new Date(2019, 0, 1)); // [new Date(2001, 0, 1), new Date(2100, 12, 31, 23, 59, 999)
```

### Decade-related getters

#### `getDecadeStart()`

Gets decade start date from a given date.

##### Sample usage

```ts
import { getDecadeStart } from '@wojtekmaj/date-utils';

getDecadeStart(new Date(2019, 0, 1)); // new Date(2011, 0, 1)
```

#### `getDecadeEnd()`

Gets decade start date from a given date.

##### Sample usage

```ts
import { getDecadeEnd } from '@wojtekmaj/date-utils';

getDecadeEnd(new Date(2019, 0, 1)); // new Date(2020, 12, 31, 23, 59, 999)
```

#### `getPreviousDecadeStart()`

Gets previous decade start date from a given date.

##### Sample usage

```ts
import { getPreviousDecadeStart } from '@wojtekmaj/date-utils';

getPreviousDecadeStart(new Date(2019, 0, 1)); // new Date(2001, 0, 1)
```

#### `getPreviousDecadeEnd()`

Gets decade start date from a given date.

##### Sample usage

```ts
import { getPreviousDecadeEnd } from '@wojtekmaj/date-utils';

getPreviousDecadeEnd(new Date(2019, 0, 1)); // new Date(2010, 12, 31, 23, 59, 999)
```

#### `getNextDecadeStart()`

Gets next decade start date from a given date.

##### Sample usage

```ts
import { getNextDecadeStart } from '@wojtekmaj/date-utils';

getNextDecadeStart(new Date(2019, 0, 1)); // new Date(2021, 0, 1)
```

#### `getNextDecadeEnd()`

Gets next decade start date from a given date.

##### Sample usage

```ts
import { getNextDecadeEnd } from '@wojtekmaj/date-utils';

getNextDecadeEnd(new Date(2019, 0, 1)); // new Date(2030, 12, 31, 23, 59, 999)
```

#### `getDecadeRange()`

Gets decade start and end dates from a given date. Returns an array of values equal to the ones returned by `getDecadeStart()` and `getDecadeEnd()`.

##### Sample usage

```ts
import { getDecadeRange } from '@wojtekmaj/date-utils';

getDecadeRange(new Date(2019, 0, 1)); // [new Date(2011, 0, 1), new Date(2020, 12, 31, 23, 59, 999)
```

### Year-related getters

#### `getYearStart()`

Gets year start date from a given date.

##### Sample usage

```ts
import { getYearStart } from '@wojtekmaj/date-utils';

getYearStart(new Date(2019, 6, 1)); // new Date(2019, 0, 1)
```

#### `getYearEnd()`

Gets year start date from a given date.

##### Sample usage

```ts
import { getYearEnd } from '@wojtekmaj/date-utils';

getYearEnd(new Date(2019, 6, 1)); // new Date(2019, 12, 31, 23, 59, 999)
```

#### `getPreviousYearStart()`

Gets previous year start date from a given date.

##### Sample usage

```ts
import { getPreviousYearStart } from '@wojtekmaj/date-utils';

getPreviousYearStart(new Date(2019, 6, 1)); // new Date(2018, 0, 1)
```

#### `getPreviousYearEnd()`

Gets year start date from a given date.

##### Sample usage

```ts
import { getPreviousYearEnd } from '@wojtekmaj/date-utils';

getPreviousYearEnd(new Date(2019, 6, 1)); // new Date(2018, 12, 31, 23, 59, 999)
```

#### `getNextYearStart()`

Gets next year start date from a given date.

##### Sample usage

```ts
import { getNextYearStart } from '@wojtekmaj/date-utils';

getNextYearStart(new Date(2019, 6, 1)); // new Date(2020, 0, 1)
```

#### `getNextYearEnd()`

Gets next year start date from a given date.

##### Sample usage

```ts
import { getNextYearEnd } from '@wojtekmaj/date-utils';

getNextYearEnd(new Date(2019, 6, 1)); // new Date(2020, 12, 31, 23, 59, 999)
```

#### `getYearRange()`

Gets year start and end dates from a given date. Returns an array of values equal to the ones returned by `getYearStart()` and `getYearEnd()`.

##### Sample usage

```ts
import { getYearRange } from '@wojtekmaj/date-utils';

getYearRange(new Date(2019, 6, 1)); // [new Date(2019, 0, 1), new Date(2019, 12, 31, 23, 59, 999)
```

### Month-related getters

#### `getMonthStart()`

Gets month start date from a given date.

##### Sample usage

```ts
import { getMonthStart } from '@wojtekmaj/date-utils';

getMonthStart(new Date(2019, 6, 15)); // new Date(2019, 6, 1)
```

#### `getMonthEnd()`

Gets month start date from a given date.

##### Sample usage

```ts
import { getMonthEnd } from '@wojtekmaj/date-utils';

getMonthEnd(new Date(2019, 6, 15)); // new Date(2019, 6, 31, 23, 59, 999)
```

#### `getPreviousMonthStart()`

Gets previous month start date from a given date.

##### Sample usage

```ts
import { getPreviousMonthStart } from '@wojtekmaj/date-utils';

getPreviousMonthStart(new Date(2019, 6, 15)); // new Date(2019, 5, 1)
```

#### `getPreviousMonthEnd()`

Gets month start date from a given date.

##### Sample usage

```ts
import { getPreviousMonthEnd } from '@wojtekmaj/date-utils';

getPreviousMonthEnd(new Date(2019, 6, 15)); // new Date(2019, 5, 30, 23, 59, 999)
```

#### `getNextMonthStart()`

Gets next month start date from a given date.

##### Sample usage

```ts
import { getNextMonthStart } from '@wojtekmaj/date-utils';

getNextMonthStart(new Date(2019, 6, 15)); // new Date(2019, 7, 1)
```

#### `getNextMonthEnd()`

Gets next month start date from a given date.

##### Sample usage

```ts
import { getNextMonthEnd } from '@wojtekmaj/date-utils';

getNextMonthEnd(new Date(2019, 6, 15)); // new Date(2019, 7, 31, 23, 59, 999)
```

#### `getMonthRange()`

Gets month start and end dates from a given date. Returns an array of values equal to the ones returned by `getMonthStart()` and `getMonthEnd()`.

##### Sample usage

```ts
import { getMonthRange } from '@wojtekmaj/date-utils';

getMonthRange(new Date(2019, 6, 15)); // [new Date(2019, 6, 1), new Date(2019, 6, 31, 23, 59, 999)
```

### Day-related getters

#### `getDayStart()`

Gets day start date from a given date.

##### Sample usage

```ts
import { getDayStart } from '@wojtekmaj/date-utils';

getDayStart(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 15)
```

#### `getDayEnd()`

Gets day start date from a given date.

##### Sample usage

```ts
import { getDayEnd } from '@wojtekmaj/date-utils';

getDayEnd(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 15, 23, 59, 999)
```

#### `getPreviousDayStart()`

Gets previous day start date from a given date.

##### Sample usage

```ts
import { getPreviousDayStart } from '@wojtekmaj/date-utils';

getPreviousDayStart(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 14)
```

#### `getPreviousDayEnd()`

Gets day start date from a given date.

##### Sample usage

```ts
import { getPreviousDayEnd } from '@wojtekmaj/date-utils';

getPreviousDayEnd(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 14, 23, 59, 999)
```

#### `getNextDayStart()`

Gets next day start date from a given date.

##### Sample usage

```ts
import { getNextDayStart } from '@wojtekmaj/date-utils';

getNextDayStart(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 16)
```

#### `getNextDayEnd()`

Gets next day start date from a given date.

##### Sample usage

```ts
import { getNextDayEnd } from '@wojtekmaj/date-utils';

getNextDayEnd(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 16, 23, 59, 999)
```

#### `getDayRange()`

Gets day start and end dates from a given date. Returns an array of values equal to the ones returned by `getDayStart()` and `getDayEnd()`.

##### Sample usage

```ts
import { getDayRange } from '@wojtekmaj/date-utils';

getDayRange(new Date(2019, 6, 15, 12)); // [new Date(2019, 6, 15), new Date(2019, 6, 15, 23, 59, 999)
```

### Other

#### `getDaysInMonth()`

Gets number of days in a month from a given date.

##### Sample usage

```ts
import { getDaysInMonth } from '@wojtekmaj/date-utils';

getDaysInMonth(new Date(2019, 0, 15)); // 31
```

#### `getHoursMinutes()`

Returns local hours and minutes (hh:mm).

##### Sample usage

```ts
import { getHoursMinutes } from '@wojtekmaj/date-utils';

getHoursMinutes(new Date(2019, 0, 15, 16, 4)); // "16:04"
```

#### `getHoursMinutesSeconds()`

Returns local hours, minutes and seconds (hh:mm:ss).

##### Sample usage

```ts
import { getHoursMinutesSeconds } from '@wojtekmaj/date-utils';

getHoursMinutesSeconds(new Date(2019, 0, 15, 16, 4, 41)); // "16:04:41"
```

#### `getISOLocalMonth()`

Returns local month in ISO-like format (YYYY-MM).

##### Sample usage

```ts
import { getISOLocalMonth } from '@wojtekmaj/date-utils';

getISOLocalMonth(new Date(2019, 0, 15)); // "2019-01"
```

#### `getISOLocalDate()`

Returns local date in ISO-like format (YYYY-MM-DD).

##### Sample usage

```ts
import { getISOLocalDate } from '@wojtekmaj/date-utils';

getISOLocalDate(new Date(2019, 0, 15)); // "2019-01-15"
```

#### `getISOLocalDateTime()`

Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).

##### Sample usage

```ts
import { getISOLocalDateTime } from '@wojtekmaj/date-utils';

getISOLocalDateTime(new Date(2019, 0, 15, 16, 4, 41)); // "2019-01-15T16:04:41"
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/5426427?v=4&s=128" width="64" height="64" alt="Wojciech Maj">
    </td>
    <td>
      <a href="https://github.com/wojtekmaj">Wojciech Maj</a>
    </td>
  </tr>
</table>
