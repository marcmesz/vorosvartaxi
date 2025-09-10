import CookieConsent from "react-cookie-consent"
import { FormattedMessage } from "react-intl"

const CookieBanner = () => {
  return (
    <CookieConsent
      buttonStyle={{ backgroundColor: "#ffc000" }}
      buttonWrapperClasses="align-self-center"
      buttonClasses="rounded py-2 px-3 text-uppercase fw-bold fs-5"
      buttonText={<FormattedMessage id="footer.cc.btn" />}
      contentStyle={{ margin: 0 }}
      contentClasses="m-4"
      containerClasses="justify-content-center"
    >
      <section className="d-flex flex-column m-0">
        <span className="fw-bold">
          <FormattedMessage id="footer.cc.title" />
        </span>
        <span className="text-warning">
          <FormattedMessage id="footer.cc.content" />
        </span>
      </section>
    </CookieConsent>
  )
}

export { CookieBanner as default }
