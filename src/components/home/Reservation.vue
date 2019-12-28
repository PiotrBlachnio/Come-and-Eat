<template>
    <div id='reservation'>
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <div class="row justify-content-center">
                        <div class="title">
                            Book a Table
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="line"></div>
                    </div>    
                </div>                      
            </div>
            <div class="row justify-content-center mt-5">
                <div class="image mr-5"></div>
                <div class='form ml-5'>
                    <form> 
                        <div class="row">
                            <input type='text' class='input' placeholder="Name*"/>
                            <input type='text' class='input' placeholder="Phone*"/>
                        </div>
                        <div class="row">
                            <input type='text' class='input' placeholder="DD/MM/YY*"/>
                            <input type='text' class='input' placeholder="Time*"/>
                        </div>
                        <div class="row">
                            <input type='text' class='input' placeholder="Seats*"/>
                            <input type='text' class='input' placeholder="Email*"/>
                        </div>
                        <div class="row">
                            <textarea placeholder="Notes" class='input-message'>
                            </textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="space"></div>
    </div> 
</template>

<script>
export default {
  name: 'Reservation',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:300|Rubik&display=swap');

    .title {
        font-size: 40px;
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
    }

    .line {
        width: 156px;
        height: 2px;
        background: #e44249;
    }

    .space {
        height: 100px;
    }

    .image {
        width: 580px;
        height: 300px;
        background-image: url('https://ld-wp.template-help.com/rockthemes/21791/wp-content/plugins/jet-elements/assets/images/dummy-map.png');
        background-repeat: no-repeat;
        background-size: cover;
        filter: blur(1.5px);
    }

    .input {       
        width: 275px;
        height: 50px;   
    }

    .input-message {
        width: 580px;
        height: 110px;
    }

    .input, .input-message {
        margin: 8px;
        padding: 15px;
        font-family: "Montserrat", Sans-serif;
        font-size: 14px;
        font-weight: 400;
        border: 1px solid #ebeced;
        background-color: #fff;
        transition: box-shadow .2s;
    }

    .input:focus, .input-message:focus {
        outline: none;
        box-shadow: 0 5px 32px rgba(103, 122, 141, 0.17);
    }

</style>