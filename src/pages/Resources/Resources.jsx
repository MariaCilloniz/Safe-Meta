import { useEffect, useState } from "react";
import "./Resources.scss";
import axios from "axios";
import Resource from "../../components/Resource/Resource";

const url = import.meta.env.VITE_API_BASE_URL;

export default function Resources() {
	const [resourceList, setResourceList] = useState([]);

	const getResources = async () => {
		try {
			const response = await axios.get(`${url}/api/resources`);
			setResourceList(response.data);
		} catch (error) {
			console.log(`Could not retrieve resources: ${error}`);
		}
	};

	useEffect(() => {
		getResources();
	}, []);

	if (resourceList.length === 0) {
		return <div></div>;
	}

	return (
		<main className="resources">
			<div className="resources-content">
				<h1 className="resources__title">Resources</h1>
				<p className="resources__description">
					Get information and useful tips on how to enhance media literacy and
					understanding the world of AI.
				</p>
				<ul className="resources__list">
					{resourceList.map((resource) => (
						<li key={resource.id} className="resources__item">
							<a
								target="_blank"
								href={resource.link}
								className="resources__link"
							>
								<Resource resource={resource} />
							</a>
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}
