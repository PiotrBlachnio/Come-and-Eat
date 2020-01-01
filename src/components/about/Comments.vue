<template>
    <div id='comments'>
        <div class="container" style='margin-top: 90px;'>
            <div class="row">
                <div class="glide">
                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            <li class="glide__slide">Slide 1</li>
                            <li class="glide__slide">Slide 2</li>
                            <li class="glide__slide">Slide 3</li>
                        </ul>
                    </div>
                    <div class="glide__arrows" data-glide-el="controls">
                        <font-awesome-icon icon="arrow-left" class='icon icon-left' data-glide-dir="<"/>
                        <font-awesome-icon icon="arrow-right" class='icon icon-right' data-glide-dir=">"/>
                        <!-- <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button> -->
                        <!-- <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button> -->
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
}; 
     
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');

    .glide__track {
        text-align: center;
    }

    .icon {
        position: absolute;
        display: block;
        top: 50%;
        z-index: 2;
        cursor: pointer;
        transform: translateY(-50%);
    }

    .icon-left {
        left: 2em;
    }

    .icon-right {
        right: 2em;
    }

    .glide--dragging {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing
    }
</style>