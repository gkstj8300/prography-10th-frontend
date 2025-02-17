import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { 
    MdOutlineRadioButtonChecked, 
    MdOutlineRadioButtonUnchecked,
} from "react-icons/md";
import { Merge } from 'src/utils/types';

type BaseProps = {
    isCheck: boolean;
};

type AttributeProps = React.ButtonHTMLAttributes<HTMLDivElement>;

type CheckboxProps = Merge<BaseProps, AttributeProps>;

export const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
    ({ onClick, isCheck, ...props }, ref) => {
        const Icon = isCheck ? MdOutlineRadioButtonChecked : MdOutlineRadioButtonUnchecked;

        return (
            <CheckboxContainer ref={ref} onClick={onClick} {...props}>
                <Icon size={20} />
                {props.children}
            </CheckboxContainer>
        );
    }
);

Checkbox.displayName = 'Checkbox';

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: 1px solid #fff;
    border-radius: 5px;
    max-width: 30rem;
`;