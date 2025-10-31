export default function NavBar() {
    return (
        <>
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
        </>
    )
}