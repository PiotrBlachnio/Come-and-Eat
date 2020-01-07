<template>
    <div class='main'>
        <nav>
            <div class='logo'>
                <router-link to='home' class='mt-2'>
                    <img id='logo' width=270px height=52px src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/logo-1.png" class='logo ml-auto'/>
                </router-link>
            </div>
            <ul class='nav-links'>
                <li class='link' :class="{'active':current=='home'}" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    <router-link to='home'>Home</router-link>         
                </li>
                <li class='link' :class="{'active':current==='about'}" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    <router-link to='about'>About</router-link> 
                </li>
                <li class='link' :class="{'active':current==='menu'}" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    <router-link to='menu'>Menu</router-link> 
                </li>
                <li class='link' :class="{'active':current==='gallery'}" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    <router-link to='gallery'>Gallery</router-link> 
                </li>
                <li class='link' :class="{'active':current==='contact'}" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    <router-link to='contact'>Contact</router-link> 
                </li>
            </ul>       
            <div class="burger">
                <div class='line-1'></div>
                <div class='line-2'></div>
                <div class='line-3'></div>
            </div>  
        </nav>             
    </div> 
</template>

<script>
export default {
  name: 'Nav',
  props: ['current'],
  data() {
      return {
          menu_icon: require('../assets/img/menu_icon.png'),
      }
  },
  mounted: function() {
      const navSlide = () => {
          const burger = document.querySelector('.burger');
          const nav = document.querySelector('.nav-links');
          const navLinks = document.querySelectorAll('.nav-links li');

          // Show navigation after clicking on burger
          burger.addEventListener('click', () => {
              nav.classList.toggle('nav-active');

              // Animate links
              navLinks.forEach((link, index) => {
                link.classList.toggle(`animate-${index}`); 
            });

            // Animate burger
            burger.classList.toggle('toggle');
          });        
      };

      navSlide();
  },
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 80px;
        background-color: #f3f5f7;
        font-family: 'Rubik', sans-serif;
    }

    .logo {
        transition: opacity .5s;
        margin-left: 100px;
    }

    .logo:hover {
        cursor: pointer;
        opacity: .8;
    }

    .nav-links {
        display: flex;
        justify-content: space-around;
        width: 25%;
        list-style: none;
        margin-left: auto;
        margin-right: 100px;
    }

    .nav-links a {
        color: #25292d;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 16px;
    }

    .link {
        margin-top: 10px;
        cursor: pointer;
        max-width: fit-content;
    }

    .link:hover, .active {
        border-bottom: 2px solid #e44249;     
    }

    .burger {
        margin-top: 10px;
        margin-right: 30px;
        margin-left: auto;
        cursor: pointer;
        display: none;
        z-index: 3;
    }

    .burger div {
        width: 30px;
        height: 3px;
        margin: 5px;
        background-color: #25292d;
        transition: all .3s ease;
    }

    @media screen and (max-width: 1424px) {
        .nav-links {
            width: 35%;
        }
    }

    @media screen and (max-width: 1024px) {
        .nav-links {
            width: 45%;
            margin-right: 40px;
        }
    }

    @media screen and (max-width: 820px) {
        .burger {
            display: block;
        }

        .nav-links {
            margin-right: 0;
            position: absolute;
            right: 0;
            height: 80vh;
            top: 10vh;
            z-index: 2;
            background-color: #f3f5f7;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
            transform: translateX(100%);
            transition: transform .5s ease-in;
        }

        .nav-links li {
            opacity: 0;
        }

        .logo {
            margin-left: 40px;
        }
    }

    .nav-active {
        transform: translateX(0%);
    }

    @keyframes slide {
        from {
            opacity: 0;
            transform: translateX(50px);
        }

        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }

    .animate-0,
    .animate-1,
    .animate-2,
    .animate-3,
    .animate-4 {
        animation: slide 2s ease backwards;
    }

    .animate-0 {
        animation-delay: .1s;
    }
    
    .animate-1 {
        animation-delay: .2s;
    }

    .animate-2 {
        animation-delay: .3s;
    }

    .animate-3 {
        animation-delay: .4s;
    }

    .animate-4 {
        animation-delay: .5s;
    }

    .toggle .line-1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .toggle .line-2 {
        opacity: 0;
    }

    .toggle .line-3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
</style>
