<template>
    <div id='footer'>
        <div class="container-fluid footer">
            <div class="row text-center first-row">
                <div class="col">
                    Hello
                </div>
                <div class="col">
                    World
                </div>
                <div class="col">
                    Sherlock
                </div>
            </div>
            <div class="row second-row">

            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');

    .footer {
        height: 281px;
        color: #fff;
    }

    .first-row {
        height: 198px;
        background: #25292d;
    }

    .second-row {
        height: 83px;
        background: #212428;
    }
</style>