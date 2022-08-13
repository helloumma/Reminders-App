import { useState } from "react";
import { enGB } from "date-fns/locale";
import { DatePicker } from "react-nice-dates";
import "react-nice-dates/build/style.css";

/*
interface Props = {
    test 2
} */

const Calendar = () => {
  const [date, setDate] = useState<any>(new Date());

  const timeInputProps = {
    date,
    format: "HH:mm",
    locale: enGB,
    onDateChange: setDate,
  };

  return (
    <div style={{ display: "flex" }}>
      <DatePicker
        date={date}
        onDateChange={setDate}
        locale={enGB}
        format="dd/MM/yyyy"
      >
        {({ inputProps, focused }) => (
          <input
            className={"input" + (focused ? " -focused" : "")}
            style={{ width: 150 }}
            {...inputProps}
          />
        )}
      </DatePicker>
      <input
        className="input"
        style={{ marginLeft: 16, width: 80 }}
        {...timeInputProps}
      />
    </div>
  );
};
export default Calendar;
