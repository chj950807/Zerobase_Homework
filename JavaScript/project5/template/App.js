// do something!
import { Nav, NewsList } from "./components/index.js";

//전역 변수
let Global_state = {
  category :'all'
}

//초기엔 category: 'all' 로 출력
Nav(Global_state.category);
NewsList(Global_state.category);

const button = () => {
  const all_button = document.querySelector("#all");
  const business_button = document.querySelector("#business");
  const entertainment_button = document.querySelector("#entertainment");
  const health_button = document.querySelector("#health");
  const science_button = document.querySelector("#science");
  const sports_button = document.querySelector("#sports");
  const technology_button = document.querySelector("#technology");

  const no_selected = (element) => {
    element.classList.remove("active");
  };
  //버튼이 선택되면 이전 화면을 root를 지우고 다시 출력하여 re-render
  const selected = (element,prop) => {
    element.classList.add("active");
    Global_state.category = prop;
    const root = document.querySelector('#root');
    const news_list_container = document.querySelector('.news-list-container');
    root.removeChild(news_list_container);
    NewsList(Global_state.category);
  };


  const proxy = new Proxy(
    {
      all: true,
      business: false,
      entertainment: false,
      health: false,
      science: false,
      sports: false,
      technology: false,
    },
    {
      set: function (target, prop, value) {
        switch (prop) {
          case "all":
            value ? selected(all_button, prop) : no_selected(all_button);
            break;
          case "business":
            value ? selected(business_button, prop) : no_selected(business_button);
            break;
          case "entertainment":
            value
              ? selected(entertainment_button, prop)
              : no_selected(entertainment_button);
            break;
          case "health":
            value ? selected(health_button, prop) : no_selected(health_button);
            break;
          case "science":
            value
              ? selected(science_button, prop)
              : no_selected(science_button);
            break;
          case "sports":
            value ? selected(sports_button, prop) : no_selected(sports_button);
            break;
          case "technology":
            value
              ? selected(technology_button, prop)
              : no_selected(technology_button);
            break;
        }
        return Reflect.set(target, prop, value);
      },
      subscribe: function (observer) {
        this.category(observer);
      },
      unsubscribe: function (observer) {
        let idx = proxy.indexOf(observer);
        if (idx > -1) {
          this.category(idx, 1);
        }
      },
      notify: function (observer) {
        let idx = this.category.indexOf(observer);
        if (idx > -1) {
          this.category[idx].notify(idx);
        }
      },
      notifyAll: function () {
        for (let i = 0; i < proxy.length; i++) {
          this.category[i].notify(i);
        }
      },
    }
  );

  //카테고리 버튼을 클릭하면 프록시에서 
  all_button.addEventListener("click", () => {
    proxy.all = true;
    proxy.business = false;
    proxy.entertainment = false;
    proxy.health = false;
    proxy.science = false;
    proxy.sports = false;
    proxy.technology = false;
  });
  business_button.addEventListener("click", () => {
    proxy.all = false;
    proxy.business = true;
    proxy.entertainment = false;
    proxy.health = false;
    proxy.science = false;
    proxy.sports = false;
    proxy.technology = false;
  });
  entertainment_button.addEventListener("click", () => {
    proxy.all = false;
    proxy.business = false;
    proxy.entertainment = true;
    proxy.health = false;
    proxy.science = false;
    proxy.sports = false;
    proxy.technology = false;
  });
  health_button.addEventListener("click", () => {
    proxy.all = false;
    proxy.business = false;
    proxy.entertainment = false;
    proxy.health = true;
    proxy.science = false;
    proxy.sports = false;
    proxy.technology = false;
  });
  science_button.addEventListener("click", () => {
    proxy.all = false;
    proxy.business = false;
    proxy.entertainment = false;
    proxy.health = false;
    proxy.science = true;
    proxy.sports = false;
    proxy.technology = false;
  });
  sports_button.addEventListener("click", () => {
    proxy.all = false;
    proxy.business = false;
    proxy.entertainment = false;
    proxy.health = false;
    proxy.science = false;
    proxy.sports = true;
    proxy.technology = false;
  });
  technology_button.addEventListener("click", () => {
    proxy.all = false;
    proxy.business = false;
    proxy.entertainment = false;
    proxy.health = false;
    proxy.science = false;
    proxy.sports = false;
    proxy.technology = true;
  });
};

button();




