<template>
    <div class="todos">
        <h3>TODOS</h3>
        <form id="todoform">
            <div>
                <input type="text" name="content"
                    id="content" placeholder="i.e. compléter le TP"
                    v-model="inputContent"
                />
            </div>
            <div>
                <input type="submit" value="Ajout un todo"/>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
    props: {
    inputContent: String,
    todos: [],
  },
})
export default class Todos extends Vue {
    inputContent = "";
    todos:string[] = [];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>