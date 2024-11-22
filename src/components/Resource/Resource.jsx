import "./Resource.scss";

const url = import.meta.env.VITE_API_BASE_URL;
export default function Resource({ resource }) {
	console.log(resource);
	return (
		<div className="resource-card">
			<img
				src={`${url}/${resource.image}`}
				alt=""
				className="resource-card__image"
			/>
			<div className="resource-card__info">
				<h3 className="resource-card__title">{resource.title}</h3>
				<p className="resource-card__info">{resource.subtitle}</p>
			</div>
		</div>
	);
}
