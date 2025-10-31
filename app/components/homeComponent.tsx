
import PreOrder from "./shared/preOrder";

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
                            <div id="navbar" className="navbar-collapse collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" role="button" aria-haspopup="true"
                                            aria-expanded="false">Trang chủ<span className="caret"></span></a>

                                    </li>

                                    <li className="dropdown">
                                        <a href="#datban" className="dropdown-toggle" role="button" aria-haspopup="true"
                                            aria-expanded="false">Đặt bàn<span className="caret"></span></a>

                                    </li>
                                    <li className="dropdown">
                                        <a href="#thucdon" className="dropdown-toggle" role="button" aria-haspopup="true"
                                            aria-expanded="false">Thực đơn<span className="caret"></span></a>

                                    </li>

                                </ul>
                            </div>
                            {/*/.navbar-collapse */}
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
                                        Được hình thành từ sự thấu hiểu sâu sắc về nhu cầu của hành khách khi sử dụng dịch vụ ẩm
                                        thực tại sân bay, The Kitchen ra đời với sứ mệnh: Mang đến một không gian thưởng thức ấm
                                        cúng, tiện nghi và đậm đà bản sắc Việt Nam. Mỗi món ăn không chỉ là hương vị mà còn là
                                        câu chuyện về văn hoá, mang lại cảm nhận trọn vẹn tinh hoa ẩm thực Việt giữa hành
                                        trình di chuyển tất bật.
                                    </p>
                                    <br />
                                    <p style={{ textAlign: "justify" }}>
                                        Chúng tôi mong muốn trở thành điểm dừng chân tin cậy của mọi hành khách – nơi không chỉ
                                        để nghỉ ngơi, thư giãn mà còn để tận hưởng những trải nghiệm ẩm thực độc đáo, giàu cảm
                                        xúc.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* Reservations page */}
                    <section className="reservation" id="datban">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header wow fadeInDown">
                                        <h1>THÔNG TIN ĐẶT BÀN
                                            <small>Đặt bàn trực tuyến. Thông tin sẽ được gửi về email của bạn.</small>
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="reservation-form wow fadeInUp">
                                <form
                                    id="reservationform" method="POST">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="datepicker">Ngày</label>
                                                <input type="text" name="date" className="form-control" id="datepicker"
                                                    placeholder="Chọn ngày" title="Vui lòng chọn ngày" required />
                                                <i className="fa fa-calendar-o"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="name">Họ và tên</label>
                                                <input type="text" className="form-control" id="name" name="name"
                                                    placeholder="Nhập họ và tên" title="Vui lòng nhập đầy đủ họ tên" required />
                                                <i className="fa fa-pencil-square-o"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="timepicker">Giờ</label>
                                                <input type="text" className="form-control" id="timepicker" name="time"
                                                    placeholder="Chọn giờ" title="Vui lòng chọn giờ mong muốn" required />
                                                <i className="fa fa-clock-o"></i>
                                            </div>
                                        </div>

                                        {/* Địa điểm */}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="location">Địa điểm</label>
                                                <input type="text" className="form-control" id="location" name="location"
                                                    placeholder="Nhập địa điểm" title="Vui lòng nhập địa điểm" required />
                                                <i className="fa fa-map-marker"></i>
                                            </div>
                                        </div>

                                        {/* Chuyến bay */}
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="flight">Chuyến bay</label>
                                                <input type="text" className="form-control" id="flight" name="flight"
                                                    placeholder="Nhập số chuyến bay (nếu có)"
                                                    title="Vui lòng nhập số chuyến bay nếu có" />
                                                <i className="fa fa-plane"></i>
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="email">Địa chỉ Email</label>
                                                <input type="email" className="form-control" id="email" name="email"
                                                    placeholder="Nhập địa chỉ email" title="Vui lòng nhập email của bạn"
                                                    required />
                                                <i className="fa fa-envelope-o"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="guests">Số lượng khách</label>
                                                <input className="form-control" type="number" id="guests" name="guests"
                                                    placeholder="Bao nhiêu người?" title="Vui lòng nhập số lượng khách"
                                                    required />
                                                <i className="fa fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <div className="form-group">
                                                <label htmlFor="phone">Số điện thoại</label>
                                                <input type="text" className="form-control" id="phone" name="phone"
                                                    placeholder="Nhập số điện thoại của bạn" title="Vui lòng nhập số điện thoại"
                                                    required />
                                                <i className="fa fa-phone"></i>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                            <div className="reservation-btn">
                                                <button type="submit" className="btn btn-default btn-lg" >Đặt
                                                    bàn</button>
                                                <div id="js-reservation-result" data-success-msg="Gửi thông tin thành công."
                                                    data-error-msg="Rất tiếc, có lỗi xảy ra."></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="reservation-footer">
                                <p>Bạn cũng có thể gọi tới: <strong>+84 90 2222 13 82</strong> để đặt bàn trực tiếp.</p>
                                <span></span>
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
                            <div className="row wow fadeInUp" style={{ display: "flex", justifyContent: "center" }}>

                                <div className="col-md-7 col-sm-8">
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
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 visible-sm">
                                    <div className="features-tile">
                                        <div className="features-img">
                                            <img src="/img/bannernh.jpg" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* menu */}
                    <section className="menu" id="thucdon">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="page-header wow fadeInDown">
                                        <h1>THỰC ĐƠN<small>Những món ăn được chế biến từ nguyên liệu tốt nhất</small></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="food-menu wow fadeInUp">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="menu-tags">
                                            <span data-filter=".starter" className="tagsort-active">PHỞ</span>
                                            <span data-filter=".breakfast">MÌ</span>
                                            <span data-filter=".dinner">BÁNH MÌ</span>
                                            <span data-filter=".bb">BÁNH BAO</span>
                                            {/* <span data-filter="*">BÁNH BAO</span> */}
                                            <span data-filter=".lunch">ĂN NHẸ</span>

                                        </div>
                                    </div>
                                </div>
                                <div className="row menu-items">
                                    <div className="menu-item col-sm-6 col-xs-12 bb">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Bánh bao thịt heo trứng cút</h4>
                                            <span className="price">58.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>Pork Bun with quail eggs</p>
                                    </div>
                                    <div className="menu-item col-sm-6 col-xs-12 bb">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Bánh bao xá xíu</h4>
                                            <span className="price">48.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>Char siu bun</p>
                                    </div>
                                    <div className="menu-item col-sm-6 col-xs-12 bb">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Bánh bao Cadé</h4>
                                            <span className="price">48.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>Custard bun </p>
                                    </div>
                                    <div className="menu-item col-sm-6 col-xs-12 bb">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Bánh bao trái đào</h4>
                                            <span className="price">48.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>Peach-shaped bun</p>
                                    </div>
                                    <div className="menu-item col-sm-6 col-xs-12 bb">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Bánh giò</h4>
                                            <span className="price">48.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>Steamed rice dumpling</p>
                                    </div>

                                    <div className="menu-item col-sm-6 col-xs-12 starter">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Phở Đặc Biệt</h4>
                                            <span className="price">118.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>SPECIAL PHO</p>
                                    </div>

                                    <div className="menu-item col-sm-6 col-xs-12 starter">
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
                                        <div className="clearfix menu-wrapper">
                                            <h4>Mì Hoành Thánh Nước</h4>
                                            <span className="price">98.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>WONTON NOODLES SOUP</p>
                                    </div>

                                    <div className="menu-item col-sm-6 col-xs-12 breakfast">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Mì Hoành Thánh Khô</h4>
                                            <span className="price">98.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>DRY WONTON NOODLES</p>
                                    </div>
                                    <div className="menu-item col-sm-6 col-xs-12 dinner">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Bánh Mì Xíu Mại</h4>
                                            <span className="price">85.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>VIETNAMESE BAGUETTE WITH MEATBALLS IN TOMATO SAUCE</p>
                                    </div>

                                    <div className="menu-item col-sm-6 col-xs-12 dinner">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Bánh Mì Gà Nướng</h4>
                                            <span className="price">68.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>GRILLED CHICKEN BANH MI</p>
                                    </div>

                                    <div className="menu-item col-sm-6 col-xs-12 dinner">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Bánh Mì Trứng</h4>
                                            <span className="price">55.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>EGG BANH MI</p>
                                    </div>

                                    <div className="menu-item col-sm-6 col-xs-12 dinner">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Bánh Mì Thịt Viên Nướng</h4>
                                            <span className="price">68.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>GRILLED MEATBALL BANH MI</p>
                                    </div>
                                    <div className="menu-item col-sm-6 col-xs-12 lunch">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Chả Giò Hải Sản</h4>
                                            <span className="price">60.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>SEAFOOD SPRING ROLLS</p>
                                    </div>

                                    <div className="menu-item col-sm-6 col-xs-12 lunch">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Chả Giò Thịt</h4>
                                            <span className="price">60.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>MEAT SPRING ROLLS</p>
                                    </div>

                                    <div className="menu-item col-sm-6 col-xs-12 lunch">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Hoành Thánh Chiên</h4>
                                            <span className="price">50.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>FRIED WONTONS</p>
                                    </div>

                                    <div className="menu-item col-sm-6 col-xs-12 lunch">
                                        <div className="clearfix menu-wrapper">
                                            <h4>Khoai Tây Chiên</h4>
                                            <span className="price">50.000</span>
                                            <div className="dotted-bg"></div>
                                        </div>
                                        <p>FRENCH FRIES</p>
                                    </div>


                                </div>
                                {/* <div className="row">
                            <div className="col-md-12">
                                <div className="menu-btn">
                                    <a className="btn btn-default btn-lg" href="menu_all.html" role="button">Explore our
                                        menu</a>
                                </div>
                            </div>
                        </div> {/* </div> */}
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

                <div className="b-settings-panel">
        <div className="settings-section">
            <span>
                Boxed
            </span>
            <div className="b-switch">
                <div className="switch-handle"></div>
            </div>
            <span>
                Wide
            </span>
        </div>
        <hr className="dashed" style={{ margin: "15px 0px" }} />
        <h5>Main Background</h5>
        <div className="settings-section bg-list">
            <div className="bg-wood_pattern"></div>
            <div className="bg-shattered"></div>
            <div className="bg-vichy"></div>
            <div className="bg-random-grey-variations"></div>
            <div className="bg-irongrip"></div>
            <div className="bg-gplaypattern"></div>
            <div className="bg-diamond_upholstery"></div>
            <div className="bg-denim"></div>
            <div className="bg-crissXcross"></div>
            <div className="bg-climpek"></div>
        </div>
        <hr className="dashed" style={{ margin: "15px 0px" }} />
        <h5>Color Scheme</h5>
        <div className="settings-section color-list">
            <div data-src="css/themes/blue.css" style={{ background: "#45b5f5" }}></div>
            <div data-src="css/themes/brown.css" style={{ background: "#dc8068" }}></div>
            <div data-src="css/themes/cyan.css" style={{ background: "#00becc" }}></div>
            <div data-src="css/themes/green.css" style={{ background: "#5bb75b" }}></div>
            <div data-src="css/themes/orange.css" style={{ background: "#ff7149" }}></div>
            <div data-src="css/themes/pink.css" style={{ background: "#fba1a1" }}></div>
            <div data-src="css/themes/red.css" style={{ background: "#dc3522" }}></div>
            <div data-src="css/themes/yellow.css" style={{ background: "#fdb813" }}></div>
        </div>

        <a data-src="css/style.css" className="reset"><span className="bg-wood_pattern">Reset</span></a>

        <div className="btn-settings"></div>
    </div>
        </>
    );
}