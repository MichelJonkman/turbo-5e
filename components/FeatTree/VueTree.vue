<script lang="ts" setup>
import VueTree from "@ssthouse/vue3-tree-chart";
import "@ssthouse/vue3-tree-chart/dist/vue3-tree-chart.css";
import {nextTick, provide, reactive, ref, watch} from "vue";
import FeatNode from "./FeatNode.vue";

const treeConfig = {nodeWidth: 200, nodeHeight: 100, levelHeight: 200};
const dataset = reactive([]);
const load = ref(false);

provide('parent', dataset);

nextTick(() => {
    load.value = true;
});
</script>

<template>
    <div>
        <VueTree v-if="load"
                 class="vue-tree"
                 :dataset="dataset"
                 :config="treeConfig"
                 :collapse-enabled="false"
        >
            <template v-slot:node="{ node }">
                <FeatNode :node="node" />
            </template>
        </VueTree>

        <slot/>
    </div>
</template>

<style lang="scss" scoped>
.vue-tree {
    width: 100%;
    height: 100%;
}
</style>
