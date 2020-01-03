<template>
    <div id='root'>
        <div class="container-fluid">
            <div class="row">
                <div class="col text-center">
                    <span class='title'>Tasty Dishes</span>
                </div>             
            </div>
            <div class="row">
                <div class="col text-center mt-4">
                    <span class='link link-active'>
                    Appetizers
                    </span>
                    <span class='link'>
                        Dessert
                    </span>
                    <span class='link'>
                        Drinks
                    </span>
                    <span class='link'>
                        Main Dishes
                    </span>
                    <span class='link'>
                        Panini Pasta
                    </span>
                    <span class='link'>
                        Risotto
                    </span>
                    <span class='link'>
                        Salads
                    </span>
                    <span class='link'>
                        Sauce Soups
                    </span>
                </div>             
            </div>
            <div class="row mt-5 justify-content-center">
                <div class="dish dish-1">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-1.png'></div>
                    <span class='name' data-text='Grilled free salad'></span>
                    <span class='price'>$19.99</span><br>
                    <span class='description' data-text='Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato, cucumbers'>  
                    </span>             
                </div>
                <div class="dish dish-2">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-2.png'></div>
                    <span class='name' data-text='Masala Spiced Chickpeas'></span>
                    <span class='price'>$19.99</span><br>
                    <span class='description' data-text='Chickpeas, rice, peppers'>
                    </span>             
                </div>
                <div class="dish dish-3">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-3.png'></div>
                    <span class='name' data-text='Asian Hoisin Pork'></span>
                    <span class='price'>$19.99</span><br>
                    <span class='description' data-text='Pork, seasonal vegetables'>
                    </span>             
                </div>
                <div class="dish dish-4">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-4.png'></div>
                    <span class='name' data-text='Chicken doro wat'></span>
                    <span class='price'>$19.99</span><br>
                    <span class='description' data-text='Chicken, ginger, eggs'>
                    </span>             
                </div>
            </div>
            <div class="row justify-content-center mt-1">
                <div class="dish dish-1">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-5.png'></div>
                    <span class='name' data-text='Kung Pao chicken'></span>
                    <span class='price'>$19.99</span><br>
                    <span class='description' data-text='Peppers, chicken, peanuts'>  
                    </span>             
                </div>
                <div class="dish dish-2">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-6.png'></div>
                    <span class='name' data-text='Mango Chili chutney'></span>
                    <span class='price'>$19.99</span><br>
                    <span class='description' data-text='Chilies, aromatic spices'>
                    </span>             
                </div>
                <div class="dish dish-3">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/portfolio-6.png'></div>
                    <span class='name' data-text='Spicy fried Rice & Bacon'></span>
                    <span class='price'>$19.99</span><br>
                    <span class='description' data-text='Bacon, rice, vegetables'>
                    </span>             
                </div>
                <div class="dish dish-4">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/portfolio-7.png'></div>
                    <span class='name' data-text='Ground Beef Stew'></span>
                    <span class='price'>$19.99</span><br>
                    <span class='description' data-text='Crushed red pepper, ground beef, garlic'>
                    </span>             
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Dishes',
  mounted: function() {
      const image_containers = document.querySelectorAll('.image');
      image_containers.forEach(image_container => {
          let url = image_container.getAttribute('data-url');
          image_container.style.backgroundImage ='url(' + url + ')';
      });
  },
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');

    #root {
        margin-top: 100px;
    }

    .title {
        color: #25292d;
        font-family: 'Rubik', sans-serif;
        font-size: 40px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .link {
        color: #7b7e81;
        font-family: 'Rubik', sans-serif;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 18px;
        padding: 15px;
        cursor: pointer;
        transition: color .5s;
    }

    .link-active, .link:hover {
        color: #e44249;
    }

    .dish {
        width: 270px;
        position: relative;
        margin: 15px;
    }

    .image {
        width: 270px;
        height: 300px;
        border-radius: 10px;
    }

    .dish .description:after, .dish .name:after {
        content: attr(data-text);
    }

    .name, .price {
        color: #25292d;
        font-family: 'Rubik', sans-serif;
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        text-transform: uppercase;
        display: inline-block;
        margin-top: 15px;
    }

    .price {
        display: inline-block;
        position: absolute;
        right: 0;
    }
    
    .description {
        color: #7b7e81;
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
        font-weight: 300;
    }
</style>