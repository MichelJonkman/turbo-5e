import i from"./Feat-CtXasNCd.js";import{f as d,_ as p,o as c,j as u,w as o,d as s,b as t}from"./app-CcJ3fWWh.js";const w=d({__name:"CrossbowExpertTree",setup(a,{expose:e}){e();const r={Feat:i};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function f(a,e,r,n,l,b){return c(),u(n.Feat,{id:"crossbow-expert",name:"Crossbow Expert",cost:"1"},{children:o(()=>[s(n.Feat,{id:"crossbow-expert-hand",name:"Hand Crossbow Expert",cost:"1"},{default:o(()=>e[0]||(e[0]=[t(`
                When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a hand crossbow you are holding.
            `)])),_:1}),e[2]||(e[2]=t()),s(n.Feat,{id:"crossbow-expert-heavy",name:"Heavy Crossbow Expert",cost:"1"},{default:o(()=>e[1]||(e[1]=[t(`
                Something something idea for heavy crossbow expert.
            `)])),_:1})]),default:o(()=>[e[3]||(e[3]=t(`
        Thanks to extensive practice with the crossbow, you gain the following benefits:
        - You ignore the loading quality of crossbows with which you are proficient.
        - Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.

        `))]),_:1})}const _=p(w,[["render",f],["__file","CrossbowExpertTree.vue"]]);export{_ as default};
