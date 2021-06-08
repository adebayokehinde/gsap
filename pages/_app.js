import React, { useRef, useEffect } from "react";
import "../styles/globals.css";
import gsap from "gsap"
import { TimelineLite, Power2 } from "gsap";
// import CSSRulePlugin from "gsap/CSSRulePlugin";

function MyApp({ Component, pageProps }) {
  let image = useRef(null);
  let container = useRef(null);

  let tl = new TimelineLite();

  useEffect(() => {
    // const gsap = require("gsap")
    const GSAP = require("gsap/CSSRulePlugin");
    const { CSSRulePlugin } = GSAP;
    gsap.registerPlugin(CSSRulePlugin);
    let imageReveal = CSSRulePlugin.getRule(".img-container:after");

    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { width: "0%", ease: Power2.easeInOut });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });
  });

  return (
    <>
      <section className="main">
        <p>GSAP IMAGE REVEAL</p>
        <div className="container" ref={(el) => (container = el)}>
          <>
            <div className="img-container">
              <img
                ref={(el) => {
                  image = el;
                }}
                src="https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80"
                // width={500}
                // height={500}
              />
            </div>
          </>
        </div>
      </section>
    </>
  );
}

export default MyApp;
