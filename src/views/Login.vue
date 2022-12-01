<template>
    
        <v-row class="full pa-0 ma-0">
          <transition name="nested" mode="in-out" appear>
                <RequestLogin />
          </transition>
    
            <transition name="slide-fade" mode="in-out" appear>
                <BackgroundLogin />
            </transition>
        </v-row>
    
</template>

<script>
import BackgroundLogin from '../components/login/BackgroundLogin';
import RequestLogin from '../components/login/RequestLogin';
export default {
    data() {
        return {

        }
    },

    methods: {
    },
    mounted() {
        
    },
    watch: {
        
    },
    components: {
        BackgroundLogin,
        RequestLogin
    },
    computed: {

    },
}
</script>
