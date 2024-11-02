/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "$/utils/context"
import { Event, getBackendURL, isTrue, refs } from "$/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "$/env.json"
import { Button as RadixThemesButton, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Button_53111f7f8cfbe69560a516dda4504c85 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_e345dec67693a5615d955c3f541689da = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/fiction", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["margin"] : "10px", ["background-color"] : "orange", ["color"] : "white" })} onClick={on_click_e345dec67693a5615d955c3f541689da}>
  {"Ficcion"}
</RadixThemesButton>
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

export function Div_64093a13086094dda35345330da0660b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={({ ["position"] : "fixed", ["width"] : "100vw", ["height"] : "0" })} title={("Connection Error: "+((connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''))}>
  <Fragment_ecc7fc8159e7de57fc1e48e5f03b41bb/>
</div>
  )
}

export function Button_65fd821a288b9517198d9ff4b2882ce1 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9aa12afb31f722e3e511a47730ab4e7f = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/Fantas\u00eda", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["margin"] : "10px", ["background-color"] : "orange", ["color"] : "white" })} onClick={on_click_9aa12afb31f722e3e511a47730ab4e7f}>
  {"Fantas\u00eda"}
</RadixThemesButton>
  )
}

export function Button_f04350785618ea6d37524e6ddfca35c8 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_0b872d3da88a37c12972e1d117382222 = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/Romance", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["margin"] : "10px", ["background-color"] : "orange", ["color"] : "white" })} onClick={on_click_0b872d3da88a37c12972e1d117382222}>
  {"Romance"}
</RadixThemesButton>
  )
}

export function Button_56e4c3c7f821d2557128ead8c6e23134 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_904e4386dc20c912694cec966d792736 = useCallback(((...args) => ((addEvents([(Event("_redirect", ({ ["path"] : "/Historia", ["external"] : false, ["replace"] : false }), ({  })))], args, ({  }))))), [addEvents, Event])


  return (
    <RadixThemesButton css={({ ["margin"] : "10px", ["background-color"] : "orange", ["color"] : "white" })} onClick={on_click_904e4386dc20c912694cec966d792736}>
  {"Historia"}
</RadixThemesButton>
  )
}

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

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <Div_64093a13086094dda35345330da0660b/>
  <Toaster_9d6e054b03c6e5d1bea1c0a5576b4e6d/>
</Fragment>
  <Fragment>
  <Fragment>
  <RadixThemesHeading size={"8"}>
  {"LIBROS HUB"}
</RadixThemesHeading>
  <img css={({ ["width"] : "300px", ["bordeRadius"] : "15px 50px" })} src={"/logo.jpg"}/>
  <RadixThemesFlex align={"start"} className={"rx-Stack"} direction={"row"} gap={"3"}>
  <Button_53111f7f8cfbe69560a516dda4504c85/>
  <Button_f04350785618ea6d37524e6ddfca35c8/>
  <Button_65fd821a288b9517198d9ff4b2882ce1/>
  <Button_56e4c3c7f821d2557128ead8c6e23134/>
</RadixThemesFlex>
  <RadixThemesText as={"p"} css={({ ["margin-top"] : "20px", ["font-size"] : "20px", ["font-family"] : "'Abadi Extra Light', sans-serif" })}>
  {"Explora nuestras diversas categor\u00edas de libros y encuentra tu pr\u00f3xima lectura."}
</RadixThemesText>
  <img src={"/promocion.jpg"}/>
</Fragment>
</Fragment>
  <NextHead>
  <title>
  {"LibrosHub"}
</title>
  <meta content={"favicon.ico"} property={"og:image"}/>
</NextHead>
</Fragment>
  )
}
