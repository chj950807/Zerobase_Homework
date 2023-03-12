const DatePicker = () => {
    var date_pick_Count = 0;

    const calendar = document.querySelectorAll(".content-input");
    const calendar_out = document.querySelectorAll(".container");
    
    calendar.forEach((i, j) => {
        i.id= `calendar${j + 1}`;
      date_pick_Count = j + 1;
    });
    calendar_out.forEach((i, j) => {
        i.id= `container${j + 1}`;
      date_pick_Count = j + 1;
    });
    
    for (let i = 0; i < date_pick_Count; i++) {
        pickEvent(i);
    }
}
    
function pickEvent(i) {
    const pick = document.querySelector(`#calendar${i + 1}`);
    const pick_out = document.querySelector(`#container${i + 1}`);
    const pick_body = document.querySelector('html');
    
    pick.addEventListener("focus", function () {
        document.querySelectorAll(".calendar")[i].classList.add('calendar-show');
        document.querySelectorAll(".calendar")[i].id=`calendar-show-${i+1}`;
        
    });
    pick.addEventListener("click", function (e) {
        e.stopPropagation();
    });

    document.querySelectorAll('.calendar-nav')[i].addEventListener("click", function (e) {
        e.stopPropagation();
    });
    
    pick_out.addEventListener('click', function () {
        document.querySelectorAll('.calendar')[i].classList.remove('calendar-show'); 
    });

    pick_body.addEventListener('click', function () {
        document.querySelectorAll('.calendar')[i].classList.remove('calendar-show'); 
    });

}
export default DatePicker;

