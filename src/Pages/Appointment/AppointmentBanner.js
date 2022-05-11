import chair from "../../assets/images/chair.png";
import bgChair from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <section
      style={{
        background: `url(${bgChair})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat-y",
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 lg:gap-28">
        <img
          className="rounded-lg shadow-2xl max-w-[320px] lg:max-w-[600px]"
          src={chair}
          alt=""
        />
        <div className="shadow-xl bg-white rounded-xl">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
