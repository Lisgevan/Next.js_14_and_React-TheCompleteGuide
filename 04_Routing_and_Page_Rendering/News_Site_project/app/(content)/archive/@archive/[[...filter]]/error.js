"use client";

function FilterError({ error }) {
	return (
		<div id="error">
			<h2>An error occured!</h2>
			<p>Invalid path.</p>
			<p>{error.message}</p>
		</div>
	);
}

export default FilterError;
