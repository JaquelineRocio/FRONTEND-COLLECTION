import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import logoContactoEficaz from '../../../../../../public/fondo.svg'
  import logoContactoEficaz2 from '../../../../../../public/fondo.png'
   
  export function HomeViewCard() {
    return (
      <>
      <Card
        shadow={false}
        // className="relative grid h-[16rem] w-full max-w-[65rem] items-end justify-center overflow-hidden text-center"
        className="relative grid h-[16rem] w-full ] items-end justify-center overflow-hidden text-center mb-5"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          // className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
          // className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[src('${logoContactoEficaz}.svg')] bg-cover bg-center`}
          // className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center bg-[url('${logoContactoEficaz}.svg')]`}
          className={`absolute inset-0 m-0 h-full w-full bg-cover bg-center bg-yellow-800 rounded-md`}
          style={{ backgroundImage: `url(${logoContactoEficaz})` }}
          // className={`absolute inset-0 m-0 h-full w-full rounded-none src={logoContactoEficaz2}  src('${logoContactoEficaz2}')] bg-cover bg-center`}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>

        {/* <CardBody className="relative py-14 px-6 md:px-12"> */}
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h3"
            color="white"
            className="mb-6 font-medium leading-[1.5] font-ralewayBold  text-lg md:text-3xl"
          >
            Estamos terminando de ajustar la nueva experiencia para realizar tu trabajo con mayor comodidad
          </Typography>
          <Typography variant="h5" className="mb-4 text-gray-400">
            GLOBAL COREBANKIA
          </Typography>
          {/* <Avatar
            size="xl"
            variant="circular"
            alt="tania andrew"
            className="border-2 border-white"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          /> */}
        </CardBody>
      </Card>
      {/* <div className="w-full max-w-md mx-auto mb-12 flex items-center justify-center text-right">
            <img src={logoContactoEficaz} alt="Login Image" className="w-100 object-cover" />
      </div>

      <img src={logoContactoEficaz2} alt="Login Image" className="w-100 object-cover" /> */}
      </>
    );
  }