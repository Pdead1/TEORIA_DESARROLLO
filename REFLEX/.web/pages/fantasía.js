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
  {"F A N T A S \u00cd A"}
</RadixThemesHeading>
  <RadixThemesText as={"p"}>
  {"Sum\u00e9rgete en mundos m\u00e1gicos y aventuras \u00e9picas con nuestros libros de fantas\u00eda."}
</RadixThemesText>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} css={({ ["alignItems"] : "flex-start" })} direction={"row"} gap={"20px"}>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"EL HOBBIT"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/el_hobbit.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nBilbo Bols\u00f3n, un hobbit, se embarca en una aventura inesperada con un grupo de enanos para recuperar un tesoro custodiado por el drag\u00f3n Smaug."}
  {"DETALLES DE PRODUCTO:\nAutor: J.R.R. Tolkien\nEditorial: Minotauro\nA\u00f1o de edici\u00f3n: 2008\nN\u00famero de P\u00e1ginas: 320\nISBN: 9788445074320"}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"LA NIEVE ES BLANCA"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/nieve_blanca.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nUn cuento de hadas moderno que reinterpreta la historia cl\u00e1sica de Blanca Nieves con giros inesperados y un enfoque contempor\u00e1neo."}
  {"DETALLES DE PRODUCTO:\nAutor: Patricia C. Wrede\nEditorial: Ediciones B\nA\u00f1o de edici\u00f3n: 2015\nN\u00famero de P\u00e1ginas: 304\nISBN: 9788466651111"}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"CINCUENTA SOMBRAS DE GREY"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/cincuenta_sombras.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nUna historia de amor y deseo entre Anastasia Steele y Christian Grey, donde la atracci\u00f3n se mezcla con la exploraci\u00f3n de l\u00edmites."}
  {"DETALLES DE PRODUCTO:\nAutor: E.L. James\nEditorial: Grijalbo\nA\u00f1o de edici\u00f3n: 2012\nN\u00famero de P\u00e1ginas: 514\nISBN: 9786073112897"}
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"column"} gap={"3"}>
  <RadixThemesText as={"p"} css={({ ["fontWeight"] : "bold" })}>
  {"LAS CR\u00d3NICAS DE NARNIA"}
</RadixThemesText>
  <img css={({ ["width"] : "250px", ["borderRadius"] : "10px 30px" })} src={"/cronicas_narnia.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nCuatro hermanos son transportados a un mundo m\u00e1gico donde deben luchar contra el mal y ayudar al rey le\u00f3n Aslan a recuperar su trono."}
  {"DETALLES DE PRODUCTO:\nAutor: C.S. Lewis\nEditorial: RBA\nA\u00f1o de edici\u00f3n: 2013\nN\u00famero de P\u00e1ginas: 368\nISBN: 9788490331120"}
</RadixThemesBox>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
  <NextHead>
  <title>
  {"FANTASIA"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
