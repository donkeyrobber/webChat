import Vue from "vue";
import App from "./App.vue";
import * as io from "socket.io-client";
import VueSocketIO from "vue-socket.io";

const PORT = 3000;

Vue.use(
    new VueSocketIO({
        debug: true,
        connection: io(`localhost:${PORT}`)
    })
);

new Vue({
    el: "#app",
    components: { App },
    template: "<App/>"
});