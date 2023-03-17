<template>
    <section class="todos">
        <h3>TODOS</h3>
        <form id="todoform" v-on:submit.prevent="addTodo()">
            <div>
                <input type="text" name="content"
                    id="content" placeholder="i.e. compléter le TP"
                    v-model="input_content"
                />
                <input type="date" name="date"
                id="date" v-model="date_content"/>
            </div>
            <div>
                <input type="submit" value="Ajout un todo"/>
            </div>
        </form>
    </section>
    <section>
        <h3>TODO LIST</h3>
        <div class="list" id="todo-list">
            <ul>
                <li v-for="(todo) in todosSortie" :key="todo.id">
                    {{ todo.content }} - {{ todo.createdAt }}
                    <button class="delete" @click="removeTodo(todo)">Delete</button>
                </li>
            </ul>
            
        </div>
    </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Todo from '@/types/todo'

@Options({
  props: {
    input_content:String,
    date_content:Date,
    todos:[],
    todosSortie:[]
  },
  components: {}
})


export default class Todos extends Vue {
    input_content = '';
    date_content = new Date;
    todos:Todo[] = [];
    todosSortie:Todo[] = [];

    addTodo(): void {
        if(this.input_content.trim() === ''){return}
        this.todos.push({
            content: this.input_content,
            id: new Date().getTime(),
            createdAt: this.date_content
        })
        this.input_content = '';
        this.date_content = new Date;
        this.sortirTodos();
        //localStorage.setItem('todos', JSON.stringify(this.todos))
        //console.log(localStorage.getItem('todos'))
    }

    removeTodo(todo:Todo){
        this.todos = this.todos.filter((t) => t !== todo)
    }

    sortirTodos(){
        this.todosSortie = this.todos.sort((a:Todo, b:Todo) => b.id - a.id)
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
min-width: 400px;
}

li {
    margin: 1em;
}

#date {
    margin: 1em;
}
</style>