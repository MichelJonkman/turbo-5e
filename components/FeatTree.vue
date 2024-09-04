<script lang="ts" setup>
import VueTree from "./FeatTree/VueTree.vue";
import Feat from "./FeatTree/Feat.vue";
import CurrentFeat from "./FeatTree/CurrentFeat.vue";
import CrossbowExpertTree from "./FeatTree/Trees/CrossbowExpertTree.vue";

// Change to use https://vueflow.dev
</script>

<template>
    <div class="feat-tree">
        <VueTree class="tree">
            <CrossbowExpertTree/>

            <Feat id="test4" name="3" cost="1">
                <template #children>
                    <Feat id="test5" name="2" cost="1"/>
                    <Feat id="test6" name="3" cost="1"/>
                </template>
            </Feat>
        </VueTree>

        <div class="overlay">
            <div class="container">
                <CurrentFeat/>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.feat-tree {
    position: relative;
}

.tree {
    width: 100%;
    height: calc(100vh - var(--navbar-height));
}

.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--vp-c-bg);
    border-top: 1px solid var(--vp-c-border);
}
</style>

<style lang="scss">
.page-feat-tree {
    .vp-page {
        padding-bottom: 0;
    }

    .vp-page .theme-default-content {
        max-width: 100%;
        padding: 0;
    }

    .vp-page-meta {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .container {
        max-width: var(--content-width);
        margin: 0 auto;
        padding: 2rem 2.5rem;
        padding-top: 0;
    }
}
</style>
