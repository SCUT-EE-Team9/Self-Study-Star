new Vue({
    el: '#app2',
    data() {
            return {
                Location: "",
                Time: "",
                info: null
            }

    },
    methods:{
        search: function(){
            axios({
                method:'post',
                //url:'http://localhost:8079/search',
                url:'http://121.4.79.92:8080/search',
                data: {
                    location: this.Location,
                    time: this.Time
                },
                responseType:'json'
            })
                .then(response => (this.info = response.data.data))
                //.then(response => (this.info = response.data))
        },

    },
})