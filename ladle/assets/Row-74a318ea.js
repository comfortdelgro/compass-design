import{j as t}from"./jsx-runtime-ea7736fc.js";import{R as _}from"./index-6c164b11.js";import{c as l,C as d}from"./string-cf4adbb3.js";import{u as v}from"./use-dom-ref-7c72e1a5.js";const u="_itemContentWrapper_19qvm_6",w="_itemDot_19qvm_21",z="_itemLabel_19qvm_36",I="_itemHeaderContainer_19qvm_53",y="_timeline_19qvm_67",T="_timelineContainer_19qvm_85",$="_itemContainer_19qvm_191",e={itemContentWrapper:u,itemDot:w,itemLabel:z,itemHeaderContainer:I,timeline:y,timelineContainer:T,"timeline-vertical-right-right":"_timeline-vertical-right-right_19qvm_100","timeline-vertical-left-left":"_timeline-vertical-left-left_19qvm_104","timeline-vertical-left-right":"_timeline-vertical-left-right_19qvm_120","timeline-vertical-right-left":"_timeline-vertical-right-left_19qvm_137","timeline-vertical-alternate-alternate":"_timeline-vertical-alternate-alternate_19qvm_148","header-even":"_header-even_19qvm_152","header-odd":"_header-odd_19qvm_157","label-odd":"_label-odd_19qvm_164","content-even":"_content-even_19qvm_169","timeline-horizontal-top-bottom":"_timeline-horizontal-top-bottom_19qvm_174",itemContainer:$,"timeline-horizontal-bottom-top":"_timeline-horizontal-bottom-top_19qvm_199","timeline-horizontal-alternate-alternate":"_timeline-horizontal-alternate-alternate_19qvm_223","itemContainer-even":"_itemContainer-even_19qvm_246","itemContainer-odd":"_itemContainer-odd_19qvm_251","timelineContainer-vertical-right-right":"_timelineContainer-vertical-right-right_19qvm_260","timelineContainer-vertical-left-left":"_timelineContainer-vertical-left-left_19qvm_264","timelineContainer-vertical-left-right":"_timelineContainer-vertical-left-right_19qvm_269","timelineContainer-vertical-right-left":"_timelineContainer-vertical-right-left_19qvm_274","timelineContainer-vertical-alternate-alternate":"_timelineContainer-vertical-alternate-alternate_19qvm_279","timelineContainer-horizontal-top-bottom":"_timelineContainer-horizontal-top-bottom_19qvm_284","timelineContainer-horizontal-bottom-top":"_timelineContainer-horizontal-bottom-top_19qvm_289","timelineContainer-horizontal-alternate-alternate":"_timelineContainer-horizontal-alternate-alternate_19qvm_294"},q=_.forwardRef((r,a)=>{const{children:m,css:s={},mode:n="vertical",labelAlignment:o="right",itemAlignment:i="right",className:c,...h}=r,f=v(a),C=l(e.timelineContainer,e[`timelineContainer-${n}-${o}-${i}`],c,"cdg-timeline-container"),p=l(e.timeline,e[`timeline-${n}-${o}-${i}`],c,"cdg-timeline");return t.jsx(t.Fragment,{children:t.jsx(d,{css:s,children:t.jsx("div",{...h,ref:f,className:C,children:t.jsx("div",{className:p,children:m})})})})});q.__docgenInfo={description:"",methods:[],displayName:"Timeline"};const b=_.forwardRef((r,a)=>{const{children:m,css:s={},label:n="",identifier:o=0,icon:i,dot:c,...h}=r,f=v(a),C=l(o%2===0?e.itemContainer+" "+e["itemContainer-even"]:e.itemContainer+" "+e["itemContainer-odd"],"cdg-timeline-item"),p=l(o%2===0?e.itemHeaderContainer+" "+e["header-even"]:e.itemHeaderContainer+" "+e["header-odd"],"cdg-timeline-item-header"),N=l(o%2===0?e.content+" "+e["content-even"]:e.content,"cdg-timeline-item-content"),j=l(e.itemDot,"cdg-timeline-item-dot"),R=l(e.itemLabel,"cdg-timeline-item-dot");return t.jsx(d,{css:s,children:t.jsxs("div",{ref:f,...h,className:C,children:[t.jsxs("div",{className:p,children:[c||t.jsx("div",{className:j,children:i}),typeof n=="string"?t.jsx("div",{className:R,children:n}):n]}),t.jsx("div",{className:N,children:m})]})})});b.__docgenInfo={description:"",methods:[],displayName:"TimelineItem"};const g=q;g.Item=b;g.Item.displayName="Timeline.Item";g.displayName="Timeline";const D="_flexbox_4rs4b_6",H="_row_4rs4b_12",L="_column_4rs4b_20",x={flexbox:D,row:H,column:L},P=_.forwardRef((r,a)=>{const{children:m,css:s={},className:n="",...o}=r,i=v(a);return t.jsx(d,{css:s,childrenRef:i,children:t.jsx("div",{...o,ref:i,className:l(x.column,n,"cdg-column"),children:m})})});P.__docgenInfo={description:"",methods:[],displayName:"Column"};const F=_.forwardRef((r,a)=>{const{children:m,css:s={},className:n="",...o}=r,i=v(a);return t.jsx(d,{css:s,childrenRef:i,children:t.jsx("div",{...o,ref:i,className:l(x.flexbox,n,"cdg-flexbox"),children:m})})});F.__docgenInfo={description:"",methods:[],displayName:"Flexbox"};const W=_.forwardRef((r,a)=>{const{children:m,css:s={},className:n="",...o}=r,i=v(a);return t.jsx(d,{css:s,childrenRef:i,children:t.jsx("div",{...o,ref:i,className:l(x.row,n,"cdg-row"),children:m})})});W.__docgenInfo={description:"",methods:[],displayName:"Row"};export{P as C,g as T};
