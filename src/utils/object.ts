export type MayBe<T extends object = object> = { [K in keyof T]: unknown };

// eslint-disable-next-line @typescript-eslint/ban-types
export function isObject<T extends object = object>(
	value: unknown
): value is MayBe<T> {
	const type = typeof value;
	return value !== null && (type === 'object' || type === 'function');
}
