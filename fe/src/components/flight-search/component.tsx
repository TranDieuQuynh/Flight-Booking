import { useEffect, useState } from "react";
import styles from "./component.module.css";
import { Airport, getAllAirports } from "@/api/airports";
import { Flight, searchFlights } from "@/api/flights";
import { setFlight } from '@/api/booking';
import { redirect } from "next/navigation";

function SearchSection(props: any) {
  const [srcAirport, setSrcAirport] = useState("");
  const [destAirport, setDestAirport] = useState("");
  const [startTime, setStartTime] = useState(new Date());

  async function apply() {
    const message = (await searchFlights(srcAirport, destAirport, startTime.toISOString()));
    props.setFlights(message.flights);

    if (!message.flights.length) {
      alert("Không tìm thấy chuyến bay phù hợp với yêu cầu của bạn.");
    }
  }

  return (
    <aside className={styles["sidebar"]}>
      <h2>Bộ Lọc</h2>
      <div className={styles["filter-group"]}>
        <label>Điểm khởi hành:</label>
        <select value={srcAirport} onChange={(e) => setSrcAirport(e.target.value)}>
          <option value="">Tất cả</option>
          {
            props.airports.map((airport: Airport) => (
              <option key={airport.airport_id} value={airport.airport_name}>
                {airport.airport_name}
              </option>
            ))
          }
        </select>
      </div>
      <div className={styles["filter-group"]}>
        <label>Điểm đến:</label>
        <select value={destAirport} onChange={(e) => setDestAirport(e.target.value)}>
          <option value="">Tất cả</option>
          {
            props.airports.map((airport: Airport) => (
              <option key={airport.airport_id} value={airport.airport_name}>
                {airport.airport_name}
              </option>
            ))
          }
        </select>
      </div>
      <div className={styles["filter-group"]}>
        <label>Ngày đi</label>
        <input 
          type="date" 
          id={styles["departure-time"]}
          value={startTime.toISOString().split("T")[0]} 
          onChange={(e) => setStartTime(new Date(e.target.value))}
        />
      </div>
      <button className={styles["apply-filters"]} onClick={e => apply()}>Áp dụng</button>
    </aside>
  )
}

function FlightCard(props: any) {
  const flight = props.flight;

  function applyNewFlight() {
    setFlight(flight);
    redirect("/booking");
  }

  return (
    <div className={styles["flight-card"]}>
      <div className={styles["flight-info"]}>
      <h3>{flight.aircraft_name}</h3>
        <p>{flight.src_airport} - {flight.dest_airport}</p>
        <p>Khởi hành: {flight.start_time.split("T")[0]}</p>
      </div>
      <div className={styles["flight-price"]}>
        <p>{flight.base_price} VND</p>
        <button 
          className={styles["select-flight"]}
          onClick={(e) => applyNewFlight()}
        >Chọn
        </button>
      </div>
    </div>
  )
}

function ResultSection(props: any) {
  return (
    <section className={styles["flight-results"]}>
      <h2>Kết Quả Tìm Kiếm</h2>
      <div className={styles["sort-options"]}>
        <label>Sắp xếp:</label>
        <select id="sort">
          <option value="price-asc">Giá tăng dần</option>
          <option value="price-desc">Giá giảm dần</option>
          <option value="time-asc">Thời gian sớm nhất</option>
          <option value="time-desc">Thời gian muộn nhất</option>
        </select>
      </div>
      {
        props.flights.map((flight: Flight, index: number) => 
          <FlightCard flight={flight} key={index}></FlightCard>
        )
      }
    </section>
  )
}

export function FlightSearchSection() {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  async function fetchData() {
    try {
      const airportResponse = await getAllAirports();
      setAirports(airportResponse.airports || []);

      const response = await searchFlights(undefined, undefined, undefined);
      setFlights(response.flights || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles["main-content"]}>
      <div className={styles["container"]}>
        <SearchSection airports={airports} setFlights={setFlights}></SearchSection>
        <ResultSection flights={flights}></ResultSection>
      </div>
    </main>
  )
}