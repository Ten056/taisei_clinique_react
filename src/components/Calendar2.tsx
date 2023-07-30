import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css'; // デフォルトのテーマを読み込んでいます（コアスタイルのみ読み込む設定も可能）
import { useEffect } from "react";

const Calendar2 = () => {
  const cal = useEffect(() => {
    const head = document.getElementsByTagName('head')[0] as HTMLElement;
    const scriptUrl = document.createElement('script');
    scriptUrl.type = 'text/javascript';
    scriptUrl.src = './resources/js/hemo_cal.js';
    head.appendChild(scriptUrl);
  }, []);

  return (
    <>
      <div className="c-heading">
        <h2 className="c-heading__title">診療日のご案内</h2>  
      </div>
      <div id="cal0" className="cal_wrapper" style={{margin: '-30px 0 -10px'}}>
        Calendar Loading
      </div>
      <p className="u-txt-center c-heading3 u-text-red"><span className="calbox"></span>は休診日</p>
      <div className="c-heading" style={{marginBottom: '-20px'}}></div>
      {cal}
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />

      <Splide
        aria-label="私のお気に入りの画像集"
        options={{
          autoplay: true, // 自動再生を有効
          interval: 3000, // 自動再生の間隔を3秒に設定
        }}
      >
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_114719-2_TP_V.jpg" alt="かわいい猫の画像 part1" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/shikun20220402_122123_TP_V.jpg" alt="かわいい猫の画像 part2" />
        </SplideSlide>
        <SplideSlide>
          <img className="slide-img" src="https://www.pakutaso.com/shared/img/thumb/sikun_20220402-180657-2_TP_V.jpg" alt="かわいい猫の画像 part3" />
        </SplideSlide>
      </Splide>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
      <style>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </>
  )
}

export default Calendar2;