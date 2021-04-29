/**
 * Returns all routes that contains a string. Can be used to search for
 * for example books.
 *
 * @param {vue router object} router
 * @param {string} stringToFind
 */
export function getRoutesWithString(router, stringToFind) {
  const routes = router.options.routes.filter(route => {
    return route.path.includes(stringToFind);
  });
  return routes;
}

export function getElementPosition(
  elementYear,
  periods,
  allYearMarkings,
  lastYear,
) {
  if (!elementYear) return;

  let elementPosition = 0;

  // * periodFromYear is the start year of the peirod elementYear belongs to
  const periodFromYear = getElementPeriodStartYear(periods, elementYear);

  // * periodYearMarkingIndex is the index of the start period markings section
  const periodYearMarkingIndex = getYearMarkingIndex(
    allYearMarkings,
    periodFromYear,
  );

  // * periodTotalPosition is the start position of the period
  const periodTotalPosition = getTotalYearPosition(
    allYearMarkings,
    periodYearMarkingIndex,
  );

  // * elementYearMarkingIndex is the index of element markings section
  const elementYearMarkingIndex = getYearMarkingIndex(
    allYearMarkings,
    elementYear,
  );

  // * If periodYearMarkingIndex is different from elementYearMarkingIndex,
  // * add the width of the markings in between.
  for (let i = periodYearMarkingIndex; i < elementYearMarkingIndex; i++) {
    elementPosition += allYearMarkings[i][1];
  }

  let pixelsPerYear = 0;
  let yearSpan;
  let numOfYearsInMarking = 0;

  if (periodYearMarkingIndex === allYearMarkings.length - 1) {
    yearSpan = lastYear - periodFromYear;
  } else {
    yearSpan = allYearMarkings[periodYearMarkingIndex + 1][0] - periodFromYear;
  }
  numOfYearsInMarking =
    elementYear - allYearMarkings[elementYearMarkingIndex][0];

  pixelsPerYear = allYearMarkings[elementYearMarkingIndex][1] / yearSpan;

  // // * Add the width of the years belonging to the last marking
  elementPosition += numOfYearsInMarking * pixelsPerYear;

  return elementPosition;
}

export function calculateElementWidth(
  startYear,
  endYear,
  allYearMarkings,
  lastYear,
  periods,
) {
  let elementWidth = 0;

  const startIndex = getYearMarkingIndex(allYearMarkings, startYear);
  const endIndex = getYearMarkingIndex(allYearMarkings, endYear);

  // * Go through all periods the element spans
  for (let i = startIndex; i <= endIndex; i++) {
    // * Set markingEndYear as lastYear as default
    let markingEndYear = lastYear;

    // * If i is not the index of the last marking
    if (i < allYearMarkings.length - 1) {
      // * The markingEndYear is the start of the next marking
      markingEndYear = allYearMarkings[i + 1][0];
    }

    // * Calculate number of pixels per year for the marking
    let pixelsPerYear =
      allYearMarkings[i][1] / (markingEndYear - allYearMarkings[i][0]);

    // * Find the period of the marking start year
    const markingPeriod = getElementPeriod(periods, allYearMarkings[i][0]);

    // * Find multiplier. If period got no multiplier, use 1
    const periodMultiplier = markingPeriod.widthMultiplier
      ? markingPeriod.widthMultiplier
      : 1;

    // * elementWidthIncrease is the width of the currrent loop iteration
    let elementWidthIncrease = 0;

    if (i === startIndex && i === endIndex) {
      // * If start and end year is within the same period
      elementWidthIncrease = (endYear - startYear) * pixelsPerYear;
    } else if (i === startIndex) {
      // * If start year is in period
      elementWidthIncrease += (markingEndYear - startYear) * pixelsPerYear;
    } else if (i === endIndex) {
      // * If end year is in period
      elementWidthIncrease += (endYear - allYearMarkings[i][0]) * pixelsPerYear;
    } else {
      // * if neither start year or end year is within the period
      elementWidthIncrease +=
        (markingEndYear - allYearMarkings[i][0]) * pixelsPerYear;
    }

    // * Multiply elementWidthIncrease with multiplier and add to totale elementWidth
    elementWidth += elementWidthIncrease * periodMultiplier;
  }

  return elementWidth;
}

/**
 * getYearMarkingIndex
 * @param {*} allYearMarkings
 * @param {*} year
 * @returns number
 *
 * Goes through allYearMarkings from the end and finds the index of the year
 * marking that the year belongs to
 */
function getYearMarkingIndex(allYearMarkings, year) {
  let markingIndex = -1;
  for (let i = allYearMarkings.length - 1; i >= 0; i--) {
    if (year >= allYearMarkings[i][0]) {
      markingIndex = i;
      break;
    }
  }

  return markingIndex;
}

/**
 * getTotalYearPosition
 * @param {*} allYearMarkings
 * @param {*} maxMarkingIndex
 * @returns number
 *
 * Goes through allYearMarkings and sums up the width until maxMarkingIndex
 */
function getTotalYearPosition(allYearMarkings, maxMarkingIndex) {
  let totalElementPosition = 0;
  for (let i = 0; i < maxMarkingIndex; i++) {
    totalElementPosition += allYearMarkings[i][1];
  }

  return totalElementPosition;
}
/**
 * getElementPeriodStartYear
 * @param {*} periods
 * @param {*} elementYear
 * @returns number
 *
 * Returns the start year of the period elementYear belongs to.
 */
function getElementPeriodStartYear(periods, elementYear) {
  for (let i = periods.length - 1; i >= 0; i--) {
    if (elementYear >= parseInt(periods[i].from)) {
      return periods[i].from;
    }
  }
  return null;
}

/**
 * getElementPeriod
 * @param {*} periods
 * @param {*} elementYear
 * @returns period object or null
 *
 * Returns the period object for the period elementYear belongs to
 */
function getElementPeriod(periods, elementYear) {
  for (let i = periods.length - 1; i >= 0; i--) {
    if (elementYear >= parseInt(periods[i].from)) {
      return periods[i];
    }
  }
  return null;
}
