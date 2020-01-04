<template>
    <div id='root'>
        <div class="container">
            <div class="row justify-content-center">
                <span class='title'>Contact Form </span>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <input type='text' placeholder="First Name*" class='input' /><br>
                    <input type='text' placeholder="Last Name*" class='input' /><br>
                    <input type='text' placeholder="Your Email*" class='input' />
                </div>
                <div class="col-7">
                    <textarea placeholder="Your Message" class='text-area' cols='40' rows='10'></textarea>
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <button class='button'>Send Message</button>
            </div>
        </div>
        <div class="space"></div>
    </div> 
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat|Rubik:400,500&display=swap');

    #root {
        margin-top: 100px;
    }

    .title {
        color: #25292d;
        font-family: 'Rubik', sans-serif;
        font-size: 40px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .input {
        width: 373px;
        height: 52px;
        padding: 10px;
        margin: 10px;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }

    .text-area {
        padding: 15px;
        margin: 10px;
        width: 776px;
        height: 194px;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 400;
    }

    .button {
        border: none;
        width: 226px;
        height: 56px;
        font-family: 'Rubik', sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        line-height: 20px;
        background: #e44249;
        border-radius: 10px;
        text-decoration: none;
        transition: background .5s;
    }

    .button:hover {
        background: #0c0404;
        cursor: pointer;
    }

    .space {
        height: 100px;
    }
</style>