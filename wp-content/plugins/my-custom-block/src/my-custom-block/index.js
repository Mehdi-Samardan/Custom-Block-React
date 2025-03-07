import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";

registerBlockType("myplugin/toggle-block", {
	edit,
	save,
});
