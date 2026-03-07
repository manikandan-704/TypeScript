function getMsg(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hi TypeScript");
        }, 2000);
    });
}

async function Print() {
    const val = await getMsg();
    console.log(val);
}

Print();