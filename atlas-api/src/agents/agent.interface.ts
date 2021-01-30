export default interface IAgent {
    launch: () => void,
    getStatus: () => boolean,
    stop: () => boolean

}