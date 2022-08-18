import React from "react";
import coc from "../../Assets/images/Zendesk.png";
import spot from "../../Assets/images/spotify.png";
import ebay from "../../Assets/images/ebay.png";
import coin from "../../Assets/images/coinbase.png";
import visa from "../../Assets/images/Visa.png";
import ancestry from "../../Assets/images/ancestrylogo.png";
import gini from "../../Assets/images/gini.png";
import zoom from "../../Assets/images/Zoom.png";
import coca from "../../Assets/images/Coca-Cola.png";
import uptick from "../../Assets/images/UpTick.png";
import tieto from "../../Assets/images/tieto.png";
import compass from "../../Assets/images/Com.png";
import tyboon from "../../Assets/images/Tyboon.png";
import google from "../../Assets/images/Google.png";
import pepsi from "../../Assets/images/Pepsi.png";
import uni from "../../Assets/images/Unilever.png";
import net from "../../Assets/images/netflix.png";
import xio from "../../Assets/images/Xiaomi.png";
import ama from "../../Assets/images/Amazon.png";

const ProUser = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold text-center text-header">
        More that 15000 Users Use Pro-Track to simplify their Task
      </h2>

      <div className="main mt-10">
        <marquee
          className="marq"
          direction="left"
          behavior="scroll"
          loop=""
          scrollamount="10"
        >
          <div className="flex gap-5">
            <img src={coc} width="120" height="80" alt="Natural" />
            <img src={ancestry} width="140" height="90" alt="Natural" />

            <img src={spot} width="120" height="80" alt="Natural" />
            <img src={ebay} width="120" height="80" alt="Natural" />
            <img src={compass} width="120" height="60" alt="Natural" />
            <img src={coin} width="120" height="80" alt="Natural" />
            <img src={visa} width="120" height="80" alt="Natural" />
            <img src={zoom} width="140" height="90" alt="Natural" />

            <img src={ama} width="120" height="60" alt="Natural" />
            <img src={google} width="120" height="60" alt="Natural" />
          </div>
        </marquee>
        <marquee
          className="marq"
          behavior="scroll"
          direction="right"
          loop=""
          scrollamount="10"
        >
          <div className="flex gap-5">
            <img src={pepsi} width="120" height="80" alt="Natural" />
            <img src={gini} width="120" height="80" alt="Natural" />

            <img src={uptick} width="120" height="80" alt="Natural" />
            <img src={tieto} width="120" height="80" alt="Natural" />
            <img src={tyboon} width="150" height="120" alt="Natural" />
            <img src={net} width="140" height="90" alt="Natural" />
            <img src={coca} width="150" height="80" alt="Natural" />
            <img src={xio} width="120" height="80" alt="Natural" />
            <img src={uni} width="120" height="80" alt="Natural" />
          </div>
        </marquee>
      </div>
    </div>
  );
};

export default ProUser;
