// BarChart.js

import ReactChart from "./ReactChart/ReactChart";
import ReactChart2 from "./ReactChart/ReactChart2";


const Graficos = () => {
    return <>
    <div className="bg-white m-6 rounded m-3 grid md:grid-cols-2 " >
        <div>
        <ReactChart/>
        </div>
        <div>
        <ReactChart2/>
        </div>

    </div>
    </>
};

export default Graficos;
