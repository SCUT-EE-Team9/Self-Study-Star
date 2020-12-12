new Vue({
    el: '#app1',
    data() {
        return {
            username: null,
            stime: null,
            etime: null,
            Location: null,
            remarks: null,
            info:null
        }
    },
    methods:{
        publish: function(){
            axios({
                method:'post',
                url:'http://121.4.79.92:8080/publish',
                data: {
                    username: this.username,
                    stime: this.stime,
                    etime: this.etime,
                    location: this.Location,
                    remarks: this.remarks
                },
                responseType:'json'
            })
                .then(response => (this.info = response.data))
        }

    },
    watch: {
        info(val, oldVal) {
            if(val.result=="ok"){
                alert(val.message);
            }
            else{
                alert(val.message);
            }
            console.log("inputVal = " + val.message + " , oldValue = " + oldVal)
        }
    }
})