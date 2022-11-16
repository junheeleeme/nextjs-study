import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../src/layout";
import Lottie from "react-lottie-player";
import lottie from "../public/lottie/bitcoin.json";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>이준희 포트폴리오</title>
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              꾸준함이 생명입니다.
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                프로젝트 보러가기
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Lottie
              loop
              animationData={lottie}
              play
              style={{ width: 500, height: 400 }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
