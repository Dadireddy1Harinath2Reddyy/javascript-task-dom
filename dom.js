// let div = document.createElement("div");
// div.classList.add("container")
// document.body.appendChild(div)
// let image = document.createElement("img");
// image.setAttribute("src","https://images.pexels.com/photos/2882670/pexels-photo-2882670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
// image.classList.add("image-resize");
// div.append(image);
let arr = ["https://tse1.mm.bing.net/th?id=OIP.VwDiJpSwzGBP7oQAB15rkAHaEK&pid=Api&P=0&h=180","https://tse4.mm.bing.net/th?id=OIP.VCWqoAS35oZq3JUI9isregHaEK&pid=Api&P=0&h=180","https://tse4.mm.bing.net/th?id=OIP.zJdnasT--0NbFZk2t9-zOwHaE8&pid=Api&P=0&h=180","https://tse1.mm.bing.net/th?id=OIP.vHHBwcUFUaHWXntSnqKdCAHaEK&pid=Api&P=0&h=180","https://tse2.mm.bing.net/th?id=OIP.3pPJQKaUEdqQUjkWge0M3gHaEK&pid=Api&P=0&h=180"];

// let div1 = document.createElement("div");
// div1.classList.add("container")
// document.body.append(div1);
// let arr1 = ["html()","css()","js()","react()","node()"]

// for(i =0;i<arr.length;i++){
//     let image1 = document.createElement("img");
//     image1.setAttribute("src",arr[i])
//     image1.classList.add("small-resize");
//     image1.setAttribute("id","i")
//     div1.append(image1);
    
        

// }

let image = document.getElementById("img1");
function html() {
    
    image.setAttribute("src",arr[0])
    image.classList.add("image-resize")
}
function css() {
    
    image.setAttribute("src",arr[1])
    image.classList.add("image-resize")
}
function js() {
   
    image.setAttribute("src",arr[2])
    image.classList.add("image-resize")
}
function react() {
    
    image.setAttribute("src",arr[3])
    image.classList.add("image-resize")
}
function node() {
    
    image.setAttribute("src",arr[4])
    image.classList.add("image-resize")
}
