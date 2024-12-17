import { UUID } from "crypto";
import ApiRequest from "./requests";

export interface Review {
  id: UUID;
  username: string;
  avatar: string;
  review: string;
}

export function getAllReviews() {
  const reviews: Review[] = [
    {
      id: "12345-12345-12345-12345-12345",
      username: "Nguyễn Thị Hoa",
      avatar: "/img/user_avatar.png",
      review: "Tôi rất hài lòng với dịch vụ của QAirline. Nhân viên thân thiện, chuyến bay đúng giờ, và giá cả hợp lý!"
    },
    {
      id: "12345-12345-12345-12345-12345",
      username: "Lê Minh Tuấn",
      avatar: "/img/user_avatar.png",
      review: "Đặt vé rất nhanh và dễ dàng. Tôi chắc chắn sẽ bay với QAirline lần sau!"
    },
  ];
  return reviews;
}