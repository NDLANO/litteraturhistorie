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

export function getElementPlacement(
  elementYear,
  periods,
  allYearMarkings,
  lastYear,
  elementEndYear,
) {
  // * find book timeslot in allYearMarkings
  if (!elementYear) return;

  let bookPosition = 0;
  // console.log("helpers.getBookPlacement:-----------------");
  // console.log(
  //   "helpers.getBookPlacement: book = ",
  //   book.nbTitle,
  //   ", year = ",
  //   book.year,
  // );

  const periodFromYear = getBookPeriodFromYear(periods, elementYear);
  const periodYearMarkingIndex = getYearMarkingIndex(
    allYearMarkings,
    periodFromYear,
  );

  // console.log("helpers.getBookPlacement: periodFromYear = ", periodFromYear);
  // console.log(
  //   "helpers.getBookPlacement: periodYearMarkingIndex = ",
  //   periodYearMarkingIndex,
  // );
  // console.log(
  //   "helpers.getBookPlacement: period year marking = ",
  //   allYearMarkings[periodYearMarkingIndex],
  // );

  const periodTotalPosition = getTotalYearPosition(
    allYearMarkings,
    periodYearMarkingIndex,
  );
  // console.log(
  //   "helpers.getBookPlacement: periodTotalPosition = ",
  //   periodTotalPosition,
  // );

  const elementYearMarkingIndex = getYearMarkingIndex(
    allYearMarkings,
    elementYear,
  );
  // console.log(
  //   "helpers.getBookPlacement: elementYearMarkingIndex = ",
  //   elementYearMarkingIndex,
  // );
  // console.log(
  //   "helpers.getBookPlacement: book yearMarking = ",
  //   allYearMarkings[elementYearMarkingIndex],
  // );

  // bookPosition = periodTotalPosition;

  for (let i = periodYearMarkingIndex; i < elementYearMarkingIndex; i++) {
    bookPosition += allYearMarkings[i][1];
  }

  // console.log("helpers.getBookPlacement: bookPositionn = ", bookPosition);

  let pixelsPerYear = 0;
  let yearSpan;
  let numOfYearsInMarking = 0;

  if (periodYearMarkingIndex === allYearMarkings.length - 1) {
    // console.log("helpers.getBookPlacement: last period");
    yearSpan = lastYear - periodFromYear;
  } else {
    yearSpan = allYearMarkings[periodYearMarkingIndex + 1][0] - periodFromYear;
  }
  numOfYearsInMarking =
    elementYear - allYearMarkings[elementYearMarkingIndex][0];

  pixelsPerYear = allYearMarkings[elementYearMarkingIndex][1] / yearSpan;

  // console.log("helpers.getBookPlacement: yearSpan = ", yearSpan);
  // console.log("helpers.getBookPlacement: pixelsPerYear = ", pixelsPerYear);

  // if (periodYearMarkingIndex === allYearMarkings.length - 1) {
  //   console.log("helpers.getBookPlacement: last year marking");
  //   yearSpan = lastYear - periodFromYear;
  // } else {
  //   yearSpan = allYearMarkings[periodYearMarkingIndex + 1][0] - periodFromYear;
  // }
  // pixelsPerYear = allYearMarkings[periodYearMarkingIndex][1] / yearSpan;

  // console.log(
  //   "helpers.getBookPlacement: allYearMarkings = ",
  //   allYearMarkings[periodYearMarkingIndex],
  // );
  // console.log("helpers.getBookPlacement: yearSpan = ", yearSpan);
  // console.log("helpers.getBookPlacement: pixelsPerYear = ", pixelsPerYear);

  bookPosition += numOfYearsInMarking * pixelsPerYear;
  // console.log("helpers.getBookPlacement: numOfYearsInMarking = ", bookPosition);

  return [bookPosition];
}

function calculateElementWidth(
  allYearMarkings,
  startYear,
  startIndex,
  endYear,
  endIndex,
  lastYear,
) {
  let elementWidth = 0;

  let markingSpan = endIndex - startIndex;

  console.log(
    "helpers.calculateElementWidth: startYear, ",
    startYear,
    ", startIndex = ",
    startIndex,
    ", endYear = ",
    endYear,
    ", endIndex = ",
    endIndex,
    ", markingSpan = ",
    markingSpan,
  );

  // * Go through all periods the element spans
  for (let i = startIndex; i <= endIndex; i++) {
    // console.log("helpers.calculateElementWidth: going through index ", i);
    let markingEndYear = lastYear;
    if (i < allYearMarkings.length - 1) {
      markingEndYear = allYearMarkings[i + 1][0];
    }
    // console.log(
    //   "helpers.calculateElementWidth: startYear: ",
    //   startYear,
    //   ", markingEndYear = ",
    //   markingEndYear,
    // );

    // console.log(
    //   "helpers.calculateElementWidth: yearMarking = ",
    //   allYearMarkings[i],
    // );
    let pixelsPerYear =
      allYearMarkings[i][1] / (markingEndYear - allYearMarkings[i][0]);

    if (i === startIndex && i === endIndex) {
      // * If start and end year is within the same period
      // console.log(
      //   "helpers.calculateElementWidth: (s-e) endYear = ",
      //   endYear,
      //   ", startYear = ",
      //   startYear,
      //   " year span = ",
      //   endYear - startYear,
      // );
      elementWidth = (endYear - startYear) * pixelsPerYear;
    } else if (i === startIndex) {
      // * If start year is in period
      // console.log(
      //   "helpers.calculateElementWidth: (s) endYear = ",
      //   markingEndYear,
      //   ", startYear = ",
      //   startYear,
      //   " year span = ",
      //   markingEndYear - startYear,
      // );
      elementWidth += (markingEndYear - startYear) * pixelsPerYear;
    } else if (i === endIndex) {
      // * If end year is in period
      // console.log(
      //   "helpers.calculateElementWidth: (e) endYear = ",
      //   endYear,
      //   ", startYear = ",
      //   allYearMarkings[i][0],
      //   " year span = ",
      //   endYear - allYearMarkings[i][0],
      // );
      elementWidth += (endYear - allYearMarkings[i][0]) * pixelsPerYear;
    } else {
      // * if neither start year or end year is within the period
      // console.log(
      //   "helpers.calculateElementWidth: (s-e) endYear = ",
      //   markingEndYear,
      //   ", startYear = ",
      //   allYearMarkings[i][0],
      //   " year span = ",
      //   markingEndYear - allYearMarkings[i][0],
      // );
      elementWidth += (markingEndYear - allYearMarkings[i][0]) * pixelsPerYear;
    }
    // console.log(
    //   "helpers.calculateElementWidth: period: ",
    //   allYearMarkings[i][0],
    //   " to ",
    //   markingEndYear,
    //   ", total pixels = ",
    //   allYearMarkings[i][1],
    //   ", pixelsPerYear = ",
    //   pixelsPerYear,
    // );
  }

  // console.log("helpers.calculateElementWidth: elementWidth = ", elementWidth);
  return elementWidth;
}
// function getYearMarkingForYear(allYearMarkings, year) {
//   let markingIndex = -1;
//   for (let i = allYearMarkings.length - 1; i >= 0; i--) {
//     // console.log("year = ", year, ", marking = ", allYearMarkings[i][0]);
//     if (year >= allYearMarkings[i][0]) {
//       markingIndex = i;
//       break;
//     }
//   }

//   return allYearMarkings[markingIndex];
// }
function getYearMarkingIndex(allYearMarkings, year) {
  let markingIndex = -1;
  for (let i = allYearMarkings.length - 1; i >= 0; i--) {
    // console.log("year = ", year, ", marking = ", allYearMarkings[i][0]);
    if (year >= allYearMarkings[i][0]) {
      markingIndex = i;
      break;
    }
  }

  return markingIndex;
}

function getTotalYearPosition(allYearMarkings, maxMarkingIndex) {
  let totalBookPosition = 0;
  for (let i = 0; i < maxMarkingIndex; i++) {
    // console.log(
    //   "helpers.getTotalYearPosition: counting year: ",
    //   allYearMarkings[i][0],
    // );
    // if (allYearMarkings[i][0] > year) break;
    totalBookPosition += allYearMarkings[i][1];
  }

  return totalBookPosition;
}

function getBookPeriodFromYear(periods, elementYear) {
  for (let i = periods.length - 1; i >= 0; i--) {
    // console.log(
    //   "helpers.getBookPlacement: from = ",
    //   periods[i].from,
    //   ", elementYear = ",
    //   elementYear,
    // );
    if (elementYear >= parseInt(periods[i].from)) {
      return periods[i].from;
    }
  }
  console.error(
    "helpers.getBookPeriodFromYear: no year found - elementYear = ",
    elementYear,
  );
  return null;
}
