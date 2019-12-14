<template>
    <div class='main'>
        <b-nav>
            <router-link to='home'>
                <b-img width=270px height=52px src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/logo-1.png" class='mt-3 logo'></b-img>
            </router-link>
            
            <b-nav-item class='ml-auto item mt-4'>
                <router-link to='home'>
                    Home
                </router-link>
            </b-nav-item>    

            <b-nav-item class='item mt-4'>
                <router-link to='about'>
                    About
                </router-link>
            </b-nav-item>  

            <b-nav-item class='item mt-4'>
                <router-link to='menu'>
                    Menu
                </router-link>
            </b-nav-item>

            <b-nav-item class='item mt-4'>
                <router-link to='gallery'>
                    Gallery
                </router-link>
            </b-nav-item>  

            <b-nav-item class='item mt-4 last-link'>
                <router-link to='contact'>
                    Contact
                </router-link>
            </b-nav-item>    
        </b-nav>
    </div> 
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
    .nav {
        background-color: #f3f5f7;
        height: 80px;
    }

    .item .nav-link a {
        color: #25292d;
        font-size: 16px;
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 1.4em;
        letter-spacing: 0em;
        transition: all 0.07s ease;
    }

    .nav-link:hover {
        cursor: default;
    }

    .item .nav-link a:hover {
        border-bottom: 3px solid #e44249;
        text-decoration: none;
    }

    .last-link .nav-link{
        margin-right: 220px;
    }

    .logo {
        margin-left: 250px;
    }

    .logo:hover {
        cursor: pointer;
    }
    
</style>
