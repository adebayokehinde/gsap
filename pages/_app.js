import React, { useRef, useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import gsap from "gsap";
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
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        ></link>
        <link
          rel="styleSheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
          crossorigin="anonymous"
        ></script>{" "}
      </Head>
      <div className="container p-5">
        <section className="main p-5">
          {/* <p>GSAP IMAGE REVEAL</p> */}
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
      </div>
    </>
  );
}

export default MyApp;
