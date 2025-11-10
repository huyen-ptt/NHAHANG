"use client";

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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Cập nhật khi nhập
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        setMessage("✅ Đặt bàn thành công! Chúng tôi sẽ liên hệ sớm.");
        setFormData({
          date: "",
          name: "",
          time: "",
          location: "",
          flight: "",
          email: "",
          guests: "",
          phone: "",
        });
      } else {
        setMessage("❌ Có lỗi xảy ra: " + result.error);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Không thể gửi thông tin. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
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
              data-date-format="dd/mm/yyyy"
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

        {/* Số lượng khách */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="guests">Email</label>
            <input
              type="email"
              name="guests"
              id="guests"
              className="form-control"
              placeholder="Email"
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
            <button
              type="submit"
              className="btn btn-default btn-lg"
              disabled={loading}
            >
              {loading ? "Đang gửi..." : "Đặt bàn"}
            </button>
          </div>
        </div>

        {/* Thông báo kết quả */}
        {message && (
          <div className="col-md-12 text-center" style={{ marginTop: "10px" }}>
            <p>{message}</p>
          </div>
        )}
      </div>
    </form>
  );
}
