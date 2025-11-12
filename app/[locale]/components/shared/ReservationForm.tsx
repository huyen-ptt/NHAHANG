"use client";

import { FormEvent, useState } from "react";
import { useTranslations } from 'next-intl';

export default function ReservationForm() {
  const t = useTranslations();

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
        setMessage(t('reservation_form_success'));
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
        setMessage(t('reservation_form_error') + result.error);
      }
    } catch (error) {
      console.error(error);
      setMessage(t('reservation_form_network_error'));
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
            <label htmlFor="datepicker">{t('reservation_form_date')}</label>
            <input
              type="text"
              name="date"
              id="datepicker"
              data-date-format="dd/mm/yyyy"
              className="form-control"
              placeholder={t('reservation_form_select_date')}
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
            <label htmlFor="name">{t('reservation_form_full_name')}</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder={t('reservation_form_enter_full_name')}
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
            <label htmlFor="timepicker">{t('reservation_form_time')}</label>
            <input
              type="text"
              name="time"
              id="timepicker"
              className="form-control"
              placeholder={t('reservation_form_select_time')}
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
            <label htmlFor="location">{t('reservation_form_location')}</label>
            <input
              type="text"
              name="location"
              id="location"
              className="form-control"
              placeholder={t('reservation_form_enter_location')}
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
            <label htmlFor="guests">{t('reservation_form_email')}</label>
            <input
              type="email"
              name="guests"
              id="guests"
              className="form-control"
              placeholder={t('reservation_form_enter_email')}
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
            <label htmlFor="phone">{t('reservation_form_phone_number')}</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              placeholder={t('reservation_form_enter_phone_number')}
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
              {loading ? t('reservation_form_submitting') : t('reservation_form_submit')}
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

