import OpenTime from "./OpenTime";
import Calendar from "./Calendar";
import DoctorTable from "./DoctorTable";
const Info = () => {
  return (
    <>
      <div className="l-contents type-arrow-color03" id="contents05">
        <div className="l-contents__inner">
          <section className="l-section" style={{marginBottom: '30px'}}>
            <OpenTime />
            <Calendar />
            <DoctorTable />
          </section>
        </div>
      </div>
    </>
  )
}

export default Info;