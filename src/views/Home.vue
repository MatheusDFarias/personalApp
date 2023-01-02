<template>
    
    <v-responsive class="full pa-0 ma-0">
        <v-col cols="12" class="pa-0 ma-0">
            <HeaderNav/>
            <About/>
            <Index/>
        </v-col>
    </v-responsive>
</template>
<script>
import HeaderNav from '../components/header/index';
import About from '../components/about/index';
import Index from '../components/index/index';
export default {
    components:{
        HeaderNav,
        About,
        Index
    }
}
</script>