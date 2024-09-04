import {ref, shallowRef, VNode, watch, watchEffect} from "vue";

export const currentFeat = ref<FeatNode | null>(null);

export function toggleFeat(item: FeatNode) {
    if (currentFeat.value?.id === item.id) {
        clearFeat();
        return;
    }

    currentFeat.value = item;
}

export function clearFeat() {
    currentFeat.value = null;
}

export function updateFeat(item: FeatNode) {
    if (currentFeat.value?.id === item.id) {
        currentFeat.value = item;
    }
}

export interface FeatNode {
    id: number | string;
    name: string;
    cost: number;
    children: FeatNode[];
    render: ((...args: any) => VNode[]) | null;
}

// export interface CurrentFeatNode extends Partial<FeatNode> {
//     render: FeatNode['render'];
// }
