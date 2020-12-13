function getQueryVariable(variable)
    {
        let query = window.location.search.substring(1);
        let vars = query.split("&");
        for (let i=0;i<vars.length;i++) {
            let pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
new Vue({
    el: '#app4',
    data() {
        return {
            tid: Number(getQueryVariable("tid")),
            pname: "",
            pmessage: ""
        }
    },
    mounted() {
        //this.tid = Number(getQueryVariable("tid"));

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
        }

    },
})