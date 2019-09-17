export type User = {
  _id: string;
  email: string;
  first_name: string;
  last_name: string;
  membership: 'Basic' | 'Premium';
  avatar: string | null;
  gender: 'Male' | 'Female' | 'Other';
};

export type UserSignUp = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

export type UserSignIn = {
  email: string;
  password: string;
};

export type ResponseObject = {
  success: boolean;
  data: any;
  message: string;
  token?: string;
};

export type DecodedObject = {
  id: string;
  iat: number;
};

export type Role = 'Admin' | 'User';

export type ReqEditProfileObject = {
  first_name: string;
  last_name: string;
  isAvatarChange?: boolean;
  avatar: string | null;
  gender: 'Male' | 'Female' | 'Other';
};

export type CreateEvent = {
  event_name: string;
  category: 'Workshop' | 'Seminar';
  place: string;
  price: number;
  description: string;
  available_seat: number;
  image?: string | null;
};

export type event = {
  id: string;
  event_name: string;
  category: 'Workshop' | 'Seminar';
  place: string;
  price: number;
  description: string;
  available_seat: number;
  image?: string | null;
};

export type CreateForum = {
  id_user:string;
  forum_name: string;
  category: 'Umum' | 'Jual' | 'Beli';
  description: string;
  image?: string[] | null;
};
