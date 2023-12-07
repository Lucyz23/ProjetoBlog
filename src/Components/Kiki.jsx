import { Link } from "react-router-dom";
import Music from "../album/JoeHisaishiKikisDeliverService.mp3";
import img104 from '../album/kiki3.jpg';
import img105 from '../album/kiki4.jpg';
import img106 from '../album/kiki5.jpg';
import img107 from '../album/kiki7.jpg';
import img108 from '../album/kiki9.jpg';
import img109 from '../album/haku1.jpg';
import img110 from '../album/haku2.jpg';
import img111 from '../album/ArtStationExplore.jpg';
import img112 from '../album/haku3.jpg';
import img113 from '../album/kiki10.jpg';
import img114 from '../album/kiki11.jpg';
import img115 from '../album/kiki12.jpg';
import img116 from '../album/kiki13.jpg';
import img117 from '../album/kiki14.jpg';
import img118 from '../album/kiki15.jpg';
import img119 from '../album/kiki16.jpg';
import img120 from '../album/kiki17.jpg';
import img121 from '../album/kikiAmigos.jpg';
import img122 from '../album/kikiArt.jpg';
import img123 from '../album/kikie.jpg';
import img124 from '../album/kikiEjiji.jpg';
import img125 from '../album/kikisDeliveryServiceAesthetic.jpg';
import img126 from '../album/kikiTombo.jpg';
import img127 from '../album/808c8382-7085-4086-a906-eef7383dbc06.jpg';
import img128 from '../album/KikisFlowerDelivery.jpg';
import img129 from '../album/GhibliFanart.jpg';
import img130 from '../album/d7659b395.jpg';
import img131 from '../album/0c2d441b445.jpg';
import img132 from '../album/jiji1.jpg';
import "./kiki.css";
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

    <body id="kikis">

<video id="myVideo" width="320" height="176" controls="controls" style={{position: "absolute",width:0,height:0,border:0}} >
        <source src={ Music } type="audio/mp3" />
      </video>
        
        <body id="kiki" className="photoFirst" onMouseOver={ playvideo }></body>
        <div className="topnav" id="myTopnav">
      <Link to="/header" className="active">Inicio</Link>
      <Link to="/totoro">Totoro</Link>
      <Link to="/princess">Mononoke Hime</Link>
      <Link to="/castle">Castelo Animado</Link>
      <Link to="/chihiro">Chihiro</Link>
      <Link to="/kiki">Kikis Delivery Service</Link>
      <Link to="/">Sair</Link>
      </div>

      <section id="WelcomeToSection">
                    <div className="photoFirstPage"></div>
                    <div className="sessao-bemvindo-kiki">
                        <h1>Filme: Kiki Serviço de Entregas</h1>
                        </div>
                        <div id="photoKiki"></div>
                        <div className="introText">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="textSecond">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="textThird">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="textFourth">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="textFifth">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                        
                </section>
                
                <section id="sectionAboutKiki">

                        <div className="photoIntroText"></div>
                        <div className="sectionTexts">
                        <p>
                                LUa也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="textSixth">
                            <p>
                                LUz无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="textSeventh">
                            <p>
                                LUy无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="textEighth">
                            <p>
                                LUc无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                    </div>
                </section>
                
                <section id="testes6">
                    <div className="sectionSmallBannerKiki"></div>
                    <div className="sectionIntroSecondText">
                        <p>
                                也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="textTenth">
                            <p>
                                无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="textEleventh">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="textTwelfth">
                            <p>
                                无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                </section>
                <section>
                    <div>
                        <videos>
                    
                        <iframe width="970" 
                        height="315" 
                        style={{ position: "relative", left: "230px",  padding: '260px', top: "500px"}}
                        src="https://www.youtube.com/embed/4bG17OYs-GA?si=dLViCY5oNkjHnv2n" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>
                </videos>
                <figcaption id="titleTrailer">Trailer: Kiki Serviço de Entregas</figcaption>

                    </div>
                
                </section>
                <div className="slides">
                         <div className="sl7">
                    <Slider {...settings}>
                    <div>
                    <img className="imageF" src={img104} />
                    
                    </div>
                    <div>
                        <img className="imageF" src={img105} />
                    </div>
                    <div>
                        <img className="imageF" src={img106} />
                    </div>
                    <div>
                        <img className="imageF" src={img107} />
                    </div>
                    <div>
                        <img className="imageF" src={img108} />
                    </div>
                    
                    <div>
                        <img className="imageF" src={img109} />
                    </div>
                    <div>
                        <img className="imageF" src={img110} />
                    </div>
                    <div>
                        <img className="imageF" src={img111} />
                    </div>
                    <div>
                            <img className="imageF"  src={img112} />
                        </div>
                    <div>
                            <img className="imageF"  src={img113} />
                        </div>
                        <div>
                            <img className="imageF" src={img114} />
                        </div>
                        <div>
                            <img className="imageF"  src={img115} />
                        </div>
                        <div>
                            <img className="imageF"  src={img116} />
                        </div>
                        <div>
                            <img className="imageF"  src={img117} />
                        </div>
                    <div>
                            <img className="imageF"  src={img118} />
                        </div>
                </Slider>
                </div>

                <div className="sl8">
                    <Slider {...settings}>
                        <div>
                            <img className="imageF" src={img119} />
                        </div>
                        <div>
                            <img className="imageF"  src={img120} />
                        </div>
                        <div>
                            <img className="imageF"  src={img121} />
                        </div>
                        <div>
                        <img className="imageF" src={img122} />
                    </div>
                    <div>
                        <img className="imageF" src={img123} />
                    </div> 
                    <div>
                        <img className="imageF" src={img124} />
                    </div> 
                    <div>
                        <img className="imageF" src={img125} />
                    </div> 
                    <div>
                        <img className="imageF" src={img126} />
                    </div> 
                    <div>
                        <img className="imageF" src={img127} />
                    </div> 
                    <div>
                        <img className="imageF" src={img128} />
                    </div> 
                    <div>
                        <img className="imageF" src={img129} />
                    </div> 
                    <div>
                        <img className="imageF" src={img130} />
                    </div> 
                    <div>
                        <img className="imageF" src={img131} />
                    </div>
                    <div>
                        <img className="imageF" src={img132} />
                    </div>
                        </Slider>
                </div>
                        
                </div>
           

    </body>
  );
}
