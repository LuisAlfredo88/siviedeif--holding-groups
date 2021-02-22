<script>
    import { onMount } from 'svelte';

    onMount(()=>{
        document.addEventListener('scroll', ()=>{
            const navBar = document.querySelector('.navbar');
            const scrollPosition = window.scrollY;
            
            if(scrollPosition >= 50){
                navBar.classList.add('scroll');
            }else{
                navBar.classList.remove('scroll');
            }
        });  
    });
</script>

<div class="navbar">
    <div class="container flex">
        <h1 class="logo">
            <img src="./img/landing/logo.png" alt="SIVIEDEIF--HOLDING-GROUPS" />
            <span class="company-name">
                <span class="red">S</span>IVIEDEIF <span class="red">H</span>OLDING <span class="red">G</span>ROUPS
            </span>
        </h1>                
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li>
                    <span class="menu">Services</span>
                    <ul class="sub-menu">
                        <li><a href="/service">Product development</a></li>
                        <li><a href="/service">Dedicated team</a></li>
                        <li><a href="/service">Web development</a></li>
                        <li><a href="/service">Mobile development</a></li>
                        <li><a href="/service">Quality assurance</a></li>
                        <li><a href="/service">Digital design</a></li>
                        <li><a href="/service">Cybersecurity </a></li>
                        <li><a href="/service">DevOps</a></li>
                        <li><a href="/service">AI&amp;ML</a></li>
                        <li><a href="/service">React.js development services</a></li>
                    </ul>
                </li>
                <li>
                    <span class="menu">Expertise</span>                         
                    <ul class="sub-menu">
                        <li><a href="/service">Product development</a></li>
                        <li><a href="/service">Dedicated team</a></li>
                        <li><a href="/service">Web development</a></li>
                        <li><a href="/service">Mobile development</a></li>
                        <li><a href="/service">Quality assurance</a></li>
                        <li><a href="/service">Digital design</a></li>
                        <li><a href="/service">Cybersecurity </a></li>
                        <li><a href="/service">DevOps</a></li>
                        <li><a href="/service">AI&amp;ML</a></li>
                        <li><a href="/service">React.js development services</a></li>
                    </ul> 
                </li>                    
                <li><a href="/pricing">Pricing</a></li>                    
                <li><a href="/about">About</a></li>     
                <li><a href="/careers">Careers</a></li>     
                <li><a href="/contact">Contact</a></li>                                        
            </ul>
        </nav>
    </div>
    <span class="navbar scroll" style="display:none"></span>
</div>


<style lang="scss">
    .navbar {
        background-color: var(--primary-color);
        color: #fff;
        height: 70px;
        position: sticky;
        top: 0;
        z-index: 999;
        transition: all .5s;
        &.scroll {
            background: rgba(0, 0, 0, 0.6);
            box-shadow: 1px 8px 14px rgba(0, 0, 0, 0.4);
        }
    }

    .navbar ul {
        display: flex;
    }

    .navbar ul li:hover{
        ul, a{
            opacity: 1;
            visibility: visible;
        }
    }

    .navbar a,
    .navbar span.menu {
        color: #fff;
        padding: 10px;
        margin: 0 5px;
    }

    .navbar a:hover{
        color: #fff;
        opacity: 1;
        font-weight: bold;
    }

    .navbar .flex {
        justify-content: space-between;
    }

    span{
        &.red {
            color: #faf2aa;;
        }
    }

    .logo{
        display: flex;

        img{
            height: 50px;
            width: 60px;
        }
    }

    .navbar{
        .container{
            overflow: visible;
        }

        li{
            position: relative;
        }
    }

    .sub-menu{
        position: absolute;
        display: flex;
        flex-direction: column;
        background: #000;
        left: 13px;
        min-width: 260px;
        border-radius: 6px;
        padding: 7px;
        visibility: hidden;
        transition: all .3s ease-in;
        opacity: 0;

        li{
            display: block;
            text-align: left;
                text-decoration: inherit;
                padding:  0 10px;

            a{
                        margin: 0;
                cursor: pointer;
                display: block;
                padding: 5px 0;
                &::before{
                    content: "";
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 100%;
                    background-color: hsla(0,0%,75%,.39);
                    margin-right: 12px;
                    vertical-align: middle;
                    transition: all .2s ease-in-out;
                }
            }
        }
    }

    @media (max-width: 1190px) {
        .navbar .container{
            flex-flow: row wrap;
            justify-content: center;
            align-items: center;

            .logo{
                order: 1;
                width: 100%;

                span.company-name{
                    display: block;
                    margin-top: -2px;
                }
            }

            h1 {
                text-align: center;
                display: block;
            }
        }
    }

    @media (max-width: 860px) {
        .navbar {
            display: none;
        }
    }
</style>