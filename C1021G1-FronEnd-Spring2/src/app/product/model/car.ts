import {Profile} from "./profile";
import {CategoryList} from "./categoryList";

export interface Car {
  id: number;
  name: string;
  condition: string;
  thumbnail: string;
  createdDate: string;
  updatedDate: string;
  profile: Profile;
  categoryList: CategoryList;
}
