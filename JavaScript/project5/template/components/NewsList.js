// do something!
const NewsList = (category) => {
  const root = document.getElementById("root");
  const news_container = makeDOMwithProperties("div", {
    className: "news-list-container",
  });
  root.appendChild(news_container);

  const container = document.querySelector(".news-list-container");
  const news = makeDOMwithProperties("article", {
    className: "news-list",
  });

  const scroll = makeDOMwithProperties("div", {
    className: "scroll-observer",
  });
  appendChildrenList(container, [news, scroll]);
  
  render(category);

};

const render = (category) => {
  const loading_wrapper = document.querySelector(".scroll-observer");
  const loading_img = makeDOMwithProperties("img", {
    src: "../img/ball-triangle.svg",
    alt: "loading...",
  });
  loading_wrapper.appendChild(loading_img);

  //loading_wrapper 만나면 추가 render
  let page = 0;
  let observer = new IntersectionObserver(() => {
    page = page +1;
    retrieve(page,category);
  });
  observer.observe(loading_wrapper);
};


function retrieve(page,category) {
  const apiKey = "49b48552b30c49ce82c717c306df2860";
  let pageSize = 5;
  const url = `https://newsapi.org/v2/top-headlines?country=kr&category=${
    category === "all" ? "" : category
  }&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`;
  NewsRender(url);
}



const getNews = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const NewsRender = async (url) => {
  const news_list = document.querySelector(".news-list"); //article태그
  const data = await getNews(url);
  try {
    // console.log(data);
    data.articles.forEach((article) => {
      const news_item = makeDOMwithProperties("section", {
        className: "news-item",
      });
      news_list.appendChild(news_item);

      const thumbnail = makeDOMwithProperties("div", {
        className: "thumbnail",
      });
      const contents = makeDOMwithProperties("div", {
        className: "contents",
      });
      appendChildrenList(news_item, [thumbnail, contents]);

      //썸네일
      const thumbnail_a = makeDOMwithProperties("a", {
        href: article.url,
        target: "_blank",
        rel: "noopener noreferrer",
      });
      const news_item_thumbnail = document.querySelectorAll(".thumbnail");
      news_item_thumbnail.forEach((i) => {
        i.appendChild(thumbnail_a);
      });

      const news_item_thumbnail_a = document.querySelectorAll(".thumbnail >a");
      const thumbnail_Img = makeDOMwithProperties("img", {
        src: article.urlToImage,
        alt: "thumbnail",
      });

      news_item_thumbnail_a.forEach((i) => {
        i.appendChild(thumbnail_Img);
      });

      const news_contents = document.querySelectorAll(".contents");
      const content_head = document.createElement("h2");
      const content_paragraph = document.createElement("p");
      news_contents.forEach((i) => {
        appendChildrenList(i, [content_head, content_paragraph]);
      });

      const contents_head = document.querySelectorAll(".contents >h2");
      const contents_title = makeDOMwithProperties("a", {
        href: article.url,
        target: "_blank",
        rel: "noopener noreferrer",
        innerHTML: article.title,
      });
      contents_head.forEach((i) => {
        i.appendChild(contents_title);
      });

      const contents_paragraph = document.querySelectorAll(".contents >p");
      const contents_description = makeDOMwithProperties("a", {
        innerHTML: article.description,
      });
      contents_paragraph.forEach((i) => {
        i.appendChild(contents_description);
      });
    });
  } catch (e) {
    console.log(e);
  }
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

export default NewsList;
