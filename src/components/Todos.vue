<template>
    <section class="todos">
        <h3>TODOS</h3>
        <form id="todoform" >
            <div>
                <input type="text" name="content"
                    id="content" placeholder="i.e. compléter le TP"
                    v-model="input_content"
                />
            </div>
            <div>
                <input type="submit" value="Ajout un todo"/>
            </div>
        </form>
    </section>
    <section>
        <h3>TODO LIST</h3>
        <div class="list" id="todo-list">
            
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ref, onMounted, computed, watch, defineComponent } from 'vue'
import Todo from '@/types/todo'

@Options({
    props: {
        input_content: String,
    },
    setup() {
        const input_content = ref('')
        const todos = ref<Todo[]>([
            {
            content: input_content.value,
            createdAt: new Date().getTime()
            }
        ])
        
        const todos_asc = computed(() => todos.value.sort((a,b) =>{
	        return a.createdAt - b.createdAt
        }))

        watch(todos, (newVal) => {
            localStorage.setItem('todos', JSON.stringify(newVal))
            }, {deep: true})

        return {todos, input_content, todos_asc}
    },
    components: {}
})

export default class Todos extends Vue {
    input_content = '';
    todos = [];

    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>