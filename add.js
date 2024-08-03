async function purchasecake() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cake purchased.");
            resolve();
        }, 2000);
    });
}

async function curtaindec() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Curtains decorated.");
            resolve();
        }, 2000);
    });
}

async function ballons() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Balloons set up.");
            resolve();
        }, 2000);
    });
}

async function cakecutting() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Cake cutting.");
            resolve();
        }, 2000);
    });
}

async function birthdaycelebration() {
    try {
        await purchasecake();
        await curtaindec();
        await ballons();
        await cakecutting();
        console.log("Birthday celebration successfully completed.");
    } catch (e) {
        console.error("An error occurred:", e);
    } finally {
        console.log("Happily ended.");
    }
}

birthdaycelebration();
