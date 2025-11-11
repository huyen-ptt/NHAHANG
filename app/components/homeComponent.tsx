import PreOrder from "./shared/preOrder";
import NavBar from "./navBar";
import ReservationForm from "./shared/ReservationForm";
import SettingsPanel from "./shared/settings-panel";
import Image from "next/image";

export default function HomeComponent() {
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
                            <h1>FRESH AND FAST</h1>
                            <h2> Khởi đầu hành trình của bạn với tinh hoa ẩm thực Việt</h2>
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
                                        <h1>THE KITCHEN<small>CÂU CHUYỆN THƯƠNG HIỆU VÀ SỨ MỆNH</small></h1>
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
                                        Được hình thành từ sự thấu hiểu sâu sắc về nhu cầu của hành khách khi sử dụng dịch vụ ẩm thực tại sân bay, The Kitchen ra đời với sứ mệnh: Mang đến một không gian thưởng thức ấm cúng, tiện nghi và đậm đà bản sắc Việt Nam. Mỗi món ăn không chỉ là hương vị mà còn là câu chuyện về văn hoá, tinh hoa ẩm thực Việt.
                                    </p>
                                    <br />
                                    <p style={{ textAlign: "justify" }}>
                                        Chúng tôi mong muốn trở thành điểm dừng chân tin cậy của mọi hành khách – nơi không chỉ để nghỉ ngơi, thư giãn mà còn để tận hưởng những trải nghiệm ẩm thực độc đáo, giàu cảm xúc
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
                                        <h1>THỰC ĐƠN<small>Những món ăn được chế biến từ nguyên liệu tốt nhất</small></h1>
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
                                                        <span data-filter=".starter" className="tagsort-active">PHỞ</span>
                                                        <span data-filter=".breakfast">MÌ</span>
                                                        <span data-filter=".dinner">BÁNH MÌ</span>
                                                        <span data-filter=".bb">BÁNH BAO</span>
                                                        <span data-filter=".lunch">ĂN NHẸ</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row menu-items">

                                                <div className="menu-item col-sm-6 col-xs-12 bb d-flex">
                                                    {/* <img width="100px" src="./img/BB-Thit-Heo-Trung-Cut-1.jpg" /> */}
                                                    <Image src="/img/BB-Thit-Heo-Trung-Cut-1.jpg" width={100} height={100} alt="Bánh Bao Thịt Heo Trứng Cút" />
                                                    <div>
                                                        <div className="clearfix menu-wrapper">
                                                            <h4>Bánh bao thịt heo trứng cút</h4>
                                                            <span className="price">58.000</span>
                                                            <div className="dotted-bg"></div>
                                                        </div>
                                                        <p>Pork Bun with quail eggs</p>
                                                    </div>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 bb">
                                                    {/* <img width="100px" src="./img/BB-Xa-Xiu-1.jpg" /> */}
                                                    <Image src="/img/BB-Xa-Xiu-1.jpg" width={100} height={100} alt="Bánh Bao Xá Xíu" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Bánh bao xá xíu</h4>
                                                        <span className="price">48.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>Char siu bun</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 bb">
                                                    {/* <img width="100px" src="./img/Cade-1.jpg" /> */}
                                                    <Image src="/img/Cade-1.jpg" width={100} height={100} alt="Bánh Bao Cadé" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Bánh bao Cadé</h4>
                                                        <span className="price">48.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>Custard bun </p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 bb">
                                                    {/* <img width="100px" src="./img/Banh-Trai-Dao-1.jpg" /> */}
                                                    <Image src="/img/Banh-Trai-Dao-1.jpg" width={100} height={100} alt="Bánh bao trái đào" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Bánh bao trái đào</h4>
                                                        <span className="price">48.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>Peach-shaped bun</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 bb">
                                                    {/* <img width="100px" src="./img/banh-gio-3314.jpg" /> */}
                                                    <Image src="/img/banh-gio-3314.jpg" width={100} height={100} alt="Bánh giò" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Bánh giò</h4>
                                                        <span className="price">48.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>Steamed rice dumpling</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 starter">
                                                    {/* <img width="100px" src="./img/pho dac biet.png" /> */}
                                                    <Image src="/img/pho-dac-biet.png" width={100} height={100} alt="Phở Đặc Biệt" />

                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Phở Đặc Biệt</h4>
                                                        <span className="price">118.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>SPECIAL PHO</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 starter">
                                                    {/* <img width="100px" src="./img/pho 1 loai.png" /> */}
                                                    <Image src="/img/pho-1-loai.png" width={100} height={100} alt="Phở Tái | Chín | Nạm | Gầu" />

                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Phở Tái | Chín | Nạm | Gầu</h4>
                                                        <span className="price">98.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>PHO WITH RARE BEEF | WELL-DONE BRISKET | FLANK | FATTY BRISKET</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 starter">
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Trứng Chần</h4>
                                                        <span className="price">25.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>POACHED EGG</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 breakfast">
                                                    {/* <img width="100px" src="./img/my hoanh thanh.png" /> */}
                                                    <Image src="/img/my-hoanh-thanh.png" width={100} height={100} alt="Mì Hoành Thánh Nước" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Mì Hoành Thánh Nước</h4>
                                                        <span className="price">98.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>WONTON NOODLES SOUP</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 breakfast">
                                                    {/* <img width="100px" className="hthanh" src="./img/hoanh thanh kho.png" /> */}
                                                    <Image src="/img/hoanh-thanh-kho.png" width={100} height={100} alt="Mì Hoành Thánh Khô" />

                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Mì Hoành Thánh Khô</h4>
                                                        <span className="price">98.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>DRY WONTON NOODLES</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 dinner">
                                                    {/* <img width="100px" src="./img/banh mi xiu mai.png" /> */}
                                                    <Image src="/img/banh-mi-xiu-mai.png" width={100} height={100} alt="Bánh Mì Xíu Mại" />

                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Bánh Mì Xíu Mại</h4>
                                                        <span className="price">85.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>VIETNAMESE BAGUETTE WITH MEATBALLS IN TOMATO SAUCE</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 dinner">
                                                    {/* <img width="100px" className="img-td" src="./img/banh mi ga xe.png" /> */}
                                                    <Image src="/img/banh-mi-ga-xe.png" width={100} height={100} alt="Bánh Mì Gà Nướng" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Bánh Mì Gà Nướng</h4>
                                                        <span className="price">68.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>GRILLED CHICKEN BANH MI</p>
                                                </div>
                                                <div className="menu-item col-sm-6 col-xs-12 dinner">
                                                    {/* <img width="100px" className="img-td" src="./img/banh mi thit nuong.png" /> */}
                                                    <Image src="/img/banh-mi-thit-nuong.png" width={100} height={100} alt="Bánh Mì Thịt Viên Nướng" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Bánh Mì Thịt Viên Nướng</h4>
                                                        <span className="price">68.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>GRILLED MEATBALL BANH MI</p>
                                                </div>
                                                <div className="menu-item col-sm-6 col-xs-12 dinner">
                                                    {/* <img width="100px" src="./img/banh mi trung.png" /> */}
                                                    <Image src="/img/banh-mi-trung.png" width={100} height={100} alt="Bánh Mì Trứng" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Bánh Mì Trứng</h4>
                                                        <span className="price">55.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>EGG BANH MI</p>
                                                </div>



                                                <div className="menu-item col-sm-6 col-xs-12 lunch">
                                                    {/* <img width="100px" src="./img/cha gio hai san-07.png" /> */}
                                                    <Image src="/img/cha-gio-hai-san-07.png" width={100} height={100} alt="Chả Giò Hải Sản" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Chả Giò Hải Sản</h4>
                                                        <span className="price">60.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>SEAFOOD SPRING ROLLS</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 lunch">
                                                    {/* <img width="100px" className="img-td" src="./img/cha gio thit.png" /> */}
                                                    <Image src="/img/cha-gio-thit.png" width={100} height={100} alt="Chả Giò Thịt" />

                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Chả Giò Thịt</h4>
                                                        <span className="price">60.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>MEAT SPRING ROLLS</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 lunch">
                                                    {/* <img width="100px" src="./img/hoanh thanh chien.png" /> */}
                                                    <Image src="/img/hoanh-thanh-chien.png" width={100} height={100} alt="Hoành Thánh Chiên" />

                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Hoành Thánh Chiên</h4>
                                                        <span className="price">50.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>FRIED WONTONS</p>
                                                </div>

                                                <div className="menu-item col-sm-6 col-xs-12 lunch">
                                                    {/* <img width="100px" src="./img/khoai tay chien-07.png" /> */}
                                                    <Image src="/img/khoai-tay-chien-07.png" width={100} height={100} alt="Khoai Tây Chiên" />
                                                    <div className="clearfix menu-wrapper">
                                                        <h4>Khoai Tây Chiên</h4>
                                                        <span className="price">50.000</span>
                                                        <div className="dotted-bg"></div>
                                                    </div>
                                                    <p>FRENCH FRIES</p>
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
                                    <h1>CHƯƠNG TRÌNH KHUYẾN MÃI
                                        <small>Khám phá ưu đãi ngay</small>
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
                                    <h1>THÔNG TIN ĐẶT BÀN
                                        <small>Đặt bàn trực tuyến. Thông tin sẽ gửi về Email</small>
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
                                    <p>Bạn cũng có thể gọi tới: <strong>+84 90 2222 13 82</strong> để đặt bàn trực tiếp.</p>
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
                                        <h1 className="white">HỆ THỐNG THE KITCHEN<small>Những nhà hàng thuộc hệ thống The
                                            Kitchen</small></h1>
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
                                                <h1 style={{ textAlign: "center" }}>THE KITCHEN - NHÀ GA T3</h1>

                                                <h1 style={{ textAlign: "center" }}><i>SÂN BAY TÂN SƠN NHẤT, TP.HCM, VIỆT NAM</i>
                                                </h1>
                                            </div>
                                            <p>Một không gian ẩm thực Việt giữa lòng sân bay, nơi mỗi vị khách đều được chào đón
                                                trước mỗi hành trình</p>
                                            <p>Quý khách sau khi làm thủ tục check-in, vui lòng đi về phía đối diện cửa ra tàu bay số 17 trên tầng 3, The Kitchen hân hạnh được phục vụ
                                                </p>
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
                                    <h1>Về chúng tôi</h1>
                                    <p style={{ textAlign: "justify" }}>Được hình thành từ sự thấu hiểu sâu sắc về nhu cầu của hành
                                        khách khi sử dụng dịch vụ ẩm
                                        thực tại sân bay, The Kitchen ra đời với sứ mệnh: Mang đến một không gian thưởng thức ấm
                                        cúng, tiện nghi và đậm đà bản sắc Việt Nam. Mỗi món ăn không chỉ là hương vị mà còn là
                                        câu chuyện về văn hoá, mang lại cảm nhận trọn vẹn tinh hoa ẩm thực Việt giữa hành
                                        trình di chuyển tất bật.</p>
                                </div>

                                <div className="col-md-6 col-sm-6">
                                    <h1>Liên hệ</h1>
                                    <div className="footer-address">
                                        <p><i className="fa fa-map-marker"></i>82 Nguyen Huu Huan Street, Hoan Kiem Ward, Hanoi</p>
                                        <p><i className="fa fa-phone"></i>Phone: +84 90 2222 13 82</p>
                                        <p><i className="fa fa-envelope-o"></i><a style={{ color: "#bcbcbc" }}
                                            href="mailto:info@consortio.vn" className="__cf_email__">info@consortio.vn</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <SettingsPanel />
        </>
    );
}