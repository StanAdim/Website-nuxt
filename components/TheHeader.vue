<script lang="ts" setup></script>

<template>
  <div>
    <header class="col-12 px-0">
    <!-- top middle -->
    <TheTopHeader />
    <!-- top bottom -->
    <div class="col-12 px-0 px-xs-1">
        <div class="col-12 px-0 top-fixed top-bottom">
            <nav class="rd-navbar rd-navbar-corporate" data-layout="rd-navbar-fixed"
                 data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed"
                 data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static"
                 data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static"
                 data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static"
                 data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="118px"
                 data-xl-stick-up-offset="118px" data-xxl-stick-up-offset="118px" data-stick-up="false"
                 data-sm-stick-up="false" data-md-stick-up="false" data-lg-stick-up="false" data-xl-stick-up="false"
                 data-xxl-stick-up="false">
                <div class="rd-navbar-aside-outer">
                    <div class="rd-navbar-aside">
                        <!-- RD Navbar Panel-->
                        <div class="rd-navbar-panel">
                            <!-- RD Navbar Toggle-->
                            <button class="rd-navbar-toggle" data-rd-navbar-toggle="#rd-navbar-nav-wrap-1">
                                <span></span></button>
                            <!-- RD Navbar Brand-->
                        </div>
                    </div>
                </div>
                <div class="rd-navbar-main-outer">
                    <div class="rd-navbar-main">
                        <div class="rd-navbar-nav-wrap" id="rd-navbar-nav-wrap-1">
                            <ul class="rd-navbar-nav">
                                <li class="rd-nav-item ">
                                  <a class="rd-nav-link active" href="">Home</a></li>
                                <li class="rd-nav-item ">
                                  <a class="rd-nav-link" href="">About</a></li>
                                <li class="rd-nav-item ">
                                  <a class="rd-nav-link" href="">ICT PROMOTION</a></li>
                                <li class="rd-nav-item ">
                                  <a class="rd-nav-link" href="">ICT INVESTMENT</a></li>

                                <li class="rd-nav-item">
                                    <a class="rd-nav-link" href="#">SERVICES</a>
                                    <!-- RD Navbar Dropdown-->
                                    <ul class="rd-menu rd-navbar-dropdown">
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">ICT PROFESSIONAL</a>
                                        </li>
                                        
                                         <!-- <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="{{route('digitalAccerationIndex')}}">IMBEJU ACCELERATION</a>
                                        </li>    -->
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="https://iprs.ictc.go.tz/index.php/login" target="_blank">IPRS</a>
                                        </li>
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="https://taic.ictc.go.tz/" target="_blank">TAIC</a>
                                        </li>
                                        
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">TRAINING</a>
                                        </li>

                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">REGISTER STARTUP</a>
                                        </li>  

                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">REGISTER PROJECT</a>
                                        </li>

                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">ICT RESEARCH</a>
                                        </li>
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">FAB LAB</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="rd-nav-item">
                                    <a class="rd-nav-link" href="#">Publication</a>
                                    <!-- RD Navbar Dropdown-->
                                    <ul class="rd-menu rd-navbar-dropdown">
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">NEWS</a>
                                        </li>
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">EVENTS</a>
                                        </li>
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">ICT STARTUPS</a>
                                        </li>
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">ICT PROJECTS</a>
                                        </li>
                                        <li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="">AWARDS</a>
                                        </li>
                                        <!-- {{--<li class="rd-dropdown-item">
                                            <a class="rd-dropdown-link" href="{{route('frontend.registrations')}}">REGISTRATION</a>
                                        </li>
                                        <li class="rd-dropdown-item">--}}
                                            {{--<a class="rd-dropdown-link" href="single-event.html">PHOTO GALLERY</a>--}}
                                        {{--</li>--}}
                                        {{--<li class="rd-dropdown-item">--}}
                                            {{--<a class="rd-dropdown-link" href="city-history.html">VIDEO GALLERY</a>--}}
                                        {{--</li>--}} -->
                                    </ul>
                                </li>
                                <li class="rd-nav-item "><a class="rd-nav-link" href="">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    <!-- /top bottom -->
    <!-- </div> -->
    </header>
  </div>
</template>

<style scoped></style>
