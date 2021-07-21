<template>
    <div>
        <!-- <ul>
            <li>
                <router-link :to="{name: 'home'}">Home</router-link>
            </li>
            <li>
                <router-link :to="{name: 'products'}">Products</router-link>
            </li>
            <li>
                <router-link :to="{name: 'cart'}">Carrinho</router-link>
            </li>
        </ul> -->
        <header-component/>

        <!-- Page Content -->
        <div class="container container-body">
            <router-view></router-view>
        </div> <!-- Page Content -->

        <footer-component/>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderComponent from './_partials/header.vue'
import FooterComponent from './_partials/footer.vue'

export default {
    components: {
        HeaderComponent,
        FooterComponent
    }
    
}
</script>

<style scoped>
    @import url('../assets/css/vuefood.css');
    @import url('../assets/css/reset.css');
</style>