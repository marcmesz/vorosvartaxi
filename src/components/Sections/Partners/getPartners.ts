import csaliSrc from "../../../images/partners/csali.jpg"
import fedaszSrc from "../../../images/partners/fedasz.jpg"
import gulygliSrc from "../../../images/partners/gulygli.jpg"
import hofstadterSrc from "../../../images/partners/hofstadter.jpg"
import rotiSrc from "../../../images/partners/roti.jpg"
import ujvariSrc from "../../../images/partners/ujvari.jpg"
import wiluSrc from "../../../images/partners/wilu.jpg"

export const getPartners = () => {
  return [
    { src: csaliSrc, url: "https://www.csalicsarda.hu/", target: "_blank" },
    { src: fedaszSrc, url: "https://www.fedaszdental.hu/", target: "_blank" },
    { src: gulygliSrc, url: "https://www.gulyglicar.hu/", target: "_blank" },
    { src: hofstadterSrc, url: "https://www.hofstadter.hu/", target: "_blank" },
    { src: rotiSrc, url: "https://www.rotburger.hu/", target: "_blank" },
    { src: ujvariSrc, url: "https://www.ujvarigumi.hu/", target: "_blank" },
    { src: wiluSrc, url: "https://www.wilu-auto.hu/", target: "_blank" }
  ]
}
