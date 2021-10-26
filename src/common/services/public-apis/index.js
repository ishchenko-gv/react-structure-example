import request from "../../utils/request";

export function fetchPublicApisList() {
  return request("https://api.publicapis.org/entries");
}
