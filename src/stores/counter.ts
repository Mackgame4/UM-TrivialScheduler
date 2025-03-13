import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increment() {
            this.count++;
            this.broadcast();
        },
        decrement() {
            this.count--;
            this.broadcast();
        },
        broadcast() {
            const channel = new BroadcastChannel('counter_channel');
            channel.postMessage(this.count);
        }
    }
});

// Escutar mudanças nas outras abas
const channel = new BroadcastChannel('counter_channel');
channel.onmessage = (message: unknown) => {
    const event = message as MessageEvent;
    const store = useCounterStore();
    store.count = event.data;
};