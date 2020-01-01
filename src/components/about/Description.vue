<template>
    <div id='description'>
        <div class="title-container">
            <span class='title'>Who we are</span>
            <div class='line'></div>
        </div>       
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-3 text-right mr-5">
                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/about-1.png" width="470" height="542">
                </div>
                <div class="col-4 ml-5">
                    
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

    .title {
        color: #25292d;
        font-family: "Rubik", sans-serif;
        font-weight: 400;
        font-size: 40px;
        text-transform: uppercase;
    }
</style>