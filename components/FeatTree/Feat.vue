<script lang="ts" setup>
import {inject, provide, reactive, useSlots, VNode, watch, watchEffect} from "vue";
import {FeatNode} from "../../lib/FeatTree";

const props = defineProps<{
    id: string | number;
    name: string;
    cost: number | string;
}>();

const slots = useSlots();

const parent = inject<FeatNode[]>('parent');
const data = reactive<FeatNode>({
    id: '',
    name: '',
    cost: 0,
    children: [],
    render: null
});

watchEffect(() => {
    data.id = props.id;
    data.name = props.name;
    data.cost = Number(props.cost);
    data.render = slots.default ?? null;
});

parent.push(data);

provide('parent', data.children);
</script>

<template>
    <slot name="children"/>
</template>
