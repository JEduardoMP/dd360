import Backspace from "../assets/backspace";

const first = "QWERTYUIOP";
const second = "ASDFGHJKLÑ";
const third = "ZXCVBNM";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const thirdArr: any = third.split('')
thirdArr.unshift('ENTER')
thirdArr.push(<Backspace />)

export const firstLine = first.split("");
export const secondLine = second.split("");
export const thirdLine = thirdArr;
