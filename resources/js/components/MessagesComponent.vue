<template>
    <div>
        <h1>eee</h1>
        <span v-if="isConnected">We are connected</span>
        <br />
        <span> {{message}}</span>
        <button @click="pingServer()">Ping</button>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                isConnected: false,
                message: ''
            }
        },
        sockets: {
            connect() {
                this.isConnected = true;
            },
            disconnect() {
                this.isConnected = false;
            },
            messageChannel(data) {
                console.log(data);
                this.message = data;
            }
        },
        methods: {
            pingServer() {
                this.$socket.emit('chat', 'PING!');
            }
        }
    }

</script>