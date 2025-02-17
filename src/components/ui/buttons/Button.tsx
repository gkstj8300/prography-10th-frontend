import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Merge } from 'src/utils/types';
import { useHandleClick } from './Button.hooks';

export const Themes = ['default', 'next', 'prev', 'submit'] as const;
export type Theme = (typeof Themes)[number];

export type BaseProps = {
	theme?: Theme;
};

type AttributeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = Merge<BaseProps, AttributeProps>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ onClick, theme = 'default', disabled, ...props }, ref) => {
		const handleClick = useHandleClick(onClick, disabled);
		return (
			<ButtonContainer
				ref={ref}
				theme={theme}
				onClick={handleClick}
				type="button"
				disabled={disabled}
				{...props}
			>
				{props.children}
			</ButtonContainer>
		);
	}
);

Button.displayName = 'NextButton';

const getThemeStyles = (theme: Theme) => {
	switch (theme) {
		case 'next':
			return css`
				padding: 0.2rem 1.2rem;
				color: #242424;
				font-weight: bold;
				font-size: 1rem;
			`;
		case 'prev':
			return css`
				padding: 0.2rem 1.2rem;
				color: #242424;
				font-weight: bold;
				font-size: 1rem;
			`;
		case 'submit':
			return css`
				padding: 8px 12px;
				color: #242424;
				font-weight: bold;
				background-color: #fc0;
			`;
		case 'default':
		default:
			return css`
				padding: 7px 12px;
				color: #004098;
				font-weight: bold;
				background-color: #fff;
			`;
	}
};

const ButtonContainer = styled.button<{ theme: Theme }>`
	width: 100%;
	line-height: 2;
	text-align: center;
	border-radius: 4px;
	cursor: pointer;
	padding: 0.2rem 1.2rem;
	color: #242424;
	background-color: #fff;
	font-size: 1rem;

	${props => getThemeStyles(props['theme'])}

	&:disabled {
		opacity: 0.25;
		cursor: not-allowed;
	}
`;
