new Vue({
    el: '#app',
    data () {
        return {
            username: null,
            info: null,
            info2: null,
            stime: 233
        }
    },
    mounted () {
        /*axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            /*.then(function (response){
                info = response;
            })
            .then(response => (this.info = response.data.bpi))*/
        axios({
            method:'get',
            url:'https://api.coindesk.com/v1/bpi/currentprice.json',
            responseType:'json'
        })
            .then(response => (this.info2 = response.data.bpi))


        axios({
            method:'post',
            url:'http://47.113.122.41:8080/publish',
            data: {
                username: '张三',
                title: '博学楼101',
                content: '2020.10.32 23:00 - 2020.10.33 02:00'
            },
            responseType:'json'
        })
            .then(response => (this.info = response.data))
    },

})