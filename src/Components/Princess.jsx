// import React from "react";
import { Link } from "react-router-dom";
import Music from "../album/Mononoke.mp3";
import img1 from '../album/ashitaka.jpg';
import img2 from '../album/MononokeSan.jpg';
import img3 from '../album/PrincessMononoke.jpg';
import img4 from '../album/sanMoro.jpg';
import img5 from '../album/princessPhoto.jpg';
import img6 from '../album/san7.jpg';
import img7 from '../album/couple.png';
import img8 from '../album/couple4.png';
import img9 from '../album/sanArt.jpg';
import img10 from '../album/san6.jpg';
import img11 from '../album/san5.jpg';
import img12 from '../album/san4.jpg';
import img13 from '../album/san3.jpg';
import img14 from '../album/sanElobo.jpg';
import img15 from '../album/san1.jpg';
import "./Princess.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const playvideo = async () =>{
    let vid = document.getElementById("myVideo");
    vid.play()
}

export default function Princess() {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
  return (

    <body id="princess">

<video id="myVideo" width="320" height="176" controls="controls" style={{position: "absolute",width:0,height:0,border:0}} >
        <source src={ Music } type="audio/mp3" />
      </video>
        
        <body id="princess" className="music" onMouseOver={ playvideo }></body>
        <div className="topnav" id="myTopnav">
      <Link to="/header" className="active">Inicio</Link>
      <Link to="/totoro">Totoro</Link>
      <Link to="/princess">Mononoke Hime</Link>
      <Link to="/castle">Castelo Animado</Link>
      <Link to="/chihiro">Viagem de Chihiro</Link>
      <Link to="/">Sair</Link>
      </div>

      <section id="sessao-bem-vindo">
                    <div className="capa"></div>
                    <div className="sessao-bemvindo-mononoke">
                        <h1>Filme: Princesa Mononoke</h1>
                        </div>
                        <div id="photoMononoke"></div>
                        <div className="texto">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="texto2">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="texto3">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto4">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto5">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                        
                </section>
                
                <section id="sessao-about">

                        <div className="sessao-smallBanner"></div>
                        <div className="sessao-texto">
                        <p>
                                LUa也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="texto6">
                            <p>
                                LUz无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto7">
                            <p>
                                LUy无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto8">
                            <p>
                                LUc无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                    </div>
                </section>
                
                <section id="teste">
                    <div className="sessao-smallBanner1"></div>
                    <div className="sessao-texto2">
                        <p>
                                也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="texto10">
                            <p>
                                无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto11">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="texto12">
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
                style={{ position: "relative", left: "230px",  padding: '260px', top: "500px"}}
                width="1000" 
                height="155" 
                src="https://www.youtube.com/embed/4OiMOHRDs14?si=0DXdVU3Yi3bFlxnY" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
                </videos>
                <figcaption id="subtitle">Trailer Princesa Mononoke</figcaption>

                    </div>
                
                </section>
                <div>
                         <div className="sl1">
                    <Slider {...settings}>
                    <div>
                    <img className="imageC" src={img1} />
                    
                    </div>
                    <div>
                        <img className="imageC" src={img2} />
                    </div>
                    <div>
                        <img className="imageC" src={img3} />
                    </div>
                    <div>
                        <img className="imageC" src={img4} />
                    </div>
                    <div>
                        <img className="imageC" src={img5} />
                    </div>
                </Slider>
                </div>

                <div className="sl2">
                    <Slider {...settings}>
                        <div>
                            <img className="imageC"  src={img6} />
                        </div>
                    <div>
                            <img className="imageC"  src={img7} />
                        </div>
                        <div>
                            <img className="imageC" src={img8} />
                        </div>
                        <div>
                            <img className="imageC"  src={img9} />
                        </div>
                        <div>
                            <img className="imageC"  src={img10} />
                        </div>
                        <div>
                            <img className="imageC"  src={img11} />
                        </div>
                    <div>
                            <img className="imageC"  src={img12} />
                        </div>
                        <div>
                            <img className="imageC" src={img13} />
                        </div>
                        <div>
                            <img className="imageC"  src={img14} />
                        </div>
                        <div>
                            <img className="imageC"  src={img15} />
                        </div>
                        </Slider>
                </div>
                        
                </div>
           

    </body>
  );
}
