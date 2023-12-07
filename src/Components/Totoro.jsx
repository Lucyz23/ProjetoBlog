import { Link } from "react-router-dom";
import Music from "../album/tonarinototoro.mp3";
import "./Totoro.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img16 from '../album/UnderRain.jpg';
import img17 from '../album/totoroAquarela.jpg';
import img18 from '../album/totoroImage.jpg';
import img19 from '../album/totoroColagens.jpg';
import img20 from '../album/totoro3.jpg';
import img21 from '../album/totoro.jpg';
import img22 from '../album/photoToto1.jpg';
import img23 from '../album/photoToto2.jpg';
import img24 from '../album/kawaiToto1.jpg';
import img25 from '../album/photoToto3.jpg';
import img26 from '../album/photoToto4.jpg';
import img27 from '../album/photoTotoro.jpg';
import img28 from '../album/wallpapertotoro.jpg';
import img29 from '../album/totoroMosaico.jpg';
import img30 from '../album/totoroColagens.jpg';
import img31 from '../album/artTotoro1.jpg';
import img32 from '../album/artTotoro2.jpg';
import img33 from '../album/artTotoro3.jpg';
import img34 from '../album/artTotoro4.jpg';
import img35 from '../album/artTotoro5.jpg';
import img36 from '../album/GhiblianimeTotoro.jpg';
import img37 from '../album/MyNeighbourTotoro.jpg';
import img38 from '../album/artTotoro6.jpg';

const playvideo = async () =>{
    let vid = document.getElementById("myVideo");
    vid.play()
}

export default function Totoro() {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (

    <body id="totoro">

<video id="myVideo" width="320" height="176" controls="controls" style={{position: "absolute",width:0,height:0,border:0}} >
        <source src={ Music } type="audio/mp3" />
      </video>
        
        <body id="totoro" className="photo1" onMouseOver={ playvideo }></body>
        <div className="topnav" id="myTopnav">
      <Link to="/header" className="active">Inicio</Link>
      <Link to="/totoro">Totoro</Link>
      <Link to="/princess">Mononoke Hime</Link>
      <Link to="/castle">Castelo Animado</Link>
      <Link to="/chihiro">Viagem de Chihiro</Link>
      <Link to="/kiki">Kikis Delivery Service</Link>
      <Link to="/">Sair</Link>
      </div>

      <section id="sessao-bemvindo1">
                    <div className="banner1"></div>
                    <div className="sessao-bemvindo-totoro">
                        <h1>Filme: Meu Amigo Totoro</h1>
                        </div>
                        <div id="photoTotoro"></div>
                        <div className="text">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="text2">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="text3">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="text4">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="text12">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                        
                </section>
                
                <section id="sessao-sobre1">

                        <div className="sessao-minibanner"></div>
                        <div className="sessao-text1">
                        <p>
                                LUa也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="text5">
                            <p>
                                LUz无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="text6">
                            <p>
                                LUy无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="text7">
                            <p>
                                LUc无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                    </div>
                </section>
                
                <section id="teste">
                    <div className="sessao-minibanner3"></div>
                    <div className="sessao-text2">
                        <p>
                                也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="text9">
                            <p>
                                无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="text10">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="text11">
                            <p>
                                无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                </section>
                <section>
                <videos>
                <iframe 
                style={{ padding: '260px', borderRadius: '30px', position: "relative", left: "200px", top: "240px" }}
                width="1040" 
                height="315" 
                src="https://www.youtube.com/embed/92a7Hj0ijLs?si=s7ezMU50SkB-cvfk" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                </videos>
                <figcaption id="legenda">Trailer: My Neighbor Totoro</figcaption>
                </section>
                
                <div>
                         <div className="sl3">
                    <Slider {...settings}>
                    <div>
                    <img className="imageD" src={img16} />
                    
                    </div>
                    <div>
                        <img className="imageD" src={img17} />
                    </div>
                    <div>
                        <img className="imageD" src={img18} />
                    </div>
                    <div>
                        <img className="imageD" src={img19} />
                    </div>
                    <div>
                        <img className="imageD" src={img20} />
                    </div>
                    <div>
                        <img className="imageD" src={img21} />
                    </div>
                    <div>
                        <img className="imageD" src={img22} />
                    </div>
                    <div>
                        <img className="imageD" src={img23} />
                    </div>
                    <div>
                        <img className="imageD" src={img24} />
                    </div><div>
                        <img className="imageD" src={img25} />
                    </div>
                    <div>
                        <img className="imageD" src={img26} />
                    </div>
                    <div>
                        <img className="imageD" src={img27} />
                    </div>
                    <div>
                        <img className="imageD" src={img28} />
                    </div>
                </Slider>
                </div>

                <div className="sl4">
                    <Slider {...settings}>
                        <div>
                            <img className="imageD"  src={img29} />
                        </div>
                    <div>
                            <img className="imageD"  src={img30} />
                        </div>
                        <div>
                            <img className="imageD" src={img31} />
                        </div>
                        <div>
                            <img className="imageD"  src={img32} />
                        </div>
                        <div>
                            <img className="imageD"  src={img33} />
                        </div>
                        <div>
                            <img className="imageD"  src={img34} />
                        </div>
                    <div>
                            <img className="imageD"  src={img35} />
                        </div>
                        <div>
                            <img className="imageD" src={img36} />
                        </div>
                        <div>
                            <img className="imageD"  src={img37} />
                        </div>
                        <div>
                            <img className="imageD"  src={img38} />
                        </div>
                        </Slider>
                </div>
                </div>
    </body>
  );
}
