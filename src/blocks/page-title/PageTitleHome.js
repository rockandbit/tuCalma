import React from 'react';
import { Link } from 'react-scroll';
import portada from '../../assets/img/portadaPaula.png'

const PageTitleHome = () => {
    return (
        <section id="page-title" className="block">
            <div className="wrapper">
                <div className="row">
                    <div className="col col-1 position-relative">
                        <div className="title">
                            <h2 className="h">tu Calma<span className="dot">.</span></h2>

                            <div className="title-clone">tu Calma</div>
                        </div>

                        <div className="spacer p-top-lg d-flex">
                            <p className="p-large w-75 text-justify">
                                Soy Psicoterapeuta, con 10 años de formación y desde una mirada integrativa y holística, procuro ayudar a las personas a encontrar <b>bienestar</b> en los diferentes momentos de su vida. En ocasiones las mareas nos pueden abrumar, otras veces percibimos pequeñas olas  como grandes tsunamis, ……. acompañarte a encontrar tu calma.
                            </p>
                        </div>
                    </div>

                    <div className="col col-2 d-none d-sm-block">
                        <div className="d-flex">
                            <div className="align-self-start w-100">
                                <div className="img object-fit">
                                    <div className="object-fit-cover">
                                        <img src={portada} className="img-fluid" alt="Luca Reynolds" />
                                    </div>
                                </div>
                            </div>

                            <div className="align-self-end p-left-scroll">
                                <Link to="my-works"
                                      title="Scroll"
                                      spy={ true }
                                      smooth={ true }
                                      duration={ 900 }
                                      className="btn btn-link btn-vertical transform-scale-h border-0 p-0 scroll-to-id d-flex"
                                      href="#my-works"
                                >
                                    <span className="vertical-text">
                                        <span>S</span>
                                        <span>c</span>
                                        <span>r</span>
                                        <span>o</span>
                                        <span>l</span>
                                        <span>l</span>
                                    </span>

                                    <span className="align-self-end">
                                        <i className="icon-c icon-arrow-down" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageTitleHome;
