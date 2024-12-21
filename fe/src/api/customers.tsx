import { UUID } from "crypto";
import ApiRequest from "./requests";

export interface Customer {
  user_id: string;
  username: string;
  email: string;
  phone_number: string;
  created_time: string;
}

export function getAllCustomersData() {
  const customers: Customer[] = [
      {
        user_id: "d5b072e8-0028-4e2f-8561-14880e6be4c3",
        username: "chau",
        email: "chau@example.com",
        phone_number: "",
        created_time: "2024-12-19T04:00:34.969Z"
      },
      {
        user_id: "6fa93b9a-108d-4578-927c-dc57ef3800f4",
        username: "robot",
        email: "robot@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:19:48.092Z"
      },
      {
        user_id: "99e2fb1f-71a4-498b-8202-d7b491f67bbe",
        username: "robot2",
        "password": "$2a$10$6K4DHuvhTD0k8F7BkrVISODsC3DrIR9tsyJ9oP0rVH1Z540QwnnUS",
        email: "vmc@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:21:55.137Z"
      },
      {
        user_id: "7f53f5ac-7e99-40fc-8edd-b4637fb397ab",
        username: "robot3",
        email: "vmc2@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:22:36.836Z"
      },
      {
        user_id: "184eef14-0aef-49d2-9ef4-b15e74cda308",
        username: "chauvu",
        email: "chauvu@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:24:15.956Z"
      },
      {
        user_id: "358bd78f-72b9-4c4c-a7ac-3802610e5113",
        username: "robot4",
        email: "vmc3@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:28:37.081Z"
      },
      {
        user_id: "cd2c1d9b-3f09-4282-8f7c-76158b574f55",
        username: "robot5",
        email: "vmc4@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:29:01.638Z"
      },
      {
        user_id: "05f84cef-2ff5-407b-a102-379f6a05137d",
        username: "robot6",
        email: "vmc5@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:30:30.923Z"
      },
      {
        user_id: "d8e3b56f-06dd-4c8c-8fdb-006cc7946e2a",
        username: "robot7",
        email: "vmc6@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:34:27.176Z"
      },
      {
        user_id: "20fa5846-813b-4615-bf1d-6c46a7c1f93a",
        username: "robot8",
        email: "vmc7@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:35:35.033Z"
      },
      {
        user_id: "3e393eb5-3d36-4adf-adb5-ed083413e659",
        username: "robot9",
        email: "vmc8@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:37:27.624Z"
      },
      {
        user_id: "af667131-fa21-40ed-a14e-e43cf442b185",
        username: "robot10",
        email: "vmc9@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:37:59.463Z"
      },
      {
        user_id: "5bdc476d-22cb-43d8-a7da-9e6e912ba64d",
        username: "robot11",
        email: "vmc10@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:39:50.601Z"
      },
      {
        user_id: "0252fa0b-d101-4195-9fbe-a3cafcdf4435",
        username: "robot12",
        email: "vmc1e2eqw@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:41:39.219Z"
      },
      {
        user_id: "5fcf842d-13a1-4497-8a7a-45ec16abe997",
        username: "robot13",
        email: "vmca2131@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:42:42.678Z"
      },
      {
        user_id: "4eb6605f-6d0a-4eb1-829b-e8cd04bfa665",
        username: "robot15",
        email: "vmc15@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:43:27.305Z"
      },
      {
        user_id: "c7e7cd0b-ba33-488f-92a5-83b1af2e518d",
        username: "robot16",
        email: "Robot@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:44:28.841Z"
      },
      {
        user_id: "9c83b180-5481-400c-af5a-75269dc90724",
        username: "robot17",
        email: "Robot2@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:45:12.334Z"
      },
      {
        user_id: "20608595-303e-420f-b821-f5859ebec659",
        username: "robot18",
        email: "Robot3@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:48:34.417Z"
      },
      {
        user_id: "6b5fce9a-5cc7-4525-8759-56d58fa2fb26",
        username: "vmc15566",
        email: "vmc15566@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:51:00.423Z"
      },
      {
        user_id: "ecb1582a-5e6b-4878-9c16-8578ca606002",
        username: "Robot@123",
        email: "vmcdef@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:51:53.396Z"
      },
      {
        user_id: "25c01ba2-6a5b-4b0f-8d16-8ac50ffcca20",
        username: "vocoakd",
        email: "2202@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:55:37.592Z"
      },
      {
        user_id: "b629be95-66ec-49a3-b07d-898feceabf04",
        username: "asdkada",
        email: "dsakjda@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:56:21.655Z"
      },
      {
        user_id: "a3935106-0c32-4b11-9837-73c4ed8fa8c6",
        username: "robot123132",
        email: "robo2331t@gmail.com",
        phone_number: "",
        created_time: "2024-12-19T07:59:39.489Z"
      },
      {
        user_id: "2d5b562d-e0ac-42dc-8b4c-d9eba91f0585",
        username: "roboto",
        email: "22021105@vnu.edu.vn",
        phone_number: "",
        created_time: "2024-12-19T09:26:22.695Z"
      },
      {
        user_id: "5f6db480-fe4b-4255-9794-61337fa1a55a",
        username: "abcd",
        email: "abc@gmail.com",
        phone_number: "",
        created_time: "2024-12-20T02:58:40.299Z"
      },
      {
        user_id: "94620342-576f-4fd7-a1c4-b31fae955f8e",
        username: "roboto123",
        email: "Robot123@gmail.com",
        phone_number: "",
        created_time: "2024-12-21T01:41:54.600Z"
      }
    ];
  return customers;
}