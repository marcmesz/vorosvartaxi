import csaliSrc from "../../../images/partners/csali.jpg"
import fedaszSrc from "../../../images/partners/fedasz.jpg"
import gulygliSrc from "../../../images/partners/gulygli.jpg"
import hofstadterSrc from "../../../images/partners/hofstadter.jpg"
import rotiSrc from "../../../images/partners/roti.jpg"
import ujvariSrc from "../../../images/partners/ujvari.jpg"
import wiluSrc from "../../../images/partners/wilu.jpg"

export const getPartners = () => {
  return [
    { src: csaliSrc, url: "https://www.csalicsarda.hu/" },
    { src: fedaszSrc, url: "https://www.fedaszdental.hu/" },
    { src: gulygliSrc, url: "https://www.gulyglicar.hu/" },
    { src: hofstadterSrc, url: "https://www.hofstadter.hu/" },
    { src: rotiSrc, url: "https://www.rotburger.hu/" },
    { src: ujvariSrc, url: "https://www.ujvarigumi.hu/" },
    { src: wiluSrc, url: "https://www.wilu-auto.hu/" }
  ]
}
