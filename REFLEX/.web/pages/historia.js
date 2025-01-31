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
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesHeading size={"4"}>
  {"Historia"}
</RadixThemesHeading>
  <RadixThemesText as={"p"}>
  {"Explora los eventos que moldearon nuestro mundo a trav\u00e9s de nuestros libros de historia."}
</RadixThemesText>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"row"} gap={"20px"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"SAPIENS: DE ANIMALES A DIOSES"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/sapiens.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nUn recorrido por la historia de la humanidad, desde la aparici\u00f3n del Homo sapiens hasta el siglo XXI."}
  {"DETALLES DE PRODUCTO:\nAutor: Yuval Noah Harari\nEditorial: Debate\nA\u00f1o de edici\u00f3n: 2015\nN\u00famero de P\u00e1ginas: 512\nISBN: 9788499929265"}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"HISTORIA DE DOS CIUDADES"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/historia_dos_ciudades.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nLa historia de amor y sacrificio en el contexto de la Revoluci\u00f3n Francesa, entrelazando las vidas de varios personajes."}
  {"DETALLES DE PRODUCTO:\nAutor: Charles Dickens\nEditorial: Alianza Editorial\nA\u00f1o de edici\u00f3n: 2003\nN\u00famero de P\u00e1ginas: 368\nISBN: 9788420668496"}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"LA HISTORIA DEL MUNDO"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/historia_mundo.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nUna extensa cr\u00f3nica de los eventos que han dado forma al mundo a lo largo de los siglos, desde la prehistoria hasta la actualidad."}
  {"DETALLES DE PRODUCTO:\nAutor: J.M. Roberts\nEditorial: Cr\u00edtica\nA\u00f1o de edici\u00f3n: 2007\nN\u00famero de P\u00e1ginas: 928\nISBN: 9788498920887"}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"EL ORIGEN DE LAS ESPECIES"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/origen_especies.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nLa obra fundamental de Charles Darwin que expone la teor\u00eda de la evoluci\u00f3n a trav\u00e9s de la selecci\u00f3n natural."}
  {"DETALLES DE PRODUCTO:\nAutor: Charles Darwin\nEditorial: Espasa Calpe\nA\u00f1o de edici\u00f3n: 2006\nN\u00famero de P\u00e1ginas: 832\nISBN: 9788467013516"}
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {"HISTORIA"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
