<template>
    <div class="col-lg-3 responsive-column">
                <div class="category-item overflow-hidden">
                    <img :src="category.image" alt="category-image" class="cat-img">
                    <div class="category-content d-flex align-items-center justify-content-center">
                        <a href="#" class="category-link d-flex flex-column justify-content-center w-100 h-100">
                            <div class="icon-element mb-3 mx-auto">
                                <span class="la la-cutlery"></span>
                            </div>
                            <div class="cat-content">
                                <h4 class="cat__title mb-3"></h4>
                                <span class="badge">{{ category.badge  }}</span>
                            </div>
                        </a>
                    </div>
                </div><!-- end category-item -->
            </div>
</template>
<script>
export default {
    props:{
        category:{
            type:Object,
            default: () =>{}       
            
            
             }
    }
}
</script>