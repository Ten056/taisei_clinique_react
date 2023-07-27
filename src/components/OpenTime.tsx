const OpenTime = () => {
  return (
    <>
    <div className="c-heading">
    <h2 className="c-heading__title">受付時間のご案内</h2>
    </div>
    <table className="table-type-2 type-color01 u-txt-center">
    <tbody>
    <tr>
    <th className="u-txt-center">診療受付</th>
    <th className="u-txt-center">月</th>
    <th className="u-txt-center">火</th>
    <th className="u-txt-center">水</th>
    <th className="u-txt-center">木</th>
    <th className="u-txt-center">金</th>
    <th className="u-txt-center u-text-blue">土</th>
    <th className="u-txt-center u-text-red">日</th>
    <th className="u-txt-center u-text-red">祝</th>
    </tr>
    <tr>
    <td className="head2">
    午前10時〜12時30分</td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-yasumi.png" alt="休み" /></td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-yasumi.png" alt="休み" /></td>
    <td><img src="./resources/img/common/i-yasumi.png" alt="休み" /></td>
    </tr>
    <tr>
    <td className="head2">午後15時〜17時30分</td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-yasumi.png" alt="休み" /></td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-maru2.png" alt="○" /></td>
    <td><img src="./resources/img/common/i-yasumi.png" alt="休み" /></td>
    <td><img src="./resources/img/common/i-yasumi.png" alt="休み" /></td>
    </tr>
    </tbody>
    </table> 
    </>
  );
};

export default OpenTime;