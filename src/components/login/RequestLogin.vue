<template>
    <v-col cols="5" class="pa-12">
        <v-form ref="form" class="pa-12 px-8 pt-8" lazy-validation>
            
            <v-row>
                <v-col cols="12" class="pa-12 pb-0">

                    <v-text-field class="mt-12 color-primary" label="Login" required variant="underlined"></v-text-field>

                    <v-text-field class="mt-6 color-primary" label="Senha" required type="password" variant="underlined"></v-text-field>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" class="px-12 pt-2 d-flex align-center justify-center">
                    <v-btn variant="outlined" to="/home" rounded="lg" prepend-icon="mdi-login" class="mt-4 color-button px-12">
                        ACESSAR
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col cols="12" class="pt-2 d-flex align-center justify-center">
                    <v-btn variant="plain" to="/recovery-password" class="mt-4 color-primary">
                        Esqueci Minha Senha
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