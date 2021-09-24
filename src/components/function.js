const createData = () => {
    var x = new Array(100);

    for (var i = 0; i < x.length; i++) {
        x[i] = new Array(14);
    }

    x[30][0] = "30"
    x[30][1] = "C+"
    x[30][2] = "29"
    for (i = 3; i < 7; i++) {
        x[0][i] = '0'
    }
    x[30][7] = "30"
    x[30][8] = "33"
    x[30][9] = "38"
    x[30][10] = "43"
    x[30][11] = "48"
    x[30][12] = "65"

    for (i = 31; i < 50; i++) {
        x[i][0] = String(i)
        x[i][1] = 'C+'
        x[i][2] = "29"
        for (var j = 3; j < 12; j++) {
            if ((i === 31 || i === 32) && (j >= 3 && j <= 6) ||
                ((i >= 33 && i <= 37) && (j >= 3 && j <= 5)) ||
                ((i >= 38 && i <= 42) && (j === 3 | j === 4)) ||
                ((i >= 43 && i <= 47) && (j === 3))) {
                x[i][j] = "0"
            }
            else if (((i === 48 || i === 49) && j === 3) ||
                ((i === 31 || i === 32) && j === 7) ||
                ((i >= 33 || i >= 37) && j === 6) ||
                ((i >= 38 || i >= 42) && j === 5) ||
                ((i >= 43 || i >= 47) && j === 4)) {
                x[i][j] = "30"
            }
            else {
                var temp = Number(x[i - 1][j])
                temp++;
                x[i][j] = String(temp)
            }
        }
    }

    for (i = 31; i < 43; i++) {
        x[i][12] = "65"
        x[i][13] = "70"
    }

    for (i = 43; i < 50; i++) {
        temp = Number(x[i - 1][12])
        temp++;
        x[i][12] = String(temp)

        temp = Number(x[i - 1][13])
        temp++;
        x[i][13] = String(temp)
    }


    x[50][0] = "50"
    x[50][1] = "B-"
    x[50][2] = "29"
    x[50][3] = "0"
    x[50][4] = "30"
    x[50][5] = "33"
    x[50][6] = "38"
    x[50][7] = "43"
    x[50][8] = "48"
    x[50][9] = "53"
    x[50][10] = "58"
    x[50][11] = "63"
    x[50][12] = "68"
    x[50][13] = "73"


    for (i = 51; i <= 64; i++) {
        x[i][0] = String(i)
        x[i][1] = 'B'
        for (j = 2; j < 14; j++) {
            if (j === 2 && (i >= 51 && i <= 57)) {
                x[i][j] = "29"
            }
            else if ((i === 51 || i === 52) && (j === 3)) {
                x[i][j] = "0"
            }
            else if ((i === 51 || i === 52) && (j === 4)) {
                x[i][j] = "30"
            }
            else if ((i >= 53 && i <= 57) && (j === 3)) {
                x[i][j] = "30"
            }
            else {
                var temp = Number(x[i - 1][j])
                temp++;
                x[i][j] = String(temp)
            }
        }
    }

    x[65][0] = "65"
    x[65][1] = "B"
    x[65][2] = "32"
    x[65][3] = "33"
    x[65][4] = "38"
    x[65][5] = "43"
    x[65][6] = "48"
    x[65][7] = "53"
    x[65][8] = "58"
    x[65][9] = "63"
    x[65][10] = "68"
    x[65][11] = "73"
    x[65][12] = "78"
    x[65][13] = "83"

    for (i = 65; i <= 91; i++) {
        x[i][0] = String(i)
        x[i][1] = '0'
        for (j = 2; j < 14; j++) {
            if ((i >= 81) && (j === 2 || j === 3)) {
                if (j === 2) {
                    x[i][j] = "49"
                }
                else {
                    x[i][j] = "50"
                }
                continue;
            }

            if ((i >= 81) && (j === 11)) {
                x[i][j] = "0"
                continue
            }

            if ((i >= 86) && (j === 10)) {
                x[i][j] = "0"
                continue;
            }
            if ((i >= 77) && (j === 12 || j === 13)) {
                if (j === 12) {
                    x[i][j] = "90"
                }
                else {
                    x[i][j] = "95"
                }
                continue;
            }

            else {

                var temp = Number(x[i - 1][j])
                temp++;
                x[i][j] = String(temp)
            }
        }
    }
    return x
}

const getLetter = (index) => {
    if (index === 3) {
        return 'D'
    }
    else if (index === 4) {
        return 'D+'
    }
    else if (index === 5) {
        return 'C-'
    }
    else if (index === 6) {
        return 'C'
    }
    else if (index === 7) {
        return 'C+'
    }
    else if (index === 8) {
        return 'B-'
    }
    else if (index === 9) {
        return 'B'
    }
    else if (index === 10) {
        return 'B+'
    }
    else if (index === 11) {
        return 'A-'
    }
    else if (index === 12) {
        return 'A'
    }
    else {
        return 'A+'
    }
}

const print = () => {
    var x = createData()
    for (var i = 30; i < 92; i++) {
        console.log(x[i])
    }
}

export const getGrade = (mca, score) => {
    console.log(mca, score)
    var x = createData()

    if (Number(x[mca][2]) >= score) {
        return 'F'
    }
    for (var i = 3; i < 14; i++) {
        console.log(x[mca][i])
        if (x[mca][i] !== "0") {
            if (Number(x[mca][i]) > score) {
                return getLetter(i - 1)
            }
        }
    }
    return 'A+'

}


