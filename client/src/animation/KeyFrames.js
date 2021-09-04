import { keyframes } from 'styled-components';

export const spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    // 25% {
    //     transform: rotate(90deg);
    // }
    // 50% {
    //     transform: rotate(180deg);
    // }
    // 75% {
    //     transform: rotate(270deg);
    // }
    100% {
        transform: rotate(360deg);
    }
`;