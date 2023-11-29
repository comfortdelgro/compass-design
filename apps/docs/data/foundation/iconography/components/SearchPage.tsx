import {
  Box,
  Icon,
  SearchField,
  Tabs,
  Toast,
  Typography,
} from '@comfortdelgro/react-compass'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import {useRouter, useSearchParams} from 'next/navigation'
import React from 'react'
import { icons } from './constants'
import { Grid } from '@comfortdelgro/react-compass'
import styles from './styles/SearchPage.module.css'
interface Props {
  component: React.ReactNode
  name: string
}

const DEFAULT_TAB_ITEMS = [{ key: 'all', title: 'All' }]

const IconBox: React.FC<Props> = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('q') ?? ''
  //============================ STATE ============================
  const [tabItems, setTabItems] = React.useState(DEFAULT_TAB_ITEMS)
  const [tab, setTab] = React.useState(DEFAULT_TAB_ITEMS[0].key)

  //============================ EFFECT ============================
  const searchList = React.useMemo(
    () => icons.filter((icon) => icon.name.includes(search)),
    [search],
  )

  React.useEffect(() => {
    let typeSet = new Set<string>()
    let temp = [...DEFAULT_TAB_ITEMS]
    icons
      .filter((icon) => icon.name.includes(search))
      .filter((icon) => icon.type)
      .forEach((icon) => typeSet.add(icon.type))
    typeSet.forEach((type) => temp.push({ key: type, title: type }))
    setTabItems(temp)
  }, [search])

  //============================ CALLBACK ============================
  const navigate = (url?: string) => {
    if (url) {
      router.push(`/foundation/iconography/search?q=${url}`)
    } else {
      router.push(`/foundation/iconography/search`)
    }
  }

  //============================ RENDER ============================
  return (
    <Box>
      <SearchField
        value={search}
        onSubmit={navigate}
        onClear={navigate}
        placeholder='Search for any icon...'
        css={{margin: '8px 0'}}
      />
      {searchList.length !== 0 ? (
        <Box margin='16px 0'>
          <Tabs.Paneless
            items={tabItems}
            selectedKey={tab}
            defaultSelectedKey={DEFAULT_TAB_ITEMS[0].key}
            onSelectionChange={(k) => setTab(k as string)}
            css={{
              gridTemplateColumns: 'repeat(auto-fill)',
            }}
          />
          <Grid spacing='sm' css={{marginTop: '8px'}}>
            {searchList.map((icon, idx) =>
              tab === 'all' || tab === icon.type ? (
                <Grid.Item key={idx} xs={4} sm={4} md={3} lg={2} xl={2}>
                  <BoxItem icon={icon} />
                </Grid.Item>
              ) : <></>,
            )}
          </Grid>
        </Box>
      ) : (
        <Typography.Display
          variant='display3'
          css={{ marginTop: 16, textAlign: 'center' }}
        >
          Happiness is made, <span style={{ color: '#A4262C' }}>NOT FOUND</span>
        </Typography.Display>
      )}
    </Box>
  )
}

interface BoxItemProps {
  icon: {
    name: string
    type: string
    component: React.ReactNode
  }
}

const BoxItem = ({ icon }: BoxItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Box
      className={styles.BoxItem}
      onClick={() => {
        navigator && navigator.clipboard.writeText(icon.name)
        setIsOpen(true)
      }}
    >
      {icon.type !== '' && (
        <Box
          css={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            top: '-12px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            padding: '6px 12px',
            background: '#ffd43b',
          }}
        >
          {icon.type}
        </Box>
      )}
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          svg: {
            height: 40,
            width: 'auto',
          },
        }}
      >
        {icon.component}
      </Box>
      <Box
        css={{
          display: 'flex',
          marginTop: '24px',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        {icon.name}
      </Box>
      <Toast
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        autoClose={2000}
        color='informative'
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <Toast.Title>Copied Successfully</Toast.Title>
        <Toast.CloseIcon>
          <Icon icon={faXmark} />
        </Toast.CloseIcon>
        <Toast.Message>Copied to clipboard: {icon.name}</Toast.Message>
      </Toast>
    </Box>
  )
}

export default IconBox
