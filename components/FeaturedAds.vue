<template>
     <div class="col-lg-4 responsive-column">
                <div class="card-item">
                    <div class="card-image">
                        <a href="#" class="d-block">
                            <img :src="feature.image" class="card__img" alt="">
                            <span class="badge">{{ feature.badge }}</span>
                        </a>

                    </div>
                    <div class="card-content">
                        <a href="#" class="user-thumb d-inline-block" data-toggle="tooltip" data-placement="top" title="TechyDevs">
                            <img :src="feature.icon" alt="author-img">
                        </a>
                        <h4 class="card-title pt-3">
                            <a href="#">{{ feature.title }}</a>
                            <i class="la la-check-circle ml-1" data-toggle="tooltip" data-placement="top" title="Claimed"></i>
                        </h4>
                        <ul class="listing-action d-flex border-top border-top-color border-bottom border-bottom-color mt-4 py-2">
                            <li>{{ feature.electronic }}</li>
                        </ul>
                        <p class="card-sub pt-3"><a href="#"><i class="la la-map-marker mr-1 text-color-2"></i>{{ feature.address }}, {{ feature.country }}</a></p>
                        <ul class="listing-meta d-flex align-items-center justify-content-between">
                            <li>
                                <strong class="font-weight-medium">LKR {{ feature.price }}</strong>
                            </li>
                            <li class="d-flex align-items-center">
                                <i class="la la-eye mr-1 listing-icon"></i><a href="#" class="listing-cat-link">{{ feature.viwes }}</a>
                            </li>
                        </ul>
                    </div>
                </div><!-- end card-item -->
            </div>
</template>
<script>
export default {
    props : {
        feature :{
            type:Object,
            default: ()=>{

            }
        }
    }

}
</script>