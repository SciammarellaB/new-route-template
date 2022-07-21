<template>
    <v-app>
        <v-card flat style="border-radius: 0px">
            
            <v-app-bar app color="primary white--text" height="70">
                <v-app-bar-nav-icon @click.stop="drawer = !drawer" color="white"/>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" fixed temporary width="300">
                <v-list nav dense>
                    <v-subheader>MENU</v-subheader>
                    
                    <div v-for="(grupo, index) in route" :key="index">
                        <v-list-item-group active-class="blue-grey--text text--accent-4" v-if="grupo.show && !grupo.child">
                            <v-list-item :to="`/${grupo.route}`">
                                <v-list-item-icon> 
                                    <v-icon>{{grupo.icon}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title>{{grupo.nome}}</v-list-item-title> 
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                        <v-list-group :prepend-icon="grupo.icon" v-if="grupo.show && grupo.child" :disabled="grupo.disabled">
                            <template v-slot:activator>
                                <v-list-item-title>{{grupo.nome}}</v-list-item-title>
                            </template>
                            <div v-for="(rota, index) in grupo.child" :key="index">
                                <v-list-item :disabled="rota.disabled" v-if="rota.show" :to="`/${grupo.route}/${rota.route}`">
                                    <v-list-item-title>{{rota.nome}}</v-list-item-title>
                                    <v-list-item-icon>
                                        <v-icon>{{rota.icon}}</v-icon>
                                    </v-list-item-icon>
                                </v-list-item>
                            </div>
                        </v-list-group>
                    </div>
                    
                </v-list>
            </v-navigation-drawer>

            <v-container class="pb-12 pt-10 mt-12" fluid>
                <slot/>
            </v-container>

        </v-card>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { RouteService } from '@/core/service';

@Component
export default class MasterPage extends Vue {
    drawer: boolean = false;
    routeService: RouteService = new RouteService();
    route: any = {};

    created(){
        this.route = this.routeService.routes;
    }
}
</script>