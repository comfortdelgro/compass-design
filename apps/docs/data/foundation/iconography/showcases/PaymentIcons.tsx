import Affirm from '@comfortdelgro/compass-icons/react/payment/affirm'
import Alipay from '@comfortdelgro/compass-icons/react/payment/alipay'
import Amazon from '@comfortdelgro/compass-icons/react/payment/amazon'
import Amex from '@comfortdelgro/compass-icons/react/payment/amex'
import ApplePay from '@comfortdelgro/compass-icons/react/payment/apple-pay'
import Bancontact from '@comfortdelgro/compass-icons/react/payment/bancontact'
import Bitcoin from '@comfortdelgro/compass-icons/react/payment/bitcoin'
import BitcoinCash from '@comfortdelgro/compass-icons/react/payment/bitcoin-cash'
import Bitpay from '@comfortdelgro/compass-icons/react/payment/bitpay'
import Citadele from '@comfortdelgro/compass-icons/react/payment/citadele'
import DinersClub from '@comfortdelgro/compass-icons/react/payment/diners-club'
import Discover from '@comfortdelgro/compass-icons/react/payment/discover'
import Elo from '@comfortdelgro/compass-icons/react/payment/elo'
import Etherium from '@comfortdelgro/compass-icons/react/payment/etherium'
import Forbrugsforeningen from '@comfortdelgro/compass-icons/react/payment/forbrugsforeningen'
import GiroPay from '@comfortdelgro/compass-icons/react/payment/giro-pay'
import GooglePay from '@comfortdelgro/compass-icons/react/payment/google-pay'
import Ideal from '@comfortdelgro/compass-icons/react/payment/ideal'
import Interac from '@comfortdelgro/compass-icons/react/payment/interac'
import Jcb from '@comfortdelgro/compass-icons/react/payment/jcb'
import Klarna from '@comfortdelgro/compass-icons/react/payment/klarna'
import Lightcoin from '@comfortdelgro/compass-icons/react/payment/lightcoin'
import Maestro from '@comfortdelgro/compass-icons/react/payment/maestro'
import Mastercard from '@comfortdelgro/compass-icons/react/payment/mastercard'
import Payoneer from '@comfortdelgro/compass-icons/react/payment/payoneer'
import Paypal from '@comfortdelgro/compass-icons/react/payment/paypal'
import Paysafe from '@comfortdelgro/compass-icons/react/payment/paysafe'
import Qiwi from '@comfortdelgro/compass-icons/react/payment/qiwi'
import Sepa from '@comfortdelgro/compass-icons/react/payment/sepa'
import ShopPay from '@comfortdelgro/compass-icons/react/payment/shop-pay'
import Skrill from '@comfortdelgro/compass-icons/react/payment/skrill'
import Sofort from '@comfortdelgro/compass-icons/react/payment/sofort'
import Stripe from '@comfortdelgro/compass-icons/react/payment/stripe'
import UnionPay from '@comfortdelgro/compass-icons/react/payment/union-pay'
import Verifone from '@comfortdelgro/compass-icons/react/payment/verifone'
import Visa from '@comfortdelgro/compass-icons/react/payment/visa'
import WeChat from '@comfortdelgro/compass-icons/react/payment/we-chat'
import WebMoney from '@comfortdelgro/compass-icons/react/payment/web-money'
import Yandex from '@comfortdelgro/compass-icons/react/payment/yandex'
import {Flexbox} from '@comfortdelgro/react-compass-old'
import IconBox from 'data/foundation/iconography/components/IconBox'

export default function paymentIcons() {
  return (
    <Flexbox
      css={{
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}
    >
      <IconBox component={<Affirm width={40} height={40} />} name='affirm' />
      <IconBox component={<Alipay width={40} height={40} />} name='alipay' />
      <IconBox component={<Amazon width={40} height={40} />} name='amazon' />
      <IconBox component={<Amex width={40} height={40} />} name='amex' />
      <IconBox
        component={<ApplePay width={40} height={40} />}
        name='apple-pay'
      />
      <IconBox
        component={<Bancontact width={40} height={40} />}
        name='bancontact'
      />
      <IconBox
        component={<BitcoinCash width={40} height={40} />}
        name='bitcoin-cash'
      />
      <IconBox component={<Bitcoin width={40} height={40} />} name='bitcoin' />
      <IconBox component={<Bitpay width={40} height={40} />} name='bitpay' />
      <IconBox
        component={<Citadele width={40} height={40} />}
        name='citadele'
      />
      <IconBox
        component={<DinersClub width={40} height={40} />}
        name='diners-club'
      />
      <IconBox
        component={<Discover width={40} height={40} />}
        name='discover'
      />
      <IconBox component={<Elo width={40} height={40} />} name='elo' />
      <IconBox
        component={<Etherium width={40} height={40} />}
        name='etherium'
      />
      <IconBox
        component={<Forbrugsforeningen width={40} height={40} />}
        name='forbrugsforeningen'
      />
      <IconBox component={<GiroPay width={40} height={40} />} name='giro-pay' />
      <IconBox
        component={<GooglePay width={40} height={40} />}
        name='google-pay'
      />
      <IconBox component={<Ideal width={40} height={40} />} name='ideal' />
      <IconBox component={<Interac width={40} height={40} />} name='interac' />
      <IconBox component={<Jcb width={40} height={40} />} name='jcb' />
      <IconBox component={<Klarna width={40} height={40} />} name='klarna' />
      <IconBox
        component={<Lightcoin width={40} height={40} />}
        name='lightcoin'
      />
      <IconBox component={<Maestro width={40} height={40} />} name='maestro' />
      <IconBox
        component={<Mastercard width={40} height={40} />}
        name='mastercard'
      />
      <IconBox
        component={<Payoneer width={40} height={40} />}
        name='payoneer'
      />
      <IconBox component={<Paypal width={40} height={40} />} name='paypal' />
      <IconBox component={<Paysafe width={40} height={40} />} name='paysafe' />
      <IconBox component={<Qiwi width={40} height={40} />} name='qiwi' />
      <IconBox component={<Sepa width={40} height={40} />} name='sepa' />
      <IconBox component={<ShopPay width={40} height={40} />} name='shop-pay' />
      <IconBox component={<Skrill width={40} height={40} />} name='skrill' />
      <IconBox component={<Sofort width={40} height={40} />} name='sofort' />
      <IconBox component={<Stripe width={40} height={40} />} name='stripe' />
      <IconBox
        component={<UnionPay width={40} height={40} />}
        name='union-pay'
      />
      <IconBox
        component={<Verifone width={40} height={40} />}
        name='verifone'
      />
      <IconBox component={<Visa width={40} height={40} />} name='visa' />
      <IconBox component={<WeChat width={40} height={40} />} name='we-chat' />
      <IconBox
        component={<WebMoney width={40} height={40} />}
        name='web-money'
      />
      <IconBox component={<Yandex width={40} height={40} />} name='yandex' />
    </Flexbox>
  )
}
