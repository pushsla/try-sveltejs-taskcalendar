import {writable} from "svelte/store";
import Calendar from "../datatypes/Calendar";

const defaultStore = new Calendar()

export const calendarStore = writable(defaultStore);