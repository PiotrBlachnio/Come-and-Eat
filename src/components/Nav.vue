<template>
    <div class='main'>
        <nav>
            <div class='logo'>
                <router-link to='home' class='mt-2'>
                    <img width=270px height=52px src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/logo-1.png" class='logo ml-auto'/>
                </router-link>
            </div>
            <ul class='nav-links'>
                <li class='link' :class="{'active':current=='home'}" data-aos="fade-right" data-aos-duration="1000">
                    <router-link to='home'>Home</router-link>         
                </li>
                <li class='link' :class="{'active':current==='about'}" data-aos="fade-right" data-aos-duration="1000">
                    <router-link to='about'>About</router-link> 
                </li>
                <li class='link' :class="{'active':current==='menu'}" data-aos="fade-right" data-aos-duration="1000">
                    <router-link to='menu'>Menu</router-link> 
                </li>
                <li class='link' :class="{'active':current==='gallery'}" data-aos="fade-right" data-aos-duration="1000">
                    <router-link to='gallery'>Gallery</router-link> 
                </li>
                <li class='link' :class="{'active':current==='contact'}" data-aos="fade-right" data-aos-duration="1000">
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
    }

    .link:hover, .active {
        border-bottom: 2px solid #e44249;
        cursor: pointer;
    }

    .burger {
        margin-top: 25px;
        margin-right: 20px;
        cursor: pointer;
        display: none;
    }

    .burger div {
        width: 30px;
        height: 3px;
        margin: 5px;
        background-color: #25292d;
    }

    @media screen and (max-width: 820px) {
        .burger {
            display: block;
            position: absolute;
            right: 0;
        }

        .navbar {
            position: absolute;
            right: 0;
            height: 20vh;
            top: 1vh;        
        }

        .link {
            float: none;
        }
    }
</style>
