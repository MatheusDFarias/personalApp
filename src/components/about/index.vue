<template>
    <v-row class="pa-12">
        <v-col cols="12">
            <v-row class="mb-6 px-6 py-0">
                <v-col cols="7">
                    <p class="text-h2 font-weight-bold ">
                        Olá!!
                    </p>
                    <p class="text-h3 font-weight-bold text-orange-accent-3">
                        Sou Matheus de Farias
                    </p>
                    <p class="text-h5 font-weight-bold">
                        Seja muito bem vindo(a) ao meu site...
                    </p>                    
                </v-col>
                <v-col cols="5" align-self="center">
                    <v-row>
                        <v-col align="center">
                            <v-avatar color="primary" size="180" style="border: 3px solid #FF6D00">
                                <v-img
                                alt="Avatar"
                                src="@/assets/img/me.gif"
                              ></v-img>
                              </v-avatar>
                        </v-col>
                    </v-row>

                </v-col>                
            </v-row>
            <v-row justify="center">
                <v-col cols="auto">
                    <v-btn color="primary" variant="flat" icon="mdi-arrow-right" size="x-large"></v-btn>
                </v-col>
            </v-row> 
        </v-col>
    </v-row>   
</template>