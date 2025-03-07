import Checkbox from "components/atoms/Checkbox/checkbox";
import { ComponentStory } from "@storybook/react";

const storyConfig = {
  title: "Design System/Atoms/Checkbox"
};

export default storyConfig;

// FilterCard Template
const CheckboxTemplate: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

// FilterCard Default
export const Default = CheckboxTemplate.bind({});
Default.args = { label: "test" };