interface UserProps {
	name?: string;
	age?: number;
}

type Callback = () => void;

export class User {
	// This tells typescript that the events will be a string of type Callback that is an array.
	// We use this type of annotation to store Event listeners
	events: { [key: string]: Callback[] } = {};

	constructor(private data: UserProps) {}

	get(propName: string): number | string {
		return this.data[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.data, update);
	}

	on(eventName: string, callback: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	}
}
