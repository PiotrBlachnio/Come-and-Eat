<template>
    <div id='root'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
        <div class="container-fluid">
            <div class="row">
                <div class="col text-center">
                    <span class='title'>Tasty Dishes</span>
                </div>             
            </div>
            <div class="row">
                <div class="col text-center mt-4">
                    <span class='link link-active link-1'>
                    Appetizers
                    </span>
                    <span class='link link-2'>
                        Dessert
                    </span>
                    <span class='link link-3'>
                        Drinks
                    </span>
                    <span class='link link-4'>
                        Main Dishes
                    </span>
                    <span class='link link-5'>
                        Panini Pasta
                    </span>
                    <span class='link link-6'>
                        Risotto
                    </span>
                    <span class='link link-7'>
                        Salads
                    </span>
                    <span class='link link-8'>
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
            <div class="row justify-content-center mt-5">
                <img src='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/figure-1.png'/>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Dishes',
  mounted: function() {
      const data = [
          [
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-1.png',
                name: 'Grilled free salad',
                description: 'Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato, cucumbers'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-2.png',
                name: 'MASALA SPICED CHICKPEAS',
                description: 'Chickpeas, rice, peppers'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/portfolio-7.png',
                name: 'GROUND BEEF STEW',
                description: 'Crushed red pepper, ground beef, garlic'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-4.png',
                name: 'CHICKEN DORO WAT',
                description: 'Chicken, ginger, eggs'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-5.png',
                name: 'KUNG PAO CHICKEN',
                description: 'Peppers, chicken, peanuts'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-6.png',
                name: 'MANGO CHILI CHUTNEY',
                description: 'Chilies, aromatic spices'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/portfolio-6.png',
                name: 'SPICY FRIED RICE & BACON',
                description: 'Bacon, rice, vegetables'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-3.png',
                name: 'ASIAN HOISIN PORK',
                description: 'Pork, seasonal vegetables'
            },
          ],
          [
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/portfolio-6.png',
                name: 'SPICY FRIED RICE & BACON',
                description: 'Bacon, rice, vegetables'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-6.png',
                name: 'MANGO CHILI CHUTNEY',
                description: 'Chilies, aromatic spices'
            },  
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-4.png',
                name: 'CHICKEN DORO WAT',
                description: 'Chicken, ginger, eggs'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-2.png',
                name: 'MASALA SPICED CHICKPEAS',
                description: 'Chickpeas, rice, peppers'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/portfolio-7.png',
                name: 'GROUND BEEF STEW',
                description: 'Crushed red pepper, ground beef, garlic'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-5.png',
                name: 'KUNG PAO CHICKEN',
                description: 'Peppers, chicken, peanuts'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-3.png',
                name: 'ASIAN HOISIN PORK',
                description: 'Pork, seasonal vegetables'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-1.png',
                name: 'Grilled free salad',
                description: 'Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato, cucumbers'
            },       
          ],
          [
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-6.png',
                name: 'MANGO CHILI CHUTNEY',
                description: 'Chilies, aromatic spices'
            },   
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/portfolio-6.png',
                name: 'SPICY FRIED RICE & BACON',
                description: 'Bacon, rice, vegetables'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-3.png',
                name: 'ASIAN HOISIN PORK',
                description: 'Pork, seasonal vegetables'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-2.png',
                name: 'MASALA SPICED CHICKPEAS',
                description: 'Chickpeas, rice, peppers'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-1.png',
                name: 'Grilled free salad',
                description: 'Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato, cucumbers'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/portfolio-7.png',
                name: 'GROUND BEEF STEW',
                description: 'Crushed red pepper, ground beef, garlic'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-5.png',
                name: 'KUNG PAO CHICKEN',
                description: 'Peppers, chicken, peanuts'
            },
            {
                url: 'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-4.png',
                name: 'CHICKEN DORO WAT',
                description: 'Chicken, ginger, eggs'
            },    
          ],
      ];

      const dishes = document.querySelectorAll('.dish');
      const image_containers = document.querySelectorAll('.image');
      const names = document.querySelectorAll('.name');
      const descriptions = document.querySelectorAll('.description');

      function setImages() {
          image_containers.forEach(image_container => {
          let url = image_container.getAttribute('data-url');
          image_container.style.backgroundImage ='url(' + url + ')';
        });
      };

      // Change images, names and descriptions of dishes
      function setAttributes(number) {
          for(let i=0; i<8; i++) {
              names[i].setAttribute('data-text', data[number][i].name);
              image_containers[i].setAttribute('data-url', data[number][i].url);
              descriptions[i].setAttribute('data-text', data[number][i].description);
              setImages();
          }; 
      }

      function changeLinkActive(link) {
          document.querySelector('.link-active').classList.remove('link-active');
          document.querySelector(link).classList.add('link-active');
      };

      function addAnimations() {
          dishes.forEach(dish => {
              dish.classList.add('animated');
              dish.classList.add('fadeIn');
              dish.classList.add('faster');
          });
      };

      // Reset attributes on route change
      setAttributes(0);
      dishes.forEach(dish => {
          dish.addEventListener('animationend', () => {
                dish.classList.remove('animated');
                dish.classList.remove('fadeIn');
                dish.classList.remove('faster');
            });
      });
      
      document.querySelector('.link-1').addEventListener('click', () => {
          changeLinkActive('.link-1');
          setAttributes(0);
          addAnimations();
      });

      document.querySelector('.link-2').addEventListener('click', () => {
          changeLinkActive('.link-2');
          setAttributes(1);   
          addAnimations();
      });

      document.querySelector('.link-3').addEventListener('click', () => {
          changeLinkActive('.link-3');
          setAttributes(2);
          addAnimations();
      });

      document.querySelector('.link-4').addEventListener('click', () => {
          changeLinkActive('.link-4');
          setAttributes(0);
          addAnimations();
      });

      document.querySelector('.link-5').addEventListener('click', () => {
          changeLinkActive('.link-5');
          setAttributes(1);
          addAnimations();
      });

      document.querySelector('.link-6').addEventListener('click', () => {
          changeLinkActive('.link-6');
          setAttributes(2);
          addAnimations();
      });

      document.querySelector('.link-7').addEventListener('click', () => {
          changeLinkActive('.link-7');
          setAttributes(0);
          addAnimations();
      });

      document.querySelector('.link-8').addEventListener('click', () => {
          changeLinkActive('.link-8');
          setAttributes(1);
          addAnimations();
      });
  },
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300|Rubik&display=swap');

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