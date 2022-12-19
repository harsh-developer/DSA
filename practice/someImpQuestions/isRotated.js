// check in 2 strings if they are rotated of each other

function isRotated(s1, s2) {
    let len1 = s1.length;
    // let len2 = s2.length;
    if (len1 != len2) {
        return 0
    }
    while (len1 >= 0) {
        if (s1 === s2) {
            return 1
        }
        s1 = s1.substr(1) + s1.slice(0, 1);
        len1--;
    }
    return 0;
}
console.log(isRotated("mightandmagic", "andmagicmig"));