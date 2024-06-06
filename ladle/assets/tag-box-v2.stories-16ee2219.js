import{j as d}from"./jsx-runtime-ea7736fc.js";import{r as g}from"./index-6c164b11.js";import{T as f}from"./index-34b8f82d.js";import"./get-80d15efb.js";import"./isArray-5ac9c87d.js";import"./isSymbol-49712d24.js";import"./isObjectLike-c4ff7b99.js";import"./_MapCache-94815e6f.js";import"./isObject-f34bc055.js";import"./toString-0ef0ca41.js";import"./objectToCSS-aff350d4.js";const E={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:"3rem"},x=()=>new Promise(t=>{setTimeout(()=>{const a=[{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 1",isErrored:!1},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 2",isErrored:!1},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 3",isErrored:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 4",isErrored:!1},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 5",isErrored:!0},{id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:"Driver 6",isErrored:!1}];t(a)},1500)}),o=()=>{const[t,a]=g.useState([]);return g.useEffect(()=>{(async()=>{try{const s=await x();a(s)}catch(s){console.error("Error fetching tags:",s)}})()},[]),d.jsx("div",{style:{...E},children:d.jsx(f,{tagBoxLabel:"Attribute values",addTagPlaceholder:"Please enter to add tag",tags:t,isErrored:!0,css:{width:"100%"}})})},r=()=>{const[t,a]=g.useState([]),c=e=>{const n={id:`cdg-id-${Math.random().toString(36).substring(2)}`,value:e.trim()};a([...t,n])},s=e=>{const n=t.filter(i=>i.id!==e);a(n)},b=(e,n)=>{const i=t.map(l=>l.id===e?{id:e,value:n}:l);a(i)};return d.jsx("div",{style:{...E},children:d.jsx(f,{tagBoxLabel:"Attribute values",addTagPlaceholder:"Please enter to add tag",tags:t,isErrored:!1,isEditable:!0,onAddTag:c,onRemoveTag:e=>s(e.id),onEditTag:e=>b(e.id,e.value),css:{width:"70%"}})})},I={title:"Example/Tag box v2 ",component:r,tags:["autodocs"],parameters:{layout:"fullscreen"}};o.__docgenInfo={description:"",methods:[],displayName:"WithErroredItems"};r.__docgenInfo={description:"",methods:[],displayName:"Basic"};var u,m,T;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const [tags, setTags] = useState<Tag[]>([]);
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const fetchedTags = await mockApiCall();
        setTags(fetchedTags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };
    void fetchTags();
  }, []);
  return <div style={{
    ...style
  }}>
      <TagBoxV2 tagBoxLabel='Attribute values' addTagPlaceholder='Please enter to add tag' tags={tags} isErrored={true} css={{
      width: '100%'
    }} />
    </div>;
}`,...(T=(m=o.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var h,p,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [tags, setTags] = useState<Tag[]>([]);
  const handleAddTag = (newTagValue: string) => {
    const newTagObject: Tag = {
      id: \`cdg-id-\${Math.random().toString(36).substring(2)}\`,
      value: newTagValue.trim()
    };
    setTags([...tags, newTagObject]);
  };
  const handleRemoveTag = (id: number) => {
    const newTags = tags.filter(tag => tag.id !== id);
    setTags(newTags);
  };
  const handleEditTag = (id: number, value: string) => {
    const updatedTags = tags.map(tag => {
      if (tag.id === id) {
        return {
          id,
          value
        };
      }
      return tag;
    });
    setTags(updatedTags);
  };
  return <div style={{
    ...style
  }}>
      <TagBoxV2 tagBoxLabel='Attribute values' addTagPlaceholder='Please enter to add tag' tags={tags} isErrored={false} isEditable onAddTag={handleAddTag} onRemoveTag={tagToBeRemoved => handleRemoveTag((tagToBeRemoved.id as number))} onEditTag={tagToBeEdited => handleEditTag((tagToBeEdited.id as number), tagToBeEdited.value)} css={{
      width: '70%'
    }} />
    </div>;
}`,...(v=(p=r.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};const _=["WithErroredItems","Basic"];export{r as Basic,o as WithErroredItems,_ as __namedExportsOrder,I as default};
