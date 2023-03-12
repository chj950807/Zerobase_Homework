// do something!
const Nav = () => {
  const root = document.getElementById("root");
  const navigation = makeDOMwithProperties("nav", {
    className: "category-list",
  });
  root.appendChild(navigation);

  category_list_items();
};

//카테고리 출력
const category_list_items = () => {
  const category_list = document.querySelector(".category-list");
  const list = document.createElement("ul");
  category_list.appendChild(list);

  const lists = document.querySelector(".category-list >ul");
  const all = makeDOMwithProperties("li", {
    id: "all",
    className: "category-item active",
    innerHTML: "전체보기",
  });

  const buisness = makeDOMwithProperties("li", {
    id: "business",
    className: "category-item",
    innerHTML: "비즈니스",
  });

  const entertainment = makeDOMwithProperties("li", {
    id: "entertainment",
    className: "category-item",
    innerHTML: "엔터테인먼트",
  });

  const health = makeDOMwithProperties("li", {
    id: "health",
    className: "category-item",
    innerHTML: "건강",
  });

  const science = makeDOMwithProperties("li", {
    id: "science",
    className: "category-item",
    innerHTML: "과학",
  });

  const sports = makeDOMwithProperties("li", {
    id: "sports",
    className: "category-item",
    innerHTML: "스포츠",
  });

  const technology = makeDOMwithProperties("li", {
    id: "technology",
    className: "category-item",
    innerHTML: "기술",
  });

  appendChildrenList(lists, [
    all,
    buisness,
    entertainment,
    health,
    science,
    sports,
    technology,
  ]);

};



const makeDOMwithProperties = (domType, propertyMap) => {
  const dom = document.createElement(domType);
  Object.keys(propertyMap).forEach((key) => {
    dom[key] = propertyMap[key];
  });

  return dom;
};

const appendChildrenList = (target, childrenList) => {
  if (!Array.isArray(childrenList)) return;
  childrenList.forEach((children) => {
    target.appendChild(children);
  });
};


export default Nav;
