
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const pagelogin = $('.login')
const pagecreateaccount = $('.signup')
const line = $('.line')
const delivery = $('.delivery')
const pickup = $('.pickup')
const pickuptarger = $('.popularitems')
const fdslocation = $$('.fd')
const deliverytarget = $('.processtobuy')
const dishs = $('.dishs')
const nav = $('.nav')

const fastfood = {
    foods : [{
        name: "Baked Chicken Wings and Legs",
        price : 30.00 ,
        description : "Spicy Sauce",
        image : "image/anh4.png" ,
        saleOff : 20 ,
        element : "4 Piece Chicken" ,
        traditionalFood: "Thai Cuisine"
    },
    {
        name: "Baked Chicken Wings and Legs",
        price : 30.00 ,
        description : "Spicy Sauce",
        image : "image/anh5.png" ,
        saleOff : 20 ,
        element : "4 Piece Chicken",
        traditionalFood: "Mexican"
    },
    {
        name: "Baked Chicken Wings and Legs",
        price : 30.00 ,
        description : "Spicy Sauce",
        image : "image/anh6.png" ,
        saleOff : 20 ,
        element : "4 Piece Chicken",
        traditionalFood: "Italian"
    },
    {
        name: "Baked Chicken Wings and Legs",
        price : 30.00 ,
        description : "Spicy Sauce",
        image : "image/anh7.png" ,
        saleOff : 20 ,
        element : "4 Piece Chicken",
        traditionalFood: "Vegetarian"
    },

    {
        name: "Baked Chicken Wings and Legs",
        price : 30.00 ,
        description : "Spicy Sauce",
        image : "image/anh8.png" ,
        saleOff : 20 ,
        element : "4 Piece Chicken",
        traditionalFood: "Junk Food"
    },

    {
        name: "Baked Chicken Wings and Legs",
        price : 30.00 ,
        description : "Spicy Sauce",
        image : "image/anh3.png" ,
        saleOff : 20 ,
        element : "4 Piece Chicken",
        traditionalFood: "Thai Cuisine"
    },


    
] ,
    gotopage : function (link) {
        window.location.href =link;
    },
    render : function (category = "All Category"){
        dishs.innerHTML= null
        this.foods.forEach(food =>{
            if (category == "All Category") {
                dishs.innerHTML += `
              <div class="dish">
                <div class="saleoff">
                    <span>${food.saleOff}% Off</span>
                </div>
                <div class="likefood">
                    <i class="far fa-heart"></i>
                </div>
                <img src=${food.image} alt="food">
                <p id="price">$${food.price.toFixed(2)}</p>
                <hr>
                <div class="container">
                    <h2>${food.name}</h2>
                    <p><i class="fas fa-check-circle"></i> ${food.element}</p>
                    <p><i class="fas fa-check-circle"></i> ${food.description}</p>
                    <button class="add"><i class="fas fa-cart-plus"></i>Add to Cart</button>
                </div>
               
            </div>
        `
            }
            else if  (category == food.traditionalFood){
                dishs.innerHTML += `
              <div class="dish">
                <div class="saleoff">
                    <span>${food.saleOff}% Off</span>
                </div>
                <div class="likefood">
                    <i class="far fa-heart"></i>
                </div>
                <img src=${food.image} alt="food">
                <p id="price">$${food.price.toFixed(2)}</p>
                <hr>
                <div class="container">
                    <h2>${food.name}</h2>
                    <p><i class="fas fa-check-circle"></i> ${food.element}</p>
                    <p><i class="fas fa-check-circle"></i> ${food.description}</p>
                    <button class="add"><i class="fas fa-cart-plus"></i>Add to Cart</button>
                </div>
               
            </div>
        `
            }
            
        })
        
    },
    scrolling: function () {
        const nav = document.querySelector('.nav'); // Tham chiếu đến thanh điều hướng
        let isFixed = false; // Cờ xác định trạng thái fixed

        const debounce = (func, wait) => {
            let timeout;
            return function (...args) {
                const context = this;
                clearTimeout(timeout);
                timeout = setTimeout(() => func.apply(context, args), wait);
            };
        };

        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 150 && !isFixed) {
                isFixed = true; // Đánh dấu trạng thái đã fixed
                nav.classList.add('fixed'); // Thêm class để chuyển sang fixed
            } else if (scrollY <= 150 && isFixed) {
                isFixed = false; // Đánh dấu trạng thái quay về ban đầu
                nav.classList.remove('fixed'); // Loại bỏ class fixed khi cuộn lên
            }
        };

        window.addEventListener('scroll', debounce(handleScroll, 100)); // Lắng nghe sự kiện scroll
    },
    handle : function (){
        _this = this ;
        // xu ly click vào delivery 
        delivery.addEventListener('click', function() {
            // Lấy phần tử deliverytarget và cuộn đến đó
            deliverytarget.scrollIntoView({
                behavior: 'smooth', // Thêm hiệu ứng mượt mà
                block: 'start'      // Cuộn đến vị trí đầu của phần tử
            });
        });
        pickup.addEventListener('click',()=>{
            pickuptarger.scrollIntoView({
                behavior :'smooth',
                block:'start'
            })
        })
        // xu ly khi nhan nut login 
        pagelogin.onclick = this.gotopage.bind(this, "login.html")

        // xu ly khi nhan nut sign up 
        pagecreateaccount.onclick = this.gotopage.bind(this,"createaccount.html") 
        // xu ly khi chon location 
        fdslocation.forEach(fd =>{
            fd.onclick = function (){
                $(".fd.active").classList.remove("active");
                line.style.left = this.offsetLeft + "px";
                line.style.width = this.offsetWidth + "px";
                this.classList.add('active')
       
                _this.render(fd.textContent)
                
            }
           
        })

    },
   
    start : function(){
        this.scrolling()
        this.handle()
        this.render()
    }   
}
fastfood.start();

