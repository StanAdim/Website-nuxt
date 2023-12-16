<script lang="ts" setup></script>

<template>
  <div>
    <section class="section section-lg text-center">
            <div class="container">
                <h3 class="wow-outer wow-outer-dark text-left">
                    <span class="wow slideInDown">ICT Investment</span>
                </h3>
                <div class="row">                   
                    <!-- @foreach($investments as $investment) -->
                        <div class="col-md-6 wow-outer mt-4">
                            <!-- Post Modern-->
                            <article class="post-modern wow fadeIn">
                                <a class="post-modern-media" href="route('frontend.investments.single', $investment->slug)">
                                    <img src="url('uploads/investments/'.$investment->file_sw)" alt="" width="570" height="352"/>
                                </a>
                                <h4 class="post-modern-title">
                                    <a href="route('frontend.investments.single', $investment->slug)">$investment->$title_var ?? $title_var2</a>
                                </h4>
                                <ul class="post-modern-meta">
                                    <li>by ICTC</li>
                                    <li>
                                        <!-- <time datetime="\Carbon\Carbon::parse($investment->created_at)->year">
                                            \Carbon\Carbon::parse($investment->created_at)->format('M d, Y \a\t h:i A')
                                        </time> -->
                                    </li>
                                    <li>
                                        <a class="button-winona" href="#">Investment</a>
                                    </li>
                                </ul>
                                <p class="wow-outer-dark"> substr(strip_tags($investment->$description_var ?? $description_var2),0,150) ....</p>
                            </article>
                        </div>
                </div>

                <div class="wow-outer button-outer">
                    <!-- {!! $investments->links('frontend.includes.pagination.custom') !!} -->
                </div>
            </div>
        </section>
  </div>
</template>

<style scoped></style>
