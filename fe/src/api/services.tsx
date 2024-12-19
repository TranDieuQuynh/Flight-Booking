import { UUID } from "crypto";
import ApiRequest from "./requests";

export interface Service {
  id: UUID;
  src: string;
  icon: string;
  name: string;
  description: string;
}

export function getAllServices() {
  const services: Service[] = [
    {
      id: "12345-12345-12345-12345-12345",
      src: "/img/book_ticket.png",
      icon: "fas fa-plane",
      name: " Đặt vé nhanh chóng",
      description: "Đặt vé dễ dàng chỉ trong vài bước. Giao diện thân thiện, hỗ trợ nhiều phương thức thanh toán và xử lý nhanh chóng mọi giao dịch."
    },
    {
      id: "12345-12345-12345-12345-12345",
      src: "/img/baggage.jpg",
      icon: "fas fa-luggage-cart",
      name: " Hành lý linh hoạt",
      description: "QAirline mang đến nhiều tùy chọn gói hành lý phù hợp, từ hành lý xách tay cho đến hành lý ký gửi, giúp bạn an tâm hơn trong mỗi chuyến đi."
    },
    {
      id: "12345-12345-12345-12345-12345",
      src: "/img/customer_service.webp",
      icon: "fas fa-concierge-bell",
      name: " Chăm sóc khách hàng",
      description: "Đội ngũ hỗ trợ chuyên nghiệp của QAirline luôn sẵn sàng phục vụ 24/7, đảm bảo giải quyết nhanh chóng mọi yêu cầu của khách hàng."
    },
    {
      id: "12345-12345-12345-12345-12345",
      src: "/img/member.jpg",
      icon: "fas fa-star",
      name: " Ưu đãi thành viên",
      description: "Tham gia thành viên QAirline để nhận ưu đãi độc quyền, tích điểm đổi thưởng, và tận hưởng các đặc quyền bay."
    }
  ];
  return services;
}