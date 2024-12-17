import { UUID } from "crypto";
import ApiRequest from "./requests";

export interface Offer {
  id: UUID;
  src: string;
  alt: string;
  title: string;
  description: string;
  created_time: string;
}

export function getAllOffersData() {

  const offers: Offer[] = [
    {
      id: "12345-12345-12345-12345-12345",
      src: "/img/discount.png",
      alt: "Khuyến mãi 1",
      title: "Giảm 30% vé quốc tế",
      description: "Bay khắp thế giới với giá vé siêu tiết kiệm, chỉ áp dụng đến hết tháng này!",
      created_time: "2024-12-15T08:00:00.000Z"
    },
    {
      id: "12345-12345-12345-12345-12345",
      src: "/img/discount25.png",
      alt: "Khuyến mãi 2",
      title: "Ưu đãi nhóm từ 4 người",
      description: "Đặt vé theo nhóm để nhận ngay ưu đãi giảm giá lên đến 25%.",
      created_time: "2024-12-15T08:00:00.000Z"
    },
    {
      id: "12345-12345-12345-12345-12345",
      src: "/img/discount.png",
      alt: "Khuyến mãi 3",
      title: "Giảm 30% vé quốc tế",
      description: "Tận hưởng những chuyến bay nội địa với mức giá siêu ưu đãi",
      created_time: "2024-12-15T08:00:00.000Z"
    },
  ];
  return offers;
}

export function B() {

}