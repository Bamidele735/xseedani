import React from "react";
import { IndexPageProps } from "../types/sanityData";
import SecurityBg from "../public/home_banner.png";
import Image from "next/image";
import laptop from "../public/home_games.png";
import shape from "../public/home_blockchain.png";
import contoller from "../public/home_controller.png";
import nfthouse from "../public/home_marketplace.png";
import homeads from "../public/home_ads.png";

const IndexPage: React.FC<IndexPageProps> = ({}) => {
  return (
    <div>
      <div className="homepg ">
        <div className="herobanner">
          <Image src={SecurityBg} className="hero_img" alt="hero" />
        </div>
        <div
          className="container mx-auto"
          // style={{
          //   backgroundImage: `url(${SecurityBg.src})`,
          //   height: "110vh",
          // }}
        >
          <div className=" sectionhero ">
            {/*banner + btn */}
            <div className="textbtn">
              <div className="textbtn2">
                <div className="textin">
                  <button className="btntext">FULL GAMES</button>
                  <button className="btntext">LAYER 1 </button>
                </div>

                <div className="textin">
                  <button className="btntext">SOCIAL LOGIN</button>
                  <button className="btntext">FREE TO PLAY</button>
                </div>
              </div>
            </div>
            {/* banner + btn end */}
          </div>
        </div>

        <div className="section2 topp"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000">
          <div className="section2text">
            <div className="textgame">
              <h1 className="txb">32 mobile & pc games</h1>
              <p className="txp">
                Large libraary of studio games inspired by the very best games
                of all time such as COD, Fall Guys, Space Invaders, Dynasty
                Warriors & Diablo. We will generate revenue from adverts and
                share that with players.
                <br />
                <br />
                Our players can just focus on having fun and not need to know
                anything about blockchain technologhy unless they want to.
              </p>
              <button className="txbb">More</button>
            </div>
            <Image src={laptop} alt="laptop" className="laptop" />
          </div>
        </div>

        <div className="section2"
        data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000">
          <div className="section2text">
            <Image src={shape} alt="laptop" className="laptop" />
            <div className="textgame">
              <h1 className="txb">LAYER 1 BLOCKCHAIN</h1>
              <p className="txp">
                EVM blockchain to run all the games and dapps in our ecosystem
                and fully compatible with Ethereum, Avalanche, BSC, Fantom, etc.
                <br />
                <br />
                There will be a maximum of 30k nodes of which 25k will be
                available to the public to operate and earn $XSEED tokens.
                <br />
                <br />
                The node licence are on sale now.
              </p>
              <button className="txbb">More</button>
            </div>
          </div>
        </div>

        <div className="section2"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000">
          <div className="section2text">
            <div className="textgame">
              <h1 className="txb">Free to play</h1>
              <p className="txp">
                Industry leading games launcher. A single place from which
                players can play and track rewards across all games.
                <br />
                <br />
                Login with favourite social account {"(google, facebook)"} and a
                gaming wallet is automatically created. Web3 knowledge not
                needed untill when player are ready to transition onto the
                wonders of digital ownership or shared revenue.
              </p>
              <button className="txbb">More</button>
            </div>
            <Image src={contoller} alt="laptop" className="laptop" />
          </div>
        </div>

        <div className="section2"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000">
          <div className="section2text">
            <Image src={nfthouse} alt="laptop" className="laptop" />
            <div className="textgame">
              <h1 className="txb">NFT MARKETPLACE</h1>
              <p className="txp">
                Platform to trade digital assets. Our native token $XSEED will
                be the primary token used to power this MARKETPLACE.
                <br />
                <br />
                Players will have the ability to mint, buy, sell and manage
                ecosystem NFTs.
              </p>
              <button className="txbb">More</button>
            </div>
          </div>
        </div>

        <div className="section2"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000">
          <div className="section2text">
            <div className="textgame">
              <h1 className="txb">Connect Gamers to Business</h1>
              <p className="txp">
                Incentivised adverts integrated into all games powered by Google
                & Facebook AI. Ad revenue will be distributed as follow:
                <br />
                <br />
                60% to players 20% to token holders 20% to make new games
              </p>
              <button className="txbb">More</button>
            </div>
            <Image src={homeads} alt="laptop" className="laptop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
