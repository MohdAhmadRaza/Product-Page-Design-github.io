let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn")

btn[0].onclick =function(){
    productImg.src = "images/image1.png";
}
btn[1].onclick =function(){
    productImg.src = "images/image2.png";
}
btn[2].onclick =function(){
    productImg.src = "images/image3.png";
}