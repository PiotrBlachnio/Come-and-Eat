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
            <div class="row justify-content-center">
            </div>
        </div>
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
</style>