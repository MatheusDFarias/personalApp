<template>
    
        <v-row class="full pa-0 ma-0">       
            <transition name="slide-fade" mode="in-out" appear>
                <BackgroundLogin style="transform: scaleX(-1);" />
            </transition>

            <transition name="nested" mode="in-out" appear>
                <RequestPassword />
          </transition>            
        </v-row>
    
</template>
<script>
import BackgroundLogin from '../components/login/BackgroundLogin';
import RequestPassword from '../components/login/recoveryPassword/RequestPassword';
export default {
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    components: {
        BackgroundLogin,
        RequestPassword
    },
}
</script>