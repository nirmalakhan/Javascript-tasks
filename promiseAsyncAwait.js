console.log("Hello");
console.log("World");
console.log("Awesome");

Promise

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, gitHubProfileId: "nirmalakhan" });
        }, 2000);
    });
}

function getRepositories(gitHubProfileId) {
    return new Promise((resolve, reject) => {
        throw new Error("Failed to fetch repositories....");
        setTimeout(() => {
            resolve(["repo1", "repo2", "repo3", "repo4", "repo5"]);
        }, 3000);
    });
}

function getCommits(repoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                "commit1",
                "commit2",
                "commit3",
                "commit4",
                "commit5",

            ]);
        }, 2000);
    });
}

function getTemperature() {
    setTimeout(() => {
        console.log("Temperature is 30 celcius");
    }, 10000);
}

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ id: 1, gitHubProfileId: "nirmalakhan" });
    }, 2000);

    // reject(new Error("Received error..."));
});

p.then(
    (data) => console.log(data)
    // (error) => console.log(error.message)
);
getCommits();
getTemperature();
console.log("Awesome");
