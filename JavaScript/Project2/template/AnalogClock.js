const AnalogClock = $container => {
  // do something!
  hands($container);
  hours($container);
  clock();
};

// 시침, 분침, 초침 출력 함수
function hands($container) {
  const hand_hour =makeDOMwithProperties('div', {
    className:"hand hour",
  });
  const hand_minute = makeDOMwithProperties('div',{
    className: "hand minute",
  });
  const hand_second = makeDOMwithProperties('div',{
    className: "hand second",
  });

  appendChildrenList($container, [hand_hour, hand_minute, hand_second]);
}

// 1시~12시 출력 함수
function hours($container) {
    const hour_1 = makeDOMwithProperties("div", {
      className: "time time1",
      innerHTML: "|",
    });
    const hour_2 = makeDOMwithProperties("div", {
      className: "time time2",
      innerHTML: "|",
    });
    const hour_3 = makeDOMwithProperties("div", {
      className: "time time3",
      innerHTML: "|",
    });
    const hour_4 = makeDOMwithProperties("div", {
      className: "time time4",
      innerHTML: "|",
    });
    const hour_5 = makeDOMwithProperties("div", {
      className: "time time5",
      innerHTML: "|",
    });
    const hour_6 = makeDOMwithProperties("div", {
      className: "time time6",
      innerHTML: "|",
    });
    const hour_7 = makeDOMwithProperties("div", {
      className: "time time7",
      innerHTML: "|",
    });
    const hour_8 = makeDOMwithProperties("div", {
      className: "time time8",
      innerHTML: "|",
    });
    const hour_9 = makeDOMwithProperties("div", {
      className: "time time9",
      innerHTML: "|",
    });
    const hour_10 = makeDOMwithProperties("div", {
      className: "time time10",
      innerHTML: "|",
    });
    const hour_11 = makeDOMwithProperties("div", {
      className: "time time11",
      innerHTML: "|",
    });
    const hour_12 = makeDOMwithProperties("div", {
      className: "time time12",
      innerHTML: "|",
    });

    appendChildrenList($container, [
      hour_1,
      hour_2,
      hour_3,
      hour_4,
      hour_5,
      hour_6,
      hour_7,
      hour_8,
      hour_9,
      hour_10,
      hour_11,
      hour_12,
    ]);
}

// 시계 기능 출력 함수 (1초마다 시침,분침,초침 모두 움직임)
function clock() {
  window.addEventListener("load", function () {
  });

  let date = new Date();
  let s = date.getSeconds();
  let s_angle = "rotate(" + s * 6 + "deg)"; //초침: 1초당 6도
  [...document.getElementsByClassName("second")].forEach((element)=> {
    element.style.transform = s_angle;
  }) 

  let m = date.getMinutes();
  let m_angle = "rotate(" + ((m *6)+(s/10)) + "deg)"; //분침 : 1분당 6도 + 1초당 0.1도
  [...document.getElementsByClassName("minute")].forEach((element) => {
    element.style.transform = m_angle;
  })

  let h = date.getHours();
  if (h >= 12) {
    h = h - 12;
  }
  let h_angle = "rotate(" + ((h * 30) + (m / 2) + (s / 120)) + "deg)";  //시침: 1시간당 30도 + 1분당 0.5도 + 1초당 1/120도
  [...document.getElementsByClassName("hour")].forEach((element) => {
    element.style.transform = h_angle;
  })

  setTimeout(clock, 1000);
}




/* 함수 */
//Domtype 에 propertyMap을 추가하여 한번에 선언
const makeDOMwithProperties = (domType, propertyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertyMap).forEach((key) => {
    dom[key] = propertyMap[key];
  });

  return dom;
};

// childrenList 배열로 받아 target에 한번에 append
const appendChildrenList = (target, childrenList) => {
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    target.appendChild(children);
  });
};



export default AnalogClock;

