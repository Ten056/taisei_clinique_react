const ContactPart = (props: any) => {
  return (
    <div className="p-inquiry__item">
      <section className="p-inquiry__phone">
        <h3 className="u-txt-center">
          {props.hos.webPagePath === '' ?
            <>
              <img src={props.hos.imgPath} className="u-pconly" alt={'八王子クリニック' + props.hos.name} width="80%" />
              <img src={props.hos.imgPath} className="u-sponly" alt={'八王子クリニック' + props.hos.name} width="70%" />
            </>
            :
            // 遷移先がある場合は、リンクになるように設定
            <a href={props.hos.webPagePath}>
              <img src={props.hos.imgPath} className="u-pconly" alt={'八王子クリニック' + props.hos.name} width="80%" />
              <img src={props.hos.imgPath} className="u-sponly" alt={'八王子クリニック' + props.hos.name} width="70%" />
            </a>
          }

        </h3>
        <p className="monshin-btn js-tellink">
          <a href={'tel:' + props.hos.telHyphen} className="ebis_button_trigger">
            <img src={"./resources/img/tel" + props.hos.tel + ".svg"} alt="" />
          </a>
        </p>
      </section>
      <section className="p-inquiry__section">
        <p className="monshin-btn">
          <a href="hachicli-hemo-interviewsheet.pdf" download="hachicli-hemo-interviewsheet.pdf" id="itv_shinjuku" className="ebis_button_trigger" data-cid="ebLb2Se6" data-pid="shinjuku_hemo_dl">
            <img src="./resources/img/monshin_btn.svg" alt="問診票" />
          </a>
        </p>
      </section>
    </div>
  )
}

export default ContactPart;