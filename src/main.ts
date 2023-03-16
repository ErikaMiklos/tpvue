import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const defaultBackgroundColor = 'lightBlue'
const defaultText = 'blue'

const app = createApp(App)
app.use(router).mount('#app')
app.directive('background', (el, binding) => {
    console.log(binding.arg) // -> white
    //modify le backgroundcolor
    el.style.backgroundColor = binding.arg || defaultBackgroundColor
    //modify the text content
    el.innerHTML = "My background text is : " + binding.arg || defaultText
});
