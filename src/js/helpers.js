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

export function getBookPlacement(book, periods, allYearMarkings, lastYear) {
  // * find book timeslot in allYearMarkings
  if (!book) return;

  let bookPosition = 0;
  // console.log("helpers.getBookPlacement:-----------------");
  // console.log(
  //   "helpers.getBookPlacement: book = ",
  //   book.nbTitle,
  //   ", year = ",
  //   book.year,
  // );

  const periodFromYear = getBookPeriodFromYear(periods, book.year);
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

  const bookYearMarkingIndex = getYearMarkingIndex(allYearMarkings, book.year);
  // console.log(
  //   "helpers.getBookPlacement: bookYearMarkingIndex = ",
  //   bookYearMarkingIndex,
  // );
  // console.log(
  //   "helpers.getBookPlacement: book yearMarking = ",
  //   allYearMarkings[bookYearMarkingIndex],
  // );

  // bookPosition = periodTotalPosition;

  for (let i = periodYearMarkingIndex; i < bookYearMarkingIndex; i++) {
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
  numOfYearsInMarking = book.year - allYearMarkings[bookYearMarkingIndex][0];

  pixelsPerYear = allYearMarkings[bookYearMarkingIndex][1] / yearSpan;

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

  return bookPosition;
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

function getBookPeriodFromYear(periods, bookYear) {
  for (let i = periods.length - 1; i >= 0; i--) {
    // console.log(
    //   "helpers.getBookPlacement: from = ",
    //   periods[i].from,
    //   ", bookYear = ",
    //   bookYear,
    // );
    if (bookYear >= parseInt(periods[i].from)) {
      return periods[i].from;
    }
  }
  console.error(
    "helpers.getBookPeriodFromYear: no year found - bookYear = ",
    bookYear,
  );
  return null;
}
