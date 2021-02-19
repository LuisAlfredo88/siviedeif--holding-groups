<template>
    <div class="navbar">
        <div class="container flex">
            <h1 class="logo">
                <img src="/img/landing/logo.png" />
                <span class="company-name">
                    <span class="red">S</span>IVIEDEIF <span class="red">H</span>OLDING <span class="red">G</span>ROUPS
                </span>
            </h1>                
            <nav>
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li>
                        <a>Services</a>
                        <ul class="sub-menu">
                            <li><router-link to="/service">Product development</router-link></li>
                            <li><router-link to="/service">Dedicated team</router-link></li>
                            <li><router-link to="/service">Web development</router-link></li>
                            <li><router-link to="/service">Mobile development</router-link></li>
                            <li><router-link to="/service">Quality assurance</router-link></li>
                            <li><router-link to="/service">Digital design</router-link></li>
                            <li><router-link to="/service">Cybersecurity </router-link></li>
                            <li><router-link to="/service">DevOps</router-link></li>
                            <li><router-link to="/service">AI&amp;ML</router-link></li>
                            <li><router-link to="/service">React.js development services</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/expertise">Expertise</router-link>
                        <ul class="sub-menu">
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7241"><a href="https://relevant.software/product-development/" class="menu-header-link">Product development</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7242"><a href="https://relevant.software/dedicated-team/" class="menu-header-link">Dedicated team</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-110"><a href="https://relevant.software/web-development/" class="menu-header-link">Web development</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a href="https://relevant.software/mobile-development/" class="menu-header-link">Mobile development</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-104"><a href="https://relevant.software/quality-assurance/" class="menu-header-link">Quality assurance</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-97"><a href="https://relevant.software/digital-design/" class="menu-header-link">Digital design</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-95"><a href="https://relevant.software/cybersecurity/" class="menu-header-link">Cybersecurity</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-96"><a href="https://relevant.software/devops/" class="menu-header-link">DevOps</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7390"><a href="https://relevant.software/ai/" class="menu-header-link">AI&amp;ML</a></li>
                            <li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11570"><a href="https://relevant.software/react-js-development-services/" class="menu-header-link">React.js development services</a></li>
                        </ul>                        
                    </li>                    
                    <li><router-link to="/pricing">Pricing</router-link></li>                    
                    <li><router-link to="/about">About</router-link></li>     
                    <li><router-link to="/careers">Careers</router-link></li>     
                    <li><router-link to="/contact">Contact</router-link></li>                                        
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        setup () {            
            document.addEventListener('scroll', ()=>{
                const navBar = document.querySelector('.navbar');
                const scrollPosition = window.scrollY;
                
                if(scrollPosition >= 50){
                    navBar.classList.add('scroll');
                }else{
                    navBar.classList.remove('scroll');
                }
            });            
        }
    }
</script>

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
            box-shadow: 1px 8px 14px rgb(0 0 0 / 40%);
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

    .navbar a {
        color: #fff;
        padding: 10px;
        margin: 0 5px;
    }

    .navbar a:hover {
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