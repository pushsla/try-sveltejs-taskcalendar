<script lang="ts">
    import {calendarStore} from "../stores/calendarStore";

    let calendar;
    const unsubscribe = calendarStore.subscribe(value => {
        calendar = value;
    })

    let addform = {
        name: "Task name",
        start: 0,
        end: 10,
    }

    function addTask(){
        calendarStore.update((value) => {
            let new_value = value;
            new_value.addTask(addform.name, addform.start, addform.end);
            return new_value;
        })
    }

    function removeTask(id: number){
        calendarStore.update((value) => {
            let new_value = value;
            new_value.removeTask(id);
            return new_value;
        })
    }

    function finishTask(id: number){
        calendarStore.update((value) => {
            let new_value = value;
            new_value.finishTask(id);
            return new_value;
        })
    }

    function colourTask(id: number){
        calendarStore.update((value) => {
            let new_value = value;
            new_value.colourTask(id, prompt("New colour:"));
            return new_value;
        })
    }

</script>
<style lang="sass">
    .menu
      &__addform
        display: flex
        flex-direction: column
      &__list
        list-style: none
        padding: 0
      &__entry
        display: flex
        align-items: baseline
        justify-content: space-between
        padding: 5px
        border: 2px solid
        border-radius: 5px
      &__entry+&__entry
        margin-top: 10px

    .addform
      &__name
      &__start
      &__end
      &__submit

    .entry
      &__name
      &__controls
      &__colour
      &__remove
      &__finish
</style>

<aside class="menu">
    <form class="menu__addform">
        <input bind:value={addform.name} type="text" class="addform__name" placeholder="Task name">
        <input bind:value={addform.start} type="number" class="addform__start" placeholder="Start dare" min="0" max="100">
        <input bind:value={addform.end} type="number" class="addform__end" placeholder="End date" min="0" max="100">
        <button on:click|preventDefault={addTask} class="addform__submit">+</button>
    </form>
    <ul class="menu__list">
        {#each calendar.Tasks as task}
            <li class="menu__entry" style="border-color: {task.task.Colour}">
                <div class="entry__name">{task.task.Name}</div>
                <div class="entry__controls">
                    <button on:click|preventDefault={() => {removeTask(task.id)}} class="entry__remove">-</button>
                    <button on:click|preventDefault={() => {colourTask(task.id)}} class="entry__colour">C</button>
                    <button on:click|preventDefault={() => {finishTask(task.id)}} class="entry__finish">V</button>
                </div>
            </li>
        {/each}
    </ul>
</aside>
