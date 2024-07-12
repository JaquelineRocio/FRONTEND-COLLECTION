import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import SelectTailwind from "../../../../ExampleView/SelectTailwind";
 
export default function CustomAccordionElement() {
  const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) =>{
    console.log('this is the value open', open);
    console.log('this is the value valor',value);
    return setOpen(open === value ? 0 : value);
  }
 
  return (
    <>

      <div open={open === 1} className="">
        <div
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Filtros Específicos
        </div>
        <div className={`pt-0 text-base transition-all  duration-300  transition-transform font-normal ${open=== 1 ? '':'hidden'}`}>
          <SelectTailwind/>
          <SelectTailwind/>
          <SelectTailwind/>
          <SelectTailwind/>

        </div>
      </div>

      <div open={open === 2} className="">
        <div
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          Filtros Específicos
        </div>
        <div className={`pt-0 text-base transition-all  duration-300  transition-transform font-normal ${open=== 1 ? '':'hidden'}`}>
          <SelectTailwind/>
          <SelectTailwind/>
          <SelectTailwind/>
          <SelectTailwind/>

        </div>
      </div>

    </>
  );
}