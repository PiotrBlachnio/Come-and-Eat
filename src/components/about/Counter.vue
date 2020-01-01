<template>
    <div id='counter'>
        <div class="container-fluid" style="margin-top: 100px;">
            <div class="row justify-content-center">
                <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/figure-1.png" width="576" height="36">
            </div>
            <div class="row justify-content-center mt-5">
                <span class='title'>Our fun facts</span>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="counter">
                    <div class="row">
                        <font-awesome-icon icon="users" class='icon'/>
                        <div id='counter-1' class='number'></div>
                    </div>
                    <div class="row">
                        <span class='description'>Happy Clients</span>
                    </div>                                  
                </div>
                <div class="counter">
                    <div class="row">
                        <font-awesome-icon icon="hamburger" class='icon'/>
                        <div id='counter-2' class='number'></div>
                    </div>
                    <div class="row">
                        <span class='description'>Amazing Dishes</span>
                    </div>                                  
                </div>
                <div class="counter">
                    <div class="row">
                        <font-awesome-icon icon="coffee" class='icon'/>
                        <div id='counter-3' class='number'></div>
                    </div>
                    <div class="row">
                        <span class='description'>Satisfied Staff</span>
                    </div>                                  
                </div>
                <div class="counter">
                    <div class="row">
                        <font-awesome-icon icon="clock" class='icon'/>
                        <div id='counter-4' class='number'></div>
                    </div>
                    <div class="row">
                        <span class='description'>Work Hours</span>
                    </div>                                  
                </div>
            </div>
            <div class="row justify-content-center">
                <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/figure-1.png" width="576" height="36">
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Counter',
};

    import { CountUp } from 'countup.js';

    let is_done = false;
    window.addEventListener('scroll', function(e) {
        if(!is_done) {
            is_done = true;
            let c1 = new CountUp('counter-1', 5437);
            let c2 = new CountUp('counter-2', 1230);
            let c3 = new CountUp('counter-3', 251);
            let c4 = new CountUp('counter-4', 9437);
            c1.start();
            c2.start();
            c3.start();
            c4.start();
        }
    })

    // window.onload = function() {
    //     let c1 = new CountUp('counter-1', 5437);
    //     let c2 = new CountUp('counter-2', 1230);
    //     let c3 = new CountUp('counter-3', 251);
    //     let c4 = new CountUp('counter-4', 9437);
    //     c1.start();
    //     c2.start();
    //     c3.start();
    //     c4.start();
    // }
    
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

    .title {
        color: #25292d;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        font-size: 40px;
        text-transform: uppercase;
    }
    
    .counter {
        padding: 100px;
    }

    .description {
        color: #e44249;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        font-size: 15px;
        text-transform: uppercase;
    }

    .number {
        color: #212428;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        font-size: 40px;
    }

    .icon {
        font-size: 30px;
        margin-top: .5em;
        margin-right: 10px;
    }
</style>