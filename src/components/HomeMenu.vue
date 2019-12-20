<template>
    <div id='homeMenu'>
        <div class="space"></div>
        <div class="row justify-content-center">
            <div class="col-6 nopadding ml-5">
                <div class="row justify-content-center">
                    <div class="col-6 ml-5 nopadding">
                        <div class="title">Main Menu</div>
                    </div>            
                </div>
                <div class="row justify-content-center">
                    <div class="col-6 ml-5 nopadding">
                        <div class="line"></div>
                    </div>               
                </div>
                <div class='row justify-content-center mt-4'>
                    <div class="col-6 ml-5">
                        <div class="row">
                            <div class="col-auto dish-title nopadding">
                                <span class='dish-name'>Garlic Shrimp & Tonnarelli Pasta</span>
                            </div>
                            <div class="col nopadding dots">
                            </div>
                            <div class="col-2 nopadding">
                                <span class='cost'>$19.99</span><br>   
                            </div>                                                                            
                        </div>
                        <div class="row">
                            <div class="col nopadding">
                                <span class='ingredients'>Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row justify-content-center mt-4'>
                    <div class="col-6 ml-5">
                        <div class="row">
                            <div class="col-auto dish-title nopadding">
                                <span class='dish-name b'>Grilled hanger steak</span>
                            </div>
                            <div class="col nopadding dots">
                            </div>
                            <div class="col-2 nopadding">
                                <span class='cost'>$25.50</span><br>   
                            </div>                                                                            
                        </div>
                        <div class="row">
                            <div class="col nopadding">
                                <span class='ingredients'>Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row justify-content-center mt-4'>
                    <div class="col-6 ml-5">
                        <div class="row">
                            <div class="col-auto dish-title nopadding">
                                <span class='dish-name b'>Pan roasted 'florida keys' mahi mahi</span>
                            </div>
                            <div class="col nopadding dots">
                            </div>
                            <div class="col-2 nopadding">
                                <span class='cost'>$15.50</span><br>   
                            </div>                                                                            
                        </div>
                        <div class="row">
                            <div class="col nopadding">
                                <span class='ingredients'>Serrano ham, spinach, roasted red peppers, tomato, pil pil sauce</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row justify-content-center mt-4'>
                    <div class="col-6 ml-5">
                        <div class="row">
                            <div class="col-auto dish-title nopadding">
                                <span class='dish-name b'>Grilled free range chicken salad</span>
                            </div>
                            <div class="col nopadding dots">
                            </div>
                            <div class="col-2 nopadding">
                                <span class='cost'>$19.99</span><br>   
                            </div>                                                                            
                        </div>
                        <div class="row">
                            <div class="col nopadding">
                                <span class='ingredients'>Mesclun greens, pepperjack cheese, bacon, avocado, corn, tomato</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row justify-content-center mt-4'>
                    <div class="col-6 ml-5">
                        <div class="row">
                            <div class="col-auto dish-title nopadding">
                                <span class='dish-name b'>Grilled bbq baby back ribs</span>
                            </div>
                            <div class="col nopadding dots">
                            </div>
                            <div class="col-2 nopadding">
                                <span class='cost'>$23.00</span><br>   
                            </div>                                                                            
                        </div>
                        <div class="row">
                            <div class="col nopadding">
                                <span class='ingredients'>Hibiscus sweet ranch coleslaw, hand cut fries</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4 nopadding">
                <img src='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/home-img-1.png' width='571' height='572'/>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'HomeMenu',
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300|Rubik:400,500&display=swap');

    .space {
        height: 100px;
    }
   
   .line {
        width: 103px;
        height: 2px;
        background-color: #e44249;
    }

    .dots {
        border-bottom: 1px dotted #25292d;
    }

    .dotted {
        width: auto;
        border-bottom: 1px dotted #25292d;
    }

    .title {
        color: #25292d;
        font-family: "Rubik", Sans-serif;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .dish-name, .cost {
        font-family: "Rubik", Sans-serif;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0px;
        color: #25292d;
    }
    
    .ingredients {
        font-family: "Open Sans", Sans-serif;
        font-size: 13px;
        font-weight: 300;
        letter-spacing: 0px;
        color: #7b7e81;
    }

    .nopadding {
        padding: 0 !important;
    }
</style>