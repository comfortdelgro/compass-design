import{j as e}from"./jsx-runtime-ea7736fc.js";import{R as r}from"./index-6c164b11.js";import{T as c}from"./index-1825d005.js";import{T as i}from"./index-0a0dc8f5.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";import"./useId-133e3351.js";const o=()=>{const[l,f]=r.useState(!1),[p,S]=r.useState(!1),[y,w]=r.useState(!1),[h,j]=r.useState(!1),d={width:"100%",textAlign:"center"},a={marginBottom:"5px",marginTop:"5px",height:"250px",width:"100%",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"1rem"},n={width:"170px",height:"170px"},s={display:"flex",justifyContent:"center",alignItems:"center",height:"160px",width:"160px",backgroundColor:"#ADD8E6",borderRadius:"0.5rem",border:"1px solid black",color:"black",fontWeight:"600"};return e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs("div",{style:{width:"7rem",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem",marginLeft:"1rem"},children:[e.jsx("span",{style:{fontSize:"13px"},children:"Click here:"}),e.jsx(c,{size:"sm",onChange:t=>f(t)})]}),e.jsxs("div",{style:{padding:"5px"},children:[e.jsx("h3",{style:{...d},children:"Collapse"}),e.jsxs("div",{style:{...a},children:[e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"collapse",show:l,children:e.jsx("div",{style:{...s},children:"Basic"})})}),e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"collapse",show:l,speed:2,children:e.jsx("div",{style:{...s},children:"Custom Speed: 2s"})})}),e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"collapse",show:l,collapsedSize:"120px",children:e.jsx("div",{style:{...s},children:"Custom Collapsed Size: 100px"})})}),e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"collapse",show:l,orientation:"horizontal",children:e.jsx("div",{style:{...s},children:"Horizonal"})})})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{width:"7rem",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem",marginLeft:"1rem"},children:[e.jsx("span",{style:{fontSize:"13px"},children:"Click here:"}),e.jsx(c,{size:"sm",onChange:t=>S(t)})]}),e.jsxs("div",{style:{padding:"5px"},children:[e.jsx("h3",{style:{...d},children:"Fade"}),e.jsxs("div",{style:{...a},children:[e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"fade",show:p,children:e.jsx("div",{style:{...s},children:"Basic"})})}),e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"fade",show:p,speed:2,children:e.jsx("div",{style:{...s},children:"Custom Speed: 2s"})})})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{width:"7rem",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem",marginLeft:"1rem"},children:[e.jsx("span",{style:{fontSize:"13px"},children:"Click here:"}),e.jsx(c,{size:"sm",onChange:t=>w(t)})]}),e.jsxs("div",{style:{padding:"5px"},children:[e.jsx("h3",{style:{...d},children:"Zoom"}),e.jsxs("div",{style:{...a},children:[e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"zoom",show:y,children:e.jsx("div",{style:{...s},children:"Basic"})})}),e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"zoom",show:y,speed:2,children:e.jsx("div",{style:{...s},children:"Custom speed: 2s"})})})]})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{width:"7rem",display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"1rem",marginLeft:"1rem"},children:[e.jsx("span",{style:{fontSize:"13px"},children:"Click here:"}),e.jsx(c,{size:"sm",onChange:t=>j(t)})]}),e.jsxs("div",{style:{padding:"5px"},children:[e.jsx("h3",{style:{...d},children:"Slide"}),e.jsxs("div",{style:{...a},children:[e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"slide",show:h,children:e.jsx("div",{style:{...s},children:"Basic"})})}),e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"slide",show:h,speed:2,children:e.jsx("div",{style:{...s},children:"Custom speed: 2s"})})}),e.jsx("div",{style:{...n},children:e.jsx(i,{effect:"slide",show:h,slideDirection:"top",children:e.jsx("div",{style:{...s},children:"Custom Direction: top"})})})]})]})]})]})},k={title:"Example/Transitions",component:o,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"Variants"};var x,m,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [showCollapse, setShowCollapse] = React.useState(false);
  const [showFade, setShowFade] = React.useState(false);
  const [showZoom, setShowZoom] = React.useState(false);
  const [showSlide, setShowSlide] = React.useState(false);
  const TitleStyle: React.CSSProperties = {
    width: '100%',
    textAlign: 'center'
  };
  const RowStyle: React.CSSProperties = {
    marginBottom: '5px',
    marginTop: '5px',
    height: '250px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem'
  };
  const TransitionBoxContainerStyle: React.CSSProperties = {
    width: '170px',
    height: '170px'
  };
  const TransitionBoxStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '160px',
    width: '160px',
    backgroundColor: '#ADD8E6',
    borderRadius: '0.5rem',
    border: '1px solid black',
    color: 'black',
    fontWeight: '600'
  };
  return <div>
      {/* Collapse */}
      <div>
        <div style={{
        width: '7rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        marginLeft: '1rem'
      }}>
          <span style={{
          fontSize: '13px'
        }}>Click here:</span>
          <Toggle size='sm' onChange={status => setShowCollapse(status)} />
        </div>
        <div style={{
        padding: '5px'
      }}>
          <h3 style={{
          ...TitleStyle
        }}>Collapse</h3>
          <div style={{
          ...RowStyle
        }}>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='collapse' show={showCollapse}>
                <div style={{
                ...TransitionBoxStyle
              }}>Basic</div>
              </Transitions>
            </div>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='collapse' show={showCollapse} speed={2}>
                <div style={{
                ...TransitionBoxStyle
              }}>Custom Speed: 2s</div>
              </Transitions>
            </div>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='collapse' show={showCollapse} collapsedSize='120px'>
                <div style={{
                ...TransitionBoxStyle
              }}>
                  Custom Collapsed Size: 100px
                </div>
              </Transitions>
            </div>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='collapse' show={showCollapse} orientation='horizontal'>
                <div style={{
                ...TransitionBoxStyle
              }}>Horizonal</div>
              </Transitions>
            </div>
          </div>
        </div>
      </div>
      {/* End of Collapse */}

      {/* Fade */}
      <div>
        <div style={{
        width: '7rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        marginLeft: '1rem'
      }}>
          <span style={{
          fontSize: '13px'
        }}>Click here:</span>
          <Toggle size='sm' onChange={status => setShowFade(status)} />
        </div>
        <div style={{
        padding: '5px'
      }}>
          <h3 style={{
          ...TitleStyle
        }}>Fade</h3>
          <div style={{
          ...RowStyle
        }}>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='fade' show={showFade}>
                <div style={{
                ...TransitionBoxStyle
              }}>Basic</div>
              </Transitions>
            </div>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='fade' show={showFade} speed={2}>
                <div style={{
                ...TransitionBoxStyle
              }}>Custom Speed: 2s</div>
              </Transitions>
            </div>
          </div>
        </div>
      </div>
      {/* End of Fade */}

      {/* Zoom */}
      <div>
        <div style={{
        width: '7rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        marginLeft: '1rem'
      }}>
          <span style={{
          fontSize: '13px'
        }}>Click here:</span>
          <Toggle size='sm' onChange={status => setShowZoom(status)} />
        </div>
        <div style={{
        padding: '5px'
      }}>
          <h3 style={{
          ...TitleStyle
        }}>Zoom</h3>
          <div style={{
          ...RowStyle
        }}>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='zoom' show={showZoom}>
                <div style={{
                ...TransitionBoxStyle
              }}>Basic</div>
              </Transitions>
            </div>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='zoom' show={showZoom} speed={2}>
                <div style={{
                ...TransitionBoxStyle
              }}>Custom speed: 2s</div>
              </Transitions>
            </div>
          </div>
        </div>
      </div>
      {/* End of Zoom */}

      {/* Slide */}
      <div>
        <div style={{
        width: '7rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        marginLeft: '1rem'
      }}>
          <span style={{
          fontSize: '13px'
        }}>Click here:</span>
          <Toggle size='sm' onChange={status => setShowSlide(status)} />
        </div>
        <div style={{
        padding: '5px'
      }}>
          <h3 style={{
          ...TitleStyle
        }}>Slide</h3>
          <div style={{
          ...RowStyle
        }}>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='slide' show={showSlide}>
                <div style={{
                ...TransitionBoxStyle
              }}>Basic</div>
              </Transitions>
            </div>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='slide' show={showSlide} speed={2}>
                <div style={{
                ...TransitionBoxStyle
              }}>Custom speed: 2s</div>
              </Transitions>
            </div>
            <div style={{
            ...TransitionBoxContainerStyle
          }}>
              <Transitions effect='slide' show={showSlide} slideDirection='top'>
                <div style={{
                ...TransitionBoxStyle
              }}>Custom Direction: top</div>
              </Transitions>
            </div>
          </div>
        </div>
      </div>
      {/* End of Slide */}
    </div>;
}`,...(v=(m=o.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};const I=["Variants"];export{o as Variants,I as __namedExportsOrder,k as default};
