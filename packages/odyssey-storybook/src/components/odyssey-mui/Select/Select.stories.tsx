/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { Story } from "@storybook/react";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  visuallyHidden,
} from "@okta/odyssey-react-mui";
import { MuiThemeDecorator } from "../../../../.storybook/components";

import SelectMdx from "./Select.mdx";

export default {
  title: `MUI Components/Forms/Select`,
  component: Select,
  parameters: {
    docs: {
      page: SelectMdx,
    },
  },
  argTypes: {
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    error: {
      control: "text",
      defaultValue: null,
    },
    hint: {
      control: "text",
      defaultValue: "Select your destination within the Sol system.",
    },
    invalid: {
      control: "boolean",
      defaultValue: false,
    },
    label: {
      control: "text",
      defaultValue: "Destination",
    },
    multiple: {
      control: "boolean",
      defaultValue: false,
    },
    native: {
      control: "boolean",
      defaultValue: false,
    },
  },
  decorators: [MuiThemeDecorator],
};

const destinations = [
  "Earth",
  "Mars",
  "Ceres",
  "Eros",
  "Tycho Station",
  "Phoebe",
  "Ganymede",
];

const Template: Story = (args) => {
  return (
    <FormControl disabled={args.disabled} error={args.invalid}>
      <InputLabel id="demo-simple-select-label">{args.label}</InputLabel>
      {args.hint && (
        <FormHelperText id="select-hint">{args.hint}</FormHelperText>
      )}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={args.label}
        native={args.native}
        aria-describedby="select-hint select-error"
      >
        {destinations.map((destination) => (
          <MenuItem key={destination} value={destination}>
            {destination}
          </MenuItem>
        ))}
      </Select>
      {args.error && (
        <FormHelperText id="select-error" error>
          <span style={visuallyHidden}>Error:</span> {args.error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

const NativeTemplate: Story = (args) => {
  return (
    <FormControl disabled={args.disabled} error={args.invalid}>
      <InputLabel id="demo-simple-select-label">{args.label}</InputLabel>
      {args.hint && (
        <FormHelperText id="select-hint">{args.hint}</FormHelperText>
      )}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={args.label}
        native={args.native}
        aria-describedby="select-hint select-error"
      >
        <option value="earth">Earth</option>
        <option value="mars">Mars</option>
        <option value="ceres">Ceres</option>
        <option value="eros">Eros</option>
        <option value="tycho">Tycho Station</option>
        <option value="phoebe">Phoebe</option>
        <option value="ganymede">Ganymede</option>
      </Select>
      {args.error && (
        <FormHelperText id="select-error" error>
          <span style={visuallyHidden}>Error:</span> {args.error}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const DefaultDisabled = Template.bind({});
DefaultDisabled.args = {
  disabled: true,
};

export const DefaultInvalid = Template.bind({});
DefaultInvalid.args = {
  invalid: true,
  error: "This field is required.",
};

export const NativeDefault = NativeTemplate.bind({});
NativeDefault.args = {
  native: true,
};
