<script setup lang="ts">

import Feat from "../Feat.vue";
</script>

<template>
    <Feat id="crossbow-expert" name="Crossbow Expert" cost="1">
        Thanks to extensive practice with the crossbow, you gain the following benefits:
        - You ignore the loading quality of crossbows with which you are proficient.
        - Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.

        <template #children>
            <Feat id="crossbow-expert-hand" name="Hand Crossbow Expert" cost="1">
                When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a hand crossbow you are holding.
            </Feat>
            <Feat id="crossbow-expert-heavy" name="Heavy Crossbow Expert" cost="1">
                Something something idea for heavy crossbow expert.
            </Feat>
        </template>
    </Feat>
</template>

<style scoped>

</style>
