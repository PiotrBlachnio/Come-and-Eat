<template>
    <div id='slider' :style="{ backgroundImage: image}">
        <div class='container-fluid'>
            <div class="row justify-content-center">               
            <div class="col-9 title">
                <span class='title-text'>
                    {{title[0]}}<br><br>
                    {{title[1]}}<br><br>
                    {{title[2]}}<br><br>
                    {{title[3]}}
                </span>
            </div>            
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-9">
                    <button class='slider-button'>Order Catering Online</button>
                </div>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-9">
                    <button class='sp-button' :class="{'active':current=='1'}" v-on:click='change_slide(1)'></button>
                    <button class='sp-button' :class="{'active':current=='2'}" v-on:click='change_slide(2)'></button>
                    <button class='sp-button' :class="{'active':current=='3'}" v-on:click='change_slide(3)'></button>
                    <button class='sp-button' :class="{'active':current=='4'}" v-on:click='change_slide(4)'></button>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Slider',
  props: ['current', 'title', 'image'],
  methods: {
    change_slide: function (number) {
        this.current = number;
        switch (number) {
            case 1:
                this.image = "url('./background.jpg')";
                this.title = ['Select', 'Delicious', 'Try', 'Special.']; 
                break;
            case 2:         
                this.image = "url('./background2.jpg')";
                this.title = ['Don\'t', 'eat less.', 'Just', 'eat real.'];              
                break;
            case 3:         
                this.image = "url('./background3.jpg')";
                this.title = ['Special', 'Tastes', 'And', 'Looks.'];     
                break;
            case 4:         
                this.image = "url('./background4.jpg')";
                this.title = ['European', 'Cuisine', 'World', 'Tastes.'];     
                break;
        }
        document.querySelector('#slider').classList.remove('animated');
        document.querySelector('#slider').classList.remove('fadeIn');
        void document.querySelector('#slider').offsetWidth;
        document.querySelector('#slider').classList.add('animated');
        document.querySelector('#slider').classList.add('fadeIn');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500&display=swap');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css');

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

   #slider {
       width: 100vw;
       height: 90vh;
       background-repeat: no-repeat;
       background-size: cover;
       overflow: hidden;
   }

   .title {       
        padding-top: 100px;
   }

    .title-text {
        line-height: 20px;
        color: #25292d;
        font-family: "Rubik", Sans-serif;
        font-size: 100px;
        font-weight: 300;
        text-transform: uppercase;  
    }

    .slider-button {
        width: 235px;
        height:59px;
        border-radius: 6px;
        background-color: #e44249;
        border: none;
        color: #fff;
        font-family: "Rubik", Sans-serif;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        margin-top: 30px;
        transition: background-color 0.3s; 
    }

    .slider-button:hover {
        cursor: pointer;
        background-color: black;
    }

    .sp-button {
        display: block;
        width: 15px;
        height: 15px;
        border-style: solid;
        border-width: 2px 2px 2px 2px;
        border-color: #e44249;       
        border-radius: 150px;
        float: left;
        padding: 7px;
        margin: 3px;
        outline: none;
        transition: background-color 0.3s;
    }

    .active {
        background-color: #e44249;
    }

    .fade {
        animation-name: fade;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }

</style>