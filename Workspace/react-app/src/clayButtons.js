import ClayButton from '@clayui/button';

export const Buttons = () => {
	return (
		<>
			<ClayButton displayType="primary">
				Button Primary
			</ClayButton>
			<ClayButton displayType="secondary">
				Button Secondary
			</ClayButton>
			<ClayButton displayType={null}>
				Base Button
			</ClayButton>
			<ClayButton displayType="link">
				Button Link
			</ClayButton>
			<ClayButton displayType="unstyled">
				Button Unstyled
			</ClayButton>
		</>
	);
}
