import{j as e}from"./jsx-runtime-9ef10904.js";import{R as p}from"./index-6c164b11.js";import{T as n}from"./index-3339dc2d.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./_getTag-831c42c2.js";import"./_MapCache-94815e6f.js";import"./isObjectLike-c4ff7b99.js";import"./isObject-f34bc055.js";import"./_equalByTag-6cd86198.js";import"./useKeyboardNavigation-7c849a98.js";import"./objectToCSS-e90bd687.js";import"./use-dom-ref-7c72e1a5.js";const M="_icon_ac3d7_1",P={icon:M},t={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},o=({id:i})=>{const[r,h]=p.useState();return p.useEffect(()=>{fetch(`https://jsonplaceholder.typicode.com/todos/${i}`).then(s=>s.json()).then(s=>h(s)).catch(s=>console.log(s))},[i]),e.jsxs("h1",{children:["data: ",(r==null?void 0:r.title)??""]})},l=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Server Interaction"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{icon:"left",children:[e.jsx(n.Item,{title:"Founding of Rome",children:e.jsx(o,{id:"1"})},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:e.jsx(o,{id:"2"})},"2"),e.jsx(n.Item,{title:"Empire",children:e.jsx(o,{id:"3"})},"3")]})})]}),c=()=>{const[i,r]=p.useState("1"),h=[{key:"1",title:"Founding of Rome"},{key:"2",title:"Monarchy and Republic"},{key:"3",title:"Empire"}];return e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Paneless"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[e.jsx(n.Paneless,{variant:"simple",items:h,selectedKey:i,onSelectionChange:s=>r(s)}),i==="1"&&e.jsx(o,{id:"1"}),i==="2"&&e.jsx(o,{id:"2"}),i==="3"&&e.jsx(o,{id:"3"})]})})]})},m=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"With left icon"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{icon:"left",children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e.jsx("h3",{children:"With right icon"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{icon:"right",disabledKeys:["1"],children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e.jsx("h3",{children:"With top icon"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{variant:"simple",icon:"top",disabledKeys:["1"],children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),d=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Users can customize the styling of the component by applying their own CSS"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{icon:"left",className:P.icon,children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),u=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Horizontal Rounded"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{orientation:"horizontal",children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e.jsx("h3",{children:"Vertical Rounded"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{orientation:"vertical",children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),a=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Simple Style"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{variant:"simple",disabledKeys:["1"],children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e.jsx("h3",{children:"Rounded Style"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{variant:"rounded",disabledKeys:["1"],children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),J={title:"Example/Tabs ",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}};l.__docgenInfo={description:"",methods:[],displayName:"ServerInteraction"};c.__docgenInfo={description:"",methods:[],displayName:"Paneless"};m.__docgenInfo={description:"",methods:[],displayName:"Icon"};d.__docgenInfo={description:"",methods:[],displayName:"CustomCssModule"};u.__docgenInfo={description:"",methods:[],displayName:"Orientation"};a.__docgenInfo={description:"",methods:[],displayName:"Variants"};var y,b,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return <div style={{
    ...style
  }}>
      <h3>Server Interaction</h3>
      <div style={{
      flexDirection: 'row',
      ...style
    }}>
        <Tabs icon='left'>
          <Tabs.Item key='1' title='Founding of Rome'>
            <FetchList id='1' />
          </Tabs.Item>
          <Tabs.Item key='2' title='Monarchy and Republic'>
            <FetchList id='2' />
          </Tabs.Item>
          <Tabs.Item key='3' title='Empire'>
            <FetchList id='3' />
          </Tabs.Item>
        </Tabs>
      </div>
    </div>;
}`,...(x=(b=l.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var I,j,T;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState<React.Key>('1');
  const items = [{
    key: '1',
    title: 'Founding of Rome'
  }, {
    key: '2',
    title: 'Monarchy and Republic'
  }, {
    key: '3',
    title: 'Empire'
  }];
  return <div style={{
    ...style
  }}>
      <h3>Paneless</h3>
      <div style={{
      flexDirection: 'row',
      ...style
    }}>
        <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
          <Tabs.Paneless variant='simple' items={items} selectedKey={value} onSelectionChange={(v: React.Key) => setValue(v)} />
          {value === '1' && <FetchList id='1' />}
          {value === '2' && <FetchList id='2' />}
          {value === '3' && <FetchList id='3' />}
        </div>
      </div>
    </div>;
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var v,f,R;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`() => <div style={{
  ...style
}}>
    <h3>With left icon</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Tabs icon='left'>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </div>

    <h3>With right icon</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Tabs icon='right' disabledKeys={['1']}>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </div>

    <h3>With top icon</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Tabs variant='simple' icon='top' disabledKeys={['1']}>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </div>
  </div>`,...(R=(f=m.parameters)==null?void 0:f.docs)==null?void 0:R.source}}};var q,g,S;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div style={{
  ...style
}}>
    <h3>
      Users can customize the styling of the component by applying their own CSS
    </h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Tabs icon='left' className={styles.icon}>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </div>
  </div>`,...(S=(g=d.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var k,A,F;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`() => <div style={{
  ...style
}}>
    <h3>Horizontal Rounded</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Tabs orientation='horizontal'>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </div>

    <h3>Vertical Rounded</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Tabs orientation='vertical'>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </div>
  </div>`,...(F=(A=u.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var w,D,E;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`() => <div style={{
  ...style
}}>
    <h3>Simple Style</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Tabs variant='simple' disabledKeys={['1']}>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </div>

    <h3>Rounded Style</h3>
    <div style={{
    flexDirection: 'row',
    ...style
  }}>
      <Tabs variant='rounded' disabledKeys={['1']}>
        <Tabs.Item key='1' title='Founding of Rome'>
          Arma virumque cano, Troiae qui primus ab oris.
        </Tabs.Item>
        <Tabs.Item key='2' title='Monarchy and Republic'>
          Senatus Populusque Romanus.
        </Tabs.Item>
        <Tabs.Item key='3' title='Empire'>
          Alea jacta est.
        </Tabs.Item>
      </Tabs>
    </div>
  </div>`,...(E=(D=a.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const Q=["ServerInteraction","Paneless","Icon","CustomCssModule","Orientation","Variants"];export{d as CustomCssModule,m as Icon,u as Orientation,c as Paneless,l as ServerInteraction,a as Variants,Q as __namedExportsOrder,J as default};
