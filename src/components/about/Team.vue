<template>
    <div id='team'>
        <div class="container-fluid" style='margin-top: 80px;'>
            <div class="row justify-content-center">
                <span class='title'>Meet Our Team</span>
            </div>
            <div class="row justify-content-center mt-4">
                <div class="col-2">
                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/team-1.png" class='image'>
                    <span class='name'>Dayle Peters</span>
                    <br>
                    <span class='position'>head cheaf</span>
                </div>
                <div class="col-2">
                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/team-2.png" class='image'>
                    <span class='name'>Dayle Peters</span>
                    <br>
                    <span class='position'>head cheaf</span>
                </div>
                <div class="col-2">
                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/team-3.png" class='image'>
                    <span class='name'>Dayle Peters</span>
                    <br>
                    <span class='position'>head cheaf</span>
                </div>
                <div class="col-2">
                    <img src="https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/team-4.png" class='image'>
                    <span class='name'>Dayle Peters</span>
                    <br>
                    <span class='position'>head cheaf</span>
                </div>
            </div>      
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Team',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

    .title, .name {
        color: #25292d;
        font-family: 'Rubik', sans-serif;       
        font-weight: 400;
        text-transform: uppercase;
    }

    .title {
        font-size: 40px;
    }

    .image {
        width: 280px;
        height: 333px;
    }

    .name {
        margin-top: 25px;
        display: inline-block;
        font-size: 20px;
    }

    .position {
        color: #7b7e81;
        font-family: 'Rubik', sans-serif;
        font-size: 15px;
        font-weight: 400;
    }
</style>