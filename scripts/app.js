
//this allows the video to play due to chrome not allowing autoplay with sound

let introVideo = document.getElementById('bgvideo');

 let unMute = ()=>{
      introVideo.muted = false;
  }

// slideshow code

let slideIndex = 1;

let showDivs = (n)=>{
    let ele = document.getElementsByClassName('charpics');

    if(n > ele.length) {slideIndex = 1;}
    if(n < 1) {slideIndex = ele.length;}
    let i = 0;
    while(i < ele.length){
        ele[i].style.display = 'none';
    i++;
    }
    ele[slideIndex - 1].style.display = 'block';
}

let plusDivs = (n) => {
    showDivs(slideIndex += n);
}
