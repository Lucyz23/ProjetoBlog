// import React from "react";
import { Link } from "react-router-dom";
import Music from "../album/kaze.mp3";
import "./style.css";

const playvideo = async () =>{
    let vid = document.getElementById("myVideo");
    vid.play()
}

export default function Header() {
  return (

    <header id="capaHeader" >

<video id="myVideo" width="320" height="176" controls="controls" style={{position: "absolute",width:0,height:0,border:0}} >
        <source src={ Music } type="audio/mp3" />
      </video>
        
        <div className="photo" onMouseOver={ playvideo }></div>
        <div className="topnav" id="myTopnav">
      <Link to="/header" className="active">Inicio</Link>
      <Link to="/totoro">Totoro</Link>
      <Link to="/princess">Mononoke Hime</Link>
      <Link to="/castle">Castelo Animado</Link>
      <Link to="/chihiro">Viagem de Chihiro</Link>
      <Link to="/">Sair</Link>
      </div>

      <section id="sessao-bemvindo">
                    <div className="banner"></div>
                    <div className="sessao-bemvindo-content">
                        <h1>Seja bem vindo ao meu Blog</h1>
                        <div className="sessao-minibanner"></div>
                        <div className="sessao-descricao">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="paragraph2">
                            <p>
                                LUCY也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="paragraph3">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="paragraph4">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="paragraph12">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                        
                    </div>
                </section>
                
                <section id="sessao-sobre">

                        <div className="sessao-minibanner1"></div>
                        <div className="sessao-descricao1">
                        <p>
                                LUa也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="paragraph5">
                            <p>
                                LUz无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="paragraph6">
                            <p>
                                LUy无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="paragraph7">
                            <p>
                                LUc无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                    </div>
                </section>
                
                <section id="teste">
                    <div className="sessao-minibanner2"></div>
                    <div className="sessao-descricao8">
                        <p>
                                也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem
                                Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印刷着Lorem
                                Ipsum段落的纸张，从而广泛普及了它的使用。最近，计算机桌面出版软件”Aldus PageMaker”也通过同样的方式使Lorem Ipsum落入大众的视野。
                            </p>
                            </div>
                            <div className="paragraph9">
                            <p>
                                无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="paragraph10">
                            <p>
                                LUCY无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                            <div className="paragraph11">
                            <p>
                                无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem
                                Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本”，从而让内容更像可读的英语。如今，很多桌面排版软件以及网页编辑用
                            </p>
                            </div>
                </section>
                

                <footer>
                    <div className="capa">
                    <div id="iconGit"></div>
                    <div id="iconLink"></div>
                    <div id="iconReact"></div>
                    <div id="iconJava"></div>
                    <div id="iconJs"></div>
                    <div id="iconPhp"></div>
                    <div id="iconHtml"></div>
                    <div id="iconCss"></div>
                    <div id="iconPostgre"></div>
                    <div id="iconDocker"></div>
                    <div id="iconPython"></div>
                    <div id="iconTs"></div>
                    </div>
                    <div className="imageJiji"></div>
                    <div className="redes">
                    <p>Seja redirecionado à página do:</p>
                    
                    <div  className="git">
                          <p><a href="https://github.com/Lucyz23?tab=repositories" target="_blank" rel="noreferrer">:Github</a></p>
                          </div>
                    <div className="linke">
                          <p><a href="https://www.linkedin.com/in/lucy-magalh%C3%A3es-barbosa-211993129/" target="_blank" rel="noreferrer">:LinkedIn</a></p>
                          </div>
                          
                    </div>
                    
                </footer>
                
    </header>
  );
}
