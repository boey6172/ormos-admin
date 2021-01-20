import axios from "axios";

export default axios.create(
  {
    baseURL:"https://testing-49c7b.firebaseio.com/"
  }
)