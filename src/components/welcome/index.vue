<template>
    <v-row>
        <v-col align="center" cols="12">
            <v-row class="pa-6" align="center">
                <v-col align="left">
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
                <v-col align="right">
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
            <v-row class="pa-6" justify="center">
                <v-col align="center">
                    <v-btn color="secondary" variant="flat" icon="mdi-arrow-right" size="x-large"></v-btn>
                </v-col>
            </v-row> 
        </v-col>
    </v-row>   
</template>