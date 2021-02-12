<script lang="ts">
    import Menu from "./components/Menu.svelte";
    import Grid from "./components/Grid.svelte";
</script>
<style lang="sass">
  .App
    display: grid
    grid-template-columns: 1fr 3fr
    grid-gap: 30px
  .Menu
    grid-column: 1
  .Grid
    grid-column: 2
    width: 100%

</style>

<div class="App">
    <div class="Menu"><Menu/></div>
    <div class="Grid"><Grid/></div>
</div>