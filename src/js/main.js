import '../css/main.css';
import '../css/scheme.css';

const moreOptions = document.querySelector("#btn-more");
const btnShowMobileLinks = document.querySelector("#btn-menu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

btnShowMobileLinks.addEventListener("click", (e) => {
    e.preventDefault();
    mobileMenu.classList.toggle("show");
})

moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
})

const videos = [
    {
        id: "PyMlV5_HRWk",
    },
    {
        id: "XCbMVbeKlCg",
    },
    {
        id: "Fmdb-KmlzD8",
    },
    {
        id: "lOthvD1rMbQ",
    },
    {
        id: "nXDk86lQhto",
    }
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");

let current = 0;

btnNext.addEventListener("click", (e) => {
    let changed = current;
    current = current + 1 < videos.length ? current + 1 : current;
    if (current !== changed) {
      renderCurrentVideo(videos[current].id);
    }
});
  
btnPrev.addEventListener("click", (e) => {
    let changed = current;
    current = current - 1 >= 0 ? current - 1 : current;
    if (current !== changed) {
      renderCurrentVideo(videos[current].id);
    }
});
  
renderCurrentVideo(videos[current].id);
renderVideos();
  
function renderCurrentVideo(id) {
    currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
  
function renderVideos() {
    const html = videos.map((video, index) => {
        return `
        <div class="item">
            <a href="#" data-id="${index}">
                <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg" />
            </a>
        </div>`;
    });
    
    videosContainer.innerHTML = html.join("");
  
    document.querySelectorAll(".item a").forEach((item) => {
        item.addEventListener("click", (e) => { 
            e.preventDefault();
            const id = +item.getAttribute("data-id");
            current = id;
            renderCurrentVideo(videos[current].id);
        });
    });
}