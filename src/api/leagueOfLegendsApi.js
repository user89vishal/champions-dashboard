import client from "./client";

const endPoint =
  "/lol/champions?page[number]=2&page[size]=10&token=HOocCz3fNsJhZbC-RmIA8BMO2Kygy_gqk5fP4tUoc93eiQOY9tU";

const getLeagueOfLegendsListing = () => client.get(endPoint);

export default {
  getLeagueOfLegendsListing,
};
