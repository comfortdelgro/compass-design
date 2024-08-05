import{j as n}from"./jsx-runtime-9ef10904.js";import{r as x}from"./index-6c164b11.js";import{H as u}from"./heart-filled-5f2b210b.js";import{A as t}from"./index-5d9b056a.js";import"./index-e81b8c34.js";import"./index-e89f60cb.js";import"./index-4f6b7c55.js";import"./index-15c598e9.js";import"./index-ec8b205c.js";import"./index-a6cd513d.js";import"./index-9e847335.js";import"./index-8c96f1ee.js";import"./index-f0ea8199.js";import"./index-a4534e59.js";import"./index-b524196d.js";import"./index-9709637b.js";import"./index-fe6f70f1.js";import"./index-81648b60.js";import"./index-8afc989f.js";import"./index-deaea9cb.js";import"./index-a28a8ffa.js";import"./index-e7f39b02.js";import"./index-074620d7.js";import"./index-bab47577.js";import"./index-0a028ca0.js";import"./index-f9d7abc3.js";import"./index-f940c060.js";import"./Viewer-447f3689.js";import"./calendar-11907e4d.js";import"./NumberParser-89118490.js";import"./index-1727c636.js";import"./index-0d2269a8.js";import"./index-b7266972.js";import"./index-ce80528f.js";import"./index-8f883b6b.js";import"./index-a485d6a8.js";import"./index-a93d41cd.js";import"./index-d42081dd.js";import"./index-743890f1.js";import"./index-e2c6e307.js";import"./index-0a77337a.js";import"./index-0f034e12.js";import"./index-d88a2748.js";import"./index-17087710.js";import"./index-78db8da5.js";import"./index-4259cd01.js";import"./index-c8954287.js";import"./index-8d0f66a3.js";import"./index-bc84cfa4.js";import"./index-219208da.js";import"./index-7d11381a.js";import"./index-01156645.js";import"./index-7c02b6e0.js";import"./video-player-9ad7071f.js";import"./useSnackbar-41e96bd3.js";import"./index-2cad8c03.js";import"./index-a8b6e51e.js";import"./index-1299058a.js";import"./index-c7d502d2.js";import"./index-3339dc2d.js";import"./index-19e37ff7.js";import"./index-9242378d.js";import"./index-c9ae0d87.js";import"./index-d7c7ead6.js";import"./useCurrentTheme-3076cf6b.js";import"./index-545f196b.js";import"./index-43a16e3f.js";import"./index-e64a24f7.js";import"./index-21379b2e.js";import"./index-8de6e878.js";import"./index-92999917.js";import"./Row-7065e1c2.js";import"./useKeyboardNavigation-7c849a98.js";import"./_getTag-831c42c2.js";import"./_equalByTag-6cd86198.js";import"./isObjectLike-c4ff7b99.js";import"./objectToCSS-e90bd687.js";import"./index-e08ff86c.js";import{B as S}from"./button-a57955c5.js";import"./use-dom-ref-7c72e1a5.js";import"./pick-child-1fb557e7.js";import"./confirm-pickup-ca8a9d53.js";import"./date-picker-4a2ce3da.js";import"./dropdown-textfield-0ae1254d.js";import"./useId-133e3351.js";import"./index-4ded3345.js";import"./rating-1e446f38.js";import"./slide-action-e7961684.js";import"./useDrag-6ba0f8b4.js";import"./speed-dial-11f3eab2.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./tooltip-trigger-57517b5f.js";import"./index-8ce02b55.js";import"./get-icon-from-color-db7992f5.js";import"./toString-0ef0ca41.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./pointer-a81ef452.js";import"./color-214871c7.js";import"./noop-4f713d1a.js";import"./layout-4876dc22.js";import"./toNumber-bd7815ee.js";import"./isObject-f34bc055.js";import"./index-d4744197.js";import"./_baseIsEqual-cb0e1730.js";import"./_getAllKeys-5d98cf22.js";import"./_MapCache-94815e6f.js";import"./get-80d15efb.js";import"./cloneDeep-c22ea01b.js";import"./_getPrototype-276bb67b.js";const o=`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
  officiis corporis magnam quo expedita nostrum temporibus quibusdam ipsa
  iste a consequuntur, adipisci eaque. Nobis voluptates impedit obcaecati
  error optio consequatur.`,r=e=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",padding:"1rem"},children:e.children}),i=()=>{const[e,s]=x.useState(!1),[c,D]=x.useState(o);function b(a){const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ";let m="";const y=l.length;for(let h=0;h<a;h++){const E=Math.floor(Math.random()*y);m+=l.charAt(E)}return m}const p=a=>()=>{s(l=>l===a?!1:a)};return n.jsxs(n.Fragment,{children:[n.jsxs(r,{children:[n.jsx("h3",{children:"Default with icon"}),n.jsxs(t,{children:[n.jsx(t.Title,{children:"Title"}),o]})]}),n.jsxs(r,{children:[n.jsx("h3",{children:"Content height change"}),n.jsx(S,{style:{width:"20%"},onPress:()=>D(b(1e3)+o),children:"Change content"}),n.jsxs(t,{children:[n.jsx(t.Title,{children:"Title"}),c]})]}),n.jsxs(r,{children:[n.jsx("h3",{children:"Without left icon"}),n.jsxs(t,{children:[n.jsx(t.Title,{icon:!1,children:"Title"}),o]}),n.jsxs(t,{children:[n.jsx(t.Title,{icon:!1,children:n.jsx("p",{children:o})}),o]})]}),n.jsxs(r,{children:[n.jsx("h3",{children:"Customize left icon"}),n.jsxs(t,{children:[n.jsx(t.Title,{icon:n.jsx(u,{}),children:"Title"}),o]})]}),n.jsxs(r,{children:[n.jsx("h3",{children:"Customize expand icon"}),n.jsxs(t,{children:[n.jsx(t.ExpandIcon,{children:n.jsx("div",{style:{lineHeight:"1em",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"16px"},children:"Show"})}),n.jsx(t.Title,{children:"Title"}),o]}),n.jsxs(t,{children:[n.jsx(t.ExpandIcon,{children:n.jsx(u,{})}),n.jsx(t.Title,{children:"Title"}),o]})]}),n.jsxs(r,{children:[n.jsx("h3",{children:"Styling"}),n.jsxs(t,{defaultExpand:!0,css:{background:"Wheat",color:"SaddleBrown"},children:[n.jsx(t.Title,{css:{background:"burlywood",textAlign:"center",color:"currentColor"},children:n.jsx("p",{children:o})}),o]})]}),n.jsxs(r,{children:[n.jsx("h3",{children:"Controlled"}),n.jsxs(t,{expand:e==="first",onExpandChange:p("first"),children:[n.jsx(t.Title,{children:n.jsx("p",{children:o})}),o,o]}),n.jsxs(t,{expand:e==="second",onExpandChange:p("second"),children:[n.jsx(t.Title,{children:n.jsx("p",{children:o})}),o,o]}),n.jsxs(t,{expand:e==="third",onExpandChange:p("third"),children:[n.jsx(t.Title,{children:n.jsx("p",{children:o})}),o,o]})]})]})},d=()=>{const e=[{id:1,leftData:"Job ID",rightData:"CDG180-1120"},{id:2,leftData:"Status",rightData:"Ended"},{id:3,leftData:"Job Title",rightData:"Demo 8"},{id:4,leftData:"Number of Pax",rightData:"4"},{id:5,leftData:"Job Type",rightData:"One-way Transfer"},{id:6,leftData:"Date/Time",rightData:"10/10/2022, 04:10 PM"},{id:7,leftData:"Pick-up Location",rightData:"Comfort Building"}],s=()=>e.map(c=>n.jsxs("div",{children:[n.jsx("p",{children:n.jsx("b",{children:c.leftData})}),n.jsx("p",{style:{textAlign:"left"},children:c.rightData})]},c.id));return n.jsx(r,{children:n.jsxs(t,{children:[n.jsx(t.Title,{children:n.jsx("h2",{children:"Business Profile"})}),n.jsx("p",{children:o}),n.jsx(t.Table,{children:s()}),n.jsx("p",{children:o})]})})},kt={title:"Example/Accordion",component:i,tags:["autodocs"],parameters:{layout:"fullscreen"}};i.__docgenInfo={description:"",methods:[],displayName:"Basic"};d.__docgenInfo={description:"",methods:[],displayName:"AccordionTable"};var f,A,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [expand, setExpand] = useState<string | false>(false);
  const [content, setContent] = useState<string>(lorem);
  function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  const handleControlledAccordion = (id: string) => () => {
    setExpand(previous => {
      if (previous === id) {
        return false;
      }
      return id;
    });
  };
  return <>
      <Content>
        <h3>Default with icon</h3>
        <Accordion>
          <Accordion.Title>Title</Accordion.Title>
          {lorem}
        </Accordion>
      </Content>

      <Content>
        <h3>Content height change</h3>
        <Button style={{
        width: '20%'
      }} onPress={() => setContent(generateRandomString(1000) + lorem)}>
          Change content
        </Button>
        <Accordion>
          <Accordion.Title>Title</Accordion.Title>
          {content}
        </Accordion>
      </Content>

      <Content>
        <h3>Without left icon</h3>

        <Accordion>
          <Accordion.Title icon={false}>Title</Accordion.Title>
          {lorem}
        </Accordion>

        <Accordion>
          <Accordion.Title icon={false}>
            <p>{lorem}</p>
          </Accordion.Title>
          {lorem}
        </Accordion>
      </Content>

      <Content>
        <h3>Customize left icon</h3>

        <Accordion>
          <Accordion.Title icon={<HeartFilled />}>Title</Accordion.Title>
          {lorem}
        </Accordion>
      </Content>

      <Content>
        <h3>Customize expand icon</h3>

        <Accordion>
          <Accordion.ExpandIcon>
            <div style={{
            lineHeight: '1em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px'
          }}>
              Show
            </div>
          </Accordion.ExpandIcon>
          <Accordion.Title>Title</Accordion.Title>
          {lorem}
        </Accordion>

        <Accordion>
          <Accordion.ExpandIcon>
            <HeartFilled />
          </Accordion.ExpandIcon>
          <Accordion.Title>Title</Accordion.Title>
          {lorem}
        </Accordion>
      </Content>

      <Content>
        <h3>Styling</h3>

        <Accordion defaultExpand={true} css={{
        background: 'Wheat',
        color: 'SaddleBrown'
      }}>
          <Accordion.Title css={{
          background: 'burlywood',
          textAlign: 'center',
          color: 'currentColor'
        }}>
            <p>{lorem}</p>
          </Accordion.Title>
          {lorem}
        </Accordion>
      </Content>

      <Content>
        <h3>Controlled</h3>

        <Accordion expand={expand === 'first'} onExpandChange={handleControlledAccordion('first')}>
          <Accordion.Title>
            <p>{lorem}</p>
          </Accordion.Title>
          {lorem}
          {lorem}
        </Accordion>
        <Accordion expand={expand === 'second'} onExpandChange={handleControlledAccordion('second')}>
          <Accordion.Title>
            <p>{lorem}</p>
          </Accordion.Title>
          {lorem}
          {lorem}
        </Accordion>
        <Accordion expand={expand === 'third'} onExpandChange={handleControlledAccordion('third')}>
          <Accordion.Title>
            <p>{lorem}</p>
          </Accordion.Title>
          {lorem}
          {lorem}
        </Accordion>
      </Content>
    </>;
}`,...(g=(A=i.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};var T,j,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const data = [{
    id: 1,
    leftData: 'Job ID',
    rightData: 'CDG180-1120'
  }, {
    id: 2,
    leftData: 'Status',
    rightData: 'Ended'
  }, {
    id: 3,
    leftData: 'Job Title',
    rightData: 'Demo 8'
  }, {
    id: 4,
    leftData: 'Number of Pax',
    rightData: '4'
  }, {
    id: 5,
    leftData: 'Job Type',
    rightData: 'One-way Transfer'
  }, {
    id: 6,
    leftData: 'Date/Time',
    rightData: '10/10/2022, 04:10 PM'
  }, {
    id: 7,
    leftData: 'Pick-up Location',
    rightData: 'Comfort Building'
  }];
  const renderAccordionTableItems = () => {
    return data.map(eachData => {
      return <div key={eachData.id}>
          <p>
            <b>{eachData.leftData}</b>
          </p>
          <p style={{
          textAlign: 'left'
        }}>{eachData.rightData}</p>
        </div>;
    });
  };
  return <Content>
      <Accordion>
        <Accordion.Title>
          <h2>Business Profile</h2>
        </Accordion.Title>
        <p>{lorem}</p>
        <Accordion.Table>{renderAccordionTableItems()}</Accordion.Table>
        <p>{lorem}</p>
      </Accordion>
    </Content>;
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const zt=["Basic","AccordionTable"];export{d as AccordionTable,i as Basic,zt as __namedExportsOrder,kt as default};
