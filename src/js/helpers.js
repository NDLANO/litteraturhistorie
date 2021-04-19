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
