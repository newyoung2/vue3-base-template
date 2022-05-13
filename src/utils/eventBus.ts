/** 事件总线*/
import mitt from 'mitt';
const emitter = mitt();
const eventBus: any = {};
eventBus.$on = emitter.on;
eventBus.$emit = emitter.emit;
eventBus.$off =  emitter.off;
export default eventBus;
