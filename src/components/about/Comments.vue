<template>
    <div id='comments'>
        <div class="container" style='margin-top: 90px;'>
            <div class="row justify-content-center">
                <span class='title'>What People say about us</span>
            </div>
            <div class="row mt-4">
                <div class="glide">
                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            <li class="glide__slide">
                                <font-awesome-icon icon="quote-left" class='quote-icon'/><br>
                                <span class='description'>
                                    I loved your cuisine, ambience and service! A combination of al these elements is perfect here. I visited the restaurant with my<br>
                                    friends and I was amazed by its interior and rich menu! Thanks for your great job! Your desserts are awesome and very lovely.<br>
                                    Nulla tincidunt euismod justo, non laoreet tellus maximus dapibus. Praesent porttitor ante ac mattis volutpat.
                                </span><br>
                                <div class="image-container">
                                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/testi-1.png" class='image'><br>
                                    <span class='name'>John Franklin</span><br>
                                    <span class='position'>head cheaf</span>
                                </div>                             
                            </li>
                            <li class="glide__slide">
                                <font-awesome-icon icon="quote-left" class='quote-icon'/><br>
                                <span class='description'>
                                    Totally stunning atmosphere and friendly personnel! I’m amazed with your menu positions and meals taste! Thank you for your<br>
                                    professional attitude to your work and for your attention to details! Perfect restaurant! Me and my family will definitely visit your<br>
                                    again.
                                </span><br>
                                <div class="image-container">
                                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/testi-2.png" class='image'><br>
                                    <span class='name'>Dayle Peters</span><br>
                                    <span class='position'>head cheaf</span>
                                </div>                             
                            </li>
                            <li class="glide__slide">
                                <font-awesome-icon icon="quote-left" class='quote-icon'/><br>
                                <span class='description'>
                                    I’m new in the city and I was recommended to visit Artichaut by my friends. I’m very grateful for this recommendation! Great<br>
                                    cuisine, fast service and extremely stylish interior - that’s all I love in restaurants! I appreciated your serving and your professional<br>
                                    staff.
                                </span><br>
                                <div class="image-container">
                                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/testi-3.png" class='image'><br>
                                    <span class='name'>Eva Savits</span><br>
                                    <span class='position'>head cheaf</span>
                                </div>                             
                            </li>
                        </ul>
                    </div>
                    <div class="glide__arrows" data-glide-el="controls">
                        <font-awesome-icon icon="arrow-left" class='icon icon-left' data-glide-dir="<"/>
                        <font-awesome-icon icon="arrow-right" class='icon icon-right' data-glide-dir=">"/>          
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import postscribe from 'postscribe'

export default {
  name: 'Comments',
  mounted: function() {
      const config = {
      type: 'carousel',
      perView: 1
    };
    new Glide('.glide', config).mount()
  },
}; 
     
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400i|Rubik&display=swap');

    .glide__track {
        text-align: center;
    }

    .icon {
        font-size: 25px;
        position: absolute;
        display: block;
        top: 50%;
        z-index: 2;
        cursor: pointer;
        transform: translateY(-50%);
        color: #7b7e81;
    }

    .icon-left {
        left: .5em;
    }

    .icon-right {
        right: .5em;
    }

    .icon:hover {
        color: #e44249;
    }

    .glide--dragging {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing
    }

    .title {
        color: #25292d;
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        font-size: 40px;
        text-transform: uppercase;   
    }

    .quote-icon {
        font-size: 29px;
        color: #25292d;
    }

    .description {
        display: inline-block;
        margin-top: 20px;
        color: #7b7e81;
        font-family: 'Open Sans', sans-serif;
        font-size: 17px;
        font-weight: 400;
        font-style: italic;
        line-height: 30px;
    }

    .image {
        width: 83px;
        height: 83px;
        margin-top: 15px;
        border-radius: 100px;
    }

    .name {
        color: #25292d;
        font-family: 'Rubik', sans-serif;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 1em;
        margin-top: 20px;
        display: inline-block;
    }

    .position {
        color: #7b7e81;
        font-family: 'Rubik', sans-serif;
        font-family: 15px;
        font-weight: 400;
    }
</style>