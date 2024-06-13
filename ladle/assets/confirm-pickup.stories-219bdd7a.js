import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as r}from"./index-6c164b11.js";import"./index-c28b9cd4.js";import{D as s}from"./index-c444fdb6.js";import{C as p}from"./confirm-pickup-fa787fee.js";import{B as a}from"./button-8faa8e19.js";import"./string-cf4adbb3.js";import"./use-dom-ref-7c72e1a5.js";import"./index-0c0b2fdc.js";import"./index-2802fc62.js";import"./useCurrentTheme-474309da.js";import"./useId-133e3351.js";const n={name:"Comfort Building",address:"383 Sin Ming Drive",city:"Singapore",street:"",postalCode:"575717",specificPUPoint:"Comfort Transporation Lobby"},i=()=>{const[l,o]=r.useState(!1),[m,t]=r.useState(!1);return e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h4",{children:"Confirm PU Point with specific location"}),e.jsx(a,{onPress:()=>{o(!0)},children:"Open Drawer"}),e.jsx("h4",{children:"Confirm PU Point without specific location"}),e.jsx(a,{onPress:()=>{t(!0)},children:"Open Drawer"}),e.jsx(s,{open:l,onClose:()=>o(!1),css:{height:"35dvh"},children:e.jsx(p,{puPointTitle:n.name,puPointDescription:`${n.address}, ${n.city} ${n.postalCode}`,specificPUPoint:n.specificPUPoint,onConfirmPickup:()=>{alert("confirm the pickup point")},onChangePUPoint:()=>{alert("change the pickup point")},css:{padding:0,borderRadius:0}})}),e.jsx(s,{open:m,onClose:()=>t(!1),css:{height:"40dvh"},children:e.jsx(p,{puPointTitle:n.name,puPointDescription:`${n.address}, ${n.city} ${n.postalCode}`,specificPUPoint:"",onConfirmPickup:u=>{alert(`confirm the pickup point ${u}`)},onChangePUPoint:()=>{alert("change the pickup point")},placeholder:"E.g. Lobby, side entrance, etc",css:{padding:0,borderRadius:0}})})]})},y={title:"Example/Confirm Pickup",tags:["autodocs"],component:i,parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Variants"};var c,P,d;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
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

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} css={{
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

      <Drawer open={drawerNoPUOpen} onClose={() => setDrawerNoPUOpen(false)} css={{
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
}`,...(d=(P=i.parameters)==null?void 0:P.docs)==null?void 0:d.source}}};const j=["Variants"];export{i as Variants,j as __namedExportsOrder,y as default};
