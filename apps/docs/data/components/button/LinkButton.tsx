import { Button, Flexbox, Icon } from '@comfortdelgro/react-compass'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ButtonIcon() {
    return (
        <Flexbox css={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button
                href='/#page'
                variant='primary'
                leftIcon={<Icon icon={faChevronDown} />}
            >
                Click me
            </Button>
            <Button href='https://google.com' hrefExternal variant='secondary'>
                Google
            </Button>
            <Button href='/#page' variant='danger' hrefTarget='_blank'>
                Hit me
            </Button>
            <Button href='/#page' variant='ghost'>
                Beat me
            </Button>
        </Flexbox>
    )
}
