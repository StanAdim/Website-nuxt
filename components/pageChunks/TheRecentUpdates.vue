<template>
    <div>
        <section class="section section-lg text-center">
            <div class="container">
                <h3 class="wow-outer wow-outer-dark text-center mb-3">
                    <span class="wow slideInDown">Latest News</span>
                </h3>
                <div class="row row-50">
                   
                    <!-- @foreach($latest_news as $post) -->
                        <div class="col-md-6 wow-outer">
                            <!-- Post Modern-->
                            <article class="post-modern wow fadeIn">
                                <a class="post-modern-media" href="link">
                                    <img src="" alt="" width="570" height="352"/>
                                </a>
                                <h4 class="post-modern-title">
                                    <a href="">title</a>
                                </h4>
                                <ul class="post-modern-meta">
                                    <li>by ICTC Administrator</li>
                                    <li>
                                        <!-- <time datetime="{{\Carbon\Carbon::parse($post->created_at)->year}}">
                                            {{\Carbon\Carbon::parse($post->created_at)->format('M m, Y \a\t h:i A')}}
                                        </time> -->
                                    </li>
                                    <li>
                                        <a class="button-winona" href="#">News</a>
                                    </li>
                                </ul>
                                <p class="wow-outer-dark">($post->$description_var ?? $description_var2)....</p>
                            </article>
                        </div>
                </div>

                <div class="wow-outer button-outer">
                    <a class="button button-primary-outline button-winona wow slideInUp" href="">
                        View All News
                    </a>
                </div>
            </div>
        </section>
    </div>
</template>