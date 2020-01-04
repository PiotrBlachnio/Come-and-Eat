<template>
    <div class='main'>
        <nav class='navbar navbar-expand-sm nav' >
            <router-link to='home'>
                <img width=270px height=52px src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/logo-1.png" class='logo'></img>
            </router-link>
            <button class='navbar-toggler' data-toggle='collapse' data-target='#navbarMenu'></button>
            <div class='collapse navbar-collapse' id='navbarMenu'>
                <ul class='navbar-nav ml-auto mt-2'>
                    <li class='item' :class="{'active':current=='home'}" data-aos="fade-right" data-aos-duration="1000">
                        <router-link to='home' class='link'>Home</router-link>         
                    </li>
                    <li class='item' :class="{'active':current==='about'}" data-aos="fade-right" data-aos-duration="1000">
                        <router-link to='about' class='link'>About</router-link> 
                    </li>
                    <li class='item' :class="{'active':current==='menu'}" data-aos="fade-right" data-aos-duration="1000">
                        <router-link to='menu' class='link'>Menu</router-link> 
                    </li>
                    <li class='item' :class="{'active':current==='gallery'}" data-aos="fade-right" data-aos-duration="1000">
                        <router-link to='gallery' class='link'>Gallery</router-link> 
                    </li>
                    <li class='item last-item' :class="{'active':current==='contact'}" data-aos="fade-right" data-aos-duration="1000">
                        <router-link to='contact' class='link'>Contact</router-link> 
                    </li>
                </ul>
            </div>
        </nav>      
    </div> 
</template>

<script>
export default {
  name: 'Nav',
  props: ['current'],
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
    .nav {
        background-color: #f3f5f7;
        height: 80px;
    }

    .item {
        margin-left: 20px;
        line-height: 1.4em;
        transition: all .7s;
    }

    .nav-link:hover {
        cursor: default;
    }

    .item:hover, .active {
        border-bottom: 2px solid #e44249;
        text-decoration: none;
        cursor: pointer;
    }

    .last-item {
        margin-right: 220px;
    }

    .logo {
        margin-left: 250px;
    }

    .logo:hover {
        cursor: pointer;
    }

    .link {
        text-decoration: none;
        color: #25292d;
        font-size: 16px;
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
    }
</style>
