import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const defaultBackgroundColor = 'lightBlue'
const defaultText = 'blue'

const app = createApp(App)
app.use(router).mount('#app')
app.directive('background', (el, binding) => {
    console.log(binding.arg) // -> white
        el.style.backgroundColor = binding.arg || defaultBackgroundColor
        el.innerHTML = "My background color is : " + binding.arg || defaultBackgroundColor
});
