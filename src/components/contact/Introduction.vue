<template>
    <div id='root'>
        <div class="container">
            <div class="row justify-content-center">
                <span class='title'>Contact Us </span>
            </div>
            <div class="row justify-content-center mt-2">
                <div class="line"></div>
            </div>
            <div class="row justify-content-center text-center mt-4">
                <span class='description'>
                    We are open to your feedback and your opinion about iur restaurant. If you have any questions, suggestions or<br>
                    commercial offers, please feel free to contact us any suitable way. Every guest can book a table or ask any question<br>
                    – our representatives will reply and provide you will all necessary information.<br><br>

                    We are looking forward hearing from you and seeing you as our guests!
                </span>
            </div>
            <div class="row mt-5">
                <div class="col text-center">
                    <font-awesome-icon icon="car" class='icon'/><br>
                    <span class='name'>Parking</span><br>
                    <span class='text'>
                        We have a comfortable parking, so you can
                        leave your car and enjoy your meals without
                        any worries!
                    </span>
                </div>
                <div class="col text-center">
                    <font-awesome-icon icon="phone" class='icon'/><br>
                    <span class='name'>Telephone</span><br>
                    <span class='text'>
                        We are happy to answer your questions or give
                        you directions via phone.
                    </span><br>
                    <span class='bold'> +1 800 889 9898 </span>
                </div>
                <div class="col text-center">
                    <font-awesome-icon icon="envelope" class='icon'/><br>
                    <span class='name'>Email</span><br>
                    <span class='text'>
                        If you are on the go and still want to ask a
                        question, simply drop us an e-mail.
                    </span>
                    <span class='bold'>mail@demolink.org </span>
                </div>
            </div>
            <div class="row mt-5">
                <div class="image"></div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Introduction',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600|Rubik&display=swap');

    #root {
        margin-top: 100px;
    }

    .line {
        height: 2px;
        background-color: #e44249;
        width: 156px;
    }

    .title {
        color: #25292d;
        font-family: 'Rubik', sans-serif;
        font-size: 40px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .description {
        color: #7b7e81;
        font-family: 'Open Sans', sans-serif;
        font-size: 17px;
        font-weight: 400;
        line-height: 30px;
    }

    .icon {
        font-size: 25px;
        color: #7b7e81;
    }

    .name {
        color: #25292d;
        font-family: 'Rubik', sans-serif;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 1em;
        margin-top: 12px;
        display: inline-block
    }

    .text {
        color: #7b7e81;
        font-family: 'Open Sans', sans-serif;
        font-size: 17px;
        font-weight: 400;
        line-height: 30px;
        display: inline-block;
        margin-top: 15px;
    }

    .bold {
        color: #212428;
        font-family: 'Open Sans', sans-serif;
        font-size: 17px;
        font-weight: 600;
    }

    .image {
        margin-top: 40px;
        width: 1180px;
        height: 300px;
        background: url('https://ld-wp.template-help.com/rockthemes/21791/wp-content/plugins/jet-elements/assets/images/dummy-map.png');
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(1.5px);
    }
</style>