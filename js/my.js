new Vue({
    el: '#app3',
    data() {
        return {
            username: null,
            info: null,
            info2:null,
        }
    },
    methods:{
        search: function(){
            axios({
                method:'post',
                //url:'http://127.0.0.1:8079/my/published',
                url:'http://121.4.79.92:8080/my/published',
                data: {
                    username:this.username
                },
                responseType:'json'
            })
                .then(response => (this.info = response.data.data))
            axios({
                method:'post',
                //url:'http://127.0.0.1:8079/my/joined',
                url:'http://121.4.79.92:8080/my/joined',
                data: {
                    username:this.username
                },
                responseType:'json'
            })
                .then(response => (this.info2 = response.data.data))
        }

    },

})