import{$ as X}from"./module-e2171651.js";import{a as Y}from"./module-f9a02953.js";import{$ as rr}from"./real-module-4602f142.js";import{s as p,R as m,r as er,j as i,a as ar}from"./index-2f0c84ee.js";import{u as l}from"./use-dom-ref-894e841d.js";import{j as sr}from"./index-1156f3dc.js";import{I as tr}from"./index-f83fd3c9.js";function dr(r){return r&&r.__esModule?r.default:r}function cr(r,d){let{isCurrent:s,isDisabled:t,"aria-current":b,elementType:e="a",...c}=r,{linkProps:o}=X({isDisabled:t||s,elementType:e,...c},d),n=/^h[1-6]$/.test(e),a={};return n||(a=o),s&&(a["aria-current"]=b||"page",a.tabIndex=r.autoFocus?-1:void 0),{itemProps:{"aria-disabled":t,...a}}}var v={},x={};x={breadcrumbs:"عناصر الواجهة"};var h={};h={breadcrumbs:"Трохи хляб"};var g={};g={breadcrumbs:"Popis cesty"};var y={};y={breadcrumbs:"Brødkrummer"};var B={};B={breadcrumbs:"Breadcrumbs"};var P={};P={breadcrumbs:"Πλοηγήσεις breadcrumb"};var k={};k={breadcrumbs:"Breadcrumbs"};var R={};R={breadcrumbs:"Migas de pan"};var I={};I={breadcrumbs:"Lingiread"};var S={};S={breadcrumbs:"Navigointilinkit"};var C={};C={breadcrumbs:"Chemin de navigation"};var N={};N={breadcrumbs:"שבילי ניווט"};var D={};D={breadcrumbs:"Navigacijski putovi"};var j={};j={breadcrumbs:"Morzsamenü"};var T={};T={breadcrumbs:"Breadcrumb"};var E={};E={breadcrumbs:"パンくずリスト"};var L={};L={breadcrumbs:"탐색 표시"};var w={};w={breadcrumbs:"Naršymo kelias"};var M={};M={breadcrumbs:"Atpakaļceļi"};var F={};F={breadcrumbs:"Navigasjonsstier"};var H={};H={breadcrumbs:"Broodkruimels"};var z={};z={breadcrumbs:"Struktura nawigacyjna"};var A={};A={breadcrumbs:"Caminho detalhado"};var U={};U={breadcrumbs:"Categorias"};var _={};_={breadcrumbs:"Miez de pâine"};var K={};K={breadcrumbs:"Навигация"};var O={};O={breadcrumbs:"Navigačné prvky Breadcrumbs"};var G={};G={breadcrumbs:"Drobtine"};var J={};J={breadcrumbs:"Putanje navigacije"};var V={};V={breadcrumbs:"Sökvägar"};var W={};W={breadcrumbs:"İçerik haritaları"};var Z={};Z={breadcrumbs:"Навігаційна стежка"};var q={};q={breadcrumbs:"导航栏"};var Q={};Q={breadcrumbs:"導覽列"};v={"ar-AE":x,"bg-BG":h,"cs-CZ":g,"da-DK":y,"de-DE":B,"el-GR":P,"en-US":k,"es-ES":R,"et-EE":I,"fi-FI":S,"fr-FR":C,"he-IL":N,"hr-HR":D,"hu-HU":j,"it-IT":T,"ja-JP":E,"ko-KR":L,"lt-LT":w,"lv-LV":M,"nb-NO":F,"nl-NL":H,"pl-PL":z,"pt-BR":A,"pt-PT":U,"ro-RO":_,"ru-RU":K,"sk-SK":O,"sl-SI":G,"sr-SP":J,"sv-SE":V,"tr-TR":W,"uk-UA":Z,"zh-CN":q,"zh-TW":Q};function br(r){let{"aria-label":d,...s}=r,t=rr(dr(v));return{navProps:{...Y(s,{labelable:!0}),"aria-label":d||t.format("breadcrumbs")}}}const or=p("span",{textDecoration:"none",transition:"$default",variants:{active:{true:{color:"$typeHeading"},false:{color:"$info"}},disabled:{true:{color:"$disabledText",cursor:"not-allowed"}}}}),ir=m.forwardRef((r,d)=>{const{css:s={},href:t,target:b,isCurrent:e,isDisabled:c,...o}=r,{children:n}=o,a=er.useMemo(()=>e||c?"span":"a",[e,c]),u=l(d),{itemProps:$}=cr({...o,elementType:a},u);return i("li",{children:i(or,{as:a,css:s,ref:u,href:t,target:b,className:e?"active":"",...$,active:!!e,disabled:!!c,children:n})})}),nr=ir,$r=p("nav",{fontFamily:"$sans",ol:{padding:0,display:"flex",flexDirection:"row",alignItems:"center",listStyle:"none"},".divider":{color:"$typeHeading",padding:"0 $2",".divider-icon":{width:"$3_5",height:"$3_5"}}}),mr=m.forwardRef((r,d)=>{const{css:s={},dividerIcon:t=sr,isCurrent:b,...e}=r,{children:c}=e,o=l(d),{navProps:n}=br(e),a=m.Children.toArray(c);return i($r,{css:s,ref:o,...n,children:i("ol",{children:a.map((u,$)=>ar(m.Fragment,{children:[m.cloneElement(u,{isCurrent:b?b($):!1}),$<a.length-1&&i("li",{"aria-hidden":!0,className:"divider",children:i(tr,{className:"divider-icon",icon:t})})]},$))})})}),f=mr;f.Item=nr;f.Item.displayName="Breadcrumbs.Item";f.displayName="Breadcrumbs";export{f as B,or as S};
