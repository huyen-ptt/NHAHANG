"use client";

import { FormEvent, useState, useEffect } from "react";
import { useTranslations,useLocale  } from "next-intl";
import DatePicker from "./input/date-picker";

export default function ReservationForm() {
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    console.log(typeof window)
    if ((window as any).$) {
      const $ = (window as any).$;

      if (!$("#datepicker").length) return;

      $("#datepicker").datepicker({
        autoclose: true,
        format: "dd/mm/yyyy",
        todayHighlight: true
      });

      $("#datepicker").on("changeDate", function (this: HTMLElement) {
        const value = $(this).val();
        setFormData((prev) => ({ ...prev, date: value }));
      });
    }
  }, []);

  type FormData = {
    date: Date;
    name: string;
    time: string;
    location: string;
    email: string;
    phone: string;
    guests: number;
  };

  const [formData, setFormData] = useState<FormData>({
    date: new Date(),
    name: "",
    time: "",
    location: "",
    email: "",
    phone: "",
    guests: 1
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    console.log("Submitting form data:", formData);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json","x-next-intl-locale": locale },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setMessage(t("reservation_form_success"));
        setFormData({
          date: new Date(),
          name: "",
          time: "",
          location: "",
          email: "",
          phone: "",
          guests: 1
        });
      } else {
        setMessage(t("reservation_form_error") + result.error);
      }
    } catch (err) {
      console.error(err);
      setMessage(t("reservation_form_network_error"));
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
            <DatePicker
              value={formData.date}
              onChange={(date) => setFormData((prev) => ({ ...prev, date: date || new Date() }))}
              minDate={new Date()}
            />
            <i className="fa fa-calendar-o"></i>
          </div>
        </div>

        {/* Họ và tên */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="name">{t("reservation_form_full_name")}</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder={t("reservation_form_enter_full_name")}
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
            <label htmlFor="timepicker">{t("reservation_form_time")}</label>
            <input
              type="text"
              name="time"
              id="timepicker"
              className="form-control"
              placeholder={t("reservation_form_select_time")}
              required
              value={formData.time}
              onChange={handleChange}
            />
            <i className="fa fa-clock-o"></i>
          </div>
        </div>

        {/* Địa điểm */}
        {/* <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="location">{t("reservation_form_location")}</label>
            <input
              type="text"
              name="location"
              id="location"
              className="form-control"
              placeholder={t("reservation_form_enter_location")}
              value={formData.location}
              onChange={handleChange}
            />
            <i className="fa fa-map-marker"></i>
          </div>
        </div> */}

        {/* Số lượng khách */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="guests">{t("reservation_form_guests")}</label>
            <input
              type="number"
              name="guests"
              id="guests"
              className="form-control"
              placeholder={t("reservation_form_enter_guests")}
              value={formData.guests}
              onChange={handleChange}
            />
            <i className="fa fa-map-marker"></i>
          </div>
        </div>

        {/* Email */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="email">{t("reservation_form_email")}</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder={t("reservation_form_enter_email")}
              required
              value={formData.email}
              onChange={handleChange}
            />
            <i className="fa fa-user"></i>
          </div>
        </div>

        {/* Số điện thoại */}
        <div className="col-md-4 col-sm-6">
          <div className="form-group">
            <label htmlFor="phone">{t("reservation_form_phone_number")}</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              placeholder={t("reservation_form_enter_phone_number")}
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <i className="fa fa-phone"></i>
          </div>
        </div>

        {/* Submit */}
        <div className="col-md-12 col-sm-12">
          <div className="reservation-btn">
            <button
              type="submit"
              className="btn btn-default btn-lg"
              disabled={loading}
            >
              {loading ? t("reservation_form_submitting") : t("reservation_form_submit")}
            </button>
          </div>
        </div>

        {/* Thông báo */}
        {message && (
          <div className="col-md-12 text-center" style={{ marginTop: "10px" }}>
            <p>{message}</p>
          </div>
        )}
      </div>
    </form>
  );
}
