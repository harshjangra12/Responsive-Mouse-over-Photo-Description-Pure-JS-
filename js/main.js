var img = document.getElementsByName("cont");

for(var i=0; i<3 ; i++){
	img[i].style.display= 'none';
}

var img1 = document.getElementById("1");
var img2 = document.getElementById("2");
var img3 = document.getElementById("3");

img1.addEventListener('mouseover' , () =>{
	img[0].style.display= 'block';
});
img1.addEventListener('mouseout' , () =>{
	img[0].style.display= 'none';
});

img2.addEventListener('mouseover' , () =>{
	img[1].style.display= 'block';
});
img2.addEventListener('mouseout' , () =>{
	img[1].style.display= 'none';
});

img3.addEventListener('mouseover' , () =>{
	img[2].style.display= 'block';
});
img3.addEventListener('mouseout' , () =>{
	img[2].style.display= 'none';
});

