import "./Resource.scss";

const url = import.meta.env.VITE_API_BASE_URL;
export default function Resource({ resource }) {
	return <img src={`${url}/${resource.image}`} alt="" />;
}
