<template>
    <div id='root'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
        <div class="container-fluid">
            <div class="row">
                <div class="col text-center">
                    <span class='title'>Our Gallery</span>
                </div>             
            </div>
            <div class="row">
                <div class="col text-center mt-4">
                    <span class='link link-active link-1'>
                    Appetizers
                    </span>
                    <span class='link link-2'>
                        Dessert
                    </span>
                    <span class='link link-3'>
                        Drinks
                    </span>
                    <span class='link link-4'>
                        Main Dishes
                    </span>
                    <span class='link link-5'>
                        Panini Pasta
                    </span>
                    <span class='link link-6'>
                        Risotto
                    </span>
                    <span class='link link-7'>
                        Salads
                    </span>
                    <span class='link link-8'>
                        Sauce Soups
                    </span>
                </div>             
            </div>
            <div class="row mt-5 justify-content-center">
                <div class="photo photo-1">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-01.png'></div>        
                </div>
                <div class="photo photo-2">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-05.png'></div>          
                </div>
                <div class="photo photo-3">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-0006.png'></div>           
                </div>
                <div class="photo photo-4">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-04.png'></div>            
                </div>
            </div>
            <div class="row justify-content-center mt-1">
                <div class="photo photo-1">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-03.png'></div>          
                </div>
                <div class="photo photo-2">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-08.png'></div>           
                </div>
                <div class="photo photo-3">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-02.png'></div>           
                </div>
                <div class="photo photo-4">
                    <div class="image" data-url='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-2.png'></div>           
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <img src='https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/figure-1.png'/>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
  name: 'Photos',
  mounted: function() {

      const data = [
          [
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-01.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-05.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-0006.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-04.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-03.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-08.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-02.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-2.png',
          ],
          [
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-2.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-08.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-03.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-04.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-02.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-0006.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-05.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-01.png',    
          ],
          [
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-02.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-0006.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-05.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-01.png', 
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-08.png',           
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-03.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/menu-img-2.png',
              'https://ld-wp.template-help.com/rockthemes/21791/wp-content/uploads/2018/06/gal-04.png',   
          ],
      ];

      const image_containers = document.querySelectorAll('.image');
      const photos = document.querySelectorAll('.photo');

      function setImages() {
          image_containers.forEach(image_container => {
          let url = image_container.getAttribute('data-url');
          image_container.style.backgroundImage ='url(' + url + ')';
        });
      };

      function changeLinkActive(link) {
          document.querySelector('.link-active').classList.remove('link-active');
          document.querySelector(link).classList.add('link-active');
      };

      function addAnimations() {
          photos.forEach(photo => {
              photo.classList.add('animated');
              photo.classList.add('fadeIn');
              photo.classList.add('faster');
          });
      };

      // Change photos
      function setPhotos(number) {
          for(let i=0; i<8; i++) {
              image_containers[i].setAttribute('data-url', data[number][i]);
              setImages();
          }; 
      }

      // Reset attributes on route change
      setImages();
      photos.forEach(photo => {
          photo.addEventListener('animationend', () => {
                photo.classList.remove('animated');
                photo.classList.remove('fadeIn');
                photo.classList.remove('faster');
            });
      });

      document.querySelector('.link-1').addEventListener('click', () => {
          changeLinkActive('.link-1');
          setPhotos(0);
          addAnimations();
      });

      document.querySelector('.link-2').addEventListener('click', () => {
          changeLinkActive('.link-2');
          setPhotos(1);   
          addAnimations();
      });

      document.querySelector('.link-3').addEventListener('click', () => {
          changeLinkActive('.link-3');
          setPhotos(2);
          addAnimations();
      });

      document.querySelector('.link-4').addEventListener('click', () => {
          changeLinkActive('.link-4');
          setPhotos(0);
          addAnimations();
      });

      document.querySelector('.link-5').addEventListener('click', () => {
          changeLinkActive('.link-5');
          setPhotos(1);
          addAnimations();
      });

      document.querySelector('.link-6').addEventListener('click', () => {
          changeLinkActive('.link-6');
          setPhotos(2);
          addAnimations();
      });

      document.querySelector('.link-7').addEventListener('click', () => {
          changeLinkActive('.link-7');
          setPhotos(0);
          addAnimations();
      });

      document.querySelector('.link-8').addEventListener('click', () => {
          changeLinkActive('.link-8');
          setPhotos(1);
          addAnimations();
      });
  },
};
</script>

<style scoped>
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

    #root {
        margin-top: 100px;
    }

    .title {
        color: #25292d;
        font-family: 'Rubik', sans-serif;
        font-size: 40px;
        font-weight: 400;
        text-transform: uppercase;
    }

    .link {
        color: #7b7e81;
        font-family: 'Rubik', sans-serif;
        font-size: 15px;
        font-weight: 400;
        text-transform: uppercase;
        line-height: 18px;
        padding: 15px;
        cursor: pointer;
        transition: color .5s;
    }

    .link-active, .link:hover {
        color: #e44249;
    }

    .image {
        width: 270px;
        height: 300px;
        margin: 15px;
        transition: opacity .3s;
        background-size: cover;
    }

    .image:hover {
        opacity: .5;
        cursor: pointer;    
    }
</style>