'use strict';

Vue.component('mycomp', {
    data() {
        return {
            name: 'Alex',
            age: 25,
            show: false,
        }
    },
    template: `<div>
    <h1>Hello, {{ name }}, you are {{ age }} years old!</h1>
    <inner-comp></inner-comp>
    <button @click="$parent.test(age)">OK</button>
    </div>`
});


Vue.component('inner-comp', {
    template:   `<div>
                    <h1>Пользователю {{ $root.name }} {{ $parent.age }} лет</h1>
                </div>`
});




// Vue.component('inner-comp', {
//     data() {
//         return {
//             counter: 0
//         }
//     },
//     template: `<div>
// <!--    <button @click="counter++">Push {{ counter }}</button> -->
//     <button @click="increase($parent.age); $parent.age = counter; $parent.show = !$parent.show">Push {{ counter }}</button>

//     </div>`,
//     methods: {
//         increase(step) {
//             this.counter += step;
//         }
//     }
// })