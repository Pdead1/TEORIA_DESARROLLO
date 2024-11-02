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
  {"F I C C \u00cd O N"}
</RadixThemesHeading>
  <RadixThemesText as={"p"}>
  {"Aqu\u00ed encontrar\u00e1s una variedad de libros de ficci\u00f3n."}
</RadixThemesText>
  <img css={({ ["width"] : "300px", ["bordeRadius"] : "15px 50px" })} src={"/cinco_esquinas.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nUna novela del Premio Nobel de Literatura Mario Vargas Llosa.\nDETALLES DEL PRODUCTO:\nNombre del autor     Vargas Llosa, Mario \nEditorial\t   DEBOLSILLO \nN\u00famero de P\u00e1ginas\t320\nISBN     9786124346859"}
</RadixThemesBox>
  <img css={({ ["width"] : "250px", ["bordeRadius"] : "10px 30px" })} src={"/historia_de_mayta.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\n\u00abLa Historia de Mayta Es Incomprensible Separada de Su Tiempo y Lugar,\nAquellos A\u00f1os en Que, en Am\u00e9rica Latina, Se Hizo Religi\u00f3n la Idea, Entre Impacientes,\n Aventureros e Idealistas (Yo Fui uno de Ellos), de que la Libertad y la\n Justicia Se Alcanzar\u00edan a Tiros de Fusil. \u00bb Mario Vargas Llosa\nDETALLES DEL PRODUCTO:\nNombre del autor     Vargas Llosa, Mario \nEditorial\t   DEBOLSILLO \nN\u00famero de P\u00e1ginas\t392\nISBN     9786124346347"}
</RadixThemesBox>
  <img css={({ ["width"] : "250px", ["bordeRadius"] : "10px 30px" })} src={"/Lejos_de_donde.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\nLa misteriosa historia de una joven que logr\u00f3 huir del infierno de la segunda guerra mundial. Enero de,\n1945; finales de la segunda guerra mundial. Una joven, envuelta en un pesado capote militar que\n apenas la protege del fr\u00edo, huye por territorio polaco y checo; llega a Viena y, desde all\u00ed, a G\u00e9nova,\ndonde la ayudan ciertos amigos. Tres a\u00f1os despu\u00e9s, en 1948, ha iniciado una nueva vida en BuenosAires. \nNo ha sido f\u00e1cil, y tiene que trabajar duro para ganarse el sustento; vive en la pensi\u00f3n de Frau\n Dorsch, pero ninguno de los dem\u00e1s hu\u00e9spedes, en su mayor\u00eda emigrantes rumanos y h\u00fangaros, sabe\nc\u00f3mo ella consigui\u00f3 salir de Europa... Porque esa mujer arrastra un pasado infamante y, muchos a\u00f1os \ndespu\u00e9s, s\u00f3lo las preguntas inocentes de su hijo Federico, concebido en Buenos Aires\n a finales de ese mismo a\u00f1o \n48, son capaces de impedir que ella lo olvide y entierre de manera definitiva.\nDETALLES DEL PRODUCTO:Nombre del autor\tCozarinsky, Edgardo\nEditorial\tTUSQUETS EDITORES\nA\u00f1o de edici\u00f3n\t2009\nN\u00famero de P\u00e1ginas\t176\nISBN\t9788483831823"}
</RadixThemesBox>
  <img css={({ ["width"] : "250px", ["bordeRadius"] : "10px 30px" })} src={"/one_piece.jpg"}/>
  <RadixThemesBox css={({ ["white-space"] : "pre-wrap" })}>
  {"Sinopsis:\n\u00abLuffy y sus nakama por fin llegan a Alabasta. Inmediatamente despu\u00e9s de arribar, se dirigen r\u00e1pidamente a una tienda \nen busca de alimento. Ah\u00ed los esperaba un personaje misterioso. Por otro lado, \u00a1Baroque Works empieza a\n movilizarse y la situaci\u00f3n empieza a agravarse! \u00a1Contin\u00faa la rom\u00e1ntica aventura en busca del \u201cOne Piece\u201d!\nFrases:\u201cAunque se conviva poco tiempo, puede nacer una amistad verdadera\u201d \u2013 Mr. Bon Clay. \u201cEn el pasado\n nunca le pude ganar a Ace\u201d \u2013 Luffy. \u201cYo quiero que Barbablanca sea el rey de los piratas\u201d \u2013 Ace. \u201c\u00a1\u00bfHemos estado trabajando\n para un pirata?!\u201d \u2013 Mr. Bon Clay.\nDETALLES DEL PRODUCTO:\nEditorial\t   PANINI\nISBN     9786075282862"}
</RadixThemesBox>
</RadixThemesFlex>
  <NextHead>
  <title>
  {"F I C C \u00cd O N"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
