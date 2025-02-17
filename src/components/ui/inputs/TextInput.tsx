import { forwardRef, InputHTMLAttributes } from "react";
import styled from 'styled-components';

export type Props = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'maxLength'
> & {
    type?: 'text' | 'email';
    title: string;
    placeholder: string;
    isRequired?: boolean;
};

export const TextInput = forwardRef<HTMLInputElement, Props>(
    (
        {
            type = 'text',
            title,
            placeholder,
            isRequired = false,
            disabled = false,
            ...restProps
        },
        ref
    ) => {
        return (
            <TextInputContainer>
                <InputWrap>
                    <InputLabel>
                        <Inner>
                            <InputBox>
                                <span>
                                    {isRequired && <RequiredValue>*</RequiredValue>}
                                    {title}
                                </span>
                                <Input
                                    type={type}
                                    disabled={disabled}
                                    ref={ref}
                                    placeholder={placeholder}
                                    {...restProps}
                                />
                            </InputBox>
                            <DelateButton />
                        </Inner>
                    </InputLabel>
                </InputWrap>
            </TextInputContainer>
        );
    }
);
TextInput.displayName = 'TextInput';

const TextInputContainer = styled.div`
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

const InputWrap = styled.div`
    flex: 1;
    width: 100%;
    overflow: hidden;
`;

const InputLabel = styled.div`
    display: block;
    height: 56px;
    padding: 8px 12px;
    border: 1px solid;
    border-color: #dfdfdf;
    border-radius: 4px;
`;

const Inner = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 8px;
`;

const DelateButton = styled.button`
    overflow: hidden;
    width: 20px;
    height: 20px;
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
`;

const InputBox = styled.div`
    flex: 1;

    span {
        display: flex;
        margin-bottom: 1px;
        font-size: 10px;
        color: #8b8b8b;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 24px;
    font-size: 16px;
    text-align: left;
    background-color: transparent;
    color: #fff;
    border: 0;
    border-radius: 0;

    &:focus {
        outline: none;
    }
`;

const RequiredValue = styled.strong`
    color: red;
`;