import { v4 as uuidv4 } from 'uuid';
export const getId = (): string => {

    let uID: string = uuidv4()
    let sliceUid = uID.split("-")[0]
    return sliceUid
}