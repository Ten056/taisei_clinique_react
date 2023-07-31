import Reserve from "./Reserve";
import ContactPart from "./ContactPart";

const Contact = () => {
  const shinjuku = {
    name: '新宿',
    nameEng: 'shinjuku',
    imgPath: './resources/img/common/logo-shinjuku-white.svg',
    tel: '0359902892',
    telHyphen: '03-5990-2892',
    webPagePath: ''
  }
  const honin = {
    name: '本院',
    nameEng: 'honin',
    imgPath: './resources/img/common/logo-honin-white.svg',
    tel: '0426433717',
    telHyphen: '042-643-3717',
    webPagePath: 'https://www.amazon.co.jp'
  }

  return (
    <div className="l-contents type-wide type-arrow-color03 type-color03" id="contents04"><div className="l-contents_top_inner">
      <div className="p-inquiry-outpatient type-color03">

        <h2 className="p-inquiry__heading">
          ご予約
        </h2>
        <Reserve />

        <h2 className="p-inquiry__heading">
          お問い合わせ
        </h2>
        <div className="p-inquiry__wrap">
          <ContactPart hos={shinjuku} />
          <ContactPart hos={honin} />
        </div>
      </div>
    </div></div>
  )
}

export default Contact;