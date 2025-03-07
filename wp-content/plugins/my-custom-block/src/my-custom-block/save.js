import { RichText } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { toggled, content, image } = attributes;

	return (
		<div>
			{image && <img src={image} alt="Selected" style={{ maxWidth: "100%" }} />}
			{toggled && <RichText.Content tagName="p" value={content} />}
		</div>
	);
}
