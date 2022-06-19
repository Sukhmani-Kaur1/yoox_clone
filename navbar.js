function navbar(){
    return ` <div>
    <!-- navbar1 -->

    <div id="nav1">
        <div id="nav1_left">
            <div id="countries"><p>COUNTRY</p></div>
            <div id="cust_care"><p>CUSTOMER CARE</p> </div>
        </div>
        <div id="nav1_right">
            <div id="reg"><i class="material-icons">edit</i><p > <a href="signup.html" > REGISTER</a>
               </p></div>
            <div id="log"><i class="material-icons">lock_open</i><p> <a href="signin.html" >LOGIN</a></p></div>
        </div>
    </div>

<!-- navbar-2 -->

    <div id="nav2">
        <div id="nav2_left">
            <div id="women"><p><a href="../yoox_clone/womenClothing.html">WOMEN</a> </p></div>
            <div id="men"><p><a href="../yoox_clone/menClothing.html">MEN</a> </p></div>
            <div id="kids"><p>KIDS /</p></div>
            <div id="design_art"><p><a href="../yoox_clone/index.html">DESIGN+ART</a> </p></div>
        </div>
        <div id="YooxLogo">
            <img src="../images/yoox logo.png" alt="">
        </div>
        <input type="text" id="search_bar">
        <div id="nav2_right">
            <i id="click_btn" class="material-icons">search</i>
           <a href="../yoox_clone/fav/fav.html"> <i id="fav_bag" class="material-icons">favorite_border</i><span id="fav_count">0</span></a>
           <a href="../yoox_clone/cart/cart.html"> <i id="shopping_bag" class="material-icons">shopping_bag</i><span id="bag_count">0</span></a>
            
        </div>
    
    </div>
    <div id="myNavbar">

    </div>`
}
export {navbar}