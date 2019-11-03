# Date-Utils
A collection of date-related utilities.

## tl;dr
* Install by executing `npm install @wojtekmaj/date-utils` or `yarn add @wojtekmaj/date-utils`.
* Import by adding `import * as dateUtils from '@wojtekmaj/date-utils`.
* Do stuff with it!
    ```js
    const now = new Date();
    const beginOfCentury = getBeginOfCentury(now);
    ```

## User guide

### General getters

#### `getYear()`

Gets year from a given date.

##### Sample usage

```js
import { getYear } from '@wojtekmaj/date-utils';

getYear(new Date(2019, 0, 1); // 2019
```

#### `getMonth()`

Gets month index from a given date. For example, returns 0 for January, 1 for February and so on.

##### Sample usage

```js
import { getMonth } from '@wojtekmaj/date-utils';

getMonth(new Date(2019, 0, 1); // 0
```

#### `getMonthHuman()`

Gets human-readable month number from a given date. For example, returns 1 for January, 2 for February and so on.

##### Sample usage

```js
import { getMonth } from '@wojtekmaj/date-utils';

getMonth(new Date(2019, 0, 1); // 1
```

#### `getDate()`

Gets day of the month from a given date.

##### Sample usage

```js
import { getDate } from '@wojtekmaj/date-utils';

getDate(new Date(2019, 0, 15); // 15
```

#### `getHours()`

Gets hours from a given date or string.

##### Sample usage

```js
import { getHours } from '@wojtekmaj/date-utils';

getHours(new Date(2019, 0, 15, 22, 41, 56); // 22
getHours('22:41:56'); // 22
```

#### `getMinutes()`

Gets minutes from a given date or string.

##### Sample usage

```js
import { getMinutes } from '@wojtekmaj/date-utils';

getMinutes(new Date(2019, 0, 15, 22, 41, 56); // 41
getMinutes('22:41:56'); // 41
```

#### `getSeconds()`

Gets seconds from a given date or string.

##### Sample usage

```js
import { getSeconds } from '@wojtekmaj/date-utils';

getSeconds(new Date(2019, 0, 15, 22, 41, 56); // 56
getSeconds('22:41:56'); // 56
getSeconds('22:41:56.321'); // 56
```

### Century-related getters

#### `getCenturyStart()`

Gets century start date from a given date.

##### Sample usage

```js
import { getCenturyStart } from '@wojtekmaj/date-utils';

getCenturyStart(new Date(2019, 0, 1)); // new Date(2001, 0, 1)
```

#### `getCenturyEnd()`

Gets century start date from a given date.

##### Sample usage

```js
import { getCenturyEnd } from '@wojtekmaj/date-utils';

getCenturyEnd(new Date(2019, 0, 1)); // new Date(2100, 12, 31, 23, 59, 999)
```

#### `getPreviousCenturyStart()`

Gets previous century start date from a given date.

##### Sample usage

```js
import { getPreviousCenturyStart } from '@wojtekmaj/date-utils';

getPreviousCenturyStart(new Date(2019, 0, 1)); // new Date(1901, 0, 1)
```

#### `getPreviousCenturyEnd()`

Gets century start date from a given date.

##### Sample usage

```js
import { getPreviousCenturyEnd } from '@wojtekmaj/date-utils';

getPreviousCenturyEnd(new Date(2019, 0, 1)); // new Date(2000, 12, 31, 23, 59, 999)
```

#### `getNextCenturyStart()`

Gets next century start date from a given date.

##### Sample usage

```js
import { getNextCenturyStart } from '@wojtekmaj/date-utils';

getNextCenturyStart(new Date(2019, 0, 1)); // new Date(2101, 0, 1)
```

#### `getNextCenturyEnd()`

Gets next century start date from a given date.

##### Sample usage

```js
import { getNextCenturyEnd } from '@wojtekmaj/date-utils';

getNextCenturyEnd(new Date(2019, 0, 1)); // new Date(2200, 12, 31, 23, 59, 999)
```

#### `getCenturyRange()`

Gets century range from a given date. Returns an array of values equal to the ones returned by `getCenturyStart()` and `getCenturyEnd()`.

##### Sample usage

```js
import { getCenturyRange } from '@wojtekmaj/date-utils';

getCenturyRange(new Date(2019, 0, 1)); // [new Date(2001, 0, 1), new Date(2100, 12, 31, 23, 59, 999)
```

### Decade-related getters

#### `getDecadeStart()`

Gets decade start date from a given date.

##### Sample usage

```js
import { getDecadeStart } from '@wojtekmaj/date-utils';

getDecadeStart(new Date(2019, 0, 1)); // new Date(2011, 0, 1)
```

#### `getDecadeEnd()`

Gets decade start date from a given date.

##### Sample usage

```js
import { getDecadeEnd } from '@wojtekmaj/date-utils';

getDecadeEnd(new Date(2019, 0, 1)); // new Date(2020, 12, 31, 23, 59, 999)
```

#### `getPreviousDecadeStart()`

Gets previous decade start date from a given date.

##### Sample usage

```js
import { getPreviousDecadeStart } from '@wojtekmaj/date-utils';

getPreviousDecadeStart(new Date(2019, 0, 1)); // new Date(2001, 0, 1)
```

#### `getPreviousDecadeEnd()`

Gets decade start date from a given date.

##### Sample usage

```js
import { getPreviousDecadeEnd } from '@wojtekmaj/date-utils';

getPreviousDecadeEnd(new Date(2019, 0, 1)); // new Date(2010, 12, 31, 23, 59, 999)
```

#### `getNextDecadeStart()`

Gets next decade start date from a given date.

##### Sample usage

```js
import { getNextDecadeStart } from '@wojtekmaj/date-utils';

getNextDecadeStart(new Date(2019, 0, 1)); // new Date(2021, 0, 1)
```

#### `getNextDecadeEnd()`

Gets next decade start date from a given date.

##### Sample usage

```js
import { getNextDecadeEnd } from '@wojtekmaj/date-utils';

getNextDecadeEnd(new Date(2019, 0, 1)); // new Date(2030, 12, 31, 23, 59, 999)
```

#### `getDecadeRange()`

Gets decade range from a given date. Returns an array of values equal to the ones returned by `getDecadeStart()` and `getDecadeEnd()`.

##### Sample usage

```js
import { getDecadeRange } from '@wojtekmaj/date-utils';

getDecadeRange(new Date(2019, 0, 1)); // [new Date(2011, 0, 1), new Date(2020, 12, 31, 23, 59, 999)
```

### Year-related getters

#### `getYearStart()`

Gets year start date from a given date.

##### Sample usage

```js
import { getYearStart } from '@wojtekmaj/date-utils';

getYearStart(new Date(2019, 6, 1)); // new Date(2019, 0, 1)
```

#### `getYearEnd()`

Gets year start date from a given date.

##### Sample usage

```js
import { getYearEnd } from '@wojtekmaj/date-utils';

getYearEnd(new Date(2019, 6, 1)); // new Date(2019, 12, 31, 23, 59, 999)
```

#### `getPreviousYearStart()`

Gets previous year start date from a given date.

##### Sample usage

```js
import { getPreviousYearStart } from '@wojtekmaj/date-utils';

getPreviousYearStart(new Date(2019, 6, 1)); // new Date(2018, 0, 1)
```

#### `getPreviousYearEnd()`

Gets year start date from a given date.

##### Sample usage

```js
import { getPreviousYearEnd } from '@wojtekmaj/date-utils';

getPreviousYearEnd(new Date(2019, 6, 1)); // new Date(2018, 12, 31, 23, 59, 999)
```

#### `getNextYearStart()`

Gets next year start date from a given date.

##### Sample usage

```js
import { getNextYearStart } from '@wojtekmaj/date-utils';

getNextYearStart(new Date(2019, 6, 1)); // new Date(2020, 0, 1)
```

#### `getNextYearEnd()`

Gets next year start date from a given date.

##### Sample usage

```js
import { getNextYearEnd } from '@wojtekmaj/date-utils';

getNextYearEnd(new Date(2019, 6, 1)); // new Date(2020, 12, 31, 23, 59, 999)
```

#### `getYearRange()`

Gets year range from a given date. Returns an array of values equal to the ones returned by `getYearStart()` and `getYearEnd()`.

##### Sample usage

```js
import { getYearRange } from '@wojtekmaj/date-utils';

getYearRange(new Date(2019, 6, 1)); // [new Date(2019, 0, 1), new Date(2019, 12, 31, 23, 59, 999)
```

### Month-related getters

#### `getMonthStart()`

Gets month start date from a given date.

##### Sample usage

```js
import { getMonthStart } from '@wojtekmaj/date-utils';

getMonthStart(new Date(2019, 6, 15)); // new Date(2019, 6, 1)
```

#### `getMonthEnd()`

Gets month start date from a given date.

##### Sample usage

```js
import { getMonthEnd } from '@wojtekmaj/date-utils';

getMonthEnd(new Date(2019, 6, 15)); // new Date(2019, 6, 31, 23, 59, 999)
```

#### `getPreviousMonthStart()`

Gets previous month start date from a given date.

##### Sample usage

```js
import { getPreviousMonthStart } from '@wojtekmaj/date-utils';

getPreviousMonthStart(new Date(2019, 6, 15)); // new Date(2019, 5, 1)
```

#### `getPreviousMonthEnd()`

Gets month start date from a given date.

##### Sample usage

```js
import { getPreviousMonthEnd } from '@wojtekmaj/date-utils';

getPreviousMonthEnd(new Date(2019, 6, 15)) // new Date(2019, 5, 30, 23, 59, 999)
```

#### `getNextMonthStart()`

Gets next month start date from a given date.

##### Sample usage

```js
import { getNextMonthStart } from '@wojtekmaj/date-utils';

getNextMonthStart(new Date(2019, 6, 15)); // new Date(2019, 7, 1)
```

#### `getNextMonthEnd()`

Gets next month start date from a given date.

##### Sample usage

```js
import { getNextMonthEnd } from '@wojtekmaj/date-utils';

getNextMonthEnd(new Date(2019, 6, 15)); // new Date(2019, 7, 31, 23, 59, 999)
```

#### `getMonthRange()`

Gets month range from a given date. Returns an array of values equal to the ones returned by `getMonthStart()` and `getMonthEnd()`.

##### Sample usage

```js
import { getMonthRange } from '@wojtekmaj/date-utils';

getMonthRange(new Date(2019, 6, 15)); // [new Date(2019, 6, 1), new Date(2019, 6, 31, 23, 59, 999)
```

### Day-related getters

#### `getDayStart()`

Gets day start date from a given date.

##### Sample usage

```js
import { getDayStart } from '@wojtekmaj/date-utils';

getDayStart(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 15)
```

#### `getDayEnd()`

Gets day start date from a given date.

##### Sample usage

```js
import { getDayEnd } from '@wojtekmaj/date-utils';

getDayEnd(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 15, 23, 59, 999)
```

#### `getPreviousDayStart()`

Gets previous day start date from a given date.

##### Sample usage

```js
import { getPreviousDayStart } from '@wojtekmaj/date-utils';

getPreviousDayStart(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 14)
```

#### `getPreviousDayEnd()`

Gets day start date from a given date.

##### Sample usage

```js
import { getPreviousDayEnd } from '@wojtekmaj/date-utils';

getPreviousDayEnd(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 14, 23, 59, 999)
```

#### `getNextDayStart()`

Gets next day start date from a given date.

##### Sample usage

```js
import { getNextDayStart } from '@wojtekmaj/date-utils';

getNextDayStart(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 16)
```

#### `getNextDayEnd()`

Gets next day start date from a given date.

##### Sample usage

```js
import { getNextDayEnd } from '@wojtekmaj/date-utils';

getNextDayEnd(new Date(2019, 6, 15, 12)); // new Date(2019, 6, 16, 23, 59, 999)
```

#### `getDayRange()`

Gets day range from a given date. Returns an array of values equal to the ones returned by `getDayStart()` and `getDayEnd()`.

##### Sample usage

```js
import { getDayRange } from '@wojtekmaj/date-utils';

getDayRange(new Date(2019, 6, 15, 12)); // [new Date(2019, 6, 15), new Date(2019, 6, 15, 23, 59, 999)
```

### Other

#### `getDaysInMonth()`

Gets number of days in a month from a given date.

##### Sample usage

```js
import { getDaysInMonth } from '@wojtekmaj/date-utils';

getDaysInMonth(new Date(2019, 0, 15)); // 31
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="http://wojtekmaj.pl">http://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
