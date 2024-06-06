import{j as e}from"./jsx-runtime-ea7736fc.js";import{r as o}from"./index-6c164b11.js";import{T as s}from"./index-722c9b20.js";import"./cloneDeep-c22ea01b.js";import"./_getTag-831c42c2.js";import"./_MapCache-94815e6f.js";import"./isObjectLike-c4ff7b99.js";import"./isObject-f34bc055.js";import"./_getPrototype-276bb67b.js";import"./_getAllKeys-5d98cf22.js";import"./isArray-5ac9c87d.js";import"./index-f318de67.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./objectToCSS-aff350d4.js";import"./index-898776bc.js";import"./useCurrentTheme-474309da.js";import"./use-dom-ref-7c72e1a5.js";import"./useId-133e3351.js";import"./index-7972436d.js";import"./button-be34d763.js";import"./string-de12cf5f.js";const p={display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",padding:"3rem"},n={display:"flex",flexDirection:"row",gap:"8px"},i=()=>{const[a,u]=o.useState(""),[h,d]=o.useState(""),[c,v]=o.useState("08:25 AM");return e.jsxs("div",{style:{...p},children:[e.jsx("h3",{children:"Default (format: hh:mm AA)"}),e.jsx("div",{style:{...n},children:e.jsx(s,{defaultValue:"12:00 PM"})}),e.jsx("h3",{children:"Disable"}),e.jsx("div",{style:{...n},children:e.jsx(s,{defaultValue:"12:00 PM",isDisabled:!0})}),e.jsx("h3",{children:"Readonly"}),e.jsx("div",{style:{...n},children:e.jsx(s,{defaultValue:"12:00 PM",isReadOnly:!0})}),e.jsx("h3",{children:"With 12-hours uncontrolled"}),e.jsx("div",{style:{...n},children:e.jsx(s,{formatTime:"hh:mm:ss AA",views:["hours12","minutes","seconds","sessions"],defaultValue:"11:05:50 PM"})}),e.jsx("h3",{children:"With 12-hours controlled"}),e.jsx("div",{style:{...n},children:e.jsx(s,{formatTime:"hh:mm:ss AA",views:["hours12","minutes","seconds","sessions"],value:a,onTimeChange:t=>{u(t)}})}),e.jsx("h3",{children:"With 24-hours uncontrolled"}),e.jsx("div",{style:{...n},children:e.jsx(s,{formatTime:"HH:mm:ss",views:["hours24","minutes","seconds"],hasFooter:!0,defaultValue:"05:05:55"})}),e.jsx("h3",{children:"With 24-hours controlled"}),e.jsx("div",{style:{...n},children:e.jsx(s,{formatTime:"HH:mm:ss",views:["hours24","minutes","seconds"],hasFooter:!0,value:h,onTimeChange:t=>{d(t)}})}),e.jsx("h3",{children:"Disabled dropdown with min times"}),e.jsx("div",{style:{...n},children:e.jsx(s,{formatTime:"hh:mm AA",views:["hours12","minutes","sessions"],hasFooter:!0,value:c,onTimeChange:t=>{v(t)},minTime:"07:30 AM"})})]})},_={title:"Example/TimePicker ",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};var l,r,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const [value24H, setValue24H] = useState('');
  const [valueMinTime, setValueMinTime] = useState('08:25 AM');
  return <div style={{
    ...style
  }}>
      <h3>Default (format: hh:mm AA)</h3>
      <div style={{
      ...styleRow
    }}>
        <TimePicker defaultValue={'12:00 PM'}
      // onFocus={() => console.log('onFocus')}
      // onBlur={() => console.log('onBlur')}
      // onOpenChange={(open) => console.log('onOpenChange: ', open)}
      />
      </div>
      <h3>Disable</h3>
      <div style={{
      ...styleRow
    }}>
        <TimePicker defaultValue={'12:00 PM'} isDisabled />
      </div>
      <h3>Readonly</h3>
      <div style={{
      ...styleRow
    }}>
        <TimePicker defaultValue={'12:00 PM'} isReadOnly />
      </div>
      <h3>With 12-hours uncontrolled</h3>
      <div style={{
      ...styleRow
    }}>
        <TimePicker formatTime='hh:mm:ss AA' views={['hours12', 'minutes', 'seconds', 'sessions']} defaultValue={'11:05:50 PM'} />
      </div>
      <h3>With 12-hours controlled</h3>
      <div style={{
      ...styleRow
    }}>
        <TimePicker formatTime='hh:mm:ss AA' views={['hours12', 'minutes', 'seconds', 'sessions']} value={value} onTimeChange={(value: string) => {
        setValue(value);
      }} />
      </div>
      <h3>With 24-hours uncontrolled</h3>
      <div style={{
      ...styleRow
    }}>
        <TimePicker formatTime='HH:mm:ss' views={['hours24', 'minutes', 'seconds']} hasFooter defaultValue={'05:05:55'} />
      </div>
      <h3>With 24-hours controlled</h3>
      <div style={{
      ...styleRow
    }}>
        <TimePicker formatTime='HH:mm:ss' views={['hours24', 'minutes', 'seconds']} hasFooter value={value24H} onTimeChange={(value: string) => {
        setValue24H(value);
      }} />
      </div>
      <h3>Disabled dropdown with min times</h3>
      <div style={{
      ...styleRow
    }}>
        <TimePicker formatTime='hh:mm AA' views={['hours12', 'minutes', 'sessions']} hasFooter value={valueMinTime} onTimeChange={(value: string) => {
        setValueMinTime(value);
      }} minTime='07:30 AM' />
      </div>
    </div>;
}`,...(m=(r=i.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const I=["Basic"];export{i as Basic,I as __namedExportsOrder,_ as default};
