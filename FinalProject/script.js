// homeWork :

function upDate(previewPic) {

    console.log('upDate function triggered');
    console.log('previewPic.alt: ', previewPic.alt)
    console.log('previewPic.src: ', previewPic.src)

    document.getElementById('bigimage').innerHTML = previewPic.alt;

    document.getElementById('bigimage').style.backgroundImage = `url(${previewPic.src})`;

}

function unDo() {
    console.log('undo function triggered');

    document.getElementById('bigimage').innerHTML = "Hover over an image below to display here."

    document.getElementById('bigimage').style.backgroundImage = 'url("")';
    
}

// after homework tabindex="n"
document.getElementsByTagName('div')[0].focus();


function myFunction() {
    document.getElementById('frame').setAttribute("class", "darkmood"); 

    document.getElementById('top').setAttribute("class", "changeh1"); 

  }

function pickImage() {

    arrayimg = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg"]
    randomimg = "Images/" + arrayimg[Math.floor(Math.random() * arrayimg.length)];

    img = document.querySelector(".adviseimg")
    img.setAttribute("src",randomimg)
    img.setAttribute("alt","")


    arrayimg2 = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg"]
    randomimg2 = "Images/" + arrayimg2[Math.floor(Math.random() * arrayimg2.length)];
    
    img2 = document.querySelector(".adviseimg2")
    img2.setAttribute("src",randomimg2)
    img2.setAttribute("alt","")

    arrayimg3 = ["movie1.jpg", "movie2.jpg", "movie3.jpg", "movie4.jpg", "movie5.jpg", "movie6.jpg", "movie7.jpg", "movie8.jpg"]
    randomimg3 = "Images/" + arrayimg3[Math.floor(Math.random() * arrayimg3.length)];
    
    img3 = document.querySelector(".adviseimg3")
    img3.setAttribute("src",randomimg3)
    img3.setAttribute("alt","")

  }

  

  


