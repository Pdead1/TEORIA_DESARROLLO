/** @jsxImportSource @emotion/react */


import { Fragment, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import NextHead from "next/head"



export function Div_64093a13086094dda35345330da0660b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_ecc7fc8159e7de57fc1e48e5f03b41bb/>
</div>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const toast_props = ({ ["description"] : ("Check if server is reachable at "+getBackendURL(env.EVENT).href), ["closeButton"] : true, ["duration"] : 120000, ["id"] : "websocket-error" });
  const [userDismissed, setUserDismissed] = useState(false);
  (useEffect(
() => {
    if ((connectErrors.length >= 2)) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : '')}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}
, [connectErrors]))

  return (
    <Toaster closeButton={false} expand={true} position={"bottom-right"} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Fragment_ecc7fc8159e7de57fc1e48e5f03b41bb () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue((connectErrors.length > 0)) ? (
  <Fragment>
  <LucideWifiOffIcon css={({ ["color"] : "crimson", ["zIndex"] : 9999, ["position"] : "fixed", ["bottom"] : "33px", ["right"] : "33px", ["animation"] : (pulse+" 1s infinite") })} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <Div_64093a13086094dda35345330da0660b/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Fragment>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesHeading size={"4"}>
  {"R O M A N C E"}
</RadixThemesHeading>
  <img src={"/banner_romance.jpg"}/>
  <RadixThemesText as={"p"}>
  {"LA TEORIA DE KIM"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["bordeRadius"] : "10px 30px" })} src={"/teoria_kim.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinnopsis: \n Despu\u00e9s de la noche de Halloween, todo el condado Mariposa se ha sumido en la oscuridad. Los culpables: Taylor\nKim y su querido viajero del tiempo, Han Dakho. Ahora, enfrent\u00e1ndose a las consecuencias de sus experimentos,\ndeber\u00e1n redoblar sus esfuerzos para enviar a Dakho a su a\u00f1o y evitar que el profesor Kim Anzu y los militares loencuentren antes de que la cuenta regresiva termine. La batalla por restaurar el orden se convierte en una carrera\ncontra el reloj y la realidad. Pero esta \u00faltima es vol\u00e1til y las l\u00edneas temporales, inestables. Recuerdos de tiempos\npasados empiezan a hacer colapsar las mentes de Dakho, Taylor, Sean y April, llev\u00e1ndolos a perder la raz\u00f3n. Llega la\nsegunda parte del libro m\u00e1s esperado del a\u00f1o. Bienvenidos al condado Mariposa. Esto es (a\u00fan) 1986.DETALLES DE PRODUCTO:\nNombre del autor\tSandoval, Jay\nEditorial    CROSS BOOKS\nA\u00f1o de edici\u00f3n\t2024\nN\u00famero de P\u00e1ginas\t592\nISBN\t9786124414411"}
</RadixThemesBox>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"ORGULLO Y PREJUICIO"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/orgullo_prejuicio.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nLa cl\u00e1sica historia de amor entre Elizabeth Bennet y el Sr. Darcy, donde las primeras impresiones y el orgullo juegan un papel fundamental en su relaci\u00f3n."}
  {"DETALLES DE PRODUCTO:\nAutor: Jane Austen\nEditorial: Penguin Cl\u00e1sicos\nA\u00f1o de edici\u00f3n: 2002\nN\u00famero de P\u00e1ginas: 432\nISBN: 9780141439518"}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"BAJO LA MISMA ESTRELLA"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/bajo_misma_estrella.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nUna historia conmovedora de dos adolescentes con enfermedades terminales que se enamoran y encuentran en el amor un sentido profundo a sus vidas."}
  {"DETALLES DE PRODUCTO:\nAutor: John Green\nEditorial: Nube de Tinta\nA\u00f1o de edici\u00f3n: 2012\nN\u00famero de P\u00e1ginas: 304\nISBN: 9788415594017"}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"COMO AGUA PARA CHOCOLATE"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/agua_para_chocolate.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nUna novela que mezcla el realismo m\u00e1gico con una historia de amor prohibido en el contexto de la Revoluci\u00f3n Mexicana."}
  {"DETALLES DE PRODUCTO:\nAutor: Laura Esquivel\nEditorial: Debolsillo\nA\u00f1o de edici\u00f3n: 2009\nN\u00famero de P\u00e1ginas: 224\nISBN: 9786073112835"}
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</Fragment>
  <NextHead>
  <title>
  {"R O M A N C E"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
