import axios, { create } from "axios";

const base = "/api/";

axios.defaults.withCredentials = true;

const client = () => create({
	withCredentials: true,
	baseURL: base,
	headers: {
		"Accept": "application/json, text/plain, */*",
		"Content-Type": "application/json",
	},
	credentials: "same-site"
});

export default client;