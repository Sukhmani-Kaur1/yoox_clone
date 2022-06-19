function navbar(){
    return `  <div>
    <!-- navbar1 -->

    <div id="nav1">
        <div id="nav1_left">
            <div id="countries"><p>COUNTRY</p></div>
            <div id="cust_care"><p>CUSTOMER CARE</p> </div>
        </div>
        <div id="nav1_right">
            <div id="reg"><i class="material-icons">edit</i><p > <a href="./signup.html" > REGISTER</a>
               </p></div>
            <div id="log"><i class="material-icons">lock_open</i><p> <a href="./signin.html" >LOGIN</a></p></div>
        </div>
    </div>

<!-- navbar-2 -->

    <div id="nav2">
        <div id="nav2_left">
            <div id="women"><p><a href="./womenClothing.html">WOMEN</a> </p></div>
            <div id="men"><p><a href="./menClothing.html">MEN</a> </p></div>
            <div id="kids"><p>KIDS /</p></div>
            <div id="design_art"><p><a href="./index.html">DESIGN+ART</a> </p></div>
        </div>
        <div id="YooxLogo">
            <img src="images/yoox logo.png" alt="">
        </div>
        <input type="text" id="search_bar">
        <div id="nav2_right">
            <i id="click_btn" class="material-icons">search</i>
           <a href="./fav.html"> <i id="fav_bag" class="material-icons">favorite_border</i><span id="fav_count">0</span></a>
           <a href="./cart.html"> <i id="shopping_bag" class="material-icons">shopping_bag</i><span id="bag_count">0</span></a>
            
        </div>
    
    </div>
    <div id="customer_care">
                <h3>Can we help you?</h3>
                <div id="area">GO TO THE CUSTOMER CARE AREA</div>
                <p>Track your order</p> <hr>
                <p>Complete the return form</p> <hr>
                <p>Track your return</p> <hr>
                <h3>CONTACT US</h3>
                <p>Mon-Sun 7am-8pm UK Time</p>
                <div id="icons">
                    <div id="icon1"><i class="material-icons">contact_phone</i>
                    <p>[ (0)8000868448 ]</p></div>
                    <div id="icon2"><i class="material-icons">email</i>
                        <p>[ E-MAIL ]</p></div>
                </div>
            </div> `
}
export {navbar}