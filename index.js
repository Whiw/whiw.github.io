/*
document.addEventListener("DOMContentLoaded", function () {
    let menu = document.getElementById("menu");
    let hamburger = document.querySelector(".hamburger-icon");

    console.log("menu found", menu);
    console.log("hamburger found", hamburger);
});
*/
document.addEventListener("DOMContentLoaded", function () {
    let menuLinks = document.querySelectorAll(".menu-content a"); // 모든 메뉴 버튼 가져오기

    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();  // 기본 링크 이동 방지

            let targetId = this.getAttribute("href").substring(1); // 클릭한 a 태그의 href 값에서 # 제거
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" }); // 부드러운 스크롤링 적용
            }

            // 메뉴 닫기 (모바일 환경에서 유용)
            let menu = document.querySelector(".menu-content");
            if (menu) {
                menu.classList.remove("open");
            }
        });
    });
});

function toggleMenu() {
    console.log("clicked");
    let menu = document.getElementById("menu");

    console.log("menu before toggle:", menu.classList);

    if (menu) {
        menu.classList.toggle("open");
        console.log("menu after toggle:", menu.classList);
    }
    else {
        console.log("menu is null");
    }

    
}