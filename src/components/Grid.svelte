<script lang="ts">
    import {calendarStore} from "../stores/calendarStore";

    let calendar;
    const unsubscribe = calendarStore.subscribe(value => {
        calendar = value;
    })

    let today = 0;

    function* range(start, end) {
        for (let i = start; i <= end; i++) {
            yield i;
        }
    }

</script>

<style lang="sass">
    .graph
      &__table

    .table
      &__head
      &__body
      &__date
        &_active
          background: aqua

    .task
      &__cell
        border: 5px solid transparent
        padding: 5px
        &_done
          border: 5px solid green
          opacity: .3
        &_unactive
          opacity: .3
        &_expired
          border: 5px solid red
          opacity: .3
</style>

<main class="graph">
    <label for="today">Set day ({today})</label>
    <input bind:value={today} type="number" name="today" id="today">
    <table class="graph__table">
        <thead class="table__head">
        <tr>
            {#each [...range(calendar.Range[0], calendar.Range[1])] as date}
                <th class="table__date {(date === today)?'table__date_active':''}">{date}</th>
            {/each}
        </tr>
        </thead>
        <tbody class="table__body">
        {#each calendar.Tasks as task}
            <tr class="task">
                {#each [...range(calendar.Range[0], calendar.Range[1])] as date}
                    {#if date >= task.task.Start && date <= task.task.End}
                        <td class="task__cell {(task.task.Finished)?'task__cell_done':''} {(task.task.Start > today)?'task__cell_unactive':''} {(task.task.End < today && !task.task.Finished)?'task__cell_expired':''}" style="background:{task.task.Colour}"></td>
                    {:else }
                        <td class="task__cell"></td>
                    {/if}
                {/each}
            </tr>
        {/each}
        </tbody>
    </table>
</main>