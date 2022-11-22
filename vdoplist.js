let listvideo = document.querySelectorAll('.videolist .vid ');
let mainvideo = document.querySelectorAll('.mainvideo');
let title = document.querySelectorAll(' .title ');



listvideo.forEach(vi => {
    vi.onclick = () => {
        listvideo.forEach(vid => vid.classList.remove('active'));
        vi.classList.add('active');

        if (vi.classList.contains('active')) {
            let srcq = vi.children[0].src;
            mainvideo[0].src = srcq;
             let text = vi.children[1].innerHTML;
            title[0].innerHTML = text;
            console.log(title[0].innerHTML);
            mainvideo[0].autoplay = true;
            mainvideo[0].setAttribute("controls","controls");
            mainvideo[0].load(); 
        };
    };
});
