'use strict'

const app = new Vue({
    el: '#app',
data: {
    name: 'Max',
    name2: 'Sarah'
},
methods: {
    test(age) {
        alert(`User name: ${this.name2}, age: ${age}`)
    }
},
})