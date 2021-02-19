<template>
 <!-- Showcase -->
    <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h1>Hand-selected developers to fit your needs at scale</h1>
                <p>We provide companies with senior tech talent and product development expertise to build world-class software.</p>
                <router-link to="/service" class="btn btn-outline">View Related Companies</router-link>
            </div>

            <div class="showcase-form">
                <div class="intro-area">
                    <div class="banner-elements-part has_bg_image" >
                        <div class="element-five"><img src="@/assets/img/landing/blog/laptop.svg" alt="vector-image"></div>    
                        <div class="element-seven"><img src="@/assets/img/landing/blog/person.png" alt="vector-image"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Stats -->
    <section class="stats">
        <div class="container">
            <h3 class="stats-heading text-center">
                Welcome to the best platform for learning technologies that will change the world we live
            </h3>

            <div class="grid grid-3 text-center my-4">
                <div>
                    <i class="fas fa-server fa-3x"></i>
                    <h3>10,349,405</h3>
                    <p class="text-secondary">Students</p>
                </div>
                <div>
                    <i class="fas fa-upload fa-3x"></i>
                    <h3>350</h3>
                    <p class="text-secondary">Related Companies</p>
                </div>
                <div>
                    <i class="fas fa-project-diagram fa-3x"></i>
                    <h3>300</h3>
                    <p class="text-secondary">Learning Services</p>
                </div>
            </div>
        </div>
    </section>


    <!-- Stats -->
    <section >
        <div class="container">
            <h1 class="text-center success-cases-header">
                Success cases
            </h1>

            <div class="success-cases">

                <div class="card">
                    <div class="video">
                        <video class="video" loop="" muted="" playsinline="" poster="https://relevant.software/wp-content/uploads/2020/01/0-2-1-768x453.jpg">
                            <source src="https://161cli18elctkuzva3yluzd6-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/0optimized.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div>
                        <h1>24onoff</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio eos hic blanditiis perspiciatis, obcaecati totam aspernatur exercitationem nisi laudantium soluta dolorem vero quas consequatur! Vero dolor consectetur libero nesciunt?
                    </div>
                </div>

                <div class="card">
                    <div class="video">
                        <video class="video" loop="" muted="" playsinline="" poster="https://relevant.software/wp-content/uploads/2020/01/0-768x453.png">
                            <source src="https://161cli18elctkuzva3yluzd6-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/0-7.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div>
                        <h1>24onoff</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio eos hic blanditiis perspiciatis, obcaecati totam aspernatur exercitationem nisi laudantium soluta dolorem vero quas consequatur! Vero dolor consectetur libero nesciunt?
                    </div>
                </div>

                <div class="card">
                    <div class="video">
                        <video class="video" loop="" muted="" playsinline="" poster="https://relevant.software/wp-content/uploads/2020/01/0-11-768x453.jpg">
                            <source src="https://161cli18elctkuzva3yluzd6-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/0-8.mp4" type="video/mp4">
                        </video>
                    </div>
                    <div>
                        <h1>24onoff</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio eos hic blanditiis perspiciatis, obcaecati totam aspernatur exercitationem nisi laudantium soluta dolorem vero quas consequatur! Vero dolor consectetur libero nesciunt?
                    </div>
                </div>
                <!-- <div class="card">
                    <div>
                        image
                    </div>
                    <h1>FirstHomeCoach</h1>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio eos hic blanditiis perspiciatis, obcaecati totam aspernatur exercitationem nisi laudantium soluta dolorem vero quas consequatur! Vero dolor consectetur libero nesciunt?
                    </div>
                </div>

                <div class="card">
                    <div>
                        image
                    </div>
                    <h1>Airthings</h1>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio eos hic blanditiis perspiciatis, obcaecati totam aspernatur exercitationem nisi laudantium soluta dolorem vero quas consequatur! Vero dolor consectetur libero nesciunt?
                    </div>
                </div> -->
            </div>
        </div>
    </section>


    <!-- Cloud -->
    <section class="cloud bg-primary my-2 py-2">
        <div class="container grid">
            <div class="text-center">
                <h2 class="lg">Education Totally Online</h2>
                <p class="lead my-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque tenetur dolor eum sunt numquam iure excepturi sint, veniam, quas at porro recusandae atque culpa quis, facilis et aspernatur possimus nisi?</p>
                <router-link to="/service" class="btn btn-dark">Read More</router-link>
            </div>
            <img src="@/assets/img/landing/cloud.png" alt="">
        </div>
    </section>

    <!-- Languages -->
    <section class="languages">
        <h2 class="md text-center my-2">
            Tech Stack
        </h2>
        <div class="container flex">
            <p class="md text-center my-2">
                We focus on technologies that allow for building reliable, nimble, and secure web & mobile products. Everything we build can be deployed in the cloud to ensure even higher performance and uptime.
            </p>
            <div class="card">
                <h4>Node.js</h4>
                <img src="@/assets/img/landing/logos/node.png" alt="">
            </div>
            <div class="card">
                <h4>Python</h4>
                <img src="@/assets/img/landing/logos/python.png" alt="">
              </div>
              <div class="card">
                <h4>C#</h4>
                <img src="@/assets/img/landing/logos/csharp.png" alt="">
              </div>
              <div class="card">
                <h4>Ruby</h4>
                <img src="@/assets/img/landing/logos/ruby.png" alt="">
              </div>
              <div class="card">
                <h4>PHP</h4>
                <img src="@/assets/img/landing/logos/php.png" alt="">
              </div>
              <div class="card">
                <h4>Scala</h4>
                <img src="@/assets/img/landing/logos/scala.png" alt="">
              </div>
              <div class="card">
                <h4>Clojure</h4>
                <img src="@/assets/img/landing/logos/clojure.png" alt="">
              </div>
        </div>
    </section>

</template>

<script>
	setInterval(function(){ 
        const elementsPart = document.querySelector('.banner-elements-part');
        elementsPart.classList.add('active');        
	}, 500);

    export default {
        
    }
</script>

<style lang="scss">

    .banner-elements-part .element-five, 
    .banner-elements-part .element-seven{
        position: absolute;
        transition: all 0.3s;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        transition-duration: 0.3s;
        transition-delay: 0s;
        -ms-transition: all 0.3s;
        -o-transition: all 0.3s;
        opacity: 0;
    }

    .banner-elements-part.active .element-five {
        top: 14%;
        left: 35%;
        z-index: 1;
        opacity: 1;
    }

    .banner-elements-part .element-five {
        top: 40%;
        left: 35%;
        z-index: 1;
    }

    .banner-elements-part .element-five {
        transition-delay: 0.1s;
        transition-duration: 0.5s;
    }

    .banner-elements-part.active .element-seven {
        top: 51%;
        left: 74%;
        z-index: 2;
        opacity: 1;
    }

    .banner-elements-part .element-seven {
        top: 60%;
        left: 63%;
        z-index: 2;
    }

    .banner-elements-part .element-seven {
        transition-delay: .5s;
        transition-duration: 0.5s;
    }

    /*success-cases */
    .success-cases-header{
        font-size: 31px;
        font-weight: bold;

    }

    .success-cases{
        display: flex;
        .card{
            display: flex;
            flex-direction: column;
        }
        .video{
            height: 250px;
            width: 100%;
        }
    }

</style>