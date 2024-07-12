import { Card, Typography } from "@material-tailwind/react";
 
// const TABLE_HEAD = ["CARTERAzzzz", "CLIENTES", "CUENTAS", "% CUENTAS" , "CAPTAL_MN", "COB", "CTP", "CD", "TC", "# PDP", "INT TOTAL", "INT AGENTE", "INT CTC", "INT CD", "PAGOS", "% EFICIENCIA", "TICKET D. CAPITAL", "TICKET PAGO", "CUMP PDP"];
const TABLE_HEAD = ["id", "N° Cuenta", "mesCastigo", "Rango Campaña" , "Fecha de Asignación", "p6m", "p5m", "p4m", "p3m", "p2m", "p1m", "intTotal", "pdp", "pdpAcido", "pdpPago", "intAgente", "intCtc", "deudaCapital", "deudaTotal", "Campaña", "Maduraión", "Total Pago", "N° pagos", "Edad", "Rango edad", "Macro Regiones", "Estado cuenta", "ctc", "Flag Cob", "Phone  cdh", "Cdh", "cd", "tc", "Eficiencia", "Ticket Pagos", "Ticket Capital"];
const TABLE_ROWS = [
  { "idTablon": "null", "nroCuenta": "null",
    "mesCastigo": "null",
    "rangoCampaña": "null",
    "fechaAsignacion": "null",
    "p6m": "null",
    "p5m": "null",
    "p4m": "null",
    "p3m": "null",
    "p2m": "null",
    "p1m": "null",
    "intTotal": 0,
    "pdp": 0,
    "pdpAcido": 0,
    "pdpPago": 0,
    "intAgente": 0,
    "intCtc": 0,
    "intCd": 0,
    "deudaCapital": 0,
    "deudaTotal": 0,
    "campaña": 0,
    "maduracion": "null",
    "totalPago": 0,
    "nroPagos": 0,
    "edad": 0,
    "rangoEdad": "null",
    "macroRegiones": "null",
    "estadoCuenta": "null",
    "ctc": "null",
    "flagCob": "null",
    "phoneCdh": "null",
    "cdh": "null",
    "cd": "null",
    "tc": "null",
    "eficiencia": "null",
    "ticketPagos": 0,
    "ticketCapital": 0,
    "prioridades": "null",
    "carteras": "null",
    "monedas": "null",
    "productos": "null",
    "entidades": "null"
  }
];

export default function TableTailwind({tableHead=TABLE_HEAD,tableRows=TABLE_ROWS}) {
// export default function TableTailwind({tableHead=TABLE_HEAD,tableRows=TABLE_ROWS}) {
  // console.log(tableHead);
  // console.log(tableRows);
  return (
    // <>
    // </>
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {tableHead.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* {TABLE_ROWS.map(({ name, job, date }, index) => { */}
            {/* {tableRows.map(({ CARTERA, CLIENTES, POR_CUENTAS, CAPTAL_MN, COB, CTP, CD, TC, NUM_PDP, INT_TOTAL, INT_AGENTE, INT_CTC, INT_CD, PAGOS, POR_EFICIENCIA, TICKE_D_CAPITAL, TICKET_PAGO, CUMP_PDP}, index) => { */}
            {tableRows.map(({idTablon, nroCuenta, mesCastigo, rangoCampaña, fechaAsignacion, p6m, p5m, p4m, p3m, p2m, p1m, intTotal, pdp, pdpAcido, pdpPago, intAgente,intCtc, intCd, deudaCapital, deudaTotal, campaña, maduracion,totalPago, nroPagos, edad, rangoEdad, macroRegiones, estadoCuenta, ctc, flagCob, phoneCdh, cdh, cd, tc, eficiencia, ticketPagos, ticketCapital}, index) => {
            const isLast = index === tableRows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={idTablon}>
                <td className={classes}> <Typography variant="small" color="blue-gray" className="font-normal" >{idTablon}</Typography></td>
                <td className={classes}> <Typography variant="small" color="blue-gray" className="font-normal"> {nroCuenta} </Typography> </td>
                <td className={classes}> <Typography variant="small" color="blue-gray" className="font-normal"> {mesCastigo} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {rangoCampaña} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {fechaAsignacion} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {p6m} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {p5m} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {p4m} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {p3m} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {p2m} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {p1m} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {intTotal} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {pdp} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {pdpAcido} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {pdpPago} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {intAgente} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {intCtc} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {intCd} </Typography> </td>

                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {deudaCapital} </Typography> </td>     
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {deudaTotal} </Typography> </td>     
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {campaña} </Typography> </td>
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {maduracion} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {totalPago} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {nroPagos} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {edad} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {rangoEdad} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {macroRegiones} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {estadoCuenta} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {ctc} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {flagCob} </Typography> </td>                
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {phoneCdh} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {cdh} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {cd} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {tc} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {eficiencia} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {ticketPagos} </Typography> </td> 
                <td className={classes}> <Typography as="a"  href="#" variant="small" color="blue-gray" className="font-medium"> {ticketCapital} </Typography> </td> 

              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}





// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
// import {
//   Card,
//   CardHeader,
//   Input,
//   Typography,
//   Button,
//   CardBody,
//   Chip,
//   CardFooter,
//   Tabs,
//   TabsHeader,
//   Tab,
//   Avatar,
//   IconButton,
//   Tooltip,
// } from "@material-tailwind/react";
 
// const TABS = [
//   {
//     label: "All",
//     value: "all",
//   },
//   {
//     label: "Monitored",
//     value: "monitored",
//   },
//   {
//     label: "Unmonitored",
//     value: "unmonitored",
//   },
// ];
 
// const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];
 
// const TABLE_ROWS = [
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
//     name: "John Michael",
//     email: "john@creative-tim.com",
//     job: "Manager",
//     org: "Organization",
//     online: true,
//     date: "23/04/18",
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
//     name: "Alexa Liras",
//     email: "alexa@creative-tim.com",
//     job: "Programator",
//     org: "Developer",
//     online: false,
//     date: "23/04/18",
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
//     name: "Laurent Perrier",
//     email: "laurent@creative-tim.com",
//     job: "Executive",
//     org: "Projects",
//     online: false,
//     date: "19/09/17",
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
//     name: "Michael Levi",
//     email: "michael@creative-tim.com",
//     job: "Programator",
//     org: "Developer",
//     online: true,
//     date: "24/12/08",
//   },
//   {
//     img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
//     name: "Richard Gran",
//     email: "richard@creative-tim.com",
//     job: "Manager",
//     org: "Executive",
//     online: false,
//     date: "04/10/21",
//   },
// ];
 
// export default function TableTailwind() {
//   return (
//     <Card className="h-full w-full">
//       <CardHeader floated={false} shadow={false} className="rounded-none">
//         <div className="mb-8 flex items-center justify-between gap-8">
//           <div>
//             <Typography variant="h5" color="blue-gray">
//               Members list
//             </Typography>
//             <Typography color="gray" className="mt-1 font-normal">
//               See information about all members
//             </Typography>
//           </div>
//           <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
//             <Button variant="outlined" size="sm">
//               view all
//             </Button>
//             <Button className="flex items-center gap-3" size="sm">
//               <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
//             </Button>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
//           <Tabs value="all" className="w-full md:w-max">
//             <TabsHeader>
//               {TABS.map(({ label, value }) => (
//                 <Tab key={value} value={value}>
//                   &nbsp;&nbsp;{label}&nbsp;&nbsp;
//                 </Tab>
//               ))}
//             </TabsHeader>
//           </Tabs>
//           <div className="w-full md:w-72">
//             <Input
//               label="Search"
//               icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//             />
//           </div>
//         </div>
//       </CardHeader>
//       <CardBody className="overflow-scroll px-0">
//         <table className="mt-4 w-full min-w-max table-auto text-left">
//           <thead>
//             <tr>
//               {TABLE_HEAD.map((head) => (
//                 <th
//                   key={head}
//                   className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
//                 >
//                   <Typography
//                     variant="small"
//                     color="blue-gray"
//                     className="font-normal leading-none opacity-70"
//                   >
//                     {head}
//                   </Typography>
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {TABLE_ROWS.map(
//               ({ img, name, email, job, org, online, date }, index) => {
//                 const isLast = index === TABLE_ROWS.length - 1;
//                 const classes = isLast
//                   ? "p-4"
//                   : "p-4 border-b border-blue-gray-50";
 
//                 return (
//                   <tr key={name}>
//                     <td className={classes}>
//                       <div className="flex items-center gap-3">
//                         <Avatar src={img} alt={name} size="sm" />
//                         <div className="flex flex-col">
//                           <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="font-normal"
//                           >
//                             {name}
//                           </Typography>
//                           <Typography
//                             variant="small"
//                             color="blue-gray"
//                             className="font-normal opacity-70"
//                           >
//                             {email}
//                           </Typography>
//                         </div>
//                       </div>
//                     </td>
//                     <td className={classes}>
//                       <div className="flex flex-col">
//                         <Typography
//                           variant="small"
//                           color="blue-gray"
//                           className="font-normal"
//                         >
//                           {job}
//                         </Typography>
//                         <Typography
//                           variant="small"
//                           color="blue-gray"
//                           className="font-normal opacity-70"
//                         >
//                           {org}
//                         </Typography>
//                       </div>
//                     </td>
//                     <td className={classes}>
//                       <div className="w-max">
//                         <Chip
//                           variant="ghost"
//                           size="sm"
//                           value={online ? "online" : "offline"}
//                           color={online ? "green" : "blue-gray"}
//                         />
//                       </div>
//                     </td>
//                     <td className={classes}>
//                       <Typography
//                         variant="small"
//                         color="blue-gray"
//                         className="font-normal"
//                       >
//                         {date}
//                       </Typography>
//                     </td>
//                     <td className={classes}>
//                       <Tooltip content="Edit User">
//                         <IconButton variant="text">
//                           <PencilIcon className="h-4 w-4" />
//                         </IconButton>
//                       </Tooltip>
//                     </td>
//                   </tr>
//                 );
//               },
//             )}
//           </tbody>
//         </table>
//       </CardBody>
//       <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
//         <Typography variant="small" color="blue-gray" className="font-normal">
//           Page 1 of 10
//         </Typography>
//         <div className="flex gap-2">
//           <Button variant="outlined" size="sm">
//             Previous
//           </Button>
//           <Button variant="outlined" size="sm">
//             Next
//           </Button>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

// export default function TableTailwind(){
//   return(
//     <>
//       <h3>
//         HOla mundo
//       </h3>
//     </>
//   )
// }