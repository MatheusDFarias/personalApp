<template>
    <v-col cols="5" class="pa-12">
        <v-form ref="form" class="pa-12 px-8 pt-12" lazy-validation>
            
            <v-row class="pt-12">
                <v-col cols="12" class="pa-12 pb-0">
                    <v-text-field class="mt-12  color-primary" label="E-mail" type="email" required variant="underlined"></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" class="px-12 pt-2 d-flex align-center justify-center">
                    <v-btn variant="outlined" rounded="lg" prepend-icon="mdi-restart" class="mt-4 color-button px-12">
                        RECUPERAR
                    </v-btn>
                </v-col>
            </v-row>

        </v-form>
    </v-col>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>