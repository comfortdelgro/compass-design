import{j as n}from"./jsx-runtime-ea7736fc.js";import{r as l}from"./index-6c164b11.js";import{S as v}from"./index-27851459.js";import{A}from"./index-03cff320.js";import"./button-be34d763.js";import"./objectToCSS-aff350d4.js";import"./string-de12cf5f.js";import"./use-dom-ref-7c72e1a5.js";import"./useCurrentTheme-474309da.js";import"./index-f318de67.js";import"./floating-ui.react.esm-06842318.js";import"./index-4593f2b5.js";import"./index-318acb9e.js";const a=()=>{const[i,r]=l.useState(""),[g,u]=l.useState([]),[c,t]=l.useState(!1),f=async e=>{try{await new Promise(s=>setTimeout(s,100));const d=["Lion","Giraffe","Elephant","Penguin","Dolphin","Koala","Cheetah","Kangaroo","Octopus","Gorilla","Tiger","Zebra","Hippopotamus","Panda","Snake","Leopard","Polar Bear","Lemur","Jaguar","Chimpanzee"].filter(s=>s.toLowerCase().includes(e.toLowerCase()));u([...d]),console.log("API call successful:",d)}catch(o){console.error("Error during API call:",o)}},S=async()=>{if(!c)try{t(!0),await new Promise(o=>setTimeout(o,500));const e=["Raccoon","Ostrich","Flamingo","Pangolin","Llama","Meerkat","Koala","Chameleon","Sloth","Armadillo","Puma","Jaguar","Gazelle","Mongoose","Platypus","Peacock","Tapir","Hedgehog","Kangaroo","Otter"];u(o=>[...o,...e]),t(!1),console.log("Load more successful:",e)}catch(e){t(!1),console.error("Error during Load more:",e)}},L=e=>{r(e)};return n.jsxs("div",{style:{width:"100%",height:"80vh",padding:"1rem"},children:[n.jsx("h3",{children:"Full-featured Example: Auto Complete"}),n.jsx(A,{searchedValue:i,debounce:800,onSearch:e=>f(e),options:g,onSelect:e=>L(e),notFoundContent:"No data found",onLoadMore:()=>S(),isLoadingMore:c,children:n.jsx(v,{placeholder:"Search",onInput:e=>r(e.target.value),onClear:()=>r(""),value:i})})]})},j={title:"Example/AutoComplete",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"}};a.__docgenInfo={description:"",methods:[],displayName:"FullFeatured"};var m,p,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const onSearchHandler = async (value: string): Promise<void> => {
    try {
      // Simulating API call with a delay
      await new Promise(resolve => setTimeout(resolve, 100)); // Delay of 100ms (adjust as needed)

      // Simulating API response
      const Animals = ['Lion', 'Giraffe', 'Elephant', 'Penguin', 'Dolphin', 'Koala', 'Cheetah', 'Kangaroo', 'Octopus', 'Gorilla', 'Tiger', 'Zebra', 'Hippopotamus', 'Panda', 'Snake', 'Leopard', 'Polar Bear', 'Lemur', 'Jaguar', 'Chimpanzee'];
      const filteredAnimals = Animals.filter(animal => animal.toLowerCase().includes(value.toLowerCase()));
      setSearchResults([...filteredAnimals]);
      console.log('API call successful:', filteredAnimals);
    } catch (error) {
      console.error('Error during API call:', error);
    }
  };
  const onLoadMoreHandler = async (): Promise<void> => {
    if (isLoadingMore) return; // Prevent multiple simultaneous requests
    try {
      setIsLoadingMore(true);
      // Simulating API call with a delay
      await new Promise(resolve => setTimeout(resolve, 500)); // Delay of 500ms (adjust as needed)

      // Simulating API response with additional data
      const moreAnimals = ['Raccoon', 'Ostrich', 'Flamingo', 'Pangolin', 'Llama', 'Meerkat', 'Koala', 'Chameleon', 'Sloth', 'Armadillo', 'Puma', 'Jaguar', 'Gazelle', 'Mongoose', 'Platypus', 'Peacock', 'Tapir', 'Hedgehog', 'Kangaroo', 'Otter'];
      setSearchResults(prevResults => [...prevResults, ...moreAnimals]);
      setIsLoadingMore(false);
      console.log('Load more successful:', moreAnimals);
    } catch (error) {
      setIsLoadingMore(false);
      console.error('Error during Load more:', error);
    }
  };
  const onSelectHandler = (value: string): void => {
    setInputValue(value);
    // You can do anything you want with the selected value here
  };
  return <div style={{
    width: '100%',
    height: '80vh',
    padding: '1rem'
  }}>
      <h3>Full-featured Example: Auto Complete</h3>
      <AutoComplete searchedValue={inputValue} debounce={800} onSearch={value => onSearchHandler(value)} options={searchResults} onSelect={value => onSelectHandler(value)} notFoundContent='No data found' onLoadMore={() => onLoadMoreHandler()} isLoadingMore={isLoadingMore}>
        {/* You can put your own input element here instead of using our SearchField component */}
        <SearchField placeholder='Search' onInput={(event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)} onClear={() => setInputValue('')} value={inputValue} />
      </AutoComplete>
    </div>;
}`,...(h=(p=a.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};const K=["FullFeatured"];export{a as FullFeatured,K as __namedExportsOrder,j as default};
