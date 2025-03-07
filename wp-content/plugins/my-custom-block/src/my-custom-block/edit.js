import { RichText, MediaUpload } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { toggled, content, image } = attributes;

	const toggleContent = () => {
		setAttributes({ toggled: !toggled });
	};

	const onSelectImage = (media) => {
		setAttributes({ image: media.url });
	};

	return (
		<div>
			<Button onClick={toggleContent} isPrimary>
				{toggled ? "Hide Content" : "Show Content"}
			</Button>

			{/* Resim seçimi için MediaUpload */}
			<MediaUpload
				onSelect={onSelectImage}
				allowedTypes={["image"]}
				value={image}
				render={({ open }) => (
					<Button onClick={open} isSecondary>
						{image ? "Change Image" : "Select Image"}
					</Button>
				)}
			/>

			{image && (
				<img
					src={image}
					alt="Selected"
					style={{ maxWidth: "100%", marginTop: "10px" }}
				/>
			)}

			{toggled && (
				<RichText
					tagName="p"
					value={content}
					onChange={(newContent) => setAttributes({ content: newContent })}
					placeholder="Enter your text..."
				/>
			)}
		</div>
	);
}
