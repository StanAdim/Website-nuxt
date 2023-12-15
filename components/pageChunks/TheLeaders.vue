<template>
    <div>
        <!-- @if (count($leaders)) -->
        <section class="section section-lg py-4">
            <div class="container">
                <h3 class="text-center">Our Leaders</h3>
                <div class="row mt-2">
                   
                    <!-- @foreach($leaders as $leader) -->
                        <div class="col-md-4">
                            <div class="row m-1">
                                <a href="">
                                    <div class="col-md-12 p-0">
                                        <img src=""
                                             alt="" class="w-100 w-xs-75 img img-thumbnail img-responsive b-5">
                                    </div>
                                    <div class="col-md-12 text-center my-2">
                                        <h6 class="text-bold font-15">$leader->$title</h6>
                                        <span class="font-14 text-primary">$leader->$position</span> <br>
                                        <a class="button button-primary-outline button-winona wow slideInUp" href="route('frontend.leaders.single', $leader->id)" style="visibility: visible; animation-name: slideInUp;">
                                            <div class="content-original">View Profile</div>
                                            <div class="content-dubbed">View Profile</div>
                                        </a>"
                                        <!-- --<button class="button button-sm button-primary mt-0">Tazama Wasifu</button> -->
                                    </div>
                                </a>
                            </div>
                        </div>
                    
                </div>
            </div>
        </section>
   
    </div>
</template>