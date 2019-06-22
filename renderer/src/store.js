import { writable } from 'svelte/store';

export const demoStore = writable('Hello Svelte!');

module.exports = { demoStore };
