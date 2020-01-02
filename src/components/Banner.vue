<template>
    <div id='team'>
        <div class="container-fluid">
            <div class="row justify-content-center mt-5">
                <div class="banner">
                    <div class="text-container">
                         <span class='text'>We are proud<br>to serving for you</span>
                        <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/bg-color-1.png" width="214" height="77">
                    </div>            
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Banner',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap');


    .banner {
        width: 1180px;
        height: 430px;
        background-image: url("https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/call-to-action.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
    }

    .text-container {
        color: #fff;
        font-family: "Kaushan Script", sans-serif;
        font-size: 96px;
        font-weight: 400;
        line-height: 73px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .text-container img {
        margin-left: .3em;
    }
</style>