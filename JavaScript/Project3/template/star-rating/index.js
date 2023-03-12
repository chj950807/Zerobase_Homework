// do something!

const StarRating = ($container) => {
  
  makeLink();
  makeContainerWithStar($container);

  var container_Count = 0;
 
  //star-rating-container 마다 아이디 지정, 콘테이너 개수
  const container = document.querySelectorAll(".star-rating-container");
  container.forEach((i, j) => {
    i.id = `container${j + 1}`;
    container_Count = j + 1;
  });

  // 첫번째 콘테이너는 첫번째 콘테이너 , 두번째 콘테이너는 두번째 콘테이너만 반복..
  for (let i = container_Count; i <= container_Count; i++) {
    event(i, $container);
  }

};

//head에 theme.css 삽입, 이미 존재할경우 삽입하지 않음
function makeLink() {
  if (document.querySelector(`link[href="star-rating/theme.css"]`)) {
    return;
  }
  const star_rating = makeDOMwithproperty("link", {
    href: "star-rating/theme.css",
    rel: "stylesheet",
  });
  document.head.appendChild(star_rating);
}


// data-max-rating 속성을 이용하여 그만큼 별점 추가
function makeContainerWithStar($container) {
  $container.classList.add("star-rating-container");
  const dataMaxRating = $container.getAttribute("data-max-rating");

  for (let i = 0; i < dataMaxRating; i++) {
    const star = makeDOMwithproperty("i", {
      className: `bx bxs-star item`,
    });
    star.setAttribute("data-star", i + 1);
    $container.appendChild(star);
  }
}

//이벤트들 
function event(i, $container) {
  var items = document.querySelectorAll(`#container${i}> .item`);
  
  window.addEventListener("load", function () {
    //hover
    items.forEach((active, i) => {
      active.addEventListener("mouseover", function () {
        let current_star_level = i + 1;
        items.forEach((star_Hover, j) => {
          if (current_star_level >= j + 1) {
            star_Hover.classList.add("hovered");
          } else {
            star_Hover.classList.remove("hovered");
          }
        });
      });
      //out
      active.addEventListener("mouseout", function () {
        var current_star_level = i + 1;
        items.forEach((star_Reset, j) => {
          if (current_star_level >= j + 1) {
            star_Reset.classList.remove("hovered");
          }
        });
      });
      //click
      active.addEventListener("click", function () {
        var current_star_level = i + 1;
        
        items.forEach((star_Select, j) => {
          if (current_star_level >= j + 1) {
            star_Select.classList.add("selected");
          } else {
            star_Select.classList.remove("selected");
          }
        });
        
      //click(selected)하면 'rating-change'를 캐치해 화면에 표시
        const num_Star = active.getAttribute("data-star");
        const changeRating = new CustomEvent("rating-change", {
          detail: num_Star,
        });

        $container.dispatchEvent(changeRating);
      });  
    });
  });
}



const makeDOMwithproperty = (domtype, property) => {
  const dom = document.createElement(domtype);
  Object.keys(property).forEach((key) => {
    dom[key] = property[key];
  });

  return dom;
};

export default StarRating;


