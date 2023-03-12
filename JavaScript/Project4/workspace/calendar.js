export function calendarInit() {
  let date = new Date();
  let utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  let koreaGap = 9 * 60 * 60 * 1000;
  let today = new Date(utc + koreaGap);

  let Month = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  renderCalander(Month);
}

//달력 render
function renderCalander(Month) {
  let currentYear = Month.getFullYear(); 
  let current_Month_num = Month.getMonth(); 
  let current_Month = changeMonth_Eng(current_Month_num + 1);

  let prevMonth = new Date(currentYear, current_Month_num, 0);
  let prev_month_Date = prevMonth.getDate(); 
  let start_Day = prevMonth.getDay();

  let currentMonth = new Date(currentYear, current_Month_num + 1, 0);
  let current_month_Date = currentMonth.getDate(); 
  let end_Day = currentMonth.getDay();

  print_calendar(
    currentYear,
    current_Month,
    start_Day,
    prev_month_Date,
    current_month_Date,
    end_Day,
    
  );

  click_day(currentYear, current_Month_num);
  click_month_button(Month, currentYear, current_Month_num, renderCalander);
}

 //달력 출력
function print_calendar(
  currentYear,
  current_Month,
  start_Day,
  prev_month_Date,
  current_month_Date,
  end_Day,
) {
  let checktoday = new Date();
  let todayutc = checktoday.getTime() + checktoday.getTimezoneOffset() * 60 * 1000;
  let todaykoreaGap = 9 * 60 * 60 * 1000;
  let koreatoday = new Date(todayutc + todaykoreaGap);

  let kor_year = koreatoday.getFullYear();
  let kor_month_num = koreatoday.getMonth() + 1;
  let kor_month = changeMonth_Eng(kor_month_num);
  let kor_date = koreatoday.getDate();

  print_calendar_nav(currentYear, current_Month);
  print_calendar_grid(
    start_Day,
    prev_month_Date,
    current_month_Date,
    end_Day,
    checknav(kor_year, kor_month, currentYear, current_Month), 
    kor_date
  );
}

 //.calendar-nav 내용이 올해,이번달인지 아닌지 체크
function checknav(kor_year,kor_month,currentYear,current_Month) {
  if (kor_year == currentYear && kor_month == current_Month) {
    return true;
  } else {
    return false;
  }
}

//월 이동 버튼 클릭
function click_month_button(
  Month,
  currentYear,
  current_Month_num,
  renderCalander
) {
  const prev_button = document.querySelectorAll(".previous-month");
  prev_button.forEach((i, j) => {
    i.addEventListener("click", () => {
      Month = new Date(currentYear, current_Month_num - 1, 1);
      removechild(j);
      renderCalander(Month);
    });
  });

  const next_button = document.querySelectorAll(".next-month");
  next_button.forEach((i, j) => {
    i.addEventListener("click", () => {
      Month = new Date(currentYear, current_Month_num + 1, 1);
      removechild(j);
      renderCalander(Month);
    });
  });
}

// 월 이동시 이미 있던 day 삭제
function removechild(j) {
  const parent = document.getElementsByClassName("calendar-grid")[j];
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//day 선택 버튼
function click_day(currentYear, current_Month_num) {
  const day_button = document.querySelectorAll(".day-able");

  day_button.forEach((i,j) => {
    i.addEventListener("click", () => {
      remove_pickday(i, j);
      i.classList.add("pick-day");
      const calendar_count = document.querySelectorAll(`.content-input`);
      for (let j = 0; j < calendar_count.length; j++) {
        const calendar_number = document.querySelector(`#calendar${j + 1}`);
        calendar_number.value =
          currentYear +
          "-" +
          (current_Month_num + 1) +
          "-" +
          i.getAttribute("data-day");
      }
    });
  });
}

//새로 선택시 지난 선택 삭제
function remove_pickday(){
  let picked_day = document.querySelector('.pick-day');
  if (picked_day) {
    picked_day.classList.remove("pick-day");
  }
}

//달력에 월,연도 출력
function print_calendar_nav(currentYear, current_Month) {
  const print_year = document.getElementsByClassName("current-year");
  for (let i = 0; i < print_year.length; i++) {
    print_year[i].innerHTML = currentYear;
  }

  const print_month = document.getElementsByClassName("current-month");
  for (let i = 0; i < print_month.length; i++) {
    print_month[i].innerHTML = current_Month;
  }
}

//달력 day 출력
function print_calendar_grid(
  start_Day,
  prev_month_Date,
  current_month_Date,
  end_Day,
  checknav,
  kor_date
) {
  const print_day = document.getElementsByClassName("calendar-grid");
  
  dayoftheweek(print_day);
  
  for (let i = 0; i < print_day.length; i++) {
    let day_count = start_Day;
    for (let j = start_Day; j >= 0; j--) {
      if (start_Day == 6) {
        break;
      }
      const disable_prev_day = makeDOMwithProperties("div", {
        innerHTML: `${prev_month_Date - j}`,
        className: "day-disable",
      });
      print_day[i].appendChild(disable_prev_day);
    }

    for (let j = 1; j <= current_month_Date; j++) {
      if (checknav == false  && day_count != 6) {
        const day = makeDOMwithProperties("div", {
          innerHTML: `${j}`,
          className: "day-able",
        });
        day.setAttribute("data-day", `${j}`);
        print_day[i].appendChild(day);
      } else if (checknav == false  && day_count == 6) {
        const day = makeDOMwithProperties("div", {
          innerHTML: `${j}`,
          className: "day-able sunday",
        });
        day.setAttribute("data-day", `${j}`);
        print_day[i].appendChild(day);
      } else if (checknav == true  && j !=kor_date && day_count != 6) {
        const day = makeDOMwithProperties("div", {
          innerHTML: `${j}`,
          className: "day-able",
        });
        day.setAttribute("data-day", `${j}`);
        print_day[i].appendChild(day);
      }else if (checknav == true  && j !=kor_date && day_count == 6) {
        const day = makeDOMwithProperties("div", {
          innerHTML: `${j}`,
          className: "day-able sunday",
        });
        day.setAttribute("data-day", `${j}`);
        print_day[i].appendChild(day);
      }else if (checknav == true && j == kor_date && day_count != 6) {
        const day = makeDOMwithProperties("div", {
          innerHTML: `${j}`,
          className: "day-able current-day",
        });
        day.setAttribute("data-day", `${j}`);
        print_day[i].appendChild(day);
      } else if (checknav == true && j == kor_date && day_count== 6) {
        const day = makeDOMwithProperties("div", {
          innerHTML: `${j}`,
          className: "day-able current-day sunday",
        });
        day.setAttribute("data-day", `${j}`);
        print_day[i].appendChild(day);
      }
      day_count =(day_count% 7);
      day_count++;
    }

    for (let j = 1; j <= 6 - end_Day; j++) {
      const disable_next_day = makeDOMwithProperties("div", {
        innerHTML: `${j}`,
        className: "day-disable",
      });
      print_day[i].appendChild(disable_next_day);
    }
  }
}


//달력 요일 출력
function dayoftheweek(print_day) {
  for (let i = 0; i < print_day.length; i++) {
    const sun = makeDOMwithProperties("div", {
      innerHTML: "SUN",
      className: "day-disable",
    });
    const mon = makeDOMwithProperties("div", {
      innerHTML: "MON",
      className: "day-disable",
    });
    const tue = makeDOMwithProperties("div", {
      innerHTML: "TUE",
      className: "day-disable",
    });
    const wed = makeDOMwithProperties("div", {
      innerHTML: "WED",
      className: "day-disable",
    });
    const thu = makeDOMwithProperties("div", {
      innerHTML: "THU",
      className: "day-disable",
    });
    const fri = makeDOMwithProperties("div", {
      innerHTML: "FRI",
      className: "day-disable",
    });
    const sat = makeDOMwithProperties("div", {
      innerHTML: "SAT",
      className: "day-disable",
    });

    print_day[i].appendChild(sun);
    print_day[i].appendChild(mon);
    print_day[i].appendChild(tue);
    print_day[i].appendChild(wed);
    print_day[i].appendChild(thu);
    print_day[i].appendChild(fri);
    print_day[i].appendChild(sat);
    print_day[i].appendChild(sat);
  }
}

//달력 숫자 ->영어로 변경
function changeMonth_Eng(month) {
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
}

const makeDOMwithProperties = (domType, propertyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertyMap).forEach((key) => {
    dom[key] = propertyMap[key];
  });

  return dom;
};