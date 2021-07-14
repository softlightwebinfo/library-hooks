/**
 * @param { string } osVersion
 */
export function outOsName(osVersion: string) {
    if (!osVersion) {
        return
    }
    let str = osVersion.substr(0, 3);
    if (str === "5.0") {
        return "Win 2000"
    } else if (str === "5.1") {
        return "Win XP"
    } else if (str === "5.2") {
        return "Win XP64"
    } else if (str === "6.0") {
        return "Win Vista"
    } else if (str === "6.1") {
        return "Win 7"
    } else if (str === "6.2") {
        return "Win 8"
    } else if (str === "6.3") {
        return "Win 8.1"
    } else if (str === "10.") {
        return "Win 10"
    } else {
        return "Win"
    }
}