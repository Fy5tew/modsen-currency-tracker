import { ComponentProps, useState } from 'react';

import { Option, Select as StyledSelect, Wrapper } from './styled';

type SelectOption = {
    title: string;
    value: string | number;
};

type SelectProps = {
    options: SelectOption[];
} & ComponentProps<typeof StyledSelect>;

export function Select({
    options,
    onChange,
    onMouseDown,
    onBlur,
    ...props
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIsOpen(false);
        onChange?.(e);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLSelectElement>) => {
        setIsOpen((prev) => !prev);
        onMouseDown?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
        setIsOpen(false);
        onBlur?.(e);
    };

    return (
        <Wrapper $isOpen={isOpen}>
            <StyledSelect
                {...props}
                onChange={handleChange}
                onMouseDown={handleMouseDown}
                onBlur={handleBlur}
            >
                {options.map(({ title, value }) => (
                    <Option key={value} value={value}>
                        {title}
                    </Option>
                ))}
            </StyledSelect>
        </Wrapper>
    );
}
