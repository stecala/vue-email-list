const app = new Vue({
    el: '#app',
    data: {
        arrayMail: []
    },
    method: {
        callBackApi(array) {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((element) => {
                        array.push(element.response)
                    })
            }
        },
    },
    created() {
            this.callBackApi(this.arrayMail)
        }
})