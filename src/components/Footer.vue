<template>
    <div id='footer'>
        <div class="container-fluid footer">
            <div class="row text-center first-row">
                <div class="col mt-4">
                    <div class="title">Address</div>
                    <div class="description">
                        The Company Name Inc.
                        <br>
                        8901 Marmora Road,
                        <br>
                        Glasgow, D04 89GR.
                    </div>
                </div>
                <div class="col mt-4">
                    <div class="title">Follow Us</div>
                    <div class='icons'>
                        <a href='https://www.facebook.com/' class='icon'>
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href='https://twitter.com/' class='icon'>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href='https://plus.google.com/' class='icon'>
                            <i class="fa fa-google-plus" aria-hidden="true"></i>
                        </a>
                        <a href='https://www.linkedin.com/' class='icon'>
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href='https://www.pinterest.com/' class='icon'>
                            <i class="fa fa-pinterest" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div class="col mt-4">
                    <div class="title">Contact Us</div>
                    <div class="description">
                        +1 800 603 6035
                        <br>
                        +1 800 603 3506
                        <br>
                        mail@demolink.org
                    </div>
                </div>
            </div>
            <div class="row text-center second-row">
                <div class="col-5 mt-4">
                    <img src='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/logo-2-1.png' width='135' height='26'/>
                    <span class='copy'>Copyright © 2018. All Rights Reserved</span>
                </div>
                <div class="col-6 mr-5">
                    <div class="row mr-5">
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
                    </div>                   
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Footer',
  props: ['current'],
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Lato:300|Open+Sans|Rubik&display=swap');

    .footer {
        height: 281px;
        color: #fff;
    }

    .first-row {
        height: 198px;
        background: #25292d;
    }

    .second-row {
        height: 83px;
        background: #212428;
    }

    .title {
        color: #fff;
        font-family: "Rubik", sans-serif;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .description {
        text-align: center;
        color: #97999b;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
    }

    .icon {
        color: #818a91;
        font-size: 25px;
        transition: color .5s;
        padding: 15px;
    }

    .copy {
        font-family: "Lato", sans-serif;
        font-weight: 300;
        font-size: 13px;
        color: rgba(255, 255, 255, 0.5);
        padding: 10px;
        display: inline-block;
    }

    .icon:hover {
        color: #fff;
        cursor: pointer;   
    }

    .item {
        float: left;
        list-style: none;       
    }

    .item .nav-link {
        color: #97999b;
        font-family: "Rubik", sans-serif;
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        transition: color .5s;
    }

    .item .nav-link:hover, .active .nav-link{
        color: #fff;
    }

</style>