<template>
    <div id='description'>
        <div class="title-container">
            <span class='title'>Who we are</span>
            <div class='line'></div>
        </div>       
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-3 text-right">
                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/about-1.png" width="470" height="542">
                </div>
                <div class="col-5 ml-5 description">
                    <h3>A few words about us</h3>
                    <p>
                        When visiting our European restaurant, just brace yourself to immersing into<br>
                        enjoying a truly delicious and perfectly cooked dishes.<br><br>
                        The world-renowned chef showcases exhilarating interpretations of European<br>
                        food in a breathtaking space architect Tadao Ando built as a respite from the<br>
                        non-stop chaos of New York City.
                    </p>
                    <h3>Why choose us</h3>
                    <p>
                        We welcome every person to visit our restaurant! Everyone can find its perfect<br>
                        table and try incredible dish from our chef! We work for people to deliver great<br>
                        mood, create cozy atmosphere and make your time awesome and fun!<br>
                        Delivering the best service is our core value, as people come to us to have a rest,<br>
                        and we’re providing their perfect residence.<br>
                    </p>
                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/signature.png" width="99" height="59">
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Description',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Rubik&display=swap');

    .line {
        height: 2px;
        width: 156px;
        background: #e44249;
        margin: auto;
    }

    .title-container {
        margin: 50px auto;
        width: fit-content;
        text-align: center;
    }

    .title, .description h3 {
        color: #25292d;
        font-family: "Rubik", sans-serif;
        font-weight: 400;     
        text-transform: uppercase;
    }

    .title {
        font-size: 40px;
    }

    .description h3 {
        font-size: 20px;
    }

    .description p {
        color: #7b7e81;
        font-family: "Open Sans", sans-serif;
        font-size: 17px;
        font-weight: 400;
        line-height: 30px;
    }
</style>