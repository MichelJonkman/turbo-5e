<script setup lang="ts">
import {clearFeat, currentFeat} from '../../lib/FeatTree';
import markdownit from "markdown-it";
import {ref, shallowRef, watch, watchEffect} from "vue";
import {isString} from "markdown-it/lib/common/utils";

const md = markdownit();
const nodes = shallowRef([]);

watch(() => currentFeat.value?.render, () => {
    nodes.value = [];

    if (currentFeat.value?.render) {
        for (const node of currentFeat.value.render()) {
            if (isString(node.children)) {
                let content = node.children as string;
                content = content.replace(/^[ \t]+/gm, '');
                nodes.value.push(md.render(content));
                continue;
            }

            nodes.value.push(node);
        }
    }
}, {immediate: true});
</script>

<template>
    <div>
        <div v-if="currentFeat && nodes.length" class="current-feat">
            <span class="current-feat-close" @click="clearFeat()">Close</span>

            <h1>{{ currentFeat.name }} ({{ currentFeat.cost }} skill point{{ currentFeat.cost > 1 ? 's' : '' }})</h1>

            <template v-for="node in nodes">
                <div v-if="isString(node)" v-html="node"></div>
                <component v-else :is="node"/>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.current-feat {
    position: relative;
    min-height: 20vh;
    padding-top: 1rem;

    h1 {
        padding-top: 0;
        margin-top: 0;
    }

    .current-feat-close {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        cursor: pointer;
        user-select: none;

        &:hover {
            color: #ffc941;
        }
    }
}
</style>
