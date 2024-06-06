import{j as e}from"./jsx-runtime-ea7736fc.js";import{H as u}from"./heart-filled-5f2b210b.js";import{R as p}from"./index-6c164b11.js";import{M as a}from"./index-0ae06ec8.js";import"./index-33fba25f.js";import"./objectToCSS-aff350d4.js";import"./use-dom-ref-7c72e1a5.js";import"./index-f318de67.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";import"./pick-child-c116e6b4.js";function M(){const t=["Alice","Bob","Charlie","David","Emily","Frank","Gina","Haley","Isaac","John"],n=["Smith","Johnson","Williams","Jones","Brown","Davis","Miller","Wilson","Moore","Taylor"],r=t[Math.floor(Math.random()*t.length)]??"",o=n[Math.floor(Math.random()*n.length)]??"";return{name:`${r} ${o}`,firstName:r,lastName:o}}function k(t,n=1){const r=[];for(let o=0;o<t;o++){const s=o+n,i=M(),m=i.name,c=i.firstName,h=i.lastName,v=Math.floor(Math.random()*60+5),l=Math.floor(Math.random()*10)%2===1?"Male":"Female";r.push({id:s,name:m,age:v,gender:l,firstName:c,lastName:h})}return r}const g={display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",height:"100%",padding:"3rem"},d=()=>{const[t,n]=p.useState(["cat"]),[r,o]=p.useState(["cat"]),[s,i]=p.useState(["snake","cat","dog"]),[m,c]=p.useState([]),[h,v]=p.useState(k(10));return e.jsxs("div",{style:{...g},children:[e.jsx("h3",{children:"Controlled"}),e.jsxs(a,{label:"Favorite Animal",disabledValues:["cat"],placeholder:"Choose an animal",values:t,erroredValues:["panda"],isRequired:!0,onValuesChange:l=>n(l),onBlur:()=>console.log("blur"),onFocus:()=>console.log("focus"),css:{width:"50%"},children:[e.jsx(a.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",borderBottom:"2px solid #EDEBE9"},children:[e.jsx("span",{style:{color:"#323130",fontSize:"12px",fontWeight:"bold",padding:0,margin:0},children:"Filter"}),e.jsx("button",{style:{fontSize:"12px",fontWeight:"bold",color:"#A4262C",border:0,cursor:"pointer",backgroundColor:"transparent"},onClick:()=>n([]),children:"Clear"})]})}),e.jsxs(a.Item,{value:"panda",textValue:"Panda",children:[e.jsx(u,{style:{marginRight:5}}),"Red Panda"]}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"UnControlled"}),e.jsxs(a,{label:"Favorite Animal",disabledValues:["snake"],defaultValues:["snake"],placeholder:"Choose an animal",children:[e.jsx(a.Item,{value:"red panda ",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"Errored"}),e.jsxs(a,{label:"Favorite Animal",disabledValues:["snake"],placeholder:"Choose an animal",isErrored:!0,errorMessage:"Error Message",helperText:"Helper Message",children:[e.jsx(a.Item,{value:"panda",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"displayedValue: String"}),e.jsxs(a,{label:"Favorite Animal",displayedValue:"string",defaultValues:["snake","cat","dog"],placeholder:"Choosesss an animal",css:{width:"200px"},children:[e.jsx(a.Item,{value:"panda",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"Custom display value (only effective when using with displayedValue string)"}),e.jsxs(a,{label:"Favorite Animal",displayedValue:"string",customDisplayValue:`${s.length} animals selected`,placeholder:"Choosesss an animal",css:{width:"290px"},values:s,onValuesChange:l=>i(l),children:[e.jsx(a.Item,{value:"panda",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"Checkmark types"}),e.jsxs(a,{label:"Favorite Animal",displayedValue:"string",defaultValues:["snake","cat","dog"],placeholder:"Choosesss an animal",css:{width:"200px"},children:[e.jsx(a.Item,{value:"panda",checkmark:"tick",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",checkmark:"tick",children:"Cat"}),e.jsx(a.Item,{value:"dog",checkmark:"tick",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",checkmark:"tick",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",checkmark:"tick",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",checkmark:"tick",children:"Snake"})]}),e.jsx("h3",{children:"Loading"}),e.jsxs(a,{label:"Favorite Animal",placeholder:"Choose an animal",isLoading:!0,children:[e.jsx(a.Item,{value:"panda",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"With Header"}),e.jsxs(a,{disabledValues:["snake"],label:"Favorite Animal",placeholder:"Choose an animal",children:[e.jsx(a.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 16px",borderBottom:"2px solid #EDEBE9"},children:[e.jsx("span",{style:{color:"#323130",fontSize:"12px",fontWeight:"bold",padding:0,margin:0},children:"Filter"}),e.jsx("button",{style:{fontSize:"12px",fontWeight:"bold",color:"#A4262C",border:0,cursor:"pointer",backgroundColor:"transparent"},children:"Clear"})]})}),e.jsx(a.Item,{value:"panda",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"With Icon"}),e.jsxs(a,{label:"Favorite Animal",placeholder:"Choose an animal",icon:e.jsx(u,{}),children:[e.jsx(a.Item,{value:"panda",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"Number of rows"}),e.jsxs(a,{label:"Favorite Animal",placeholder:"Choose an animal",numberOfRows:4,children:[e.jsx(a.Item,{value:"panda",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"With Section"}),e.jsxs(a,{label:"Favorite Animal",placeholder:"Choose an animal",children:[e.jsx(a.Item,{value:"fly",children:"Fly"}),e.jsxs(a.Section,{title:"Group 1",children:[e.jsx(a.Item,{value:"panda",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"})]}),e.jsxs(a.Section,{title:"Group 2",children:[e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]})]}),e.jsx("h3",{children:"Handle Section Click"}),e.jsxs(a,{label:"Favorite Animal",placeholder:"Choose an animal",values:r,isRequired:!0,onValuesChange:l=>o(l),css:{width:"80%"},children:[e.jsxs(a.Section,{title:"Amphibians",isClickable:!0,checkmark:"tick",children:[e.jsx(a.Item,{value:"frogs",checkmark:"tick",children:"Frogs"}),e.jsx(a.Item,{value:"newts",checkmark:"tick",children:"Newts"})]}),e.jsxs(a.Section,{title:"Birds",isClickable:!0,checkmark:"tick",children:[e.jsx(a.Item,{value:"chickens",checkmark:"tick",children:"Chickens"}),e.jsx(a.Item,{value:"hummingbirds",checkmark:"tick",children:"Hummingbirds"})]}),e.jsxs(a.Section,{title:"Fish",isClickable:!0,checkmark:"tick",children:[e.jsx(a.Item,{value:"eels",checkmark:"tick",children:"Eels"}),e.jsx(a.Item,{value:"hagfish",checkmark:"tick",children:"Hagfish"}),e.jsx(a.Item,{value:"lampreys",checkmark:"tick",children:"Lampreys"})]}),e.jsxs(a.Section,{isClickable:!0,title:"Mammals",checkmark:"tick",children:[e.jsx(a.Item,{value:"aardvarks",checkmark:"tick",children:"Aardvarks"}),e.jsx(a.Item,{value:"bats",checkmark:"tick",children:"Bats"}),e.jsx(a.Item,{value:"humans",checkmark:"tick",children:"Humans"})]})]}),e.jsx("h3",{children:"Disabled"}),e.jsxs(a,{label:"Favorite Animal",disabledValues:["cat"],placeholder:"Choose an animal",values:t,isRequired:!0,onValuesChange:l=>n(l),isDisabled:!0,children:[e.jsxs(a.Item,{value:"panda",children:[e.jsx(u,{style:{marginRight:5}}),"Red Panda"]}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"Variant: select"}),e.jsxs(a,{label:"Favorite Animal",placeholder:"Choose an animal",defaultValues:["cat"],variant:"select",displayedValue:"string",children:[e.jsxs(a.Item,{value:"panda",children:[e.jsx(u,{style:{marginRight:5}}),"Red Panda"]}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"Errored strings"}),e.jsxs(a,{label:"Favorite Animal",defaultValues:["panda","cat"],erroredValues:["panda"],isErrored:!0,errorMessage:"Red panda is not available",children:[e.jsx(a.Item,{value:"panda",children:"Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"Limit width for Popover"}),e.jsxs(a,{label:"Favorite Animal",placeholder:"Animals",css:{width:"250px"},popoverCSS:{width:"auto"},children:[e.jsx(a.Item,{value:"Panda",textValue:"Panda",children:"Red Panda Red Panda Red Panda Red Panda Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"Custom CSS"}),e.jsxs(a,{label:"Favorite Animal",placeholder:"Animals",css:{"& .button":{span:{color:"$whiteText"}},"& .dropdownContainer":{color:"$whiteText",borderColor:"$warning",borderWidth:"3px",backgroundColor:"$cdgBlue100","& .selectedItemWrapper > div":{color:"$whiteText",svg:{color:"$whiteText"}},"& .selectedItemWrapper > input":{color:"$whiteText",backgroundColor:"$cdgBlue100"},"& .dropdown-icon svg":{color:"$whiteText"}}},children:[e.jsx(a.Item,{value:"Panda",textValue:"Panda",children:"Red Panda Red Panda Red Panda Red Panda Red Panda"}),e.jsx(a.Item,{value:"cat",children:"Cat"}),e.jsx(a.Item,{value:"dog",children:"Dog"}),e.jsx(a.Item,{value:"aardvark",children:"Aardvark"}),e.jsx(a.Item,{value:"kangaroo",children:"Kangaroo"}),e.jsx(a.Item,{value:"snake",children:"Snake"})]}),e.jsx("h3",{children:"Load more"}),e.jsx(a,{label:"Using load more",placeholder:"Select name",values:m,onValuesChange:l=>c(l),onLoadMore:()=>{v(l=>[...l,...k(10,l.length+1)])},noDataMessage:"There not one at all...",children:h.map(l=>e.jsx(a.Item,{value:l.id,children:l.name},l.id))}),e.jsx("div",{style:{height:"20rem"}})]})},K={title:"Example/Multiple Dropdown",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"}};d.__docgenInfo={description:"",methods:[],displayName:"Basic"};var I,D,w;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [value, setValue] = React.useState<string[]>(['cat']);
  const [sectionValue, setSectionValue] = React.useState<string[]>(['cat']);
  const [value2, setValue2] = React.useState<string[]>(['snake', 'cat', 'dog']);
  const [loadMoreValue, setLoadMoreValue] = React.useState<string[]>([]);
  const [data, setData] = React.useState<SampleData[]>(generateRandomData(10));
  return <div style={{
    ...style
  }}>
      <h3>Controlled</h3>
      <MultipleDropdown label='Favorite Animal' disabledValues={['cat']} placeholder='Choose an animal' values={value} erroredValues={['panda']} isRequired onValuesChange={(k: string[]) => setValue(k)} onBlur={() => console.log('blur')} onFocus={() => console.log('focus')} css={{
      width: '50%'
    }}>
        <MultipleDropdown.Header>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          borderBottom: '2px solid #EDEBE9'
        }}>
            <span style={{
            color: '#323130',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: 0,
            margin: 0
          }}>
              Filter
            </span>
            <button style={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#A4262C',
            border: 0,
            cursor: 'pointer',
            backgroundColor: 'transparent'
          }} onClick={() => setValue([])}>
              Clear
            </button>
          </div>
        </MultipleDropdown.Header>
        <MultipleDropdown.Item value='panda' textValue='Panda'>
          <HeartFilled style={{
          marginRight: 5
        }} />
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>UnControlled</h3>
      <MultipleDropdown label='Favorite Animal' disabledValues={['snake']} defaultValues={['snake']} placeholder='Choose an animal'>
        <MultipleDropdown.Item value='red panda '>
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Errored</h3>
      <MultipleDropdown label='Favorite Animal' disabledValues={['snake']} placeholder='Choose an animal' isErrored errorMessage='Error Message' helperText='Helper Message'>
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>displayedValue: String</h3>
      <MultipleDropdown label='Favorite Animal' displayedValue='string' defaultValues={['snake', 'cat', 'dog']} placeholder='Choosesss an animal' css={{
      width: '200px'
    }}>
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>
        Custom display value (only effective when using with displayedValue
        string)
      </h3>
      <MultipleDropdown label='Favorite Animal' displayedValue='string' customDisplayValue={\`\${value2.length} animals selected\`} placeholder='Choosesss an animal' css={{
      width: '290px'
    }} values={value2} onValuesChange={(k: string[]) => setValue2(k)}>
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Checkmark types</h3>
      <MultipleDropdown label='Favorite Animal' displayedValue='string' defaultValues={['snake', 'cat', 'dog']} placeholder='Choosesss an animal' css={{
      width: '200px'
    }}>
        <MultipleDropdown.Item value='panda' checkmark='tick'>
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat' checkmark='tick'>
          Cat
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog' checkmark='tick'>
          Dog
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark' checkmark='tick'>
          Aardvark
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo' checkmark='tick'>
          Kangaroo
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake' checkmark='tick'>
          Snake
        </MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Loading</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal' isLoading>
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>With Header</h3>
      <MultipleDropdown disabledValues={['snake']} label='Favorite Animal' placeholder='Choose an animal'>
        <MultipleDropdown.Header>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          borderBottom: '2px solid #EDEBE9'
        }}>
            <span style={{
            color: '#323130',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: 0,
            margin: 0
          }}>
              Filter
            </span>
            <button style={{
            fontSize: '12px',
            fontWeight: 'bold',
            color: '#A4262C',
            border: 0,
            cursor: 'pointer',
            backgroundColor: 'transparent'
          }}>
              Clear
            </button>
          </div>
        </MultipleDropdown.Header>
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>With Icon</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal' icon={<HeartFilled />}>
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Number of rows</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal' numberOfRows={4}>
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>With Section</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal'>
        <MultipleDropdown.Item value='fly'>Fly</MultipleDropdown.Item>
        <MultipleDropdown.Section title='Group 1'>
          <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
          <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
          <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Group 2'>
          <MultipleDropdown.Item value='aardvark'>
            Aardvark
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='kangaroo'>
            Kangaroo
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
        </MultipleDropdown.Section>
      </MultipleDropdown>
      <h3>Handle Section Click</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal' values={sectionValue} isRequired onValuesChange={(k: string[]) => setSectionValue(k)} css={{
      width: '80%'
    }}>
        <MultipleDropdown.Section title='Amphibians' isClickable checkmark='tick'>
          <MultipleDropdown.Item value='frogs' checkmark='tick'>
            Frogs
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='newts' checkmark='tick'>
            Newts
          </MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Birds' isClickable checkmark='tick'>
          <MultipleDropdown.Item value='chickens' checkmark='tick'>
            Chickens
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='hummingbirds' checkmark='tick'>
            Hummingbirds
          </MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section title='Fish' isClickable checkmark='tick'>
          <MultipleDropdown.Item value='eels' checkmark='tick'>
            Eels
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='hagfish' checkmark='tick'>
            Hagfish
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='lampreys' checkmark='tick'>
            Lampreys
          </MultipleDropdown.Item>
        </MultipleDropdown.Section>
        <MultipleDropdown.Section isClickable title='Mammals' checkmark='tick'>
          <MultipleDropdown.Item value='aardvarks' checkmark='tick'>
            Aardvarks
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='bats' checkmark='tick'>
            Bats
          </MultipleDropdown.Item>
          <MultipleDropdown.Item value='humans' checkmark='tick'>
            Humans
          </MultipleDropdown.Item>
        </MultipleDropdown.Section>
      </MultipleDropdown>
      <h3>Disabled</h3>
      <MultipleDropdown label='Favorite Animal' disabledValues={['cat']} placeholder='Choose an animal' values={value} isRequired onValuesChange={(k: string[]) => setValue(k)} isDisabled>
        <MultipleDropdown.Item value='panda'>
          <HeartFilled style={{
          marginRight: 5
        }} />
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Variant: select</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Choose an animal' defaultValues={['cat']} variant='select' displayedValue='string'>
        <MultipleDropdown.Item value='panda'>
          <HeartFilled style={{
          marginRight: 5
        }} />
          Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Errored strings</h3>
      <MultipleDropdown label='Favorite Animal' defaultValues={['panda', 'cat']} erroredValues={['panda']} isErrored errorMessage='Red panda is not available'>
        <MultipleDropdown.Item value='panda'>Red Panda</MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Limit width for Popover</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Animals' css={{
      width: '250px'
    }} popoverCSS={{
      width: 'auto'
    }}>
        <MultipleDropdown.Item value='Panda' textValue='Panda'>
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Custom CSS</h3>
      <MultipleDropdown label='Favorite Animal' placeholder='Animals' css={{
      '& .button': {
        span: {
          color: '$whiteText'
        }
      },
      '& .dropdownContainer': {
        color: '$whiteText',
        borderColor: '$warning',
        borderWidth: '3px',
        backgroundColor: '$cdgBlue100',
        '& .selectedItemWrapper > div': {
          color: '$whiteText',
          svg: {
            color: '$whiteText'
          }
        },
        '& .selectedItemWrapper > input': {
          color: '$whiteText',
          backgroundColor: '$cdgBlue100'
        },
        '& .dropdown-icon svg': {
          color: '$whiteText'
        }
      }
    }}>
        <MultipleDropdown.Item value='Panda' textValue='Panda'>
          Red Panda Red Panda Red Panda Red Panda Red Panda
        </MultipleDropdown.Item>
        <MultipleDropdown.Item value='cat'>Cat</MultipleDropdown.Item>
        <MultipleDropdown.Item value='dog'>Dog</MultipleDropdown.Item>
        <MultipleDropdown.Item value='aardvark'>Aardvark</MultipleDropdown.Item>
        <MultipleDropdown.Item value='kangaroo'>Kangaroo</MultipleDropdown.Item>
        <MultipleDropdown.Item value='snake'>Snake</MultipleDropdown.Item>
      </MultipleDropdown>
      <h3>Load more</h3>
      <MultipleDropdown label='Using load more' placeholder='Select name' values={loadMoreValue} onValuesChange={(k: string[]) => setLoadMoreValue(k)} onLoadMore={() => {
      setData(currentData => [...currentData, ...generateRandomData(10, currentData.length + 1)]);
    }} noDataMessage='There not one at all...'>
        {data.map(item => <MultipleDropdown.Item value={item.id} key={item.id}>
            {item.name}
          </MultipleDropdown.Item>)}
      </MultipleDropdown>
      <div style={{
      height: '20rem'
    }} />
    </div>;
}`,...(w=(D=d.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const E=["Basic"];export{d as Basic,E as __namedExportsOrder,K as default};
