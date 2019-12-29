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
            <div class="row second-row">

            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');

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

    .icon:hover {
        color: #fff;
        cursor: pointer;
    }
</style>