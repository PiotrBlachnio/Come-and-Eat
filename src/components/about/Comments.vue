<template>
    <div id='comments'>
        <div class="container-fluid" style='margin-top: 90px;'>
            <div class="row justify-content-center">
                <div class="glide">
                    <div class="glide__track" data-glide-el="track">
                        <ul class="glide__slides">
                            <li class="glide__slide">0</li>
                            <li class="glide__slide">1</li>
                            <li class="glide__slide">2</li>
                        </ul>
                    </div>
                    <div class="glide__arrows" data-glide-el="controls">
                        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
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

</style>