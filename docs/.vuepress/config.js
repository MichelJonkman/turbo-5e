import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";
import * as path from "node:path";

export default defineUserConfig({
    base: 'turbo-5e',

    bundler: viteBundler({
        vuePluginOptions: {
            template: {
                compilerOptions: {
                    whitespace: 'preserve',
                }
            }
        }
    }),
    theme: defaultTheme({
        sidebar: [
            {
                text: 'Overview',
                link: '/',
            },
            {
                text: 'Additional rules',
                prefix: '/rules/',
                link: '/rules/general.md',
                children: [
                    {
                        text: 'General',
                        link: 'general.md'
                    },
                    {
                        text: 'Improved Actions',
                        link: 'improved_actions.md'
                    },
                    {
                        text: 'Improved Healing',
                        link: 'improved_healing.md'
                    },
                    {
                        text: 'Feat Tree',
                        link: 'feat_tree.md'
                    },
                ],
            },
            {
                text: 'Spells',
                link: '/spells/general.md',
            },
        ],
    }),
    plugins: [
        searchPlugin(),
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, '../../components')
        })
    ],
});
