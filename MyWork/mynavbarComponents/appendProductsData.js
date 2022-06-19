let appendDataToNavbar = (appendDatacontainer,arrDataAtoAppend) => {  
    
         arrDataAtoAppend.forEach(function(el,i) {
        let div = document.createElement("div");

        let img = document.createElement("img")
        img.src = el.img;


        let name = document.createElement("p")
        name.innerText=el.name;
        name.style.fontSize="14px"
        name.style.fontWeight=600

        let para = document.createElement("p")
        para.innerText = el.para
        para.style.fontSize="12px"
        
        let price = document.createElement("p")
        price.innerText = el.price;
        price.style.fontSize="13px"
        price.style.fontWeight=600


        let size = document.createElement("p")
        size.innerText = el.size;

        
       let productsNavbar=  document.createElement("productsNavbar")
       productsNavbar.setAttribute("id","productsNavbar")
       let img1 = document.createElement("img")
       img1.src="../yoox_clone/MyWork/images/visibility.png"

       let img2 = document.createElement("img")
       img2.src="../yoox_clone/MyWork/images/heart.png"

       let img3= document.createElement("img")
       img3.src="../yoox_clone/MyWork/images/badge_new_2018n.png"

       productsNavbar.append(img1,img2,img3)



    div.append(img,productsNavbar,name,para,price,size);
    div.addEventListener("click",function(){

    // beforeCart(el,i);
    
    localStorage.setItem("beforeCart",JSON.stringify(el))
    window.location.href="beforeCartData.html"

    })

    appendDatacontainer.append(div)
        });
    }




export  default appendDataToNavbar;