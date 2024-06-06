import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as y}from"./index-6c164b11.js";import{T as n}from"./index-90af5112.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./_getTag-831c42c2.js";import"./_MapCache-94815e6f.js";import"./isObjectLike-c4ff7b99.js";import"./isObject-f34bc055.js";import"./_equalByTag-6cd86198.js";import"./useKeyboardNavigation-819d3b4a.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";const C="_icon_ac3d7_1",V={icon:C},t={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},a=({id:i})=>{const[o,l]=y.useState();return y.useEffect(()=>{fetch(`https://jsonplaceholder.typicode.com/todos/${i}`).then(s=>s.json()).then(s=>l(s)).catch(s=>console.log(s))},[i]),e.jsxs("h1",{children:["data: ",(o==null?void 0:o.title)??""]})},c=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Server Interaction"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{icon:"left",children:[e.jsx(n.Item,{title:"Founding of Rome",children:e.jsx(a,{id:"1"})},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:e.jsx(a,{id:"2"})},"2"),e.jsx(n.Item,{title:"Empire",children:e.jsx(a,{id:"3"})},"3")]})})]}),d=()=>{const[i,o]=y.useState("1"),l=[{key:"1",title:"Founding of Rome"},{key:"2",title:"Monarchy and Republic"},{key:"3",title:"Empire"}];return e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Paneless"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[e.jsx(n.Paneless,{variant:"simple",items:l,selectedKey:i,onSelectionChange:s=>o(s)}),i==="1"&&e.jsx(a,{id:"1"}),i==="2"&&e.jsx(a,{id:"2"}),i==="3"&&e.jsx(a,{id:"3"})]})})]})},m=()=>{const[i,o]=y.useState("1"),l=[{key:"1",title:"Founding of Rome"},{key:"2",title:"Monarchy and Republic"},{key:"3",title:"Empire"}];return e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"H5"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs("div",{style:{width:"100%",display:"flex",flexDirection:"column"},children:[e.jsx(n.Paneless,{variant:"h5",items:l,selectedKey:i,onSelectionChange:s=>o(s)}),i==="1"&&e.jsx(a,{id:"1"}),i==="2"&&e.jsx(a,{id:"2"}),i==="3"&&e.jsx(a,{id:"3"})]})})]})},u=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"With left icon"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{icon:"left",children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e.jsx("h3",{children:"With right icon"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{icon:"right",disabledKeys:["1"],children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e.jsx("h3",{children:"With top icon"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{variant:"simple",icon:"top",disabledKeys:["1"],children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),h=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Users can customize the styling of the component by applying their own CSS"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{icon:"left",className:V.icon,children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),p=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Horizontal Rounded"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{orientation:"horizontal",children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e.jsx("h3",{children:"Vertical Rounded"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{orientation:"vertical",children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),r=()=>e.jsxs("div",{style:{...t},children:[e.jsx("h3",{children:"Simple Style"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{variant:"simple",disabledKeys:["1"],children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),e.jsx("h3",{children:"Rounded Style"}),e.jsx("div",{style:{flexDirection:"row",...t},children:e.jsxs(n,{variant:"rounded",disabledKeys:["1"],children:[e.jsx(n.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),e.jsx(n.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),e.jsx(n.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),Z={title:"Example/Tabs ",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"}};c.__docgenInfo={description:"",methods:[],displayName:"ServerInteraction"};d.__docgenInfo={description:"",methods:[],displayName:"Paneless"};m.__docgenInfo={description:"",methods:[],displayName:"H5"};u.__docgenInfo={description:"",methods:[],displayName:"Icon"};h.__docgenInfo={description:"",methods:[],displayName:"CustomCssModule"};p.__docgenInfo={description:"",methods:[],displayName:"Orientation"};r.__docgenInfo={description:"",methods:[],displayName:"Variants"};var b,x,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(v=(x=c.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var j,I,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var f,R,g;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
      <h3>H5</h3>
      <div style={{
      flexDirection: 'row',
      ...style
    }}>
        <div style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
          <Tabs.Paneless variant='h5' items={items} selectedKey={value} onSelectionChange={(v: React.Key) => setValue(v)} />
          {value === '1' && <FetchList id='1' />}
          {value === '2' && <FetchList id='2' />}
          {value === '3' && <FetchList id='3' />}
        </div>
      </div>
    </div>;
}`,...(g=(R=m.parameters)==null?void 0:R.docs)==null?void 0:g.source}}};var q,S,k;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(k=(S=u.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var A,F,w;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(w=(F=h.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var D,E,M;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var P,_,K;r.parameters={...r.parameters,docs:{...(P=r.parameters)==null?void 0:P.docs,source:{originalSource:`() => <div style={{
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
  </div>`,...(K=(_=r.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};const ee=["ServerInteraction","Paneless","H5","Icon","CustomCssModule","Orientation","Variants"];export{h as CustomCssModule,m as H5,u as Icon,p as Orientation,d as Paneless,c as ServerInteraction,r as Variants,ee as __namedExportsOrder,Z as default};
