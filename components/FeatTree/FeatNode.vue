<script setup lang="ts">
import {currentFeat, FeatNode, toggleFeat, updateFeat} from "../../lib/FeatTree";
import {watch, watchEffect} from "vue";

const props = defineProps<{
    node: FeatNode;
}>();

watchEffect(() => {
    updateFeat(props.node);
});
</script>

<template>
    <div class="feat-node" :class="{'selected': currentFeat?.id === props.node.id}" @click="toggleFeat(props.node)">
        {{ props.node.name }}

        <span class="feat-cost">{{ props.node.cost }}</span>
    </div>
</template>

<style lang="scss" scoped>
.feat-node {
    $node-height: 80px;
    $border-color: #ffc941;
    $border-color-active: #ff3c3c;
    $bg-color: var(--vp-c-bg);

    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: $node-height;
    background-color: #22272e;
    border-radius: 0.5rem;
    border: solid 2px $border-color;
    color: white;
    user-select: none;

    &.selected {
        border-color: $border-color-active;

        .feat-cost {
            background-color: $border-color-active;
        }
    }

    .feat-cost {
        position: absolute;
        top: 0;
        right: 0;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $bg-color;
        background-color: $border-color;
        font-weight: bold;
        border-end-start-radius: 0.25rem;
    }
}
</style>
