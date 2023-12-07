import { Link } from "react-router-dom";
import Music from "../album/joe-hisaishi-one-summers-day.mp3";
import img75 from "../album/Register.jpg";
import img76 from "../album/characters.jpg";
import img77 from "../album/Spiritedaway.jpg";
import img78 from "../album/hakuChihiro.jpg";
import img79 from "../album/hakuChihiro2.jpg";
import img80 from "../album/haku1.jpg";
import img81 from "../album/haku2.jpg";
import img82 from "../album/haku3.jpg";
import img83 from "../album/WALLPAPERANIME.jpg";
import img84 from "../album/hakuChihiro4.jpg";
import img85 from "../album/ꜱᴘɪʀɪᴛᴇᴅᴀᴡᴀʏᴡᴀʟʟᴘᴀᴘᴇʀ.jpg";
import img86 from "../album/haku4.jpg";
import img87 from "../album/noFace.jpg";
import img88 from "../album/friends.jpg";
import img89 from "../album/Chihiro1.jpg";
import img90 from "../album/SpiritedAwayjungonKim.jpg";
import img91 from "../album/hakuDragon.jpg";
import img92 from "../album/NofaceFriendsDeviantArt.jpg";
import img93 from "../album/hakuChihiro6.jpg";
import img94 from "../album/hakuChihiro7.jpg";
import img95 from "../album/AlwaysogetherDeviantArt.jpg";
import img96 from "../album/chihirostylisé.jpg";
import img97 from "../album/chihiroFlowers.jpg";
import img98 from "../album/ChihiroAceSpeid.jpg";
import img99 from "../album/hakuChihiro8.jpg";
import img100 from "../album/ChihiroandHakufromSpiritedAway.jpg";
import img101 from "../album/GhibliartworkGhibliartStudioghibliart.jpg";
import img102 from "../album/hakuChihiro10.jpg";
import img103 from "../album/chihiroFriend.jpg";
import "./chihiro.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const playvideo = async () => {
  let vid = document.getElementById("myVideo");
  vid.play();
};

export default function Castle() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <body id="chihiro">
      <video
        id="myVideo"
        width="320"
        height="176"
        controls="controls"
        style={{ position: "absolute", width: 0, height: 0, border: 0 }}
      >
        <source src={Music} type="audio/mp3" />
      </video>

      <body id="chihiro" className="capaEnter" onMouseOver={playvideo}></body>
      <div className="topnav" id="myTopnav">
        <Link to="/header" className="active">
          Inicio
        </Link>
        <Link to="/totoro">Totoro</Link>
        <Link to="/princess">Mononoke Hime</Link>
        <Link to="/castle">Castelo Animado</Link>
        <Link to="/chihiro">Chihiro</Link>
        <Link to="/kiki">Kikis Delivery Service</Link>
        <Link to="/">Sair</Link>
      </div>

      <section id="sessao-de-boas-vindas">
        <div className="photoTop"></div>
        <div className="sessao-bemvindo-chihiro">
          <h1>Filme: Viagem de Chihiro</h1>
        </div>
        <div id="photoChihiro"></div>
        <div className="firstText">
          <p>
            LUCY也称乱数假文或者哑元文本，
            是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
            Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
            Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus
            PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
          </p>
        </div>
        <div className="secondText">
          <p>
            LUCY也称乱数假文或者哑元文本，
            是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
            Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
            Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus
            PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
          </p>
        </div>
        <div className="thirdText">
          <p>
            LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
            Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
          </p>
        </div>
        <div className="fourthText">
          <p>
            LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
            Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
          </p>
        </div>
        <div className="fifthText">
          <p>
            LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
            Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
          </p>
        </div>
      </section>

      <section id="sessao-about-one">
        <div className="sessao-small-Banner"></div>
        <div className="sessao-texts">
          <p>
            LUa也称乱数假文或者哑元文本，
            是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
            Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
            Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus
            PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
          </p>
        </div>
        <div className="sixthText">
          <p>
            LUz无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
            Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
          </p>
        </div>
        <div className="seventhText">
          <p>
            LUy无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
            Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
          </p>
        </div>
        <div className="eighthText">
          <p>
            LUc无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
            Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
          </p>
        </div>
      </section>

      <section id="testes3">
        <div className="sessao-small-photo"></div>
        <div className="sessao-texto-second">
          <p>
            也称乱数假文或者哑元文本，
            是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
            Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
            Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus
            PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
          </p>
        </div>
        <div className="tenthText">
          <p>
            无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
            Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
          </p>
        </div>
        <div className="eleventhText">
          <p>
            LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
            Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
          </p>
        </div>
        <div className="twelfthText">
          <p>
            无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
            Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
          </p>
        </div>
      </section>
      <section>
        <div>
          <videos>
            <iframe
              style={{
                position: "relative",
                left: "230px",
                padding: "260px",
                top: "500px",
              }}
              width="970"
              height="315"
              src="https://www.youtube.com/embed/SgZI655GgHk?si=KUJgdaEVvueHfwiS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </videos>
          <figcaption id="especific">Trailer: Viagem de Chihiro</figcaption>
        </div>
      </section>
      <div className="slides">
        <div className="sl7">
          <Slider {...settings}>
            <div>
              <img className="imageF" src={img75} />
            </div>
            <div>
              <img className="imageF" src={img76} />
            </div>
            <div>
              <img className="imageF" src={img77} />
            </div>
            <div>
              <img className="imageF" src={img78} />
            </div>
            <div>
              <img className="imageF" src={img79} />
            </div>

            <div>
              <img className="imageF" src={img80} />
            </div>
            <div>
              <img className="imageF" src={img81} />
            </div>
            <div>
              <img className="imageF" src={img82} />
            </div>
            <div>
              <img className="imageF" src={img83} />
            </div>
            <div>
              <img className="imageF" src={img84} />
            </div>
            <div>
              <img className="imageF" src={img85} />
            </div>
            <div>
              <img className="imageF" src={img86} />
            </div>
            <div>
              <img className="imageF" src={img87} />
            </div>
            <div>
              <img className="imageF" src={img88} />
            </div>
            <div>
              <img className="imageF" src={img89} />
            </div>
          </Slider>
        </div>

        <div className="sl8">
          <Slider {...settings}>
            <div>
              <img className="imageF" src={img90} />
            </div>
            <div>
              <img className="imageF" src={img91} />
            </div>
            <div>
              <img className="imageF" src={img92} />
            </div>
            <div>
              <img className="imageF" src={img93} />
            </div>
            <div>
              <img className="imageF" src={img94} />
            </div>
            <div>
              <img className="imageF" src={img95} />
            </div>
            <div>
              <img className="imageF" src={img96} />
            </div>
            <div>
              <img className="imageF" src={img97} />
            </div>
            <div>
              <img className="imageF" src={img98} />
            </div>
            <div>
              <img className="imageF" src={img99} />
            </div>
            <div>
              <img className="imageF" src={img100} />
            </div>
            <div>
              <img className="imageF" src={img101} />
            </div>
            <div>
              <img className="imageF" src={img102} />
            </div>
            <div>
              <img className="imageF" src={img103} />
            </div>
          </Slider>
        </div>
      </div>
    </body>
  );
}
