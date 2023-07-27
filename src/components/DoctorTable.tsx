const DoctorTable = () => {
  return (
    <>
      <div className="c-heading" style={{marginBottom: '-20px'}}>
      <h2 className="c-heading__title">担 当 医 表</h2>
      </div>
      <p style={{margin: '20px auto 40px'}}>
        <img src="./resources/img/dr_list2_sp.svg" alt="" width="100%" className="u-sponly" />
        <img src="./resources/img/dr_list2_pc.svg" alt="" width="100%" className="u-pconly" />
      </p>
      <p className="yoyaku-btn" style={{textAlign: 'center'}}>
        <a data-gtm-click="shinjuku-yoyaku" href="https://yahoo.co.jp" target="_blank" className="ebis_button_trigger" data-cid="ebLb2Se6" data-pid="shinjuku_yoyaku">
          <img src="./resources/img/yoyaku_btn.svg" alt="予約" />
        </a>
      </p>
    </>
  );
};

export default DoctorTable;