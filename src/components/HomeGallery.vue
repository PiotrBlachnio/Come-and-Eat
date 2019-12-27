<template>
    <div id='homeGallery'>
        <div class='title-container'>
            <span class='title-text'>Warm Atmosphere</span>
            <div class='line'></div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col image image-1">
                   
                </div>
                <div class="col image image-2 ml-3">
                   
                </div>
            </div>
            <div class="row mt-3">
                <div class="col nopadding">
                    <div class="row  image image-3">
                    </div>
                    <div class="row image image-4">

                    </div>
                </div>
                <div class="col nopadding image image-5">
                    
                </div>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
  name: 'HomeGallery'
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

    .line {
        height: 2px;
        width: 156px;
        background-color: #e44249;
        margin: auto;
        margin-top: 7px;
    }

    .title-container {
        margin: 0 auto;
        margin-bottom: 100px;
        width: fit-content;
        text-align: center;
    }

    .title-text {
        font-family: "Rubik", Sans-serif;
        color: #25292d;
        font-size: 40px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .nopadding {
        padding: 0;
    }

    .image {
        transition: opacity .3s;
    }

    .image:hover {
        opacity: .4;
        cursor: pointer;
    }

    .image-1, .image-2 {
        height: 541px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .image-1 {
        background-image: url('https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/project-1.png');
    }

    .image-2 {
        background-image: url('https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/project-2.png');
    }
    
    .image-3, .image-4 {
        height: 404px;
        background-repeat: no-repeat;
        background-size: cover;
        width: 60em;
    }

    .image-3 {
        background-image: url('https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/home-img-3.png');            
    }

    .image-4 {
        margin-top: 15px;
        background-image: url('https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/home-img-4.png');
    }

    .image-5 {
        height: 823px;
        margin-left: 1em;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/project-11.png');
    }
</style>