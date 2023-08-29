<template>
    <v-row class="pa-12">
        <v-col cols="12">
            <v-row class="mb-6 px-6 py-0">
                <v-col cols="7">
                    <transition name="slide-left" appear>
                        <p class="text-h2 font-weight-bold text-primary">
                            Olá!!
                        </p>
                    </transition>
                    <transition name="slide-right" appear>
                        <p class="text-h3 font-weight-bold text-secondary">
                            Sou Matheus de Farias
                        </p>
                    </transition>
                    <transition name="nested" appear>
                        <p class="text-h5 font-weight-bold text-primary">
                            Seja muito bem vindo(a) ao meu site...
                        </p>                           
                    </transition>             
                </v-col>
                <v-col cols="5" align-self="center">
                    <v-row>
                        <v-col align="center">
                            <transition name="fade">
                                <v-avatar variant="elevated" color="primary" size="180" class="border-color-primary">
                                    <v-img
                                        alt="Avatar"
                                        src="@/assets/img/me.gif">
                                    </v-img>
                                </v-avatar>
                            </transition>
                        </v-col>
                    </v-row>

                </v-col>                
            </v-row>
            <v-row justify="center">
                <v-col cols="auto">
                    <v-btn color="secondary" variant="flat" icon="mdi-arrow-right" size="x-large"></v-btn>
                </v-col>
            </v-row> 
        </v-col>
    </v-row>   
</template>