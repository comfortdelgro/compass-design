<<<<<<<< HEAD:apps/docs/src/components/CarouselSliders.tsx
import {
  CarouselSlider,
  CarouselSliderButton,
  CarouselSliderItem,
  Dropdown,
  NinePartAlignment,
  SocicalIcon,
} from '@comfortdelgro/react-compass'
import {
  faPinterest,
  faTelegram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import {useState} from 'react'
========
// import {
//   CarouselImageSlide,
//   CarouselMobile,
//   CarouselSlide,
//   CarouselV2,
//   ContentSlider,
//   ContentSliderButton,
//   ContentSliderItem,
//   Dropdown,
//   NinePartAlignment,
//   SocicalIcon,
// } from '@comfortdelgro/react-compass'
// import {
//   faPinterest,
//   faTelegram,
//   faTiktok,
// } from '@fortawesome/free-brands-svg-icons'
// import Image from 'next/image'
// import {useState} from 'react'
>>>>>>>> ed5ce42766bd9961ac1a6525c7961b7d6b9e2fba:apps/docs/src/components/ContentSliders.tsx

// const socials: SocicalIcon[] = [
//   {
//     icon: faPinterest,
//     url: 'https://www.pinterest.com.au/',
//   },
//   {icon: faTiktok, url: 'https://www.tiktok.com/'},
//   {icon: faTelegram, url: 'https://telegram.org/'},
// ]

<<<<<<<< HEAD:apps/docs/src/components/CarouselSliders.tsx
const slideData: CarouselSliderItem[] = [
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'Content slider is awesome',
    description: 'You can put whatever you want here',
    buttons: [
      {type: 'primary', label: 'Awesome'},
      {type: 'secondary', label: 'Take a tour'},
    ],
    mask: 0.2,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'This slide contains buttons',
    description: 'These button can listen and handle user click event',
    alignment: 'center-end',
    buttons: [
      {type: 'primary', label: 'Awesome'},
      {type: 'secondary', label: 'Take a tour'},
    ],
    mask: 0.5,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
    title: 'This slide has different alignment',
    description: 'You can use the document for the other alignment options',
    alignment: 'end-center',
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'Content slider is awesome',
    description: 'You can put whatever you want here',
    mask: 0.1,
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
    title: 'This slide contains buttons',
    description: 'These button can listen and handle user click event',
    alignment: 'center-end',
  },
  {
    image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
    title: 'This slide has different alignment',
    description: 'You can use the document for the other alignment options',
    alignment: 'end-center',
    mask: 0.3,
  },
]

const buttons: CarouselSliderButton[] = [
  {
    type: 'secondary',
    label: 'Button',
    callback: () => {
      alert('Button clicked')
    },
  },
  {
    type: 'primary',
    label: 'Call action',
    callback: () => {
      alert('Call action clicked')
    },
  },
]

export const PromotionSlider = () => {
  return (
    <div className='content-slider-sample'>
      <CarouselSlider.Promotion data={slideData} />
    </div>
  )
}

export const PromotionSliderSlideEffect = () => {
  return (
    <div className='content-slider-sample'>
      <CarouselSlider.Promotion data={slideData} effect={'slide'} />
    </div>
  )
}

export const AutoPlaySlider = () => {
  return (
    <div className='content-slider-sample'>
      <CarouselSlider.Promotion data={slideData} autoSwitch={false} />
    </div>
  )
}

export const PromotionSliderWithSocials = () => {
  return (
    <div className='content-slider-sample'>
      <CarouselSlider.Promotion data={slideData} socials={socials} />
    </div>
  )
}

export const CarouselMobileMode = () => {
  return (
    <div style={{width: '320px'}}>
      <CarouselSlider.Mobile
        data={slideData}
        useNavigation={false}
        buttons={buttons}
      />
    </div>
  )
}

export const CarouselMobileFloatingContent = () => {
  return (
    <div style={{width: '480px'}}>
      <CarouselSlider.Mobile
        data={slideData}
        floatingContent={true}
        buttons={buttons}
      />
    </div>
  )
}
========
// const slideData: ContentSliderItem[] = [
//   {
//     image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
//     title: 'Content slider is awesome',
//     description: 'You can put whatever you want here',
//     buttons: [
//       {type: 'primary', label: 'Awesome'},
//       {type: 'secondary', label: 'Take a tour'},
//     ],
//     mask: 0.2,
//   },
//   {
//     image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
//     title: 'This slide contains buttons',
//     description: 'These button can listen and handle user click event',
//     alignment: 'center-end',
//     buttons: [
//       {type: 'primary', label: 'Awesome'},
//       {type: 'secondary', label: 'Take a tour'},
//     ],
//     mask: 0.5,
//   },
//   {
//     image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
//     title: 'This slide has different alignment',
//     description: 'You can use the document for the other alignment options',
//     alignment: 'end-center',
//   },
//   {
//     image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
//     title: 'Content slider is awesome',
//     description: 'You can put whatever you want here',
//     mask: 0.1,
//   },
//   {
//     image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
//     title: 'This slide contains buttons',
//     description: 'These button can listen and handle user click event',
//     alignment: 'center-end',
//   },
//   {
//     image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
//     title: 'This slide has different alignment',
//     description: 'You can use the document for the other alignment options',
//     alignment: 'end-center',
//     mask: 0.3,
//   },
// ]

// const buttons: ContentSliderButton[] = [
//   {
//     type: 'secondary',
//     label: 'Button',
//     callback: () => {
//       alert('Button clicked')
//     },
//   },
//   {
//     type: 'primary',
//     label: 'Call action',
//     callback: () => {
//       alert('Call action clicked')
//     },
//   },
// ]

// export const PromotionSlider = () => {
//   return (
//     <div className='content-slider-sample'>
//       <CarouselV2 data={slideData} />
//     </div>
//   )
// }

// export const AutoPlaySlider = () => {
//   return (
//     <div className='content-slider-sample'>
//       <CarouselV2 data={slideData} autoSwitch={false} />
//     </div>
//   )
// }

// export const PromotionSliderWithSocials = () => {
//   return (
//     <div className='content-slider-sample'>
//       <CarouselV2 data={slideData} socials={socials} />
//     </div>
//   )
// }

// export const CarouselMobileMode = () => {
//   return (
//     <div style={{width: '320px'}}>
//       <CarouselMobile
//         data={slideData}
//         useNavigation={false}
//         buttons={buttons}
//       />
//     </div>
//   )
// }

// export const CarouselMobileFloatingContent = () => {
//   return (
//     <div style={{width: '480px'}}>
//       <CarouselMobile
//         data={slideData}
//         floatingContent={true}
//         buttons={buttons}
//       />
//     </div>
//   )
// }
>>>>>>>> ed5ce42766bd9961ac1a6525c7961b7d6b9e2fba:apps/docs/src/components/ContentSliders.tsx

// export const ImageOnlyDemo = () => {
//   const [activeIndex, setActiveIndex] = useState(0)

//   const imageUrls = [
//     'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
//     'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
//     'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
//   ]

//   const handleSwitchSlide = (index: number) => {
//     setActiveIndex(index)
//   }

<<<<<<<< HEAD:apps/docs/src/components/CarouselSliders.tsx
  return (
    <div className='content-slider-sample'>
      <CarouselSlider onSwitchSlide={handleSwitchSlide}>
        {imageUrls.map((imageUrl: string, index: number) => (
          <CarouselSlider.ImageSlide
            key={index}
            active={activeIndex === index}
            imageUrl={imageUrl}
          />
        ))}
      </CarouselSlider>
    </div>
  )
}
========
//   return (
//     <div className='content-slider-sample'>
//       <ContentSlider onSwitchSlide={handleSwitchSlide}>
//         {imageUrls.map((imageUrl: string, index: number) => (
//           <CarouselImageSlide
//             key={index}
//             active={activeIndex === index}
//             imageUrl={imageUrl}
//           />
//         ))}
//       </ContentSlider>
//     </div>
//   )
// }
>>>>>>>> ed5ce42766bd9961ac1a6525c7961b7d6b9e2fba:apps/docs/src/components/ContentSliders.tsx

// export const TextNavigationButton = () => {
//   const [activeIndex, setActiveIndex] = useState(0)

//   const imageUrls = [
//     'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
//     'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp',
//     'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp',
//   ]

//   const handleSwitchSlide = (index: number) => {
//     setActiveIndex(index)
//   }

<<<<<<<< HEAD:apps/docs/src/components/CarouselSliders.tsx
  return (
    <div className='content-slider-sample'>
      <CarouselSlider
        onSwitchSlide={handleSwitchSlide}
        navigationButtonType='text'
      >
        {imageUrls.map((imageUrl: string, index: number) => (
          <CarouselSlider.ImageSlide
            key={index}
            active={activeIndex === index}
            imageUrl={imageUrl}
          />
        ))}
      </CarouselSlider>
    </div>
  )
}

export const SlideAlignment = () => {
  const [alignment, setAlignment] = useState<NinePartAlignment>('start-start')
  const alignmentData: CarouselSliderItem[] = [
    {
      image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
      title: 'This slide contains buttons',
      description: 'These button can listen and handle user click event',
      alignment,
      buttons: [
        {type: 'primary', label: 'Awesome'},
        {type: 'secondary', label: 'Take a tour'},
      ],
      mask: 0.5,
    },
  ]
========
//   return (
//     <div className='content-slider-sample'>
//       <ContentSlider
//         onSwitchSlide={handleSwitchSlide}
//         navigationButtonType='text'
//       >
//         {imageUrls.map((imageUrl: string, index: number) => (
//           <CarouselImageSlide
//             key={index}
//             active={activeIndex === index}
//             imageUrl={imageUrl}
//           />
//         ))}
//       </ContentSlider>
//     </div>
//   )
// }

// export const SlideAlignment = () => {
//   const [alignment, setAlignment] = useState<NinePartAlignment>('start-start')
//   const alignmentData: ContentSliderItem[] = [
//     {
//       image: 'https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp',
//       title: 'This slide contains buttons',
//       description: 'These button can listen and handle user click event',
//       alignment,
//       buttons: [
//         {type: 'primary', label: 'Awesome'},
//         {type: 'secondary', label: 'Take a tour'},
//       ],
//       mask: 0.5,
//     },
//   ]
>>>>>>>> ed5ce42766bd9961ac1a6525c7961b7d6b9e2fba:apps/docs/src/components/ContentSliders.tsx

//   const handleSelectAlignment = (key: any) => {
//     setAlignment(key as NinePartAlignment)
//   }

<<<<<<<< HEAD:apps/docs/src/components/CarouselSliders.tsx
  return (
    <>
      <div>
        <div style={{width: '300px', padding: '20px'}}>
          <Dropdown.Select
            label='Select alignment'
            placeholder='Select alignment'
            onSelectionChange={handleSelectAlignment}
          >
            <Dropdown.Item key='start-start'>start-start</Dropdown.Item>
            <Dropdown.Item key='ccenter-startat'>center-start</Dropdown.Item>
            <Dropdown.Item key='end-start'>end-start</Dropdown.Item>
            <Dropdown.Item key='start-center'>start-center</Dropdown.Item>
            <Dropdown.Item key='center-center'>center-center</Dropdown.Item>
            <Dropdown.Item key='end-center'>end-center</Dropdown.Item>
            <Dropdown.Item key='start-end'>start-end</Dropdown.Item>
            <Dropdown.Item key='center-end'>center-end</Dropdown.Item>
            <Dropdown.Item key='end-end'>end-end</Dropdown.Item>
          </Dropdown.Select>
        </div>
        <div className='content-slider-sample'>
          <CarouselSlider.Promotion data={alignmentData} autoSwitch={false} />
        </div>
      </div>
    </>
  )
}

export const SampleCarouselSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)
========
//   return (
//     <>
//       <div>
//         <div style={{width: '300px', padding: '20px'}}>
//           <Dropdown.Select
//             label='Select alignment'
//             placeholder='Select alignment'
//             onSelectionChange={handleSelectAlignment}
//           >
//             <Dropdown.Item key='start-start'>start-start</Dropdown.Item>
//             <Dropdown.Item key='ccenter-startat'>center-start</Dropdown.Item>
//             <Dropdown.Item key='end-start'>end-start</Dropdown.Item>
//             <Dropdown.Item key='start-center'>start-center</Dropdown.Item>
//             <Dropdown.Item key='center-center'>center-center</Dropdown.Item>
//             <Dropdown.Item key='end-center'>end-center</Dropdown.Item>
//             <Dropdown.Item key='start-end'>start-end</Dropdown.Item>
//             <Dropdown.Item key='center-end'>center-end</Dropdown.Item>
//             <Dropdown.Item key='end-end'>end-end</Dropdown.Item>
//           </Dropdown.Select>
//         </div>
//         <div className='content-slider-sample'>
//           <CarouselV2 data={alignmentData} autoSwitch={false} />
//         </div>
//       </div>
//     </>
//   )
// }

// export const SampleContentSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0)
>>>>>>>> ed5ce42766bd9961ac1a6525c7961b7d6b9e2fba:apps/docs/src/components/ContentSliders.tsx

//   const handleSwitchSlide = (index: number) => {
//     setActiveIndex(index)
//   }

<<<<<<<< HEAD:apps/docs/src/components/CarouselSliders.tsx
  return (
    <CarouselSlider onSwitchSlide={handleSwitchSlide}>
      <CarouselSlider.Slide active={activeIndex === 0}>
        <h3>First slide</h3>
        <br />
        You can put any content here
        <br />
        Replace this content with everything you want
        <br />
        With your own custom styles
        <br />
        <i>The gray background here is just for this sample</i>
      </CarouselSlider.Slide>
      <CarouselSlider.Slide active={activeIndex === 1}>
        <h3>Second slide</h3>
        <br />
        Even if you&apos;re using a <b>rich text content</b>,{' '}
        <i>It also works!</i>
        <br />
        <Image
          width={100}
          height={100}
          alt='sample image'
          src='https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp'
        />
      </CarouselSlider.Slide>
      <CarouselSlider.Slide active={activeIndex === 2}>
        <h3>This is the last slide</h3>
      </CarouselSlider.Slide>
    </CarouselSlider>
  )
}
========
//   return (
//     <ContentSlider onSwitchSlide={handleSwitchSlide}>
//       <CarouselSlide active={activeIndex === 0}>
//         <h3>First slide</h3>
//         <br />
//         You can put any content here
//         <br />
//         Replace this content with everything you want
//         <br />
//         With your own custom styles
//         <br />
//         <i>The gray background here is just for this sample</i>
//       </CarouselSlide>
//       <CarouselSlide active={activeIndex === 1}>
//         <h3>Second slide</h3>
//         <br />
//         Even if you&apos;re using a <b>rich text content</b>,{' '}
//         <i>It also works!</i>
//         <br />
//         <Image
//           width={100}
//           height={100}
//           alt='sample image'
//           src='https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp'
//         />
//       </CarouselSlide>
//       <CarouselSlide active={activeIndex === 2}>
//         <h3>This is the last slide</h3>
//       </CarouselSlide>
//     </ContentSlider>
//   )
// }

export {}
>>>>>>>> ed5ce42766bd9961ac1a6525c7961b7d6b9e2fba:apps/docs/src/components/ContentSliders.tsx
