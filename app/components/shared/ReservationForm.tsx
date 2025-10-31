"use client"; // 👈 Bắt buộc vì form này dùng event client-side

import { FormEvent, useState } from "react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    time: "",
    location: "",
    flight: "",
    email: "",
    guests: "",
    phone: "",
  });

  // Cập nhật state khi người dùng gõ
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Xử lý khi submit form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // chặn reload trang
    console.log("Dữ liệu form:", formData);
  };

  return (
    <form id="reservationform" method="POST" onSubmit={handleSubmit}>
      <div className="row">
        {/* Ngày */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="datepicker">Ngày</label>
            <input
              type="text"
              name="date"
              id="datepicker"
              className="form-control"
              placeholder="Chọn ngày"
              required
              value={formData.date}
              onChange={handleChange}
            />
            <i className="fa fa-calendar-o"></i>
          </div>
        </div>

        {/* Họ và tên */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="name">Họ và tên</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Nhập họ và tên"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <i className="fa fa-pencil-square-o"></i>
          </div>
        </div>

        {/* Giờ */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="timepicker">Giờ</label>
            <input
              type="text"
              name="time"
              id="timepicker"
              className="form-control"
              placeholder="Chọn giờ"
              required
              value={formData.time}
              onChange={handleChange}
            />
            <i className="fa fa-clock-o"></i>
          </div>
        </div>

        {/* Địa điểm */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="location">Địa điểm</label>
            <input
              type="text"
              name="location"
              id="location"
              className="form-control"
              placeholder="Nhập địa điểm"
              required
              value={formData.location}
              onChange={handleChange}
            />
            <i className="fa fa-map-marker"></i>
          </div>
        </div>

        {/* Chuyến bay */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="flight">Chuyến bay</label>
            <input
              type="text"
              name="flight"
              id="flight"
              className="form-control"
              placeholder="Nhập số chuyến bay (nếu có)"
              value={formData.flight}
              onChange={handleChange}
            />
            <i className="fa fa-plane"></i>
          </div>
        </div>

        {/* Email */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="email">Địa chỉ Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Nhập địa chỉ email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <i className="fa fa-envelope-o"></i>
          </div>
        </div>

        {/* Số lượng khách */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="guests">Số lượng khách</label>
            <input
              type="number"
              name="guests"
              id="guests"
              className="form-control"
              placeholder="Bao nhiêu người?"
              required
              value={formData.guests}
              onChange={handleChange}
            />
            <i className="fa fa-user"></i>
          </div>
        </div>

        {/* Số điện thoại */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="phone">Số điện thoại</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Nhập số điện thoại của bạn"
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <i className="fa fa-phone"></i>
          </div>
        </div>

        {/* Nút submit */}
        <div className="col-md-12 col-sm-12">
          <div className="reservation-btn">
            <button type="submit" className="btn btn-default btn-lg">
              Đặt bàn
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
