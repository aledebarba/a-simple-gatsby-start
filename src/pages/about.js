import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Section from "../components/section"
import styled from "styled-components"

const aboutPage = () => {
  return (
    <Layout>
      <Header siteTitle="About Screen">
        <p>This is a page describing the site</p>
      </Header>
      <Section className="pt-5 pb-5">
        <div className="row">
          <div className="col-s-12 col-md-6">
            <h2>About our site</h2>
            <p>Fugiat ex cillum ea pariatur mollit duis.</p>
            <p>
              Mollit reprehenderit laboris ipsum do sint aute ex aliqua minim.
            </p>
            <p>
              Minim proident nisi mollit Lorem laboris aliqua aliquip do ipsum
              tempor est anim. Magna incididunt incididunt officia eu qui. Sunt
              voluptate aute amet proident elit eiusmod ea magna commodo
              excepteur do ea ea. Sit voluptate sit velit officia commodo
              deserunt et nulla voluptate occaecat tempor consectetur minim
              adipisicing. Tempor elit tempor dolor commodo est dolor ea ut ex
              tempor in sint esse. Consectetur eiusmod duis sint dolor cillum
              velit tempor ad nisi culpa aute ex velit deserunt.
            </p>
            <Img src="https://www.fillmurray.com/480/360" />
          </div>
          <div className="col-s-12 col-md-6">
            <h2>About our work</h2>
            <p>
              Amet pariatur amet labore nisi proident. Velit cupidatat veniam
              cillum incididunt. Do cillum dolor enim culpa est qui cillum
              occaecat elit nisi. Esse sint ipsum esse in. Esse anim
              reprehenderit magna magna ea Lorem duis adipisicing excepteur
              cillum eu adipisicing aliquip in. Duis fugiat sit in dolore minim
              enim culpa adipisicing. Dolore enim elit laborum enim minim
              consequat consequat do voluptate sunt. Sit et elit eiusmod ad
              ullamco labore consectetur labore aliqua enim et laboris. Lorem
              excepteur et eu sint fugiat magna laborum ut culpa. Cillum irure
              labore excepteur veniam labore culpa laborum amet eu. Cillum amet
              eiusmod consectetur amet sint in officia id quis duis esse. Nulla
              eu ipsum dolor sit veniam incididunt. Fugiat adipisicing cupidatat
              duis ullamco consectetur voluptate fugiat ex magna deserunt qui
              Lorem excepteur commodo. Sit sunt officia magna veniam veniam
              aliqua deserunt aliquip. Nisi non voluptate ea sit nisi. Id magna
              consectetur dolor commodo qui et exercitation duis enim amet
              dolore eu eu aute. Anim mollit adipisicing pariatur in proident
              cillum elit nulla in irure. Ut anim tempor do ipsum dolor fugiat
              ipsum ex ut ad eiusmod cupidatat commodo. Tempor laboris id nulla
              esse in sunt nostrud in voluptate proident id fugiat in id.
              Consequat id adipisicing proident adipisicing laborum fugiat
              reprehenderit in cupidatat. Anim laboris cupidatat fugiat labore
              consequat fugiat nisi culpa ea id. Non reprehenderit cillum
              aliquip non pariatur nulla tempor aliqua enim ad occaecat occaecat
              consequat. Nisi id anim ut commodo do culpa ea duis culpa anim.
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default aboutPage

const Img = styled.img`
    display: block;
    width: 100%;
    height: auto;
    margin: 25px auto;
    text-align: center;
`