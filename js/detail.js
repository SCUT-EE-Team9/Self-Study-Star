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
            pname: null,
            pmessage: "",
            info: {
                "detail": {
                    "tid": this.tid,
                    "username": "",
                    "stime": "",
                    "etime": "",
                    "location": "",
                    "remarks": "",
                    "joined": "加载中",
                    "finished": "加载中"
                },
                "joined": {}
            },
            info2:null,
        }
    },
    mounted () {
        axios({
            method:'get',
            //url:'http://localhost:8079/search',
            url:'http://121.4.79.92:8080/detail/'+this.tid,
            responseType:'json'
        })
            .then(response => (this.info = response.data.data))
    }
    ,
    methods:{
        join: function(){
            axios({
                method:'post',
                //url:'http://localhost:8079/join',
                url:'http://121.4.79.92:8080/join',
                data: {
                    tid:this.tid,
                    pname:this.pname,
                    pmessage:this.pmessage
                },
                responseType:'json'
            })
                .then(response => (this.info2 = response.data))
            //.then(response => (this.info = response.data))
        }

    },
    watch: {
        info2(val, oldVal) {
            if (val.result == "ok") {
                alert(val.message);
                location.reload();
            } else {
                alert(val.message);
            }
        }
    }
})