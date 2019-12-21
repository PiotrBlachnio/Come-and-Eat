<template>
    <div id='welcome'>
        <div class="container">
            <div class="row justify-content-center mt-5">
                <span class='title'>Welcome To Come&Eat </span>              
            </div>
            <div class="row justify-content-center mt-3">
                <div class='line'></div>
            </div>
            <div class="row justify-content-center mt-5">
                <span class='description'>We welcome you to a delicious feast
                      of exquisite dishes in Artichaut. With
                      a wide range of world cuisines to choose<br><br>
                      from, we guarantee you a sumptuous feast
                      experience in our restaurant! Here you will
                      dive into a friendly and<br><br> romantic atmosphere
                      and enjoy our haute cuisine. With our great
                      selection of dishes from all over the world
                      you<br><br> can feel yourself as a traveler and true gourmet!
                </span>
            </div>
            <div class="row justify-content-center mt-5">
                <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/figure-1.png">
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Welcome',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');


    .title {
        font-family: 'Open Sans', sans-serif;
        font-weight: 400px;
        color: #25292d;
        text-transform: uppercase;
        font-size: 40px;
    }

    .description {
        text-align: center;
        color: #7b7e81;
        font-family: 'Open Sans', sans-serif;
        font-size: 17px;
        font-weight: 400px;
        line-height: 15px;
    }

    .line {
        width: 156px;
        height: 2px;
        background-color: #e44249;
    }

</style>