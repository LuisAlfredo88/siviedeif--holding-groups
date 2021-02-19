<template>
 <!-- Showcase -->
    <section class="showcase">
        <div class="container grid">
            <div class="showcase-text">
                <h1>Hand-selected developers to fit your needs at scale</h1>
                <p>We provide companies with senior tech talent and product development expertise to build world-class software.</p>
                <router-link to="/service" class="btn btn-outline">View Related Companies</router-link>
            </div>

            <div class="showcase-form card">
                <h2>Request a Demo</h2>
                 <form>
                    <div class="form-control">
                        <input type="text" name="name" placeholder="Name" required>
                    </div>
                    <div class="form-control">
                        <input type="text" name="company" placeholder="Company Name" required>
                    </div>
                    <div class="form-control">
                        <input type="email" name="email" placeholder="Email" required>
                    </div>
                    <input type="submit" value="Send" class="btn btn-primary">
                </form>
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section class="stats">
        <div class="container">
            <h3 class="stats-heading text-center my-1">
                Welcome to the best platform for building applications of all types with modern architecture and scaling
            </h3>

            <div class="grid grid-3 text-center my-4">
                <div>
                    <i class="fas fa-server fa-3x"></i>
                    <h3>10,349,405</h3>
                    <p class="text-secondary">Deployments</p>
                </div>
                <div>
                    <i class="fas fa-upload fa-3x"></i>
                    <h3>987 TB</h3>
                    <p class="text-secondary">Published</p>
                </div>
                <div>
                    <i class="fas fa-project-diagram fa-3x"></i>
                    <h3>2,343,265</h3>
                    <p class="text-secondary">Projects</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Cli -->
    <section class="cli">
        <div class="container grid">
            <img src="@/assets/img/landing/cli.png" alt="">
            <div class="card">
                <h3>Easy to use, cross platform CLI</h3>
            </div>
            <div class="card">
                <h3>Deploy in seconds</h3>
            </div>
        </div>
    </section>

    <!-- Cloud -->
    <section class="cloud bg-primary my-2 py-2">
        <div class="container grid">
            <div class="text-center">
                <h2 class="lg">Extreme Cloud Hosting</h2>
                <p class="lead my-1">Cloud hosting like you've never seen. Fast, efficient and scalable</p>
                <a href="features.html" class="btn btn-dark">Read More</a>
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
    export default {
        
    }
</script>