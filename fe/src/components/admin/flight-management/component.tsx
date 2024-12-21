import styles from "./component.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PanelContentHeader } from '@/components/admin/content-header/component';
import { Airport, getAllAirports } from '@/api/airports';
import { Aircraft, getAllAircrafts } from "@/api/aircrafts";
import { Flight, getAllFlights } from '@/api/flights';
import { useEffect, useState } from "react";
import { addFlights, updateFlights } from "@/api/flights";
import DoughnutChart from "./doughnut";
import React, { useReducer } from "react";


interface FlightState {
  flightId: string;
  srcAirport: string;
  dstAirport: string;
  sAircraft: string;
  basePrice: number;
  status: string;
  startTime: Date;
}

type FlightAction =
  | { type: "SET_FLIGHT_ID"; payload: string }
  | { type: "SET_SRC_AIRPORT"; payload: string }
  | { type: "SET_DST_AIRPORT"; payload: string }
  | { type: "SET_AIRCRAFT"; payload: string }
  | { type: "SET_BASE_PRICE"; payload: number }
  | { type: "SET_STATUS"; payload: string }
  | { type: "SET_START_TIME"; payload: Date }
  | { type: "SET_MULTIPLE"; payload: Partial<FlightState> };

const initialState: FlightState = {
  flightId: "",
  srcAirport: "",
  dstAirport: "",
  sAircraft: "",
  basePrice: 0,
  status: "Cất cánh theo dự kiến",
  startTime: new Date(),
};

function flightReducer(state: FlightState, action: FlightAction): FlightState {
  switch (action.type) {
    case "SET_FLIGHT_ID":
      return {...state, flightId: action.payload };
    case "SET_SRC_AIRPORT":
      return { ...state, srcAirport: action.payload };
    case "SET_DST_AIRPORT":
      return { ...state, dstAirport: action.payload };
    case "SET_AIRCRAFT":
      return { ...state, sAircraft: action.payload };
    case "SET_BASE_PRICE":
      return { ...state, basePrice: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "SET_START_TIME":
      return { ...state, startTime: action.payload };
    case "SET_MULTIPLE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

function SearchFilter(props: any) {
  const airports: Airport[] = props.airports;

  return (
    <div className={styles["search-filter"]}>
      <input
        type="text"
        placeholder="Tìm kiếm số hiệu chuyến bay..."
        id="searchInput"
      />
      <select id="filterDestination">
        <option value="">Lọc theo điểm đến</option>
        {
          airports.map((airport) => (
            <option key={airport.airport_id} value={airport.airport_name}>
              {airport.airport_name}
            </option>
          ))
        }
      </select>
      <button className={styles["filter-btn"]}><i className="fas fa-filter"></i> Lọc</button>
    </div>
  )
}

function StatsContainer(props: any) {
  return (
    <div className={styles["stats-container"]}>
      <div className={styles["stats-card"]}>
        <i className="fas fa-plane-departure"></i>
        <h3>50</h3>
        <p>Tổng Số Chuyến Bay</p>
      </div>
      <div className={styles["stats-card"]}>
        <i className="fas fa-plane-slash"></i>
        <h3>5</h3>
        <p>Chuyến Bay Bị Hủy</p>
      </div>
      <div className={styles["stats-card"]}>
        <i className="fas fa-clock"></i>
        <h3>10</h3>
        <p>Chuyến Bay Sắp Khởi Hành</p>
      </div>
      <div className={styles["chart-box"]}>
        <h3>Tỷ Lệ Chuyến Bay</h3>
        <DoughnutChart></DoughnutChart>
      </div>
    </div>
  )
}

function FlightCard(props: any) {
  const flight = props.flight;
  flight.start_time = new Date(flight.start_time);
  const dispatch = props.dispatch;

  function openModalMenu() {
    const flightModal = document.getElementById("flightModal");
    dispatch({ type: "SET_MULTIPLE", payload: {
      flightId: flight.flight_id,
      srcAirport: flight.src_airport,
      dstAirport: flight.dest_airport,
      sAircraft: flight.aircraft_name,
      basePrice: flight.base_price,
      status: flight.status,
      startTime: flight.start_time,
    } });
    if (flightModal) {
      flightModal.style.display = "flex";
    }
  }

  return (
    <tr>
      <td>{flight.flight_id.slice(0, 5)}</td>
      <td>{flight.src_airport}</td>
      <td>{flight.dest_airport}</td>
      <td>{flight.aircraft_name}</td>
      <td>{flight.start_time.toISOString().split("T")[0]}</td>
      <td>{flight.base_price} VNĐ</td>
      <td>{flight.status}</td>
      <td>
        <button 
          className={styles["edit-btn"]}
          onClick={(e) => openModalMenu()}
        ><i className="fas fa-edit"></i></button>
        <button className={styles["delete-btn"]}><i className="fas fa-trash"></i></button>
      </td>
    </tr>
  )
}

function FlightModal(props: any) {
  function closeModalMenu() {
    const flightModal = document.getElementById('flightModal');
    if (flightModal) {
      flightModal.style.display = "none";
    }
  }

  const airports: Airport[] = props.airports;
  const aircrafts: Aircraft[] = props.aircrafts;
  const {flightId, srcAirport, dstAirport, sAircraft, basePrice, status, startTime } = props.state;
  const dispatch = props.dispatch;

  async function saveData() {
    try {
      if (flightId === '') {
        await addFlights(srcAirport, dstAirport, sAircraft, basePrice, status, startTime);
      } else {
        await updateFlights(flightId, srcAirport, dstAirport, sAircraft, basePrice, status, startTime);
      }
      closeModalMenu();
      
    } catch (error) {
      console.error('Error saving data:', error);
    }
  }


  return (
    <div id="flightModal" className={styles["modal"]}>
      <div className={styles["modal-content"]}>
        <span className={styles["close-btn"]} onClick={(e) => closeModalMenu()}>&times;</span>
        <h2>Thêm/Chỉnh Sửa Chuyến Bay</h2>
        <div className={styles["form"]}>
          <label>Số hiệu chuyến bay</label>

          <label>Điểm đi</label>
          <select value={srcAirport} onChange={e => dispatch({type: "SET_SRC_AIRPORT", payload: e.target.value })}>
            <option value={""} key={-1}></option>
            {
              airports.map((airport, index) => (
                <option value={airport.airport_name} key={index}>{airport.airport_name}</option>
              ))
            }
          </select>

          <label>Điểm đến</label>
          <select value={dstAirport} onChange={e => dispatch({type: "SET_DST_AIRPORT", payload: e.target.value })}>
            <option value={""} key={-1}></option>
            {
              airports.map((airport, index) => (
                <option value={airport.airport_name} key={index}>{airport.airport_name}</option>
              ))
            }
          </select>

          <label>Tàu bay</label>
          <select value={sAircraft} onChange={e => dispatch({type: "SET_AIRCRAFT", payload: e.target.value })}>
            <option value={""} key={-1}></option>
            {
              aircrafts.map((aircraft, index) => (
                <option value={aircraft.aircraft_name} key={index}>{aircraft.aircraft_name}</option>
              ))
            }
          </select>

          <label>Ngày khởi hành</label>
          <input 
            type="date" 
            value={startTime.toISOString().split("T")[0]} 
            onChange={e => {
              dispatch({type: "SET_START_TIME", payload: new Date(e.target.value)});
            }}
            required/>

          <label>Giá vé</label>
          <input 
            type="number" 
            placeholder="VD: 1500000"
            value={basePrice}
            onChange={e => dispatch({type: "SET_BASE_PRICE", payload: Number(e.target.value)})}
            required />

          <label>Trạng thái</label>
          <select disabled={flightId === ""} onChange={
              e => dispatch({type: "SET_STATUS", payload: e.target.value})
            }>
            <option value="Cất cánh theo dự kiến">Cất cánh theo dự kiến</option>
            <option value="Đã cất cánh">Đã cất cánh</option>
            <option value="Đã bị hoán">Đã bị hoãn</option>
            <option value="Đã hủy">Đã hủy</option>
          </select>

          <button 
            type="submit" 
            className={styles["save-btn"]}
            onClick={(e) =>
              saveData()
            }>Lưu</button>
        </div>
      </div>
    </div>
  )
}

export function FlightManagement(props: any) {
  const [state, dispatch] = useReducer(flightReducer, initialState);
  function openModalMenu() {
    const flightModal = document.getElementById('flightModal');
    dispatch({type: "SET_MULTIPLE", payload: initialState});
    if (flightModal) {
      flightModal.style.display = "flex";
    }
  }

  const [airports, setAirports] = useState<Airport[]>([]);
  const [aircrafts, setAircrafts] = useState<Aircraft[]>([]);
  const [flights, setFlights] = useState<Flight[]>([]);
  async function fetchData() {
    try {
      const airportResponse = await getAllAirports();
      setAirports(airportResponse.airports || []);

      const aircraftResponse = await getAllAircrafts();
      setAircrafts(aircraftResponse.aircrafts || []);

      const response = await getAllFlights();
      setFlights(response.flights || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <div className={styles["flight-container"]}>
      <PanelContentHeader name="Quản Lý Chuyến Bay"></PanelContentHeader>

      <SearchFilter airports={airports}></SearchFilter>
      <StatsContainer></StatsContainer>

      <div className={styles["note"]}>
        <h4>Hướng Dẫn Sử Dụng:</h4>
        <p>- Sử dụng thanh tìm kiếm để lọc chuyến bay theo số hiệu.</p>
        <p>
          - Click vào biểu tượng <i className="fas fa-edit"></i> để chỉnh sửa chuyến
          bay.
        </p>
        <p>- Chuyến bay đã hủy không thể chỉnh sửa hoặc khôi phục.</p>
      </div>

      <div className={styles["action-buttons"]}>
        <button onClick={(e) => openModalMenu()}>
          <i className="fas fa-plus-circle"></i> Thêm Chuyến Bay
        </button>
      </div>

      <div className={styles["table-container"]}>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Số hiệu</th>
              <th>Điểm đi</th>
              <th>Điểm đến</th>
              <th>Tàu bay</th>
              <th>Ngày giờ</th>
              <th>Giá vé</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {
              flights.map((localFlight, index) => 
                <FlightCard flight={localFlight} key={index} dispatch={dispatch}></FlightCard>
              )
            }
          </tbody>
        </table>
      </div>

      <div className={styles["note"]}>
        <h4>Lưu ý:</h4>
        <p>- Chỉ các chuyến bay đang hoạt động mới được chỉnh sửa.</p>
        <p>- Chuyến bay đã hủy sẽ không thể khôi phục.</p>
      </div>

      <FlightModal state={state} airports={airports} aircrafts={aircrafts} dispatch={dispatch}></FlightModal>
    </div>
  )
}