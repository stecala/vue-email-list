const app = new Vue({
    el: '#app',
    data: {
        arrayMail: []
        
    },
    methods: {
        callBackApi(array) {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((element) => {
                    array.push(element.data.response)
                    console.log(array)
                })
            }
        },
        length(){
            if(this.arrayMail.length === 10) return true
        }
    },
    mounted() {
            this.callBackApi(this.arrayMail)
        }
})