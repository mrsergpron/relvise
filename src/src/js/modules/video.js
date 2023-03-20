window.addEventListener("DOMContentLoaded", function () {
      const url = `<iframe src="https://www.youtube.com/embed/KCJ4pdavu-g?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> `;

      const video = document.querySelector(".experts__video");

      video.addEventListener("click", function () {
        if (video.classList.contains("ready")) {
          return;
        }
        video.classList.add("ready");
        video.insertAdjacentHTML("afterbegin", url);
        
       
      });
       
    });
