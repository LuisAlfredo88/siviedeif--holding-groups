<template>
    <!-- Footer -->
    <footer class="footer bg-dark py-5">
        <div class="container grid grid-3">
            <div>
                <h1>Siviedeif Holding Groups
                </h1>
                <p>Copyright &copy; 2021</p>
            </div>
            <nav>
                <ul>
                    <li><router-link to="/pricing">Pricing</router-link></li>                    
                    <li><router-link to="/about">About</router-link></li>     
                    <li><router-link to="/careers">Careers</router-link></li>     
                    <li><router-link to="/contact">Contact</router-link></li>   
                </ul>
            </nav>
            <div class="social">
                <a href="#"><i class="fab fa-github fa-2x"></i></a>
                <a href="#"><i class="fab fa-facebook fa-2x"></i></a>
                <a href="#"><i class="fab fa-instagram fa-2x"></i></a>
                <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
            </div>
        </div>
    </footer>
</template>

<style>
    footer ul li a:hover{
        font-weight: bold;
    }
</style>