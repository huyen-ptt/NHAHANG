'use client';

import { useState, useEffect, forwardRef } from "react";
import DateTimePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DatePickerProps = {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  minDate?: Date | null;
  maxDate?: Date | null;
  label?: string;
  inputRef?: any;
  hasHour?: boolean;
  error?: boolean;
  disabled?: boolean;
  name?: string | null;
  datesDisable?: Date[];
};

/* ------------------------
   CUSTOM INPUT
------------------------ */
const CustomInput = forwardRef<HTMLInputElement, any>(
  ({ value, onClick, onChange, className, onFocus, inputRef, disabled }, ref) => (
    <div onClick={onClick} className={className}>
      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        onFocus={onFocus}
        ref={inputRef || ref}
        disabled={disabled}
        className="form-control"
      />
    </div>
  )
);

CustomInput.displayName = "CustomInput";

/* ------------------------
   MAIN COMPONENT
------------------------ */
export default function DatePicker({
  value = null,
  onChange = () => { },
  minDate = null,
  maxDate = null,
  label = "",
  inputRef = null,
  hasHour = false,
  error = false,
  disabled = false,
  name = null,
  datesDisable = [],
}: DatePickerProps) {

  const [excludeDates, setExcludeDates] = useState<Date[]>([]);

  useEffect(() => {
    if (datesDisable && datesDisable.length > 0) {
      setExcludeDates(datesDisable);
    }
  }, [datesDisable]);

  return (
    <div

    >
      <DateTimePicker
        selected={value}
        minDate={minDate || undefined}
        maxDate={maxDate || undefined}
        dateFormat={hasHour ? "dd/MM/yyyy - h:mm aa" : "dd/MM/yyyy"}
        onChange={(date) => onChange(date)}
        strictParsing
        customInput={
          <CustomInput
            label={label}
            inputRef={inputRef}
            disabled={disabled}
          />
        }
        showTimeInput={hasHour}
        disabled={disabled}
        excludeDates={excludeDates}
      />

      {/* Hidden input để submit form nếu cần */}
      <input type="hidden" value={value ? value.toString() : ""} name={name || undefined} />
    </div>
  );
}
