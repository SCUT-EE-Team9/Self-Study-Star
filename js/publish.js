new Vue({
    el: '#app1',
    data() {
        return {
            username: null,
            stime: null,
            etime: null,
            Location: "",
            remarks: "",
            info: null
        }
    },
    methods: {
        publish: function () {
            axios({
                method: 'post',
                url: 'http://121.4.79.92:8080/publish',
                data: {
                    username: this.username,
                    stime: this.stime,
                    etime: this.etime,
                    location: this.Location,
                    remarks: this.remarks
                },
                responseType: 'json'
            })
                .then(response => (this.info = response.data))
        }

    },
    watch: {
        info(val, oldVal) {
            if (val.result == "ok") {
                alert(val.message);
                window.location.href = "index.html"
            } else {
                alert(val.message);
            }
        }
    }
})