"use client";import{j as e}from"./jsx-runtime-ea7736fc.js";import{H as n}from"./heart-filled-5f2b210b.js";import{r as j}from"./index-6c164b11.js";import{A as f}from"./index-47a1c304.js";import{S as i,a as P}from"./index-5a173c15.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./string-de12cf5f.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";const F={display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",height:"100%",width:"100%",padding:"3rem"},S={display:"flex",alignItems:"center",gap:"12px",width:"100%"},D={padding:"10px 5px",background:"#E1DFDD",borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center"},H={margin:0,color:"#333333",borderRight:"0.5px solid #333333",fontSize:12,fontFamily:"Poppins",paddingRight:3},I={display:"flex","flex-direction":"column",fontFamily:"Poppins",justifyContent:"center",marginLeft:8},C={fontSize:14,lineHeight:"21px",color:"#323130",margin:0},M={fontSize:12,lineHeight:"18px","white-space":"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"#A19F9D"},l=()=>{const[x,u]=j.useState(1),y=[{id:1,icon:e.jsx(n,{}),title:"Placeholder",children:[{id:11,title:"Placeholder item with a really long name that makes this menu item width over screen to test the layout",icon:e.jsx(n,{})},{id:12,title:"Placeholder",icon:e.jsx(n,{})},{id:13,title:"Placeholder",icon:e.jsx(n,{}),children:[{id:11,title:"Placeholder",icon:e.jsx(n,{})},{id:12,title:"Placeholder",icon:e.jsx(n,{}),children:[{id:11,title:"Placeholder",icon:e.jsx(n,{})},{id:12,title:"Placeholder",icon:e.jsx(n,{})},{id:13,title:"Placeholder",icon:e.jsx(n,{}),children:[{id:11,title:"Placeholder",icon:e.jsx(n,{})},{id:12,title:"Placeholder",icon:e.jsx(n,{})},{id:13,title:"Placeholder",icon:e.jsx(n,{})}]}]},{id:13,title:"Placeholder",icon:e.jsx(n,{})}]}]},{id:2,icon:e.jsx(n,{}),title:"Placeholder"},{id:3,icon:e.jsx(n,{}),title:"Placeholder"},{id:4,icon:e.jsx(n,{}),title:"Placeholder"},{id:5,icon:e.jsx(n,{}),title:"Placeholder"}],v=(t,r)=>{t.preventDefault(),u(r)},a=t=>{const{id:r,icon:s,title:d,children:o,isMenu:g}=t;return e.jsxs(i.Item,{isActive:g?!1:x===r,children:[s||e.jsx(e.Fragment,{}),d?e.jsxs("span",{children:[d," ",o?"→":""]}):e.jsx(e.Fragment,{}),o?e.jsx(P,{shouldFlip:!0,children:o.map(c=>e.jsx(a,{isMenu:!0,...c},c.id))}):e.jsx(e.Fragment,{})]})};return e.jsx("div",{style:{flexDirection:"row",position:"relative",justifyContent:"flex-start",...F},children:e.jsxs(i,{css:{height:"800px",position:"absolute",top:"0px",zIndex:"2",padding:"16px 0"},expand:!1,delay:200,children:[e.jsxs(i.Item,{css:{"&.cdg-sidenav-item":{marginBottom:"36px"}},children:[e.jsx("div",{style:{width:"40px"},children:e.jsx(f,{label:"M"})}),e.jsx("h2",{style:{fontSize:"24px",marginLeft:"22px",color:"#323130"},children:"Workbench"})]}),e.jsx(i.Item,{css:{"&.cdg-sidenav-item":{marginBottom:"36px"}},children:e.jsxs("div",{style:S,children:[e.jsxs("div",{style:D,children:[e.jsx("p",{style:H,children:"ZB"}),e.jsx(n,{style:{width:11,height:7,color:"#333333",marginLeft:0}})]}),e.jsxs("div",{style:I,children:[e.jsx("b",{style:C,children:"Zig Biz"}),e.jsx("span",{style:M,children:"Fri 18 Nov 2:25 PM"})]})]})}),e.jsx(i.Divider,{style:{marginBottom:"8px"}}),y.map(t=>e.jsx("a",{onClick:r=>{v(r,t.id)},href:"#",style:{color:"inherit",textDecoration:"none",outlineColor:"#678ECF"},children:e.jsx(a,{...t},t.id)},t.id)),e.jsx(i.Divider,{style:{margin:"8px 0"}}),e.jsxs(i.Item,{css:{marginTop:"auto"},children:[e.jsx(n,{}),e.jsx("span",{children:"Placeholder"})]})]})})},R={title:"Example/Sidenav",component:l,tags:["autodocs"],parameters:{layout:"fullscreen"}};l.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,h,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const [currentPage, setCurrentPage] = useState(1);
  const items: ItemType[] = [{
    id: 1,
    icon: <HeartFilled />,
    title: 'Placeholder',
    children: [{
      id: 11,
      title: 'Placeholder item with a really long name that makes this menu item width over screen to test the layout',
      icon: <HeartFilled />
    }, {
      id: 12,
      title: 'Placeholder',
      icon: <HeartFilled />
    }, {
      id: 13,
      title: 'Placeholder',
      icon: <HeartFilled />,
      children: [{
        id: 11,
        title: 'Placeholder',
        icon: <HeartFilled />
      }, {
        id: 12,
        title: 'Placeholder',
        icon: <HeartFilled />,
        children: [{
          id: 11,
          title: 'Placeholder',
          icon: <HeartFilled />
        }, {
          id: 12,
          title: 'Placeholder',
          icon: <HeartFilled />
        }, {
          id: 13,
          title: 'Placeholder',
          icon: <HeartFilled />,
          children: [{
            id: 11,
            title: 'Placeholder',
            icon: <HeartFilled />
          }, {
            id: 12,
            title: 'Placeholder',
            icon: <HeartFilled />
          }, {
            id: 13,
            title: 'Placeholder',
            icon: <HeartFilled />
          }]
        }]
      }, {
        id: 13,
        title: 'Placeholder',
        icon: <HeartFilled />
      }]
    }]
  }, {
    id: 2,
    icon: <HeartFilled />,
    title: 'Placeholder'
  }, {
    id: 3,
    icon: <HeartFilled />,
    title: 'Placeholder'
  }, {
    id: 4,
    icon: <HeartFilled />,
    title: 'Placeholder'
  }, {
    id: 5,
    icon: <HeartFilled />,
    title: 'Placeholder'
  }];
  const handleOnClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: number) => {
    e.preventDefault();
    setCurrentPage(id);
  };
  const CustomSizenavItem = (props: ItemType & {
    isMenu?: boolean;
  }) => {
    const {
      id,
      icon,
      title,
      children,
      isMenu
    } = props;
    return <Sidenav.Item isActive={isMenu ? false : currentPage === id}>
        {icon ? icon : <></>}
        {title ? <span>
            {title} {children ? '→' : ''}
          </span> : <></>}
        {children ? <SidenavMenu shouldFlip>
            {children.map(child => {
          return <CustomSizenavItem key={child.id} isMenu={true} {...child} />;
        })}
          </SidenavMenu> : <></>}
      </Sidenav.Item>;
  };
  return <div style={{
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-start',
    ...style
  }}>
      <Sidenav css={{
      height: '800px',
      position: 'absolute',
      top: '0px',
      zIndex: '2',
      padding: '16px 0'
    }} expand={false} delay={200}>
        <Sidenav.Item css={{
        '&.cdg-sidenav-item': {
          marginBottom: '36px'
        }
      }}>
          <div style={{
          width: '40px'
        }}>
            <Avatar label='M' />
          </div>
          <h2 style={{
          fontSize: '24px',
          marginLeft: '22px',
          color: '#323130'
        }}>
            Workbench
          </h2>
        </Sidenav.Item>
        <Sidenav.Item css={{
        '&.cdg-sidenav-item': {
          marginBottom: '36px'
        }
      }}>
          <div style={styleServiceMenuWrapper}>
            <div style={styleContent}>
              <p style={styleTitleWrapper}>ZB</p>
              <HeartFilled style={{
              width: 11,
              height: 7,
              color: '#333333',
              marginLeft: 0
            }} />
            </div>
            <div style={styleDetailWrapper}>
              <b style={styleDetailTitleWrapper}>Zig Biz</b>
              <span style={styleDetailTimeWrapper}>Fri 18 Nov 2:25 PM</span>
            </div>
          </div>
        </Sidenav.Item>
        <Sidenav.Divider style={{
        marginBottom: '8px'
      }} />
        {items.map(item => {
        return <a onClick={e => {
          handleOnClick(e, item.id);
        }} key={item.id} href='#' style={{
          color: 'inherit',
          textDecoration: 'none',
          outlineColor: '#678ECF'
        }}>
              <CustomSizenavItem key={item.id} {...item} />
            </a>;
      })}
        <Sidenav.Divider style={{
        margin: '8px 0'
      }} />
        <Sidenav.Item css={{
        marginTop: 'auto'
      }}>
          <HeartFilled />
          <span>Placeholder</span>
        </Sidenav.Item>
      </Sidenav>
    </div>;
}`,...(m=(h=l.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const Z=["Default"];export{l as Default,Z as __namedExportsOrder,R as default};
