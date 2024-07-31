// BarChart.js

import ReactChart from "./ReactChart/ReactChart";
import ReactChart2 from "./ReactChart/ReactChart2";
import ReactChart3 from "./ReactChart/ReactChart3";
import ReactChart4 from "./ReactChart/ReactChart4";
import ReactChart5 from "./ReactChart/ReactChart5";


const Graficos = () => {
    return <>
    <div className="bg-white m-6 rounded m-3 grid md:grid-cols-2 " >
        <div className="bg-red-100">
        <ReactChart/>
        </div>
        {/* <div className="bg-orange-100"> */}
        <div>
        <ReactChart2/>
        </div>
        <div className="bg-blue-100">
        <ReactChart3/>
        </div>
        <div className="bg-yellow-100">
        <ReactChart4/>
        </div>
        <div>
        <ReactChart5/>
        </div>

    </div>
    </>
};

export default Graficos;
