<template>
    <div class='main'>
        <b-nav>
            <router-link to='home'>
                <b-img width=270px height=52px src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/logo-1.png" class='mt-3 logo'></b-img>
            </router-link>
            
            <b-nav-item class='ml-auto item mt-4 md' to='home' :class="{'active':current=='home'}">
                    Home
            </b-nav-item>    

            <b-nav-item class='item mt-4' to='about' :class="{'active':current==='about'}">
                    About
            </b-nav-item>  

            <b-nav-item class='item mt-4' to='menu' :class="{'active':current==='menu'}">
                    Menu
            </b-nav-item>

            <b-nav-item class='item mt-4' to='gallery' :class="{'active':current==='gallery'}">
                    Gallery
            </b-nav-item>  

            <b-nav-item class='item mt-4 last-link' to='contact' :class="{'active':current==='contact'}">
                    Contact
            </b-nav-item>    
        </b-nav>
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
        padding: 3px;
    }

    .item .nav-link {
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

    .item .nav-link:hover, .active .nav-link {
        border-bottom: 3px solid #e44249;
        text-decoration: none;
        cursor: pointer;
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
