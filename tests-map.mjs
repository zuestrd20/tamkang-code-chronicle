import assert from 'node:assert/strict';
import {drawMap,enemySvg} from './map.js';
import {REGIONS} from './story.js';
let calls=[];
const gradient={addColorStop(){}};
const ctx=new Proxy({}, {get:(o,k)=>k==='measureText'?text=>({width:text.length*10}):k==='createLinearGradient'||k==='createRadialGradient'?()=>gradient:(...args)=>calls.push([k,...args]),set:()=>true});
for(const [regionId,region] of Object.entries(REGIONS)){
 const canvas={getContext:()=>ctx};
 const state={regionId,player:region.spawn};
 const before=JSON.stringify({state,region});
 drawMap(canvas,region,state,region.targets);
 assert.equal(canvas.width,1440);assert.equal(canvas.height,898);
 assert.equal(JSON.stringify({state,region}),before,'rendering must never change gameplay');
 assert.ok(calls.length>100);
 calls=[];drawMap(canvas,region,state,region.targets);const once=JSON.stringify(calls);
 calls=[];drawMap(canvas,region,state,region.targets);assert.equal(JSON.stringify(calls),once,'scene must remain stable across movement re-renders');
 console.log(`PASS ${regionId}: deterministic high-resolution scene, unchanged gameplay state and click grid`);
}
assert.match(enemySvg('compiler'),/<svg/);console.log('PASS battle art remains available');
