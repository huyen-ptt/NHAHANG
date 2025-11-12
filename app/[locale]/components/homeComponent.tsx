'use client';
import PreOrder from "./shared/preOrder";
import NavBar from "./navBar";
import ReservationForm from "./shared/ReservationForm";
import SettingsPanel from "./shared/settings-panel";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HomeComponent() {
    const t = useTranslations();

    const pathname = usePathname();

    useEffect(() => {
        // Mỗi khi pathname (hoặc locale) thay đổi → reinit Isotope
        if (typeof window !== 'undefined' && (window as any).$) {
            const $ = (window as any).$;
            if ($('.menu-items').length) {
                const defaultFilter = $('.tagsort-active').attr('data-filter');

                const $grid = $('.menu-items').isotope({
                    itemSelector: '.menu-item',
                    layoutMode: 'fitRows',
                    filter: defaultFilter
                });

                $('.menu-tags').off('click').on('click', 'span', function (this: HTMLElement) {
                    $('.menu-tags span').removeClass('tagsort-active');
                    $(this).toggleClass('tagsort-active');

                    const filterValue = $(this).attr('data-filter');
                    $grid.isotope({ filter: filterValue });
                });

            }
        }
    }, [pathname]);

    return (
        <>
            <PreOrder />
            <div className="body">
                <div className="main-wrapper">
                    {/* Navigation */}
                    <nav className="navbar navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">
                                    <img width="100px" src="/img/THEKITCHEN-logo-opt-04.png" alt="nav-logo" />
                                </a>
                            </div>
                            <NavBar />
                        </div>
                    </nav>

                    {/* Home page */}
                    <section className="home">
                        <div className="tittle-block">
                            <div className="logo">
                                <a href="#">
                                    <img src="/img/THEKITCHEN-logo-opt-04.png" className="logo2" alt="logo" />
                                </a>
                            </div>
                            <h1>{t('home_fresh_fast')}</h1>
                            <h2> {t('home_description')}</h2>
                        </div>
                        <div className="scroll-down hidden-xs">
                            <a href="#about">
                                <img src="/img/arrow-down.png" alt="down-arrow" />
                            </a>
                        </div>
                    </section>

                    {/* About page*/}
                    <section className="about" id="about">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header wow fadeInDown">
                                        <h1>THE KITCHEN<small>{t('home_brand_story_section')}</small></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row wow fadeInUp">
                                <div className="col-md-4">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xs-12 hidden-sm about-photo">
                                                <div className="image-thumb">
                                                    <img height="200px" width="100%" src="img/anh3.jpg"
                                                        data-mfp-src="/img/fullImages/pic1.jpg" className="img-ab" alt="logo" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6 about-photo hidden-xs">
                                                <img height="130px" width="100%" src="img/anh2.jpg"
                                                    data-mfp-src="/img/fullImages/pic2.jpg" className="img-ab" alt="logo" />
                                            </div>
                                            <div className="col-sm-6 about-photo hidden-xs">
                                                <img height="130px" width="100%" src="img/anh1.jpg"
                                                    data-mfp-src="/img/fullImages/pic3.jpg" className="img-ab" alt="logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <p style={{ textAlign: "justify" }}>
                                        {t('home_brand_story')}
                                    </p>
                                    <br />
                                    <p style={{ textAlign: "justify" }}>
                                        {t('home_brand_mission')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* menu */}
                    <section className="menu" id="thucdon">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header td wow fadeInDown">
                                        <h1>{t('home_menu_title')}<small>{t('home_menu_description')}</small></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="restaurant-tabs">
                                <ul className="nav nav-tabs" id="restaurantTabs">
                                    <li className="active active-nh"><a href="#restaurant1" data-toggle="tab">The Kitchen</a></li>
                                    {/* <li><a href="#restaurant2" data-toggle="tab">Nhà hàng 2</a></li> */}
                                </ul>

                                <div className="tab-content">

                                    <div className="tab-pane fade in active" id="restaurant1">
                                        <div className="food-menu wow fadeInUp">

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="menu-tags">
                                                        <span data-filter=".starter" className="tagsort-active">{t('home_menu_category_pho')}</span>
                                                        <span data-filter=".breakfast">{t('home_menu_category_noodles')}</span>
                                                        <span data-filter=".dinner">{t('home_menu_category_banh_mi')}</span>
                                                        <span data-filter=".bb">{t('home_menu_category_steamed_buns')}</span>
                                                        <span data-filter=".lunch">{t('home_menu_category_snacks')}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row menu-items">

                                                <div className="menu-item col-sm-6 col-xs-12 bb d-flex">
                                                    <Image src="/img/BB-Thit-Heo-Trung-Cut-1.jpg" width={100} height={100} alt={t('pork_bun_quail')} />
                                                    <div>
                                                        <div className="clearfix menu-wrapper">
                                                            <h4>{t('pork_bun_quail')}</h4>
                                                            <span className="price">58.000</span>
                                                            <div className="dotted-bg"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 bb">
                                                    <Image src="/img/BB-Xa-Xiu-1.jpg" width={100} height={100} alt={t('char_siu_bun')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('char_siu_bun')}</h4>
                                                        <span className="price">48.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 bb">
                                                    <Image src="/img/Cade-1.jpg" width={100} height={100} alt={t('custard_bun')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('custard_bun')}</h4>
                                                        <span className="price">48.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 bb">
                                                    <Image src="/img/Banh-Trai-Dao-1.jpg" width={100} height={100} alt={t('peach_bun')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('peach_bun')}</h4>
                                                        <span className="price">48.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 bb">
                                                    <Image src="/img/banh-gio-3314.jpg" width={100} height={100} alt={t('steamed_rice_dumpling')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('steamed_rice_dumpling')}</h4>
                                                        <span className="price">48.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 starter">
                                                    <Image src="/img/pho-dac-biet.png" width={100} height={100} alt={t('special_pho')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('special_pho')}</h4>
                                                        <span className="price">118.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 starter">
                                                    <Image src="/img/pho-1-loai.png" width={100} height={100} alt={t('pho_types')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('pho_types')}</h4>
                                                        <span className="price">98.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 starter">
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('poached_egg')}</h4>
                                                        <span className="price">25.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 breakfast">
                                                    <Image src="/img/my-hoanh-thanh.png" width={100} height={100} alt={t('wonton_noodle_soup')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('wonton_noodle_soup')}</h4>
                                                        <span className="price">98.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 breakfast">
                                                    <Image src="/img/hoanh-thanh-kho.png" width={100} height={100} alt={t('dry_wonton_noodle')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('dry_wonton_noodle')}</h4>
                                                        <span className="price">98.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 dinner">
                                                    <Image src="/img/banh-mi-xiu-mai.png" width={100} height={100} alt={t('meatball_banh_mi')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('meatball_banh_mi')}</h4>
                                                        <span className="price">85.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 dinner">
                                                    <Image src="/img/banh-mi-ga-xe.png" width={100} height={100} alt={t('grilled_chicken_banh_mi')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('grilled_chicken_banh_mi')}</h4>
                                                        <span className="price">68.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 dinner">
                                                    <Image src="/img/banh-mi-thit-nuong.png" width={100} height={100} alt={t('grilled_meatball_banh_mi')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('grilled_meatball_banh_mi')}</h4>
                                                        <span className="price">68.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 dinner">
                                                    <Image src="/img/banh-mi-trung.png" width={100} height={100} alt={t('egg_banh_mi')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('egg_banh_mi')}</h4>
                                                        <span className="price">55.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 lunch">
                                                    <Image src="/img/cha-gio-hai-san-07.png" width={100} height={100} alt={t('seafood_spring_roll')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('seafood_spring_roll')}</h4>
                                                        <span className="price">60.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 lunch">
                                                    <Image src="/img/cha-gio-thit.png" width={100} height={100} alt={t('meat_spring_roll')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('meat_spring_roll')}</h4>
                                                        <span className="price">60.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 lunch">
                                                    <Image src="/img/hoanh-thanh-chien.png" width={100} height={100} alt={t('fried_wontons')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('fried_wontons')}</h4>
                                                        <span className="price">50.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 lunch">
                                                    <Image src="/img/khoai-tay-chien-07.png" width={100} height={100} alt={t('french_fries')} />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>{t('french_fries')}</h4>
                                                        <span className="price">50.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="restaurant2">
                                        <p>(Chưa có thực đơn cho Nhà hàng 2)</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </section>
                    {/* Our features */}
                    <section className="features" id="km">
                        <div className="container">

                            <div className="col-md-12">
                                <div className="page-header wow fadeInDown">
                                    <h1>{t('home_promotions_title')}
                                        <small>{t('home_promotions_subtitle')}</small>
                                    </h1>
                                </div>
                            </div>
                            <div className="row wow fadeInUp">


                                <div className="col-md-4 col-sm-12">
                                    <div className="features-tile">
                                        <div className="features-img">
                                            <img src="./img/Combo-poster-08.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="features-tile">
                                        <div className="features-img">
                                            <img src="./img/Combo-poster-09.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="features-tile">
                                        <div className="features-img">
                                            <img src="./img/Combo-poster-07.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Reservations page */}
                    <section className="reservation m-3" id="datban" >

                        <div className="d-flex row form-lh">
                            <div className="col-md-12">
                                <div className="page-header wow fadeInDown">
                                    <h1>{t('home_reservation_title')}
                                        <small>{t('home_reservation_subtitle')}</small>
                                    </h1>
                                </div>
                            </div>
                            <div className="col-md-8 form-lh">
                                <div className="row">

                                </div>
                                <div className="reservation-form wow fadeInUp">
                                    <ReservationForm />
                                </div>
                                <div className="reservation-footer">
                                    <p>{t('home_reservation_footer_1')} <strong>+84 90 2222 13 82</strong> {t('home_reservation_footer_2')}</p>
                                    <span></span>
                                </div>
                            </div>
                        </div>

                    </section>



                    {/* Our features */}
                    <section className="features">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header wow fadeInDown">
                                        <h1 className="white">{t('home_footer_banner_title')}<small>{t('home_footer_banner_subtitle')}</small></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="row wow fadeInUp">

                                <div className="col-md-6 col-sm-12">
                                    <div className="features-tile">
                                        <div className="features-img">
                                            <img src="/img/grhieu.jpg" alt="" />
                                        </div>
                                        <div className="features-content">
                                            <div className="page-header">
                                                <h1 style={{ textAlign: "center" }}>{t('home_t3_title')}</h1>

                                                <h1 style={{ textAlign: "center" }}><i>{t('home_t3_subtitle')}</i>
                                                </h1>
                                            </div>
                                            <p>{t('home_t3_paragraph_1')}</p>
                                            <p>{t('home_t3_paragraph_2')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="features-tile">
                                        <div className="features-img">
                                            <img src="./img/tang-3_1747130160170-min.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* Footer */}
                    <section className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <h1>{t('home_footer_about_title')}</h1>
                                    <p style={{ textAlign: "justify" }}>{t('home_footer_about_text')}</p>
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <h1>{t('home_footer_contact_title')}</h1>
                                    <div className="footer-address">
                                        <p><i className="fa fa-map-marker"></i>{t('home_footer_contact_address')}</p>
                                        <p><i className="fa fa-phone"></i>{t('home_footer_contact_phone')}</p>
                                        <p><i className="fa fa-envelope-o"></i><a style={{ color: "#bcbcbc" }}
                                            href="mailto:info@consortio.vn" className="__cf_email__">{t('home_footer_contact_email')}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            {/* <SettingsPanel /> */}
        </>
    );
}
