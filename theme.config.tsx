import {useRouter} from "next/router";
import React = require("react");
import {useConfig} from "nextra-theme-docs";

export default {
    // logo: <strong>Golang Uzbekistan</strong>,
    logo: (
        <>
               <img width="70" src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png"/>
            <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        <strong>Golang Uzbekistan</strong>
      </span>
        </>
    ),
    project: {
        link: 'https://github.com/golang-uz',
    },
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "%s – GO",
            };
        }
    },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
        route === "/" || !title
            ? "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png"
            : `https://golang-uz.netlify.app/`;

        return(
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Nextra" />
            <meta property="og:description" content="The next site builder" />
            <link rel="icon" type="image/x-icon" href="https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Aqua.svg"/>
            <meta
                name="og:description"
                content="O'zbek dasturchilari tomonidan qo'llab quvvatlanadigan Golang hamjamiyati."
            />
            <meta
                name="description"
                content="O'zbek dasturchilari tomonidan qo'llab quvvatlanadigan Golang hamjamiyati."
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png" />
            <meta name="twitter:site:domain" content="golang-uz.netlify.app" />
            <meta name="twitter:url" content="https://golang-uz.netlify.app/" />
            <meta name="og:title" content={title ? title + " – Golang" : "Golang"} />
            <meta name="og:image" content="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Aqua.png" />
            <meta name="apple-mobile-web-app-title" content="Golang Uzbekistan" />
        </>
    );
        },

    search: {
        emptyResult: (
            <div className="text-center">Hech narsa topilmadi</div>
        ),

        loading: "Qidirilmoqda...",
        placeholder: "Dokumentatsiyadan qidirish",
    },
    editLink: {
        text: "GitHub da o'zgartirish kiritish →",
    },
    feedback: {
        content: "Savollar? Bizga xat qoldiring →",
        labels: "feedback",
    },
    navigation: {
        prev: true,
        next: true
    },
    defaultShowCopyCode: true,
    primaryHue:178,
    docsRepositoryBase: 'https://github.com/golang-uz',
    sidebar: {
        titleComponent({ title, type }) {
            if (type === "separator") {
                return <span className="cursor-default">{title}</span>;
            }
            return <>{title}</>;
        },
        defaultMenuCollapseLevel: 1,
        toggleButton: true,
    },
    footer: {
        text: (
            <div className="w-full text-center">
                💙️ ila ⌨️ yordamida siz uchun!
            </div>
        ),
    },
}


