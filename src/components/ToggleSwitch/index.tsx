import { ComponentProps } from 'react';

import { Checkbox } from './styled';

type ToggleSwitchProps = ComponentProps<typeof Checkbox>;

export function ToggleSwitch(props: ToggleSwitchProps) {
    return <Checkbox {...props} />;
}
