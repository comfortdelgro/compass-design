import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as r}from"./index-6c164b11.js";import"./index-7972436d.js";import{D as s,C as a}from"./index-14a5a860.js";import{B as p}from"./button-be34d763.js";import"./index-82dc4608.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./index-898776bc.js";import"./useCurrentTheme-474309da.js";import"./useId-133e3351.js";import"./useDrag-c728562f.js";import"./string-de12cf5f.js";const n={name:"Comfort Building",address:"383 Sin Ming Drive",city:"Singapore",street:"",postalCode:"575717",specificPUPoint:"Comfort Transporation Lobby"},i=()=>{const[l,t]=r.useState(!1),[u,o]=r.useState(!1);return e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h4",{children:"Confirm PU Point with specific location"}),e.jsx(p,{onPress:()=>{t(!0)},children:"Open Drawer"}),e.jsx("h4",{children:"Confirm PU Point without specific location"}),e.jsx(p,{onPress:()=>{o(!0)},children:"Open Drawer"}),e.jsx(s,{variant:"h5",disableResize:!0,open:l,onClose:()=>t(!1),css:{height:"35dvh"},children:e.jsx(a,{puPointTitle:n.name,puPointDescription:`${n.address}, ${n.city} ${n.postalCode}`,specificPUPoint:n.specificPUPoint,onConfirmPickup:()=>{alert("confirm the pickup point")},onChangePUPoint:()=>{alert("change the pickup point")},css:{padding:0,borderRadius:0}})}),e.jsx(s,{variant:"h5",disableResize:!0,open:u,onClose:()=>o(!1),css:{height:"40dvh"},children:e.jsx(a,{puPointTitle:n.name,puPointDescription:`${n.address}, ${n.city} ${n.postalCode}`,specificPUPoint:"",onConfirmPickup:m=>{alert(`confirm the pickup point ${m}`)},onChangePUPoint:()=>{alert("change the pickup point")},placeholder:"E.g. Lobby, side entrance, etc",css:{padding:0,borderRadius:0}})})]})},v={title:"Example/Confirm Pickup",tags:["autodocs"],component:i,parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};var c,P,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [drawerNoPUOpen, setDrawerNoPUOpen] = React.useState<boolean>(false);
  return <div style={{
    padding: '1rem'
  }}>
      <h4>Confirm PU Point with specific location</h4>
      <Button onPress={() => {
      setDrawerOpen(true);
    }}>
        Open Drawer
      </Button>

      <h4>Confirm PU Point without specific location</h4>
      <Button onPress={() => {
      setDrawerNoPUOpen(true);
    }}>
        Open Drawer
      </Button>

      <Drawer variant='h5' disableResize open={drawerOpen} onClose={() => setDrawerOpen(false)} css={{
      height: '35dvh'
    }}>
        <ConfirmPUPoint puPointTitle={samplePickupPoint.name} puPointDescription={\`\${samplePickupPoint.address}, \${samplePickupPoint.city} \${samplePickupPoint.postalCode}\`} specificPUPoint={samplePickupPoint.specificPUPoint} onConfirmPickup={() => {
        alert('confirm the pickup point');
      }} onChangePUPoint={() => {
        alert('change the pickup point');
      }} css={{
        padding: 0,
        borderRadius: 0
      }} />
      </Drawer>

      <Drawer variant='h5' disableResize open={drawerNoPUOpen} onClose={() => setDrawerNoPUOpen(false)} css={{
      height: '40dvh'
    }}>
        <ConfirmPUPoint puPointTitle={samplePickupPoint.name} puPointDescription={\`\${samplePickupPoint.address}, \${samplePickupPoint.city} \${samplePickupPoint.postalCode}\`} specificPUPoint={''} onConfirmPickup={pickupPoint => {
        alert(\`confirm the pickup point \${pickupPoint}\`);
      }} onChangePUPoint={() => {
        alert('change the pickup point');
      }} placeholder='E.g. Lobby, side entrance, etc' css={{
        padding: 0,
        borderRadius: 0
      }} />
      </Drawer>
    </div>;
}`,...(d=(P=i.parameters)==null?void 0:P.docs)==null?void 0:d.source}}};const y=["Variants"];export{i as Variants,y as __namedExportsOrder,v as default};
