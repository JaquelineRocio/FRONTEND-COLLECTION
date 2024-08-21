import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import logoContactoEficaz from '../../../../../../public/fondo.svg'
  import globalcorebankia from './../../../../../../public/imgs/miscelania/globalcorebankiaextendtext.svg';
  export function HomeViewCard() {
    return (
      <>
      
      <Card
        shadow={false}
        // className="relative grid h-[16rem] w-full max-w-[65rem] items-end justify-center overflow-hidden text-center"
        className="h-[16rem] w-full overflow-hidden "
      >
        <CardHeader
          floated={false}
          shadow={false}
          className={`absolute inset-0 m-0 h-full w-full bg-cover bg-center rounded-3xl`}
          style={{ backgroundImage: `url(${logoContactoEficaz})` }}
        >
          <div className="absolute inset-0 h-full w-full bg-blue-400/25" />
        </CardHeader>


        <CardBody className="relative flex flex-col  justify-evenly p-0 px-14 h-full py-2">
        
          <img src={globalcorebankia} className="w-48"></img>

          <div className="grid grid-cols-1 md:grid-cols-3">
            <Typography
              // variant="h3"
              color="white"
              className=" font-ralewayMedium text-xl md:2xl lg:text-3xl col-span-2"
            >
              Estamos terminando de ajustar la nueva experiencia para realizar tu trabajo con mayor comodidad
            </Typography>
          </div>
        </CardBody>

      </Card>
      
      </>
    );
  }