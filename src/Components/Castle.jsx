import { Link } from "react-router-dom";
import Music from "../album/intherain.mp3";
import img39 from '../album/sophieHowl2.png';
import img40 from '../album/sophieHowl4.png';
import img41 from '../album/sophieRowl8.jpg';
import img42 from '../album/sophieHowl7.jpg';
import img43 from '../album/sophieHowl6.jpg';
import img44 from '../album/sophieHowl5.jpg';
import img45 from '../album/sophieHowl3.jpg';
import img46 from '../album/sophieHowl.jpg';
import img47 from '../album/kawaiCastelo.jpg';
import img48 from '../album/Sophiehatter.jpg';
import img49 from '../album/sophieEcalcifer.jpg';
import img50 from '../album/sophie1.jpg';
import img51 from '../album/sophie.jpg';
import img52 from '../album/howlBlack.jpg';
import img53 from '../album/casal1.jpg';
import img54 from '../album/sophieArt.jpg';
import img55 from '../album/sofieCastle.jpg';
import img56 from '../album/casal5.jpg';
import "./castle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const playvideo = async () =>{
    let vid = document.getElementById("myVideo");
    vid.play()
}

export default function Castle() {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (

    <body id="castle">

<video id="myVideo" width="320" height="176" controls="controls" style={{position: "absolute",width:0,height:0,border:0}} >
        <source src={ Music } type="audio/mp3" />
      </video>
        
        <body id="castle" className="capaEntrada" onMouseOver={ playvideo }></body>
        <div className="topnav" id="myTopnav">
      <Link to="/header" className="active">Inicio</Link>
      <Link to="/totoro">Totoro</Link>
      <Link to="/princess">Mononoke Hime</Link>
      <Link to="/castle">Castelo Animado</Link>
      <Link to="/chihiro">Viagem de Chihiro</Link>
      <Link to="/">Sair</Link>
      </div>

      <section id="sessao-welcome">
                    <div className="capaEntrada"></div>
                    <div className="sessao-bemvindo-castle-of-princess">
                        <h1>Filme: Castelo Animado</h1>
                        </div>
                        <div id="photoCastle"></div>
                        <div className="texto-one">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="texto-two">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="texto-three">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto-four">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto-five">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                        
                </section>
                
                <section id="sessao-about-one">

                        <div className="sessao-small-Banner"></div>
                        <div className="sessao-textos">
                        <p>
                                LUa也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="texto-six">
                            <p>
                                LUz无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto-seven">
                            <p>
                                LUy无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto-eight">
                            <p>
                                LUc无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                    </div>
                </section>
                
                <section id="testes">
                    <div className="sessao-small-Banner1"></div>
                    <div className="sessao-texto-two">
                        <p>
                                也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="texto-ten">
                            <p>
                                无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto-eleven">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto-twelve">
                            <p>
                                无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                </section>
                <section>
                    <div>
                        <videos>
                    
                        <iframe width="1020" height="155"
                        style={{ position: "relative", left: "230px",  padding: '260px', top: "500px"}}
                        src="https://www.youtube.com/embed/iwROgK94zcM?si=NUYIpGlJG5lGqlUj" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                </videos>
                <figcaption id="especificacao">Trailer Castelo Animado</figcaption>

                    </div>
                
                </section>
                <div>
                         <div className="sl5">
                    <Slider {...settings}>
                    <div>
                    <img className="imageE" src={img39} />
                    
                    </div>
                    <div>
                        <img className="imageE" src={img40} />
                    </div>
                    <div>
                        <img className="imageE" src={img41} />
                    </div>
                    <div>
                        <img className="imageE" src={img42} />
                    </div>
                    
                    <div>
                        <img className="imageE" src={img43} />
                    </div>
                    <div>
                        <img className="imageE" src={img44} />
                    </div>
                    <div>
                        <img className="imageE" src={img45} />
                    </div>
                </Slider>
                </div>

                <div className="sl6">
                    <Slider {...settings}>
                        <div>
                            <img className="imageE"  src={img46} />
                        </div>
                    <div>
                            <img className="imageE"  src={img47} />
                        </div>
                        <div>
                            <img className="imageE" src={img48} />
                        </div>
                        <div>
                            <img className="imageE"  src={img49} />
                        </div>
                        <div>
                            <img className="imageE"  src={img50} />
                        </div>
                        <div>
                            <img className="imageE"  src={img51} />
                        </div>
                    <div>
                            <img className="imageE"  src={img52} />
                        </div>
                        <div>
                            <img className="imageE" src={img53} />
                        </div>
                        <div>
                            <img className="imageE"  src={img54} />
                        </div>
                        <div>
                            <img className="imageE"  src={img55} />
                        </div>
                        <div>
                        <img className="imageE" src={img56} />
                    </div>
                        </Slider>
                </div>
                        
                </div>
           

    </body>
  );
}
