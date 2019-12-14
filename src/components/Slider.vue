<template>
    <div id='slider'>
        <b-container>
            <b-row class='title'>
                Select<br></br>Delicious<br></br>Try<br></br>Special.
            </b-row>
            <b-row>             
            </b-row>
        </b-container>
    </div> 
</template>

<script>
export default {
  name: 'Slider',
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');
   #slider {
       height: 850px;
       background-image: url('../assets/Image_1.jpg');
       background-repeat: no-repeat;

   }

   .title {
       color: #25292d;
        font-family: "Rubik", Sans-serif;
        font-size: 100px;
        font-weight: 300;
        text-transform: uppercase;
        line-height: 90px;
        padding-top: 100px;
   }

</style>
